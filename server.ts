import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // Mock Auth Routes (Supabase removed)
  app.post("/api/auth/signup", async (req, res) => {
    const { email, fullName } = req.body;
    try {
      // Mock success response
      res.status(201).json({ 
        user: { id: "mock-user-id", email: email, full_name: fullName }, 
        token: "mock-jwt-token" 
      });
    } catch (err: any) {
      console.error("Signup error:", err);
      res.status(400).json({ error: "Signup failed" });
    }
  });

  app.post("/api/auth/login", async (req, res) => {
    const { email } = req.body;
    try {
      // Mock success response
      res.json({ 
        user: { 
          id: "mock-user-id", 
          email: email, 
          full_name: "Mock User" 
        }, 
        token: "mock-jwt-token" 
      });
    } catch (err: any) {
      console.error("Login error:", err);
      res.status(401).json({ error: "Login failed" });
    }
  });

  // API health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", engine: "mock-auth" });
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
