import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { createClient } from "@supabase/supabase-js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// Supabase configuration
const SUPABASE_URL = process.env.SUPABASE_URL || "https://ojolpdbveutbaxqmaffv.supabase.co";
// Using Service Role Key for admin operations (like creating users without email verification if needed)
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qb2xwZGJ2ZXV0YmF4cW1hZmZ2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNjM4NTM4OSwiZXhwIjoyMDQxOTYxMzg5fQ.3mIQrpX4cxH7tu06xZyynMuq8xCw-bm84pbxTpm790Y";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // Auth Routes using Supabase Auth
  app.post("/api/auth/signup", async (req, res) => {
    const { email, password, fullName } = req.body;
    try {
      const { data, error } = await supabase.auth.admin.createUser({
        email,
        password,
        user_metadata: { full_name: fullName },
        email_confirm: true
      });

      if (error) throw error;
      
      // Also store in a public profile table for easier querying if needed
      await supabase.from('users').upsert({ 
        id: data.user.id, 
        email: data.user.email, 
        full_name: fullName 
      });

      const { data: sessionData, error: sessionError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (sessionError) throw sessionError;

      res.status(201).json({ 
        user: { id: data.user.id, email: data.user.email, full_name: fullName }, 
        token: sessionData.session?.access_token 
      });
    } catch (err: any) {
      console.error("Signup error:", err);
      res.status(400).json({ error: err.message || "Signup failed" });
    }
  });

  app.post("/api/auth/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      res.json({ 
        user: { 
          id: data.user.id, 
          email: data.user.email, 
          full_name: data.user.user_metadata?.full_name 
        }, 
        token: data.session?.access_token 
      });
    } catch (err: any) {
      console.error("Login error:", err);
      res.status(401).json({ error: err.message || "Login failed" });
    }
  });

  // API health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", engine: "supabase-js" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        host: '0.0.0.0',
        port: 3000
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
