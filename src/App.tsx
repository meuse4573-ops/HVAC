import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck,
  FileText,
  AlertCircle,
  Linkedin,
  Twitter,
  ChevronRight,
  Play, 
  Check, 
  Share2, 
  Layout, 
  Monitor, 
  ArrowUpRight,
  Menu,
  X,
  Globe,
  Upload,
  Plus,
  ShoppingBag,
  ShoppingCart,
  Users,
  Tag,
  Zap,
  Mail,
  BarChart3,
  Wallet,
  Settings,
  LogOut,
  ExternalLink,
  MoreVertical,
  Search,
  Phone,
  Calendar,
  Star
} from 'lucide-react';

// --- Components ---

const PrivacyPolicy = ({ onBack }: { onBack: () => void }) => (
  <div className="pt-32 pb-24 bg-black text-white min-h-screen">
    <div className="page-wrapper max-w-3xl mx-auto">
      <button onClick={onBack} className="text-blue-accent mb-12 flex items-center gap-2 hover:underline">
        ← Back to home
      </button>
      <h1 className="common-title text-5xl mb-12">Privacy Policy</h1>
      
      <div className="space-y-12 text-[#a8a8a8] leading-relaxed">
        <p className="text-sm italic">Last Updated: September 7, 2026</p>

        <section className="space-y-6">
          <h2 className="text-2xl text-white font-medium">1. Introduction</h2>
          <p>
            Welcome to LexaIntake. We are committed to protecting your logistics data and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-native logistics operations platform.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl text-white font-medium">2. Information We Collect</h2>
          <div className="space-y-4">
            <h3 className="text-lg text-white">A. Logistics Data</h3>
            <p>
              While using our Service, we may ask you to provide us with certain commercial information that can be used to manage logistics operations. This may include: Bill of Lading (BOL) details, carrier rate sheets, customer contact information, and Transportation Management System (TMS) credentials.
            </p>
            <h3 className="text-lg text-white">B. AI Agent Processing</h3>
            <p>
              When Lexa processes your inbox or audits bills, we collect metadata and transcriptions of the analysis. This data may contain sensitive commercial information. We process this data solely as a Service Provider on behalf of our Freight Broker and 3PL clients.
            </p>
            <h3 className="text-lg text-white">C. Usage Data</h3>
            <p>
              We automatically collect information about how the Service is accessed and used, such as your IP address, browser type, and the pages you visit within the platform.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl text-white font-medium">3. How We Use Your Data</h2>
          <p>LexaIntake uses the collected data for various purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and maintain our AI-native logistics operations Service</li>
            <li>To automate billing audits and dispute resolution</li>
            <li>To synchronize data with your TMS and ERP systems</li>
            <li>To provide technical and operational support</li>
            <li>To monitor the performance and accuracy of our AI agents</li>
            <li>To detect, prevent and address operational issues</li>
            <li>To process billing and payments</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl text-white font-medium">4. Data Processing and AI</h2>
          <p>
            Our Service utilizes Artificial Intelligence to analyze logistics documents and communications. We ensure that our infrastructure adheres to strict confidentiality and security standards. Your operational data is never used to train global AI models accessible by other LexaIntake customers.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl text-white font-medium">5. Data Retention and Security</h2>
          <p>
            We will retain your data only for as long as is necessary for the purposes set out in this Privacy Policy. We implement advanced encryption (AES-256) and secure protocols to maintain the safety of your logistics information.
          </p>
        </section>

        <section className="bg-white/5 border border-white/10 p-8 rounded-2xl">
          <p className="text-white font-medium mb-2">Contact Our Privacy Officer</p>
          <p className="text-sm">For any privacy-related requests or questions, contact us at <a href="mailto:privacy@lexaintake.com" className="text-blue-accent hover:underline">privacy@lexaintake.com</a></p>
        </section>
      </div>
    </div>
  </div>
);

const TermsConditions = ({ onBack }: { onBack: () => void }) => (
  <div className="pt-32 pb-24 bg-black text-white min-h-screen">
    <div className="page-wrapper max-w-3xl mx-auto">
      <button onClick={onBack} className="text-blue-accent mb-12 flex items-center gap-2 hover:underline">
        ← Back to home
      </button>
      <h1 className="common-title text-5xl mb-12">Terms & Conditions</h1>
      
      <div className="space-y-12 text-[#a8a8a8] leading-relaxed">
        <p className="text-sm italic">Last Updated: September 7, 2026</p>

        <section className="space-y-6">
          <h2 className="text-2xl text-white font-medium">1. Agreement to Terms</h2>
          <p>
            By accessing or using LexaIntake, you agree to be bound by these Terms and Conditions. Our service is designed for U.S. LTL freight brokers and 3PLs. These terms constitute a legally binding agreement between you and LexaIntake.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl text-white font-medium">2. Description of Service</h2>
          <p>
            LexaIntake provides an AI-native logistics operations platform. Our service includes automated billing audits, inbox action agents, dispute resolution, and TMS synchronization.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl text-white font-medium">3. Professional Disclaimer</h2>
          <p className="bg-white/5 p-4 rounded border border-white/10 text-white">
            LexaIntake is an AI automation tool and does not provide legal or professional logistics consultation. While our agents are designed for high precision, users are responsible for final verification of critical financial transactions and contractual carrier agreements.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl text-white font-medium">4. User Responsibilities</h2>
          <p>
            As a user of LexaIntake, you are responsible for: (a) Providing accurate logistics data and TMS credentials; (b) Monitoring the accuracy of AI-generated audits and disputes; (c) Ensuring your use of the platform complies with all relevant freight and commercial regulations.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl text-white font-medium">5. Fees and Payments</h2>
          <p>
            Services are billed on a subscription basis. You agree to pay all fees associated with your selected plan. Failure to pay may result in immediate suspension of the Service. All fees are non-refundable except as provided by our 30-day money-back guarantee policy.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl text-white font-medium">6. Limitation of Liability</h2>
          <p>
            In no event shall LexaIntake be liable for indirect or consequential damages, including loss of freight revenue or operational delays. Our maximum liability is limited to the fees paid in the previous month.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl text-white font-medium">7. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality remain the exclusive property of LexaIntake. Your logistics data remains your property, and you grant us a limited license to process it solely for providing the Service.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl text-white font-medium">8. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the State of Delaware, United States.
          </p>
        </section>

        <section className="bg-white/5 border border-white/10 p-8 rounded-2xl">
          <p className="text-white font-medium mb-2">Questions about these terms?</p>
          <p className="text-sm">Contact us at <a href="mailto:legal@lexaintake.com" className="text-blue-accent hover:underline">legal@lexaintake.com</a></p>
        </section>
      </div>
    </div>
  </div>
);

const TalkToLexaPage = ({ onBack }: { onBack: () => void }) => {
  useEffect(() => {
    // Inject Retell script
    const script = document.createElement('script');
    script.id = 'retell-widget';
    script.src = 'https://dashboard.retellai.com/retell-widget-v2.js';
    script.type = 'module';
    script.setAttribute('data-voice-public-key', 'public_key_9e42a844abb528a95fbbb');
    script.setAttribute('data-voice-agent-id', 'agent_e68e92fe8159a707e67f908c09');
    script.setAttribute('data-title', 'Experience Lexa');
    script.setAttribute('data-bot-name', 'Lexa');
    script.setAttribute('data-fab-text', 'Get Started');
    script.setAttribute('data-color', '#2377f6');
    script.setAttribute('data-theme-color', '#2377f6');
    script.setAttribute('data-popup-message', 'Want to see how I handle a real exception? Click to talk to me.');
    script.setAttribute('data-show-ai-popup', 'true');
    script.setAttribute('data-show-ai-popup-time', '5');
    document.body.appendChild(script);

    return () => {
      // Cleanup script and widget elements
      const existingScript = document.getElementById('retell-widget');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      
      // Attempt to remove Retell custom elements
      const widget = document.querySelector('retell-widget-v2');
      if (widget) {
        widget.remove();
      }

      // Also clean up any styles or other elements Retell might have added
      const styleTags = document.querySelectorAll('style');
      styleTags.forEach(tag => {
        if (tag.textContent?.includes('retell')) {
          tag.remove();
        }
      });
    };
  }, []);

  return (
    <div className="pt-32 pb-24 bg-black text-white min-h-screen relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-accent/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="page-wrapper max-w-4xl mx-auto relative z-10">
        <button onClick={onBack} className="text-blue-accent mb-12 flex items-center gap-2 hover:underline">
          ← Back to home
        </button>

        {/* Hero Section */}
        <section className="mb-24">
          <h1 className="common-title text-4xl md:text-7xl mb-6 tracking-tight">
            Experience Lexa — see how she <br className="hidden md:block" /> handles a real logistics exception
          </h1>
          <p className="text-xl md:text-2xl text-[#a8a8a8] leading-relaxed max-w-3xl">
            This is a live AI logistics agent, not a recording. Describe a real scenario — a misbilled LTL shipment, a missing BOL, a carrier dispute — and see how she responds.
          </p>
        </section>

        {/* CTA Section */}
        <section className="mb-24 py-16 px-8 glass-card text-center border-blue-accent/20">
          <h2 className="common-title text-3xl mb-6">Ready to see the future of freight ops?</h2>
          <p className="text-[#a8a8a8] mb-10 max-w-xl mx-auto text-lg">
            Click below to talk to Lexa. Uses your microphone — no download, no phone number needed.
          </p>
          {/* The widget will anchor itself, but we can provide visual guidance */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-blue-accent flex items-center justify-center animate-pulse shadow-[0_0_30px_rgba(35,119,246,0.4)]">
               <Phone className="w-8 h-8 text-white fill-white" />
            </div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-accent">Click the widget in the corner to begin</p>
          </div>
        </section>

        {/* What to try Section */}
        <section className="mb-24">
          <h2 className="common-title text-3xl mb-10">What to try</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "I have a shipment from Chicago to LA that was overcharged $200 for a liftgate.",
              "I'm missing a signed BOL for a load picked up in Dallas yesterday.",
              "Ask her to check if carrier rate sheet #492 matches the current invoice."
            ].map((text, i) => (
              <div key={i} className="glass-card p-8 hover:bg-white/10 transition-colors border-white/5">
                <p className="text-[#a8a8a8] italic text-lg leading-relaxed">
                  “{text}”
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Line */}
        <div className="text-center mb-12">
          <p className="text-white/40 text-lg font-title italic">Built specifically for LTL freight brokers — not a generic chatbot.</p>
        </div>

        {/* Fallback Option */}
        <div className="text-center">
          <a href="#" className="text-blue-accent hover:underline text-sm flex items-center justify-center gap-2">
            Prefer to watch instead? Watch a 90-second example of billing audit <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Header = ({ onNavigate, simple = false }: { onNavigate: (view: any) => void, simple?: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'py-4 bg-black/80 backdrop-blur-lg shadow-lg border-b border-white/5' : 'py-6'}`}>
      {!isScrolled && (
        <div className="absolute inset-0 backdrop-blur-md bg-black/30 [mask-image:linear-gradient(180deg,black_0%,black_40%,transparent_100%)] pointer-events-none" />
      )}
      <div className="page-wrapper flex items-center justify-between relative">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => onNavigate('landing')}>
            <span className="text-xl sm:text-2xl font-title text-white">LexaIntake</span>
            {!simple && <ChevronRight className="w-4 h-4 text-white rotate-90 group-hover:-rotate-90 transition-transform hidden sm:block" />}
          </div>
        </div>

        {!simple && (
          <nav className="hidden lg:flex items-center gap-1">
            {['Why Lexa', 'Agents', 'Platform', 'Results', 'Pricing'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-3 py-1.5 text-sm font-medium text-[#a8a8a8] hover:text-white hover:bg-white/10 rounded-lg transition-all"
              >
                {item}
              </a>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-2">
          <button 
            onClick={() => onNavigate('login')}
            className="text-sm font-medium text-[#a8a8a8] hover:text-white px-4 py-2 transition-all"
          >
            Login
          </button>
          <button 
            onClick={() => onNavigate('signup')}
            className="text-sm font-medium text-[#a8a8a8] hover:text-white px-4 py-2 transition-all hidden sm:block"
          >
            Get Started
          </button>
          <button 
            onClick={() => onNavigate('signup')}
            className="common-button common-button-primary px-4 py-2 text-sm whitespace-nowrap shadow-[0_0_20px_rgba(43,108,255,0.3)]"
          >
            Get Started for Free
          </button>
        </div>
      </div>
    </header>
  );
};

const Hero = ({ onNavigate }: { onNavigate: (view: 'landing' | 'login' | 'signup' | 'call') => void }) => (
  <section className="relative pt-32 pb-16 overflow-hidden min-h-[90vh] flex items-center">
    {/* Hero Background Gradient */}
    <div className="hero-gradient" />

    <div className="page-wrapper relative z-10 w-full">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="common-title text-5xl lg:text-7xl mb-6 !leading-[1.1] tracking-tight"
          >
            Stop Carrier Overcharges and Automate the Admin That Kills Your Margins.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-[#a8a8a8] mb-10 max-w-xl leading-relaxed"
          >
            LexaIntake is the AI-native operations layer for LTL brokers. It audits every invoice, disputes billing errors, and syncs your TMS 24/7—freeing your team to focus on moving freight.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-start gap-4"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('signup')}
                className="common-button common-button-primary px-8 py-4 text-lg flex items-center gap-2 shadow-[0_0_30px_rgba(43,108,255,0.4)] group"
              >
                Free: Book a 15-minute call <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="text-xs text-[#a8a8a8] font-medium pl-1">
              Automate your billing audit today. Talk to Lexa — she is live.
            </div>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full lg:w-1/2 flex justify-end"
        >
          <div className="relative glass-card p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl max-w-md w-full transform lg:translate-x-12">
            <div className="flex items-center justify-between mb-4 pb-2 border-bottom border-white/5">
              <div className="text-[10px] text-white/40 font-mono">LexaIntake · Inbox · Billing Audit · Disputes</div>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500" />
              <div>
                <div className="text-sm font-medium text-white">LTL Freight Broker Ops</div>
                <div className="text-[10px] text-white/40">Audit · Inbox · Disputes</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium text-white">LTL Shipment #49201 — Chicago → LA</div>
                  <div className="text-[10px] text-red-400">$250 Overcharge Detected</div>
                </div>
                <button className="px-3 py-1 rounded-lg bg-white text-black text-[10px] font-bold">Dispute</button>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium text-white">Quote Request — Houston → Miami</div>
                  <div className="text-[10px] text-blue-accent font-medium uppercase tracking-widest">Drafting...</div>
                </div>
                <button className="px-3 py-1 rounded-lg bg-white text-black text-[10px] font-bold">View</button>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
              <div className="text-[10px] text-white/40 uppercase tracking-widest">AUDIT ACCURACY THIS MONTH</div>
              <div className="text-lg font-title text-white">100% <span className="text-[10px] font-sans opacity-40 font-normal">verified</span></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Customers = () => (
  <>
    <section className="py-16 border-t border-white/5">
      <div className="page-wrapper">
        <p className="text-center text-sm mb-10 flex items-center justify-center gap-2 flex-wrap">
          <span className="font-medium text-[#d9f5fd]">Built to connect with the tools your operations already run on</span>
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {['McLeod', 'MercuryGate', 'Rose Rocket', 'NetSuite', 'SAP', 'QuickBooks'].map((logo) => (
            <span key={logo} className="text-xl font-title text-white font-bold">{logo}</span>
          ))}
        </div>
      </div>
    </section>

    {/* Results Number Bar */}
    <section className="py-12 bg-black border-y border-white/5">
      <div className="page-wrapper">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <div className="text-4xl md:text-5xl font-title font-bold text-white mb-2">100%</div>
            <div className="text-xs uppercase tracking-widest text-[#a8a8a8] font-medium">Billing audit coverage</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-4xl md:text-5xl font-title font-bold text-white mb-2">&lt; 2min</div>
            <div className="text-xs uppercase tracking-widest text-[#a8a8a8] font-medium">Email response time</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-4xl md:text-5xl font-title font-bold text-white mb-2">0</div>
            <div className="text-xs uppercase tracking-widest text-[#a8a8a8] font-medium">Unresolved disputes</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-4xl md:text-5xl font-title font-bold text-white mb-2">24/7</div>
            <div className="text-xs uppercase tracking-widest text-[#a8a8a8] font-medium">Inbox monitoring</div>
          </div>
        </div>
      </div>
    </section>
  </>
);

const Why = () => (
  <section id="why" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://hugo.ai/_ipx/w_2800&f_png/components/home/HomeWhy/background_stars.png" 
        alt="Stars" 
        className="w-full h-full object-cover opacity-50"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="page-wrapper relative z-10">
      <div className="mb-24 relative max-w-4xl">
        <h2 className="common-title text-6xl md:text-8xl tracking-tight text-white mb-6 !leading-tight">
          $120,000.
        </h2>
        <p className="text-white text-xl md:text-2xl mt-6 max-w-3xl leading-relaxed font-light">
          For a mid-sized broker, billing errors and missed accessory charges leak an average of $10,000 per month. That's $120,000 in pure profit walking out the door every year because your ops team is too busy to audit every single carrier invoice. LexaIntake audits 100% of them.
        </p>
        <p className="text-base text-[#a8a8a8] mt-2 mb-6 italic text-xs">
          *Estimate based on industry data for LTL freight billing inaccuracies and uncollected accessorials.
        </p>
        <p className="text-base text-[#a8a8a8] mt-6 italic">
          Lexa catches every error.
        </p>
      </div>

      {/* Before vs After Section */}
      <div className="mb-32">
        <div className="text-center mb-16">
          <h2 className="common-title text-4xl md:text-6xl mb-4">The Cost of Manual Ops vs. The Power of Lexa.</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Before Card */}
          <div className="glass-card bg-[#2a0a0a] border border-red-900/30 p-8 md:p-12 rounded-[32px]">
            <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-red-500/60 mb-8 font-bold">MANUAL OPERATIONS</div>
            <div className="space-y-4">
              {[
                "Carrier invoices buried in 400+ unread emails.",
                "Bills auto-paid without cross-referencing BOLs.",
                "Incorrect liftgate and reweigh fees ignored.",
                "Customer refuses to pay post-delivery charges.",
                "You eat the loss on the margin.",
                "Repeat this 30 times a month.",
                "$120,000+ in annual profit lost to paperwork."
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4 text-white/80">
                  <span className="text-red-500 font-bold shrink-0 mt-1">✗</span>
                  <span className="text-lg md:text-xl font-light">{text}</span>
                </div>
              ))}
            </div>
          </div>
          {/* After Card */}
          <div className="glass-card bg-[#032b35] border border-blue-accent/20 p-8 md:p-12 rounded-[32px]">
            <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-blue-accent/60 mb-8 font-bold">LEXAINTAKE AUTOMATION</div>
            <div className="space-y-4">
              {[
                "Lexa identifies invoices in your inbox instantly.",
                "Automatic cross-reference with TMS load data.",
                "Discrepancies flagged and disputed on arrival.",
                "Corrected invoices processed automatically.",
                "Every dollar of margin is protected.",
                "Your team focuses on booking more loads.",
                "100% audit coverage. Zero margin leakage."
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4 text-white">
                  <span className="text-blue-accent font-bold shrink-0 mt-1">✓</span>
                  <span className="text-lg md:text-xl font-light">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Designed for the 5–50 Person Ops Team.", desc: "Small brokers are too big to audit everything manually, but too small to hire a dedicated audit department. Lexa fills that gap permanently." },
          { title: "Native TMS Integration.", desc: "Lexa doesn't just read emails. She cross-references your rates, loads, and carrier agreements inside your TMS to ensure every action is grounded in truth." },
          { title: "Zero Training Required.", desc: "Lexa learns your specific business rules in hours, not weeks. She handles the repetitive paperwork while your team handles high-value customer relationships." },
          { title: "Measurable Margin Recovery.", desc: "See exactly how many disputes were won and how many thousands of dollars Lexa recovered for your brokerage in a real-time dashboard." }
        ].map((card, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8"
          >
            <h3 className="text-xl text-white mb-4 font-medium">{card.title}</h3>
            <p className="text-[#a8a8a8] leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Solutions = () => (
  <section id="solutions" className="py-24">
    <div className="page-wrapper">
      <h2 className="common-title text-6xl lg:text-8xl mb-20">
        <span className="block">6 AI Agents.</span>
        <span className="block opacity-70">1 Operations Platform.</span>
        <span className="block opacity-40">Infinite Efficiency.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        {[
          { icon: <Mail className="w-8 h-8 text-[#a8a8a8]" />, title: "Inbox Action Agent", desc: "Lexa monitors your shared ops inbox 24/7. She drafts quotes, updates shipment status, and tags priority issues before your team even logs in." },
          { icon: <Check className="w-8 h-8 text-[#a8a8a8]" />, title: "Billing Audit Agent", desc: "Every carrier invoice is audited against your TMS quote and signed BOL. She automatically detects overcharges for liftgates, residential deliveries, and reweighs." },
          { icon: <ShieldCheck className="w-8 h-8 text-[#a8a8a8]" />, title: "Risk & Verification Agent", desc: "Before every load, Lexa verifies carrier insurance, safety ratings, and authority status in real-time. She flags expired policies instantly." }
        ].map((item, i) => (
          <div key={i} className="flex flex-col gap-6">
            {item.icon}
            <div>
              <h3 className="text-white font-medium mb-2">{item.title}</h3>
              <p className="text-[#a8a8a8] leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="h-px w-full bg-white/10 mb-20" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "SOURCE OF TRUTH", title: "TMS Integration Engine.", desc: "Lexa syncs perfectly with McLeod, MercuryGate, and Rose Rocket. She keeps your TMS updated so your data is always correct.", img: "badge_security" },
          { label: "DISPUTE MANAGEMENT", title: "Automated Dispute Resolution.", desc: "When an audit fails, Lexa drafts and files the dispute with the carrier including all necessary documentation (BOL, Proof of Delivery).", img: "badge_compliance" },
          { label: "EXCEPTIONS", title: "Exception Handling Agent.", desc: "Misrouted freight? Late pickups? Lexa identifies exceptions before they become customer complaints and alerts your team with a plan.", img: "badge_hosting" }
        ].map((item, i) => (
          <div key={i} className="glass-card p-8 h-[260px] flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-[10px] uppercase tracking-widest font-mono text-[#707070]">{item.label}</span>
              <img src={`https://hugo.ai/_ipx/s_80x80/components/home/HomeSolutions/${item.img}.svg`} alt={item.label} className="w-16 h-16" referrerPolicy="no-referrer" />
            </div>
            <div>
              <h3 className="text-lg text-white mb-2 font-medium">{item.title}</h3>
              <p className="text-sm text-[#a8a8a8]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="py-24 bg-white text-black rounded-t-[40px] md:rounded-t-[80px]">
    <div className="page-wrapper">
      <div className="text-center mb-16 md:mb-32 sticky top-[10vh] z-10 py-4 bg-white/80 backdrop-blur-sm">
        <h2 className="common-title text-black text-3xl md:text-6xl mb-4 leading-tight">Eliminate the Manual Grind. Automate Every Load.</h2>
        <p className="text-lg md:text-2xl text-black/40 font-title italic">How LexaIntake transforms your brokerage operations.</p>
      </div>

      <div className="relative flex flex-col gap-[60px] md:gap-[120px] pb-32">
        {[
          { color: "bg-[#2c150c]", title: "Stop Carrier Margin Leakage with 100% Automated Audits.", desc: "LexaIntake compares every invoice against your TMS load data. If a carrier bills a $150 reweigh without a scale ticket, she automatically initiates a dispute. You never pay for unverified extras again." },
          { color: "bg-[#032b35]", title: "Clear Your Inbox with AI-Native Quote Drafting.", desc: "When a customer emails asking for a rate or a status update, LexaIntake drafts the response based on your current contracts and real-time tracking data. Your team just hits 'Send'." },
          { color: "bg-[#1d2c0c]", title: "Operational Efficiency in 48 Hours, Not Months.", desc: "Connect LexaIntake to your TMS (McLeod, MercuryGate, Rose Rocket) and carrier rate sheets. Within 48 hours, your billing audit is 100% automated and your inbox is clear." },
        ].map((card, i) => (
          <div 
            key={i} 
            className={`sticky top-[25vh] md:top-[30vh] w-full min-h-[400px] md:min-h-[500px] rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl ${card.color} text-white transition-all duration-700 ease-in-out flex items-center justify-center text-center`}
            style={{ 
              zIndex: i + 1,
              transform: `translateY(${i * 16}px)`
            }}
          >
            {/* Content Layer */}
            <div className="relative z-10 p-8 md:p-24 max-w-4xl">
              <h3 className="common-title text-3xl md:text-6xl mb-6 md:mb-10 leading-[1.1] tracking-tight">{card.title}</h3>
              <p className="text-white/80 text-base md:text-2xl leading-relaxed font-sans font-light max-w-3xl mx-auto">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* How a billing audit works visual step section */}
      <div className="py-24 border-t border-black/5">
        <div className="mb-20">
          <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#a8a8a8] mb-4 font-bold">WHAT HAPPENS ON EVERY AUDIT.</div>
          <p className="text-xl text-black/40 font-title italic">From invoice arrival to corrected bill in under 5 minutes.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { num: "01", title: "Carrier invoice arrives.", desc: "Carrier sends an invoice via EDI or email. LexaIntake captures it immediately and extracts all line items." },
            { num: "02", title: "Lexa cross-references the BOL.", desc: "Lexa pulls the signed Bill of Lading from your TMS and compares weight, class, and accessorials (liftgate, residential, etc.) to the invoice." },
            { num: "03", title: "Discrepancies are flagged.", desc: "If the carrier billed for a liftgate that wasn't on the BOL, Lexa flags the discrepancy and calculates the exact overcharge amount." },
            { num: "04", title: "Dispute filed automatically.", desc: "Lexa drafts a professional dispute email with the attached BOL as proof. Once you approve, it's sent to the carrier's billing department. Margin saved." }
          ].map((step, i) => (
            <div key={i} className="flex flex-col gap-6">
              <div className="text-3xl font-title font-bold text-black/20">{step.num}</div>
              <div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-black/60 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-col gap-[60px] md:gap-[120px] pb-32">
        {[
          { color: "bg-[#361e02]", title: "LTL freight is messy. Lexa cleans it up.", desc: "Carriers misbill. Scale tickets go missing. Customers demand credits. LexaIntake manages the chaos so your ops team can focus on moving freight. We handle the paperwork, you handle the relationships." },
          { color: "bg-[#2c150c]", title: "Protect every dollar of your margin.", desc: "A $200 overcharge on a $1,200 load is nearly 20% of your total margin gone. LexaIntake stops this leakage by auditing 100% of your bills, not just a random sample. Profit saved automatically." },
          { color: "bg-[#032b35]", title: "See exactly how your operations are performing.", desc: "Track every dispute filed, every dollar recovered, and every quote drafted. Your monthly dashboard tells the full story of your operational efficiency and recovered revenue." },
          { color: "bg-[#1d2c0c]", title: "Your automation updates the moment you do.", desc: "Update your carrier contracts, change your margin rules, add new customers — everything is adjusted in LexaIntake instantly. No downtime, no re-training, no waiting. Changes go live immediately." }
        ].map((card, i) => (
          <div 
            key={i} 
            className={`sticky top-[25vh] md:top-[30vh] w-full min-h-[400px] md:min-h-[500px] rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl ${card.color} text-white transition-all duration-700 ease-in-out flex items-center justify-center text-center`}
            style={{ 
              zIndex: i + 1,
              transform: `translateY(${i * 16}px)`
            }}
          >
            {/* Content Layer */}
            <div className="relative z-10 p-8 md:p-24 max-w-4xl">
              <h3 className="common-title text-3xl md:text-6xl mb-6 md:mb-10 leading-[1.1] tracking-tight">{card.title}</h3>
              <p className="text-white/80 text-base md:text-2xl leading-relaxed font-sans font-light max-w-3xl mx-auto">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CaseStudies = () => (
  <section id="case-studies" className="py-24 bg-black text-white">
    <div className="page-wrapper">
      <h2 className="common-title text-5xl mb-4">Built for brokers ready to stop leaking profit.</h2>
      <p className="text-2xl text-white/50 font-title mb-20">We're currently running pilots with LTL freight brokers and 3PLs across the U.S. Here's what early results look like.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { 
            title: "Zero margin leakage", 
            body: "Every pilot broker sees 100% of their carrier invoices audited starting day one — no exceptions, no random sampling."
          },
          { 
            title: "Quick TMS Setup", 
            body: "No technical overhead on your end. We connect Lexa to your TMS and she's auditing bills within two business days."
          },
          { 
            title: "Performance-based", 
            body: "No long-term contracts. LexaIntake pays for itself in recovered overcharges. If she doesn't perform, you walk away."
          }
        ].map((item, i) => (
          <div 
            key={i}
            className="glass-card p-10 flex flex-col justify-between border-white/10 hover:border-blue-accent/30 transition-all duration-500"
          >
            <div>
              <h3 className="text-2xl font-title text-white mb-6">{item.title}</h3>
              <p className="text-white/60 leading-relaxed italic text-lg">
                “{item.body}”
              </p>
            </div>
            <div className="mt-12 h-px w-12 bg-blue-accent/40" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Guarantee = () => (
  <section className="bg-black text-white py-24">
    <div className="page-wrapper">
      <div className="glass-card bg-[#032b35] border border-blue-accent/20 p-12 md:p-20 rounded-[48px] text-center shadow-2xl relative overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-accent/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          <h2 className="common-title text-4xl md:text-6xl text-white mb-8">We stand behind every dollar Lexa recovers.</h2>
          <p className="text-lg md:text-2xl text-white/80 leading-relaxed mb-12">
            If you set up LexaIntake and do not see a measurable reduction<br className="hidden md:block" />
            in unverified carrier charges within the first 30 days —<br className="hidden md:block" />
            we will refund your first month. No paperwork. No argument.<br className="hidden md:block" />
            Just tell us and we will process it the same day.
          </p>
          <p className="text-lg md:text-2xl text-white/80 leading-relaxed mb-16">
            And if LexaIntake ever fails to detect a misbilled invoice<br className="hidden md:block" />
            that you manually catch — we credit that month's fee automatically.<br className="hidden md:block" />
            No questions asked.
          </p>
          <div className="text-xl md:text-3xl font-title text-white mb-16 italic opacity-80">We only win when your margins grow.</div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/10">
            <div>
              <div className="text-3xl md:text-5xl font-title font-bold text-white mb-2">30 days</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Money-back guarantee</div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-title font-bold text-white mb-2">100%</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Audit credit if we fail</div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-title font-bold text-white mb-2">0</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Questions asked to refund</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);


const FAQ = ({ onNavigate }: { onNavigate: (view: 'landing' | 'login' | 'signup') => void }) => (
  <section id="faq" className="py-24 bg-black text-white">
    <div className="page-wrapper">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
          <h2 className="common-title text-5xl mb-4">Got questions?</h2>
          <p className="text-2xl text-white/50 font-title mb-8">We have the answers.</p>
          <button 
            onClick={() => window.location.href = 'mailto:rahul@lexaintake.com'}
            className="common-button common-button-primary px-6 py-3 text-sm flex items-center gap-2"
          >
            Ask us a question →
          </button>
        </div>

        <div className="lg:w-2/3 flex flex-col gap-12">
          {[
            { q: "How long does setup take?", a: "Most freight brokers are fully live within 48 hours. You provide your TMS credentials and carrier rate sheets, we configure everything. You touch zero technology." },
            { q: "Is LexaIntake a TMS?", a: "No. LexaIntake is an AI operations layer that sits on top of your TMS. We connect with McLeod, MercuryGate, Rose Rocket, and more to automate the manual work your team does in those systems." },
            { q: "Do I need any special software installed?", a: "No. LexaIntake is a cloud-native platform. It works through your email inbox and your existing TMS. No new hardware or local software installation is required." },
            { q: "How does the billing audit work?", a: "Lexa captures carrier invoices via email or EDI, then cross-references them against your original quote and signed BOL in your TMS. If discrepancies are found, she flags them or automatically files a dispute." },
            { q: "What happens if Lexa misidentifies a charge?", a: "Every dispute and quote drafted by Lexa can be configured for human review. Your team stays in control, but Lexa handles 95% of the heavy lifting. We only win when your data is correct." },
            { q: "Can she handle residential and liftgate disputes?", a: "Yes. Lexa is specifically trained on LTL accessorial charges. She knows how to verify reweighs, reclassifications, and residential delivery fees against your proof of delivery documents." }
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-4 overflow-hidden">
              <motion.div 
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex justify-end"
              >
                <div className="bg-black border border-[#383838] rounded-2xl rounded-tr-sm p-4 max-w-[80%]">
                  <p className="text-white text-lg">{item.q}</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="flex justify-start"
              >
                <div className="bg-gradient-to-b from-[#1c1c1c] to-[#383838] rounded-2xl rounded-tl-sm p-4 max-w-[80%] shadow-xl border border-white/5">
                  <p className="text-white text-lg">{item.a}</p>
                </div>
              </motion.div>
              {i < 4 && <div className="h-px w-full bg-white/10 mt-8" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Footer = ({ onNavigate }: { onNavigate?: (view: 'landing' | 'login' | 'signup' | 'call' | 'privacy' | 'terms') => void }) => (
  <footer className="pt-24 pb-12 bg-white text-black">
    <div className="page-wrapper">
      <div className="mb-24 text-center">
        <h2 className="common-title text-black text-4xl md:text-6xl mb-6">Stop losing margin. Start auditing 100%.</h2>
        <p className="text-xl text-black/50 mb-10 max-w-2xl mx-auto">LTL freight brokers across the USA are using LexaIntake to audit every invoice and monitor every ops inbox — 24/7/365. Early clients get locked-in pricing and priority setup.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => onNavigate?.('signup')}
            className="common-button common-button-primary px-8 py-4 text-lg"
          >
            Get Started for Free →
          </button>
        </div>
        <p className="mt-4 text-xs text-black/40">Free setup call · No contracts · Transparent pricing</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mb-24">
        <div className="flex flex-col gap-4">
          <p className="font-bold text-sm uppercase tracking-widest text-black/30">Product</p>
          {['Why LexaIntake', 'Agents', 'Inbox', 'Audit'].map(item => (
            <a key={item} href="#" className="font-title text-2xl text-[#707070] hover:text-black transition-colors">{item}</a>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-sm uppercase tracking-widest text-black/30">Company</p>
          {['Results', 'LinkedIn', 'Contact', 'Privacy Policy'].map(item => (
            <button 
              key={item} 
              onClick={() => {
                if (item === 'Privacy Policy') onNavigate?.('privacy');
                else if (item === 'Contact') window.location.href = 'mailto:hello@lexaintake.com';
                else if (item === 'LinkedIn') window.open('https://www.linkedin.com/in/krishna-wararkar-5697783a2', '_blank');
              }}
              className="font-title text-2xl text-[#707070] hover:text-black transition-colors text-left"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-[#707070] text-sm">Have questions?</p>
          <a href="mailto:hello@lexaintake.com" className="common-button bg-[#ebebeb] text-black px-6 py-3 text-sm flex items-center justify-between w-full">
            Contact us <ChevronRight className="w-4 h-4 text-[#8c8c8c]" />
          </a>
        </div>
      </div>

      <div className="border-t border-black/10 pt-8 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-[#8c8c8c]">
          <div className="flex items-center gap-2 bg-[#ebebeb] px-3 py-1.5 rounded-lg text-black cursor-pointer">
            <span>🇺🇸</span> English (United States) <ChevronRight className="w-3 h-3 rotate-90" />
          </div>
          <div className="flex gap-4">
            <button onClick={() => onNavigate?.('terms')} className="hover:text-black">Terms & conditions</button>
            <span>·</span>
            <button onClick={() => onNavigate?.('privacy')} className="hover:text-black">Privacy policy</button>
          </div>
          <div>© 2026 LexaIntake Inc. All rights reserved.</div>
        </div>
        <div className="text-[15vw] font-title text-black/5 leading-none text-center select-none">LexaIntake</div>
      </div>
    </div>
  </footer>
);

const LiveDemoSection = ({ onNavigate }: { onNavigate?: (view: 'landing' | 'login' | 'signup' | 'call') => void }) => (
  <section className="py-24 bg-black text-white relative overflow-hidden border-t border-white/5">
    {/* Subtle glow for the premium look */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-accent/10 blur-[120px] rounded-full pointer-events-none opacity-50" />
    
    <div className="page-wrapper relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-24">
        <div className="flex-1 w-full max-w-md mx-auto">
          <div className="glass-card bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl relative overflow-hidden">
            <div className="text-center pb-4 border-b border-white/10 mb-6 font-mono text-xs text-white">
              📩 Ops Inbox — Global Freight — 10:42 AM
            </div>
            <div className="space-y-4 flex flex-col">
              <div className="bg-white/10 text-white rounded-2xl rounded-tl-sm p-4 text-sm w-[85%] self-start">
                Customer: "Need a quote for 6 pallets, <br/>
                class 70 from Chicago to Phoenix. <br/>
                Pickup tomorrow morning."
              </div>
              <div className="bg-[#2b6dff] text-white rounded-2xl rounded-tr-sm p-4 text-sm w-[85%] self-end">
                Lexa (Draft): "Based on your contract with <br/>
                Old Dominion, the rate is $1,140. <br/>
                Should I book this for you?"
              </div>
              <div className="bg-white/10 text-white rounded-2xl rounded-tl-sm p-4 text-sm w-[85%] self-start">
                Carrier Invoice: "$1,340 (Includes liftgate)"
              </div>
              <div className="bg-[#2b6dff] text-white rounded-2xl rounded-tr-sm p-4 text-sm w-[85%] self-end">
                Lexa (Dispute): "The signed BOL for Load <br/>
                #4920 shows no liftgate requested. <br/>
                Please correct this bill immediately."
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-center">
              <p className="text-[10px] text-[#a8a8a8] leading-relaxed">
                This is LexaIntake. This is how your <br/>
                operations run. Every audit. Every email.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="common-title text-4xl mb-4">AI that doesn't just talk — it acts.</h2>
          <p className="text-lg text-[#a8a8a8] leading-relaxed mb-8">
            LexaIntake is the only AI built for the <br />
            chaos of LTL freight. She audits every bill, <br />
            drafts every quote, and resolves disputes <br />
            before your team even knows there's a <br />
            problem. Stop leaking margins today.
          </p>
          <button 
            onClick={() => onNavigate('signup')}
            className="common-button common-button-primary px-8 py-4 text-lg flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(43,108,255,0.4)]"
          >
            Get Started <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Integrations = () => (
  <section id="integrations" className="py-24 bg-black text-white border-t border-white/5">
    <div className="page-wrapper">
      <div className="text-center mb-20">
        <h2 className="common-title text-5xl mb-4">Works with the tools your ops team already runs on.</h2>
        <p className="text-xl text-white/60">Connect your existing TMS and email inbox. Lexa works where your team works.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { name: "McLeod", desc: "Sync loads and rates automatically" },
          { name: "MercuryGate", desc: "Real-time audit integration" },
          { name: "Rose Rocket", desc: "Automate your billing workflow" },
          { name: "Outlook/Gmail", desc: "Inbox management 24/7" },
          { name: "SMC3", desc: "Access carrier rate data" },
          { name: "EDI 210", desc: "Process invoices instantly" },
          { name: "QuickBooks", desc: "Sync financials automatically" },
          { name: "Zapier", desc: "Connect to 5,000+ other apps" }
        ].map((item, i) => (
          <div key={i} className="glass-card p-6 text-center">
            <div className="text-lg font-bold mb-1">{item.name}</div>
            <div className="text-xs text-white/40">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AuthPage = ({ initialMode, onBack, onComplete }: { initialMode: 'login' | 'signup', onBack: () => void, onComplete: () => void }) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      // Mock local authentication to ensure the build passes on Cloudflare
      // and the UI remains functional without a separate backend server.
      await new Promise(resolve => setTimeout(resolve, 800)); // Simulate network lag
      
      const mockData = {
        user: { 
          id: "mock-user-id", 
          email: email, 
          full_name: mode === 'signup' ? fullName : "Mock User" 
        },
        token: "mock-jwt-token"
      };
      
      localStorage.setItem('lexa_token', mockData.token);
      localStorage.setItem('lexa_user', JSON.stringify(mockData.user));
      
      onComplete();
    } catch (err: any) {
      setError('Authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col">
      {/* Intense Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-[#2b6cff]/20 blur-[200px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-[#2b6cff]/10 blur-[200px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-accent/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <header className="relative z-10 py-8 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={onBack}>
          <span className="text-2xl font-title text-white">LexaIntake</span>
          <ChevronRight className="w-4 h-4 text-white rotate-90 group-hover:-rotate-90 transition-transform" />
        </div>
        <button 
          onClick={onBack}
          className="text-sm text-[#a8a8a8] hover:text-white transition-colors flex items-center gap-2"
        >
          <X className="w-4 h-4" /> Close
        </button>
      </header>

      <main className="flex-1 relative z-10 flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md"
        >
          {/* Intense Glassmorphism Box */}
          <div className="backdrop-blur-[120px] bg-white/[0.01] p-8 md:p-12 rounded-[48px] border border-white/[0.15] shadow-[0_40px_100px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.05)_inset,0_20px_40px_rgba(0,0,0,0.3)] relative overflow-hidden group">
            {/* Glossy Overlay & Highlights */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none" />
            <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(43,108,255,0.05),transparent_40%)] pointer-events-none animate-pulse" />
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <motion.h1 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="common-title text-4xl md:text-5xl mb-4 tracking-tight leading-tight"
                >
                  {mode === 'login' ? 'Welcome Back' : 'Create Account'}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-[#a8a8a8] text-sm font-medium"
                >
                  {mode === 'login' 
                    ? "Don't have an account? " 
                    : "Already have an account? "}
                  <button 
                    onClick={() => {
                      setMode(mode === 'login' ? 'signup' : 'login');
                      setError('');
                    }}
                    className="text-white hover:text-blue-accent transition-colors underline underline-offset-4"
                  >
                    {mode === 'login' ? 'Create one' : 'Log in'}
                  </button>
                </motion.p>
              </div>

              {error && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium animate-shake">
                  {error}
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                {mode === 'signup' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="space-y-2 overflow-hidden"
                  >
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Enter your name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-accent/50 focus:bg-white/[0.06] transition-all"
                    />
                  </motion.div>
                )}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] ml-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-accent/50 focus:bg-white/[0.06] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center ml-1">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">Password</label>
                    {mode === 'login' && (
                      <button type="button" className="text-[10px] text-white/30 hover:text-white uppercase tracking-widest transition-colors">Forgot?</button>
                    )}
                  </div>
                  <input 
                    required
                    type="password" 
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-accent/50 focus:bg-white/[0.06] transition-all"
                  />
                </div>

                <button 
                  disabled={isLoading}
                  className="common-button common-button-primary w-full py-5 text-base font-bold flex items-center justify-center gap-3 group shadow-[0_20px_40px_rgba(43,108,255,0.2)] hover:shadow-[0_20px_50px_rgba(43,108,255,0.4)] transition-all disabled:opacity-50 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
                  <span className="relative z-10">{isLoading ? 'Processing...' : (mode === 'login' ? 'Log in' : 'Create Account')}</span>
                  {!isLoading && <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />}
                </button>
              </form>

              <div className="relative my-10">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/5"></div>
                </div>
                <div className="relative flex justify-center text-[10px] uppercase tracking-[0.3em]">
                  <span className="bg-transparent px-4 text-white/20">Enterprise Access</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-3 bg-white/[0.02] border border-white/10 rounded-2xl py-4 hover:bg-white/[0.05] transition-all text-[10px] font-bold uppercase tracking-widest">
                  <Globe className="w-4 h-4 text-blue-accent" /> Google
                </button>
                <button className="flex items-center justify-center gap-3 bg-white/[0.02] border border-white/10 rounded-2xl py-4 hover:bg-white/[0.05] transition-all text-[10px] font-bold uppercase tracking-widest">
                  <Share2 className="w-4 h-4 text-blue-accent" /> SSO
                </button>
              </div>
            </div>
          </div>

          <p className="text-center mt-12 text-[10px] text-white/30 uppercase tracking-[0.2em] leading-loose">
            Secure Infrastructure by LexaIntake <br />
            <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a> & <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>.
          </p>
        </motion.div>
      </main>

      <footer className="relative z-10 py-8 text-center text-[10px] text-white/20 uppercase tracking-[0.4em]">
        © 2026 LexaIntake Operations Platform
      </footer>
    </div>
  );
};

const OnboardingFlow = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    displayName: '',
    username: '',
    whatDoYouSell: '',
    platforms: [] as string[],
    channelLink: '',
    audienceSize: '',
    soldBefore: '',
    productName: '',
    price: '19',
    isFree: false,
    productLink: ''
  });

  const nextStep = () => setStep(prev => prev + 1);

  const steps = [
    { id: 1, label: 'Business' },
    { id: 2, label: 'Audience' },
    { id: 3, label: 'Setup' }
  ];

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center gap-8 mt-10">
      {steps.map((s) => (
        <div key={s.id} className="flex flex-col items-center gap-2">
          <div className={`w-2 h-2 rounded-full transition-all duration-300 ${step === s.id ? 'bg-[#ff007f] scale-125' : 'bg-white/20'}`} />
          <span className={`text-[10px] uppercase tracking-widest font-medium transition-colors ${step === s.id ? 'text-white' : 'text-white/30'}`}>
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#ff007f]/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#0070f3]/10 blur-[120px] rounded-full" />
      </div>

      <header className="relative z-10 py-8 px-6 md:px-12">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-title text-white">LexaIntake</span>
          <ChevronRight className="w-4 h-4 text-white rotate-90" />
        </div>
      </header>

      <main className="flex-1 relative z-10 flex items-center justify-center p-6">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-md"
            >
              <div className="glass-card p-8 md:p-10 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="text-center mb-10">
                  <h1 className="common-title text-3xl md:text-4xl mb-3">Tell us about your business</h1>
                  <p className="text-[#a8a8a8] text-sm leading-relaxed">
                    Share your brokerage name, TMS, and primary service areas. We use this to configure LexaIntake specifically for your operations.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">Business Name</label>
                    <input 
                      type="text" 
                      placeholder="Atlas Logistics"
                      value={formData.displayName}
                      onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">Service Area & Hours</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="e.g. Phoenix, AZ | Mon-Fri 8am-6pm"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">Average monthly volume?</label>
                    <div className="flex flex-wrap gap-2">
                      {['0-200 shipments', '200-1,000', '1,000-5,000', '5,000+'].map((option) => (
                        <button
                          key={option}
                          onClick={() => setFormData({ ...formData, whatDoYouSell: option })}
                          className={`px-4 py-2 rounded-full text-xs font-medium transition-all border ${formData.whatDoYouSell === option ? 'bg-white text-black border-white' : 'bg-white/5 text-[#a8a8a8] border-white/10 hover:border-white/30'}`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={nextStep}
                    disabled={!formData.displayName || !formData.username || !formData.whatDoYouSell}
                    className="common-button common-button-primary w-full py-4 text-sm font-bold flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                {renderStepIndicator()}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-md"
            >
              <div className="glass-card p-8 md:p-10 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="text-center mb-10">
                  <h1 className="common-title text-3xl md:text-4xl mb-3">How do you handle audits currently?</h1>
                  <p className="text-[#a8a8a8] text-sm leading-relaxed">
                    Help us personalize your LexaIntake dashboard for how you actually operate.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">Current audit process?</label>
                    <div className="flex flex-wrap gap-2">
                      {['Manual audit', 'Spot checks only', 'Outsourced', 'Random sampling', 'No audit'].map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            const current = formData.platforms;
                            if (current.includes(option)) {
                              setFormData({ ...formData, platforms: current.filter(p => p !== option) });
                            } else {
                              setFormData({ ...formData, platforms: [...current, option] });
                            }
                          }}
                          className={`px-4 py-2 rounded-full text-xs font-medium transition-all border ${formData.platforms.includes(option) ? 'bg-white text-black border-white' : 'bg-white/5 text-[#a8a8a8] border-white/10 hover:border-white/30'}`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">Monthly shipment volume?</label>
                    <div className="flex flex-wrap gap-2">
                      {['0-100', '100-500', '500-2,000', '2,000+'].map((option) => (
                        <button
                          key={option}
                          onClick={() => setFormData({ ...formData, audienceSize: option })}
                          className={`px-4 py-2 rounded-full text-xs font-medium transition-all border ${formData.audienceSize === option ? 'bg-white text-black border-white' : 'bg-white/5 text-[#a8a8a8] border-white/10 hover:border-white/30'}`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">What TMS do you use?</label>
                    <div className="flex flex-wrap gap-2">
                      {['McLeod', 'TMW', 'Aljex', 'Revenova', 'Other'].map((option) => (
                        <button
                          key={option}
                          onClick={() => setFormData({ ...formData, soldBefore: option })}
                          className={`px-4 py-2 rounded-full text-xs font-medium transition-all border ${formData.soldBefore === option ? 'bg-white text-black border-white' : 'bg-white/5 text-[#a8a8a8] border-white/10 hover:border-white/30'}`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button 
                      onClick={nextStep}
                      className="common-button common-button-primary w-full py-4 text-sm font-bold flex items-center justify-center gap-2 group"
                    >
                      Continue <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button 
                      onClick={nextStep}
                      className="w-full text-center mt-4 text-xs text-[#a8a8a8] hover:text-white transition-colors"
                    >
                      Skip for now
                    </button>
                  </div>
                </div>
                {renderStepIndicator()}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full max-w-md"
            >
              <div className="glass-card p-8 md:p-10 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="text-center mb-10">
                  <h1 className="common-title text-3xl md:text-4xl mb-3">We configure LexaIntake for you</h1>
                  <p className="text-[#a8a8a8] text-sm leading-relaxed">
                    We program LexaIntake with your business name, your TMS rules, your carrier preferences, and your exact email signature.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">Primary Email Signature</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Thank you for your inquiry, this is LexaIntake..."
                      value={formData.productName}
                      onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-[#a8a8a8]">Tone of voice</span>
                      <span className="text-xs text-white">Warm and professional</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-[#a8a8a8]">Routing</span>
                      <span className="text-xs text-white">Smart priority</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button 
                      onClick={nextStep}
                      className="common-button common-button-primary w-full py-4 text-sm font-bold flex items-center justify-center gap-2 group"
                    >
                      Process configuration <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button 
                      onClick={nextStep}
                      className="w-full text-center mt-4 text-xs text-[#a8a8a8] hover:text-white transition-colors"
                    >
                      Skip for now
                    </button>
                  </div>
                </div>
                {renderStepIndicator()}
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-md"
            >
              <div className="glass-card p-8 md:p-10 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl text-center">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Check className="w-10 h-10 text-green-500" />
                </div>
                <h1 className="common-title text-3xl md:text-4xl mb-4">Lexa goes live on your number 🎉</h1>
                <p className="text-[#a8a8a8] text-sm mb-10 leading-relaxed">
                  Congratulations! Your calls are now protected. Appointments book automatically, leads get followed up, and your calendar fills.
                </p>
                <button 
                  onClick={onComplete}
                  className="common-button common-button-primary w-full py-4 text-sm font-bold flex items-center justify-center gap-2 group"
                >
                  Go to my results <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="relative z-10 py-8 text-center text-[10px] text-[#a8a8a8] uppercase tracking-widest">
        © 2026 LexaIntake · All rights reserved
      </footer>
    </div>
  );
};

const Dashboard = ({ onLogout }: { onLogout: () => void }) => {
  const [activePage, setActivePage] = useState('Overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isPro = false;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [activePage]);

  const navItems = [
    { name: 'Overview', icon: Layout, pro: false },
    { name: 'Inboxes', icon: Mail, pro: false },
    { name: 'Audits', icon: FileText, pro: false },
    { name: 'Disputes', icon: AlertCircle, pro: false },
    { name: 'Settings', icon: Settings, pro: false },
  ];

  const renderProLock = (title: string, body: string) => (
    <div className="absolute inset-0 z-20 backdrop-blur-md bg-black/40 flex items-center justify-center p-6 rounded-3xl">
      <div className="glass-card p-8 max-w-sm w-full text-center border-blue-accent/20">
        <div className="w-12 h-12 bg-blue-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Zap className="w-6 h-6 text-blue-accent" />
        </div>
        <h3 className="common-title text-2xl mb-3">{title}</h3>
        <p className="text-white/50 text-sm mb-8 leading-relaxed">{body}</p>
        <button className="common-button common-button-primary w-full py-3 text-sm font-bold">
          Upgrade to Pro
        </button>
      </div>
    </div>
  );



  const renderOverview = () => (
    <div className="space-y-8">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Invoices Audited', value: '1,242', trend: '+14% this month', positive: true },
          { label: 'Overcharges Found', value: '$12,450', trend: '$2,100 this week', positive: true },
          { label: 'Carrier Disputes', value: '84', trend: '92% success rate', positive: true },
          { label: 'Margin Recovery', value: '$8,240', trend: '+8% vs last month', positive: true },
        ].map((stat, i) => (
          <div key={i} className="glass-card p-6 rounded-3xl relative overflow-hidden">
            {isLoading && <div className="absolute inset-0 animate-shimmer z-10" />}
            <div className="text-[10px] uppercase tracking-widest text-white/40 font-medium mb-2">{stat.label}</div>
            <div className="common-title text-3xl mb-2">{stat.value}</div>
            <div className={`text-[10px] font-medium ${stat.positive ? 'text-green-500' : 'text-white/30'}`}>
              {stat.trend}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Recent Sales */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="common-title text-2xl">Recent Activity</h2>
          </div>
          <div className="glass-card rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {[
                    { caller: 'Roadrunner Trans', type: 'Invoice audit', status: 'Dispute filed', time: '1 hour ago' },
                    { caller: 'Global Logistics', type: 'Inbox inquiry', status: 'Quote drafted', time: '2 hours ago' },
                    { caller: 'Estes Express', type: 'Billing error', status: 'Resolved', time: '4 hours ago' },
                    { caller: 'Old Dominion', type: 'Carrier risk check', status: 'Verified✓', time: '5 hours ago' },
                    { caller: 'XPO Logistics', type: 'Billing audit', status: 'Approved✓', time: '6 hours ago' },
                  ].map((call, i) => (
                    <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                      <td className="py-5 px-6 text-sm text-white/70">{call.caller}</td>
                      <td className="py-5 px-6 text-sm font-medium">{call.type}</td>
                      <td className="py-5 px-6 text-sm text-blue-accent text-right font-medium">{call.status}</td>
                      <td className="py-5 px-6 text-xs text-white/30 text-right">{call.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Quick Actions */}
          <section className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-white/40 font-medium ml-1">Quick Actions</h3>
            <div className="space-y-3">
              <button 
                className="common-button common-button-primary w-full py-4 text-sm font-bold"
              >
                <Plus className="w-4 h-4" /> Audit Invoice
              </button>
              <button className="common-button common-button-secondary-glass w-full py-4 text-sm font-bold">
                <FileText className="w-4 h-4" /> File Dispute
              </button>
            </div>
          </section>

          {/* Audit Trends */}
          <section className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-white/40 font-medium ml-1">Audit Trends</h3>
            <div className="glass-card p-6 rounded-3xl space-y-6">
              {[
                { name: 'Billing Overcharges', count: 42, percentage: 85 },
                { name: 'TMS Discrepancies', count: 31, percentage: 65 },
                { name: 'Accessorial Verification', count: 12, percentage: 35 },
              ].map((service, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium">{service.name}</span>
                    <span className="text-white/40">{service.count} leads</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-accent rounded-full" 
                      style={{ width: `${service.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white flex overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 w-[240px] bg-black border-r border-white/5 z-[120] flex flex-col transition-transform duration-300 lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-8">
          <div className="text-2xl font-title text-white mb-6">LexaIntake</div>
          <div className="h-px w-full bg-white/5 mb-8" />
            
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-full bg-blue-accent/10 flex items-center justify-center text-blue-accent font-bold text-sm">
              KW
            </div>
            <div className="min-w-0">
              <div className="text-sm font-medium truncate">Krishna W.</div>
              <div className="text-[10px] text-white/30 truncate">Atlas Logistics</div>
            </div>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setActivePage(item.name);
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all group ${activePage === item.name ? 'text-white border-l-2 border-blue-accent bg-blue-accent/[0.06]' : 'text-white/40 hover:text-white hover:bg-white/[0.02]'}`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className={`w-4 h-4 ${activePage === item.name ? 'text-blue-accent' : 'group-hover:text-white'}`} />
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
                {item.pro && !isPro && <span className="text-[9px] font-bold text-blue-accent tracking-widest uppercase">Pro</span>}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-6 space-y-4">
          <button className="common-button common-button-primary w-full py-3 text-xs font-bold">
            Upgrade to Pro
          </button>
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-2 text-white/40 hover:text-red-500 transition-colors text-sm font-medium"
          >
            <LogOut className="w-4 h-4" /> Log out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden relative">
        {/* Mobile Top Bar */}
        <header className="lg:hidden flex items-center justify-between p-6 border-b border-white/5 bg-black/80 backdrop-blur-md z-[100]">
          <div className="text-xl font-title">LexaIntake</div>
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 bg-white/5 rounded-lg">
            <Menu className="w-5 h-5" />
          </button>
        </header>

        {/* Page Top Bar */}
        <header className="p-8 lg:px-12 border-b border-white/5 flex items-center justify-between shrink-0">
          <div>
            <h1 className="common-title text-3xl">{activePage}</h1>
          </div>
          <div className="hidden sm:block">
            {activePage === 'Calls' && (
              <button className="common-button common-button-primary px-6 py-3 text-sm font-bold">
                <Plus className="w-4 h-4" /> Log Call
              </button>
            )}
          </div>
        </header>

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto p-8 lg:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
            >
              {activePage === 'Overview' && renderOverview()}
              {(activePage === 'Calls' || activePage === 'Bookings' || activePage === 'Reviews' || activePage === 'Settings') && (
                <div className="h-[60vh] flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center">
                    <Layout className="w-8 h-8 text-blue-accent opacity-20" />
                  </div>
                  <div>
                    <h3 className="text-xl font-title text-white">{activePage} Feed</h3>
                    <p className="text-sm text-white/30 max-w-xs mx-auto">Your live {activePage.toLowerCase()} data from Lexa will appear here.</p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [view, setView] = useState<'landing' | 'login' | 'signup' | 'onboarding' | 'dashboard' | 'call' | 'privacy' | 'terms' | 'talk-to-lexa'>('landing');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  if (view === 'login' || view === 'signup') {
    return <AuthPage initialMode={view} onBack={() => setView('landing')} onComplete={() => setView('onboarding')} />;
  }

  if (view === 'onboarding') {
    return <OnboardingFlow onComplete={() => setView('dashboard')} />;
  }

  if (view === 'dashboard') {
    return <Dashboard onLogout={() => setView('landing')} />;
  }

  if (view === 'call') {
    return (
      <div className="min-h-screen bg-black text-white selection:bg-[#e0e0e0] selection:text-black flex flex-col relative overflow-hidden">
        <Header onNavigate={setView} simple={true} />
        {/* Background glow to match homepage */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-accent/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

        <main className="flex-1 flex flex-col items-center justify-center relative z-10 px-6 mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center w-full max-w-2xl"
          >
            <div className="space-y-12">
              <div className="space-y-4">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-accent">Experience the Lexa Voice Layer</p>
                <h1 className="common-title text-5xl lg:text-7xl tracking-tight text-white !leading-tight">
                  Live Agent Demo
                </h1>
              </div>

              <div className="space-y-4 text-xl md:text-2xl text-[#a8a8a8] font-title">
                <p>Call this number from your phone</p>
                <p>Lexa will answer within one ring</p>
                <p>Experience exactly what potential clients will hear</p>
              </div>

              <p className="text-sm text-white/30">This is a live demo. No sign-up required.</p>

              <div className="pt-8 flex justify-center">
                <button 
                  onClick={() => window.location.href = 'tel:+17743151065'}
                  className="common-button common-button-primary px-8 py-4 text-base font-bold flex items-center gap-2 shadow-[0_0_30px_rgba(43,108,255,0.4)]"
                >
                  Call Lexa Now
                </button>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    );
  }

  if (view === 'privacy') {
    return (
      <div className="min-h-screen bg-black selection:bg-[#e0e0e0] selection:text-black flex flex-col relative overflow-hidden text-white">
        <Header onNavigate={setView} simple={true} />
        <div className="flex-1 mt-20">
          <PrivacyPolicy onBack={() => setView('landing')} />
        </div>
        <Footer onNavigate={setView} />
      </div>
    );
  }

  if (view === 'terms') {
    return (
      <div className="min-h-screen bg-black selection:bg-[#e0e0e0] selection:text-black flex flex-col relative overflow-hidden text-white">
        <Header onNavigate={setView} simple={true} />
        <div className="flex-1 mt-20">
          <TermsConditions onBack={() => setView('landing')} />
        </div>
        <Footer onNavigate={setView} />
      </div>
    );
  }

  if (view === 'talk-to-lexa') {
    return (
      <div className="min-h-screen bg-black selection:bg-[#e0e0e0] selection:text-black flex flex-col relative overflow-hidden text-white">
        <Header onNavigate={setView} simple={true} />
        <div className="flex-1 mt-20">
          <TalkToLexaPage onBack={() => setView('landing')} />
        </div>
        <Footer onNavigate={setView} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black selection:bg-[#e0e0e0] selection:text-black">
      <Header onNavigate={setView} />
        
      <main className="relative z-10">
        <Hero onNavigate={setView} />
        <LiveDemoSection onNavigate={setView} />
        <Customers />
        <Why />
        <Solutions />
        <Features />
        <Integrations />
        <CaseStudies />

        {/* Comparison Table Section */}
        <section className="py-24 bg-black text-white border-t border-white/5">
          <div className="page-wrapper">
            <div className="text-center mb-16">
              <h2 className="common-title text-4xl md:text-6xl mb-4 leading-tight">LexaIntake vs A Human Auditor vs Sample Auditing</h2>
              <p className="text-lg md:text-2xl text-white/40 font-title italic">Here is what you are actually choosing between.</p>
            </div>
            
            <div className="glass-card bg-white/5 border border-white/10 rounded-[32px] overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="p-6 md:p-8"></th>
                      <th className="p-6 md:p-8 bg-[#2b6dff]/10 text-[#2b6dff] font-bold">LexaIntake</th>
                      <th className="p-6 md:p-8 text-white/60">Human Auditor</th>
                      <th className="p-6 md:p-8 text-white/60">Random Sampling</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { label: "Audits 100% of invoices", Lexa: "✓", human: "✗ (10-20%)", voice: "✗ (Random only)" },
                      { label: "Cost per month", Lexa: "$497", human: "$4,000–$6,000", voice: "Lost margin" },
                      { label: "Detects overcharges instantly", Lexa: "✓", human: "✓", voice: "✗" },
                      { label: "Drafts carrier disputes", Lexa: "✓", human: "✓", voice: "✗" },
                      { label: "Monitors inbox 24/7", Lexa: "✓", human: "✗", voice: "✗" },
                      { label: "Carrier risk verification", Lexa: "✓", human: "✓", voice: "✗" },
                      { label: "Works weekends & holidays", Lexa: "✓", human: "✗", voice: "✗" },
                      { label: "Sick days", Lexa: "Never", human: "Yes", voice: "N/A" },
                      { label: "Setup time", Lexa: "1-2 days", human: "Weeks of hiring", voice: "Already set up" },
                      { label: "Sends monthly reports", Lexa: "✓", human: "✗", voice: "✗" }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="p-6 md:p-8 text-white font-medium">{row.label}</td>
                        <td className="p-6 md:p-8 text-white bg-[#2b6dff]/5 font-bold">{row.Lexa}</td>
                        <td className="p-6 md:p-8 text-white/40">{row.human}</td>
                        <td className="p-6 md:p-8 text-white/40">{row.voice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-8 text-center text-white/40 text-sm">
              "LexaIntake does more than a full-time auditor at less than 15% of the cost."
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 bg-black text-white border-t border-white/5">
          <div className="page-wrapper">
            <div className="text-center mb-16">
              <h2 className="common-title text-4xl md:text-6xl mb-4 leading-tight">No surprises, no hidden fees.</h2>
              <p className="text-lg md:text-2xl text-white/40 font-title italic mb-4">Simple flat pricing. LexaIntake works harder the busier you get.</p>
              <p className="text-sm md:text-base text-white/40 italic">
                A human auditor costs $4,000 – $6,000 per month and works 8 hours a day.<br />
                LexaIntake costs a fraction of that and audits 100% of your invoices, 24/7/365.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Card 1: Starter */}
              <div className="glass-card bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-10 flex flex-col h-full transform hover:scale-[1.02] transition-all duration-300">
                <div className="mb-8">
                  <div className="text-[10px] uppercase tracking-widest font-mono text-white/40 mb-2">Starter</div>
                  <h3 className="text-white text-lg font-medium mb-4 italic">For small brokers</h3>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl md:text-5xl font-title font-bold text-white">$497</span>
                    <span className="text-white/40 text-sm">/mo</span>
                  </div>
                  <div className="text-xs text-white/40">up to 200 shipments/mo</div>
                </div>
                <div className="flex-1 space-y-4 mb-10 text-sm">
                  {[
                    { text: "100% Billing Audit Coverage", included: true },
                    { text: "TMS Integration (McLeod, etc.)", included: true },
                    { text: "Automated Dispute Drafting", included: true },
                    { text: "Inbox Monitoring 24/7", included: true },
                    { text: "Carrier Risk Verification", included: true },
                    { text: "Monthly Margin Report", included: true },
                    { text: "Email Support (24hr response)", included: true },
                    { text: "Dispute Agent (Growth plan)", included: false },
                    { text: "Exception Handling (Growth plan)", included: false },
                    { text: "Custom Agent Workflows (Enterprise)", included: false }
                  ].map((feat, i) => (
                    <div key={i} className={`flex items-start gap-3 ${feat.included ? 'text-white' : 'text-white/20'}`}>
                      <span className={`shrink-0 ${feat.included ? 'text-blue-accent' : 'text-white/10'}`}>{feat.included ? '✓' : '✗'}</span>
                      <span>{feat.text}</span>
                    </div>
                  ))}
                </div>
                <a href="https://cal.com/lexaintake/lexa-desk" className="common-button bg-white/5 border border-white/10 hover:border-white/30 text-white w-full py-4 text-sm font-bold mb-4 flex items-center justify-center">
                  Get started →
                </a>
                <div className="text-center text-[10px] text-white/40 font-mono tracking-widest">
                  NO CONTRACTS · CANCEL ANYTIME
                </div>
              </div>

              {/* Card 2: Growth */}
              <div className="glass-card bg-white/10 border-[#2b6dff]/30 rounded-[32px] p-8 md:p-10 flex flex-col h-full relative shadow-[0_0_80px_rgba(43,108,255,0.15)] ring-1 ring-white/10 scale-105 z-10">
                <div className="absolute top-6 right-6 bg-[#2b6dff] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
                <div className="mb-8">
                  <div className="text-[10px] uppercase tracking-widest font-mono text-blue-accent mb-2">Growth</div>
                  <h3 className="text-white text-lg font-medium mb-4 italic">Most popular for growing brokers</h3>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl md:text-5xl font-title font-bold text-white">$997</span>
                    <span className="text-white/40 text-sm">/mo</span>
                  </div>
                  <div className="text-xs text-white/40">up to 1,000 shipments/mo</div>
                </div>
                <div className="flex-1 space-y-4 mb-10 text-sm">
                  {[
                    { text: "Everything in Starter", included: true },
                    { text: "Full Dispute Agent (Auto-filing)", included: true },
                    { text: "Exception Handling Agent", included: true },
                    { text: "Source-of-Truth Validation Engine", included: true },
                    { text: "Quote Drafting Assistant", included: true },
                    { text: "Shipment Status Inbox Agent", included: true },
                    { text: "Priority Support (2hr response)", included: true },
                    { text: "Dedicated Audit Manager", included: true }
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 text-white">
                      <span className="shrink-0 text-blue-accent font-bold">✓</span>
                      <span>{feat.text}</span>
                    </div>
                  ))}
                </div>
                <a href="https://cal.com/lexaintake/lexa-desk" className="common-button common-button-primary w-full py-4 text-sm font-bold mb-4 shadow-[0_0_40px_rgba(43,108,255,0.4)] flex items-center justify-center">
                  Get started →
                </a>
                <div className="text-center text-[10px] text-white/40 font-mono tracking-widest">
                  NO CONTRACTS · CANCEL ANYTIME
                </div>
              </div>

              {/* Card 3: Pro */}
              <div className="glass-card bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-10 flex flex-col h-full transform hover:scale-[1.02] transition-all duration-300">
                <div className="mb-8">
                  <div className="text-[10px] uppercase tracking-widest font-mono text-white/40 mb-2">Enterprise</div>
                  <h3 className="text-white text-lg font-medium mb-4 italic">For large brokerage operations</h3>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl md:text-5xl font-title font-bold text-white">Custom</span>
                  </div>
                  <div className="text-xs text-white/40">unlimited shipments</div>
                </div>
                <div className="flex-1 space-y-4 mb-10 text-sm">
                  {[
                    { text: "Everything in Growth", included: true },
                    { text: "Multi-TMS & Branch Support", included: true },
                    { text: "Custom AI Agent Workflows", included: true },
                    { text: "White-labeled Audit Dashboard", included: true },
                    { text: "Advanced Compliance Reporting", included: true },
                    { text: "Dedicated Success Engineer", included: true },
                    { text: "SLA-backed Uptime & Accuracy", included: true },
                    { text: "Custom API Integrations", included: true }
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 text-white">
                      <span className="shrink-0 text-blue-accent font-bold">✓</span>
                      <span>{feat.text}</span>
                    </div>
                  ))}
                </div>
                <a href="mailto:sales@lexaintake.com" className="common-button bg-white/5 border border-white/10 hover:border-white/30 text-white w-full py-4 text-sm font-bold mb-4 flex items-center justify-center">
                  Contact Sales →
                </a>
                <div className="text-center text-[10px] text-white/40 font-mono tracking-widest">
                  ENTERPRISE SLA · CUSTOM TERMS
                </div>
              </div>
            </div>
          </div>
        </section>

        <Guarantee />
        <FAQ onNavigate={setView} />

        <section className="py-32 bg-black text-white">
          <div className="page-wrapper flex flex-col lg:flex-row items-end justify-between gap-12">
            <h2 className="common-title text-6xl lg:text-8xl flex-1">Get started with LexaIntake today.</h2>
            <div className="flex-1 flex flex-col items-start gap-4">
              <div className="flex gap-4 w-full">
                <a 
                  href="https://cal.com/lexaintake/lexa-desk"
                  className="common-button common-button-primary px-8 py-4 text-lg flex-1 flex items-center justify-center gap-2"
                >
                  Book a free 15 minutes call <ChevronRight className="w-4 h-4" />
                </a>
              </div>
              <div className="text-xs text-[#a8a8a8]">
                <span className="text-white font-medium">Quick setup process</span> · No contracts required
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer onNavigate={setView} />
    </div>
  );
}
