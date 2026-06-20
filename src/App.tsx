import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
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
        <section className="space-y-6">
          <h2 className="text-2xl text-white font-medium">What information we collect</h2>
          <p>
            When potential clients call a firm using EmmaDesk, we collect the information provided during the conversation. This typically includes the caller's name, phone number, accident or injury type, date of incident, insurance status, and any other case-related details they choose to share.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl text-white font-medium">How we use this information</h2>
          <p>
            This information is collected on behalf of the law firm client to qualify leads and book consultations. We use it strictly to provide our service — enabling Emma to intelligently handle the intake process and alert the firm to new opportunities.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl text-white font-medium">Data sharing and security</h2>
          <p>
            We do not sell your personal data or your callers' data to third parties. Access to call data is restricted to authorized firm personnel and EmmaDesk support staff when necessary for service maintenance. We implement industry-standard security measures to protect all stored information.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl text-white font-medium">Data deletion and requests</h2>
          <p>
            Law firms or individual callers can request the deletion of their data at any time. We process these requests promptly to ensure privacy and compliance.
          </p>
        </section>

        <section className="bg-white/5 border border-white/10 p-8 rounded-2xl">
          <p className="text-white font-medium mb-2">Questions about privacy?</p>
          <p className="text-sm">Contact us directly at <a href="mailto:support@emmadesk.xyz" className="text-blue-accent hover:underline">support@emmadesk.xyz</a></p>
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
        <section className="space-y-6">
          <h2 className="text-2xl text-white font-medium">Description of Service</h2>
          <p>
            EmmaDesk provides an AI-powered lead conversion service for personal injury law firms. This includes automated call answering, lead qualification, and consultation booking.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl text-white font-medium">No-Contract and Cancellation</h2>
          <p>
            EmmaDesk operates on a month-to-month basis with no long-term contracts. You can cancel your service at any time with 30 days' notice. Upon cancellation, your call data and lead history will be exported and sent to you.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl text-white font-medium">30-Day Money-Back Guarantee</h2>
          <p>
            If you do not see a measurable difference in your answered leads within the first 30 days of setup, we will refund your first month's fee in full. Our goal is centered on your firm's growth and success.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl text-white font-medium">Limitation of Liability</h2>
          <p>
            While Emma is highly accurate, EmmaDesk is not responsible for legal outcomes or case results. We provide a lead intake tool, and all final legal decisions and client representation remain the sole responsibility of the law firm.
          </p>
        </section>

        <section className="bg-white/5 border border-white/10 p-8 rounded-2xl">
          <p className="text-white font-medium mb-2">Questions about these terms?</p>
          <p className="text-sm">Contact us at <a href="mailto:support@emmadesk.xyz" className="text-blue-accent hover:underline">support@emmadesk.xyz</a></p>
        </section>
      </div>
    </div>
  </div>
);

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
            <span className="text-xl sm:text-2xl font-title text-white">EmmaDesk</span>
            {!simple && <ChevronRight className="w-4 h-4 text-white rotate-90 group-hover:-rotate-90 transition-transform hidden sm:block" />}
          </div>
        </div>

        {!simple && (
          <nav className="hidden lg:flex items-center gap-1">
            {['Why Emma', 'Features', 'Integrations', 'Results', 'Pricing'].map((item) => (
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
          <a 
            href="https://cal.com/emmadesk/emma-desk"
            className="common-button common-button-primary px-4 py-2 text-sm whitespace-nowrap"
          >
            Book a call
          </a>
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
            className="common-title text-5xl lg:text-7xl mb-6"
          >
            Meet Emma, the simplest way to never miss an injury lead again.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-[#a8a8a8] mb-8 max-w-lg leading-relaxed"
          >
            She answers your phone. Qualifies the case. Books the consultation. Runs your intake desk — automatically, professionally, every time.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-start gap-4"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://cal.com/emmadesk/emma-desk"
                className="common-button common-button-primary px-8 py-4 text-lg flex items-center gap-2 shadow-[0_0_30px_rgba(43,108,255,0.4)]"
              >
                Book a free 15-min call <ChevronRight className="w-5 h-5" />
              </a>
            </div>
            <div className="text-xs text-[#a8a8a8] font-medium pl-1">
              She qualifies leads 24/7. Call her right now — she is live.
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
              <div className="text-[10px] text-white/40 font-mono">EmmaDesk · Calls · Bookings · Reviews</div>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-blue-500" />
              <div>
                <div className="text-sm font-medium text-white">Anderson Injury Law</div>
                <div className="text-[10px] text-white/40">Calls · Bookings · Reviews</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium text-white">Car accident lead — Phoenix, AZ</div>
                  <div className="text-[10px] text-white/40">Booked ✓</div>
                </div>
                <button className="px-3 py-1 rounded-lg bg-white text-black text-[10px] font-bold">Details</button>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium text-white">Slip & fall lead — Dallas, TX</div>
                  <div className="text-[10px] text-white/40">Booked ✓</div>
                </div>
                <button className="px-3 py-1 rounded-lg bg-white text-black text-[10px] font-bold">Details</button>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
              <div className="text-[10px] text-white/40 uppercase tracking-widest">LEADS CAPTURED THIS MONTH</div>
              <div className="text-lg font-title text-white">91 <span className="text-[10px] font-sans opacity-40 font-normal">out of 94</span></div>
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
          <span className="font-medium text-[#d9f5fd]">Built to connect with the tools your firm already runs on</span>
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {['Clio', 'MyCase', 'Filevine', 'Google Local', 'Yelp', 'QuickBooks'].map((logo) => (
            <span key={logo} className="text-xl font-title text-white font-bold">{logo}</span>
          ))}
        </div>
      </div>
    </section>

    {/* Change 3: Results Number Bar */}
    <section className="py-12 bg-black border-y border-white/5">
      <div className="page-wrapper">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <div className="text-4xl md:text-5xl font-title font-bold text-white mb-2">94%</div>
            <div className="text-xs uppercase tracking-widest text-[#a8a8a8] font-medium">Lead capture rate</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-4xl md:text-5xl font-title font-bold text-white mb-2">48hrs</div>
            <div className="text-xs uppercase tracking-widest text-[#a8a8a8] font-medium">Average setup time</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-4xl md:text-5xl font-title font-bold text-white mb-2">0</div>
            <div className="text-xs uppercase tracking-widest text-[#a8a8a8] font-medium">Leads sent to voicemail</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-4xl md:text-5xl font-title font-bold text-white mb-2">60 days</div>
            <div className="text-xs uppercase tracking-widest text-[#a8a8a8] font-medium">Avg time to double reviews</div>
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
          $45,000.
        </h2>
        <p className="text-white text-xl md:text-2xl mt-6 max-w-3xl leading-relaxed font-light">
          Even 2-3 lost cases a month — at $15,000 to $20,000 in average attorney fees each — is $30,000 to $60,000 walking out the door. Most firms losing leads to slow response time lose more than that. Emma makes sure none of them get away.
        </p>
        <p className="text-base text-[#a8a8a8] mt-2 mb-6 italic text-xs">
          *Estimate based on industry data on personal injury lead response and conversion rates.
        </p>
        <p className="text-base text-[#a8a8a8] mt-6 italic">
          Emma answers every single one.
        </p>
      </div>

      {/* Change 4: Before vs After Section */}
      <div className="mb-32">
        <div className="text-center mb-16">
          <h2 className="common-title text-4xl md:text-6xl mb-4">Your day before Emma. Your day after Emma.</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Before Card */}
          <div className="glass-card bg-[#2a0a0a] border border-red-900/30 p-8 md:p-12 rounded-[32px]">
            <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-red-500/60 mb-8 font-bold">BEFORE EMMA</div>
            <div className="space-y-4">
              {[
                "Phone rings at 8pm. You're finishing a case.",
                "Goes to voicemail. Potential client hears a beep.",
                "They hang up and call your competitor.",
                "$15,000 case goes to someone else.",
                "You don't even know it happened.",
                "Repeat this 8 times a week.",
                "That's $45,000 gone every single month."
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4 text-white/80">
                  <span className="text-red-500 font-bold shrink-0 mt-1">✗</span>
                  <span className="text-lg md:text-xl font-light">{text}</span>
                </div>
              ))}
            </div>
          </div>
          {/* After Card */}
          <div className="glass-card bg-[#032b35] border border-blue- accent/20 p-8 md:p-12 rounded-[32px]">
            <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-blue-accent/60 mb-8 font-bold">AFTER EMMA</div>
            <div className="space-y-4">
              {[
                "Phone rings at 8pm. Emma picks up immediately.",
                "She greets them using your firm's name.",
                "She collects their details and books the intake.",
                "Potential client gets an instant confirmation text.",
                "You get an SMS alert with the booking details.",
                "$15,000 case is yours. While you finished the last one.",
                "Every single night. Every single weekend."
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
          { title: "Built for the solo and small PI firm.", desc: "Emma was designed for one type of practice. The attorney who is also the rainmaker — in depositions, in court, driving between client meetings. We handle the intake so you handle the cases." },
          { title: "Grounded in your signed retainers.", desc: "Every feature exists to get you more signed cases. Your leads, your consultations, your follow-ups — all handled while you are in the courtroom." },
          { title: "Engineered to protect your case pipeline.", desc: "Every missed call is a case going to a competitor firm. Emma stops that permanently. No hiring. No training. No missed leads — ever again." },
          { title: "Transparent by design.", desc: "See exactly how many leads Emma answered, how many consultations were booked, and how many reviews were collected — every single month in a clean report sent directly to you." }
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
        <span className="block">1 phone number.</span>
        <span className="block opacity-70">Every lead answered.</span>
        <span className="block opacity-40">Zero missed cases.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        {[
          { icon: <Monitor className="w-8 h-8 text-[#a8a8a8]" />, title: "One number. Every lead captured.", desc: "Emma answers from a single dedicated line. Every call your firm receives, answered within one ring, 24 hours a day." },
          { icon: <Layout className="w-8 h-8 text-[#a8a8a8]" />, title: "Instant consultation booking. Every time.", desc: "The second a potential client calls, Emma qualifies their case and books a consultation directly into your calendar. No manual steps. No missed opportunities." },
          { icon: <Share2 className="w-8 h-8 text-[#a8a8a8]" />, title: "Your reputation, growing automatically.", desc: "Every closed case triggers a one-click Google review request. Build your firm's reputation automatically without asking a single client yourself." }
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
          { label: "CALLING LAYER", title: "Twilio as your call layer.", desc: "Every call runs through a dedicated Twilio number configured for your firm. Reliable, professional, and live within 48 hours of setup.", img: "badge_security" },
          { label: "FOLLOW UP", title: "Every lead followed up automatically.", desc: "Callers who don't book enter a 3-message follow-up sequence over 5 days. Unsigned retainers get a 4-message sequence over 7 days. No case ever falls through the cracks.", img: "badge_compliance" },
          { label: "REPUTATION", title: "Reputation protected automatically.", desc: "Every closed case triggers a check-in. Unhappy clients are caught before they post publicly. You are alerted immediately and given 30 minutes to respond.", img: "badge_hosting" }
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
        <h2 className="common-title text-black text-3xl md:text-6xl mb-4 leading-tight">Everything your intake team should do. Handled.</h2>
        <p className="text-lg md:text-2xl text-black/40 font-title italic">Here is exactly how Emma works.</p>
      </div>

      <div className="relative flex flex-col gap-[60px] md:gap-[120px] pb-32">
        {[
          { color: "bg-[#2c150c]", title: "Answer every lead on every shift at once.", desc: "Emma covers mornings, evenings, weekends, and holidays — without overtime, without sick days, without training. Every potential client always reaches a live, professional voice no matter when they call." },
          { color: "bg-[#032b35]", title: "Turn every closed case into a five-star review.", desc: "The moment a case is closed, Emma sends the client a one-click Google review request. Two hours later she checks in to make sure everything went smoothly. Happy clients become your best referral source." },
          { color: "bg-[#1d2c0c]", title: "Emma is live in under 48 hours. No tech needed.", desc: "You give us your firm's details. We configure Emma completely. You touch zero technology. Within 48 hours your calls are being answered, leads are being qualified, and consultations are being booked." },
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

      {/* Change 9: How a call works visual step section */}
      <div className="py-24 border-t border-black/5">
        <div className="mb-20">
          <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#a8a8a8] mb-4 font-bold">WHAT HAPPENS ON EVERY SINGLE CALL.</div>
          <p className="text-xl text-black/40 font-title italic">From first ring to booked consultation in under 3 minutes.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { num: "01", title: "Your phone rings.", desc: "A potential client calls your existing number. It rings once at your firm and simultaneously routes to Emma as backup." },
            { num: "02", title: "Emma answers in your firm's name.", desc: "\"Thank you for calling Anderson Injury Law, this is Emma — are you calling about a recent accident or injury?\"" },
            { num: "03", title: "She qualifies the case and books the consultation.", desc: "Name, phone number, accident type, date of incident, injury details, insurance status — all collected in real time and booked directly into your calendar without you touching anything." },
            { num: "04", title: "You get an instant SMS alert.", desc: "You receive a text with the lead's full case details and consultation confirmation within 60 seconds. The case is yours. You never missed a thing." }
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
          { color: "bg-[#361e02]", title: "Accidents don't wait for business hours. Neither should your intake.", desc: "Car accidents happen at midnight. Slip and falls happen on Sundays. Workplace injuries happen on holidays. Emma makes sure you never miss a single lead. Not at 9pm. Not on Saturday. Not while you are in the middle of a deposition." },
          { color: "bg-[#2c150c]", title: "Reengage past clients on autopilot.", desc: "Every past client is automatically enrolled in a reengagement sequence. Emma periodically reaches out to ask if they have friends or family who need legal help. Referrals come in without you lifting a finger." },
          { color: "bg-[#032b35]", title: "See exactly how your intake is performing.", desc: "Track every lead answered, every consultation booked, every retainer signed, and every review collected. Your monthly report tells the full story so you always know what Emma is winning for you." },
          { color: "bg-[#1d2c0c]", title: "Your intake updates the moment you do.", desc: "Add a new practice area, change your consultation hours, update your intake questions — everything is adjusted in Emma instantly. No downtime, no re-training, no waiting. Changes go live immediately." }
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
      <h2 className="common-title text-5xl mb-4">Built for firms ready to stop losing leads.</h2>
      <p className="text-2xl text-white/50 font-title mb-20">We're currently running pilots with personal injury firms across Texas and Arizona. Here's what early results look like.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { 
            title: "Zero missed leads", 
            body: "Every pilot firm sees 100% of their inbound calls answered starting day one — no exceptions, no after-hours gaps."
          },
          { 
            title: "Live in 48 hours", 
            body: "No technical setup on your end. We configure Emma completely and she's answering calls within two business days."
          },
          { 
            title: "Cancel anytime", 
            body: "No contracts. If Emma doesn't perform, you walk away — we only keep clients who are seeing real results."
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
          <h2 className="common-title text-4xl md:text-6xl text-white mb-8">We stand behind every lead Emma answers.</h2>
          <p className="text-lg md:text-2xl text-white/80 leading-relaxed mb-12">
            If you set up Emma and do not see a measurable difference<br className="hidden md:block" />
            in your answered leads within the first 30 days —<br className="hidden md:block" />
            we will refund your first month. No paperwork. No argument.<br className="hidden md:block" />
            Just tell us and we will process it the same day.
          </p>
          <p className="text-lg md:text-2xl text-white/80 leading-relaxed mb-16">
            And if Emma ever misses a call due to a technical failure<br className="hidden md:block" />
            on our end — we credit that month's fee automatically.<br className="hidden md:block" />
            No questions asked.
          </p>
          <div className="text-xl md:text-3xl font-title text-white mb-16 italic opacity-80">We only win when you win.</div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/10">
            <div>
              <div className="text-3xl md:text-5xl font-title font-bold text-white mb-2">30 days</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Money-back guarantee</div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-title font-bold text-white mb-2">100%</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Call credit if we fail</div>
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
            onClick={() => window.location.href = 'mailto:rahul@emmadesk.xyz'}
            className="common-button common-button-primary px-6 py-3 text-sm flex items-center gap-2"
          >
            Ask us a question →
          </button>
        </div>

        <div className="lg:w-2/3 flex flex-col gap-12">
          {[
            { q: "How long does setup take?", a: "Most law firms are fully live within 48 hours. You provide your firm's details, we configure everything. You touch zero technology." },
            { q: "Will Emma sound robotic to potential clients?", a: "No. Call the demo number right now and hear for yourself. Emma sounds like a warm, professional intake specialist who has worked at your firm for years. Your potential clients will not know the difference." },
            { q: "Do I need any special equipment or phone system?", a: "No. Emma works with your existing phone number through a simple call forwarding setup. No new hardware. No apps to install. No technical knowledge needed." },
            { q: "What happens if Emma cannot answer a question?", a: "Emma collects the caller's name, number, and case details, then immediately sends you an SMS alert so you can call back when you are free. No lead is ever lost." },
            { q: "What happens if I want to cancel?", a: "No long-term contracts. Cancel anytime with 30 days notice. Your call data, client records, and booking history are exported and sent to you immediately. And if Emma ever misses a call due to a technical failure on our end — we credit that month's fee. No questions asked. We stand behind every call she answers." },
            { q: "What if potential clients don't want to talk to a machine?", a: "Call the demo line right now. Emma sounds human. Our clients regularly tell us their callers had no idea they were speaking to an AI. The only thing your leads care about is that someone answered — and Emma always does." }
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
        <h2 className="common-title text-black text-4xl md:text-6xl mb-6">Stop missing leads. Start signing more cases.</h2>
        <p className="text-xl text-black/50 mb-10 max-w-2xl mx-auto">Personal injury firms across the USA are setting up Emma to capture every lead — day or night. Early clients get locked-in pricing and priority setup.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="https://cal.com/emmadesk/emma-desk" className="common-button common-button-primary px-8 py-4 text-lg">Book a free 15-min call →</a>
        </div>
        <p className="mt-4 text-xs text-black/40">Free setup call · No contracts · Live in 48 hours</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mb-24">
        <div className="flex flex-col gap-4">
          <p className="font-bold text-sm uppercase tracking-widest text-black/30">Product</p>
          {['Why Emma', 'Features', 'Integrations'].map(item => (
            <a key={item} href="#" className="font-title text-2xl text-[#707070] hover:text-black transition-colors">{item}</a>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-sm uppercase tracking-widest text-black/30">Company</p>
          {['About', 'Results', 'Contact', 'Privacy Policy'].map(item => (
            <button 
              key={item} 
              onClick={() => {
                if (item === 'Privacy Policy') onNavigate?.('privacy');
                else if (item === 'Contact') window.location.href = 'mailto:rahul@emmadesk.xyz';
              }}
              className="font-title text-2xl text-[#707070] hover:text-black transition-colors text-left"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-[#707070] text-sm">Have questions?</p>
          <a href="mailto:rahul@emmadesk.xyz" className="common-button bg-[#ebebeb] text-black px-6 py-3 text-sm flex items-center justify-between w-full">
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
          <div>© 2025 EmmaDesk AI. All rights reserved.</div>
        </div>
        <div className="text-[15vw] font-title text-black/5 leading-none text-center select-none">EmmaDesk</div>
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
              📞 Live Call — Anderson Injury Law — 9:47 PM
            </div>
            <div className="space-y-4 flex flex-col">
              <div className="bg-white/10 text-white rounded-2xl rounded-tl-sm p-4 text-sm w-[85%] self-start">
                Caller: "Hi yeah I was just in a car <br/>
                accident on the 101, I don't know <br/>
                 what to do and I'm in a lot of pain"
              </div>
              <div className="bg-[#2b6dff] text-white rounded-2xl rounded-tr-sm p-4 text-sm w-[85%] self-end">
                Emma: "I'm so sorry you're going through <br/>
                this — let's get you the help you need. <br/>
                Can I get your name and the best <br/>
                number for an attorney to call you?"
              </div>
              <div className="bg-white/10 text-white rounded-2xl rounded-tl-sm p-4 text-sm w-[85%] self-start">
                Caller: "Yeah it's Sarah Miller, <br/>
                my number is 602-555-0184"
              </div>
              <div className="bg-[#2b6dff] text-white rounded-2xl rounded-tr-sm p-4 text-sm w-[85%] self-end">
                Emma: "Thank you Sarah. I've got a consultation <br/>
                scheduled for you tomorrow at 10 AM. <br/>
                You'll get a confirmation text right now."
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-center">
              <p className="text-[10px] text-[#a8a8a8] leading-relaxed">
                This is Emma. This is what your <br/>
                potential clients hear. Every call. Every night.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="common-title text-4xl mb-4">This is what your potential clients hear.</h2>
          <p className="text-lg text-[#a8a8a8] leading-relaxed mb-8">
            Emma answers exactly like this — warm, <br />
            professional, and calm — whether it is <br />
            9 in the morning or 11 at night. <br />
            Your potential clients never reach voicemail. <br />
            Your competitors never get the case.
          </p>
          <a 
            href="https://cal.com/emmadesk/emma-desk"
            className="common-button common-button-primary px-8 py-4 text-lg flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(43,108,255,0.4)]"
          >
            Book a free 15-min call <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Integrations = () => (
  <section id="integrations" className="py-24 bg-black text-white border-t border-white/5">
    <div className="page-wrapper">
      <div className="text-center mb-20">
        <h2 className="common-title text-5xl mb-4">Works with the tools your firm already runs on.</h2>
        <p className="text-xl text-white/60">Connect your existing calendar and case management system. Everything is configured for you.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { name: "Google", desc: "Reviews collected automatically" },
          { name: "iPhone", desc: "Works with your existing number" },
          { name: "Google Calendar", desc: "Appointments booked in real time" },
          { name: "Clio", desc: "Syncs with your case management" },
          { name: "MyCase", desc: "Connects to your existing workflow" },
          { name: "Filevine", desc: "Review requests sent after every case" },
          { name: "Android", desc: "Works with your existing number" },
          { name: "Zapier", desc: "Automate anything" }
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'signup') {
      onComplete();
    } else {
      // For demo, login also goes to onboarding if first time, but here we just complete
      onComplete();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#ff007f]/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#0070f3]/10 blur-[120px] rounded-full" />
      </div>

      <header className="relative z-10 py-8 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={onBack}>
          <span className="text-2xl font-title text-white">EmmaDesk</span>
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
          className="w-full max-w-md"
        >
          <div className="glass-card p-8 md:p-10 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="text-center mb-10">
              <h1 className="common-title text-3xl md:text-4xl mb-3">
                {mode === 'login' ? 'Welcome back' : 'Create your account'}
              </h1>
              <p className="text-[#a8a8a8] text-sm">
                {mode === 'login' 
                  ? "Don't have an account? " 
                  : "Already have an account? "}
                <button 
                  onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                  className="text-white hover:underline font-medium"
                >
                  {mode === 'login' ? 'Sign up' : 'Log in'}
                </button>
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {mode === 'signup' && (
                <div className="space-y-2">
                  <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
              )}
              <div className="space-y-2">
                <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider">Password</label>
                  {mode === 'login' && (
                    <button className="text-[10px] text-[#a8a8a8] hover:text-white uppercase tracking-wider">Forgot password?</button>
                  )}
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>

              <button className="common-button common-button-primary w-full py-4 text-sm font-bold flex items-center justify-center gap-2 group">
                {mode === 'login' ? 'Log in' : 'Create account'}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="relative my-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-black px-4 text-[#a8a8a8] tracking-widest">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl py-3 hover:bg-white/10 transition-colors text-sm font-medium">
                <Globe className="w-4 h-4" /> Google
              </button>
              <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl py-3 hover:bg-white/10 transition-colors text-sm font-medium">
                <Share2 className="w-4 h-4" /> SSO
              </button>
            </div>
          </div>

          <p className="text-center mt-8 text-[10px] text-[#a8a8a8] uppercase tracking-widest leading-relaxed">
            By continuing, you agree to EmmaDesk's <br />
            <a href="#" className="text-white hover:underline">Terms of Service</a> and <a href="#" className="text-white hover:underline">Privacy Policy</a>.
          </p>
        </motion.div>
      </main>

      <footer className="relative z-10 py-8 text-center text-[10px] text-[#a8a8a8] uppercase tracking-widest">
        © 2025 EmmaDesk · All rights reserved
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
          <span className="text-2xl font-title text-white">EmmaDesk</span>
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
                    Share your firm's name, practice areas, hours, and jurisdictions you handle. We use this to configure Emma specifically for your law firm.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">Business Name</label>
                    <input 
                      type="text" 
                      placeholder="Anderson Injury Law"
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
                    <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">Daily call volume estimate?</label>
                    <div className="flex flex-wrap gap-2">
                      {['1-5 calls', '5-15 calls', '15-50 calls', '50+ calls'].map((option) => (
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
                  <h1 className="common-title text-3xl md:text-4xl mb-3">How do you handle calls currently?</h1>
                  <p className="text-[#a8a8a8] text-sm leading-relaxed">
                    Help us personalize your EmmaDesk dashboard for how you actually operate.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">Current phone setup?</label>
                    <div className="flex flex-wrap gap-2">
                      {['I answer myself', 'Voicemail only', 'Office manager', 'Answering service', 'Direct to cell'].map((option) => (
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
                    <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">Service area range?</label>
                    <div className="flex flex-wrap gap-2">
                      {['Local (10mi)', 'Medium (25mi)', 'Wide (50mi+)', 'Statewide'].map((option) => (
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
                    <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">Do you use scheduling software?</label>
                    <div className="flex flex-wrap gap-2">
                      {['Clio', 'Casepeer', 'MyCase', 'Google Calendar', 'Paper/Pen'].map((option) => (
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
                  <h1 className="common-title text-3xl md:text-4xl mb-3">We configure Emma for you</h1>
                  <p className="text-[#a8a8a8] text-sm leading-relaxed">
                    We program Emma with your business name, your services, your pricing, your calendar, and your exact greeting.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-[#a8a8a8] uppercase tracking-wider ml-1">Primary Greeting</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Thank you for calling Anderson Injury Law, this is Emma..."
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
                <h1 className="common-title text-3xl md:text-4xl mb-4">Emma goes live on your number 🎉</h1>
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
        © 2025 EmmaDesk · All rights reserved
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
    { name: 'Calls', icon: Phone, pro: false },
    { name: 'Bookings', icon: Calendar, pro: false },
    { name: 'Reviews', icon: Star, pro: false },
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
          { label: 'Cases Booked', value: '42', trend: '+14 cases this month', positive: true },
          { label: 'Calls Answered', value: '94', trend: '0 missed this week', positive: true },
          { label: 'Review Rating', value: '4.9', trend: '+12 new reviews', positive: true },
          { label: 'Response Rate', value: '100%', trend: 'Avg 0.8s response', positive: true },
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
            <h2 className="common-title text-2xl">Recent Calls</h2>
          </div>
          <div className="glass-card rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {[
                    { caller: 'Mike J.', type: 'Emergency AC repair', status: 'Booked✓', time: '2 mins ago' },
                    { caller: 'Sarah C.', type: 'Maintenance check-up', status: 'Booked✓', time: '14 mins ago' },
                    { caller: 'Tom B.', type: 'New case inquiry', status: 'Follow-up sent', time: '1 hour ago' },
                    { caller: 'John D.', type: 'Car accident claim', status: 'Booked✓', time: '3 hours ago' },
                    { caller: 'Lisa M.', type: 'Filter replacement', status: 'Booked✓', time: '5 hours ago' },
                    { caller: 'Sam R.', type: 'Car accident', status: 'Booked✓', time: '6 hours ago' },
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
                <Plus className="w-4 h-4" /> Book New Case
              </button>
              <button className="common-button common-button-secondary-glass w-full py-4 text-sm font-bold">
                <ExternalLink className="w-4 h-4" /> View Public Profile
              </button>
            </div>
          </section>

          {/* Service Trends */}
          <section className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-white/40 font-medium ml-1">Service Trends</h3>
            <div className="glass-card p-6 rounded-3xl space-y-6">
              {[
                { name: 'Emergency Repair', count: 42, percentage: 85 },
                { name: 'Seasonal Maintenance', count: 31, percentage: 65 },
                { name: 'System Installation', count: 12, percentage: 35 },
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
          <div className="text-2xl font-title text-white mb-6">EmmaDesk</div>
          <div className="h-px w-full bg-white/5 mb-8" />
            
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-full bg-blue-accent/10 flex items-center justify-center text-blue-accent font-bold text-sm">
              KW
            </div>
            <div className="min-w-0">
              <div className="text-sm font-medium truncate">Krishna W.</div>
              <div className="text-[10px] text-white/30 truncate">Anderson Injury Law</div>
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
          <div className="text-xl font-title">EmmaDesk</div>
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
                    <p className="text-sm text-white/30 max-w-xs mx-auto">Your live {activePage.toLowerCase()} data from Emma will appear here.</p>
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
  const [view, setView] = useState<'landing' | 'login' | 'signup' | 'onboarding' | 'dashboard' | 'call' | 'privacy' | 'terms'>('landing');

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
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-accent">Talk to Emma right now</p>
                <h1 className="common-title text-5xl lg:text-7xl tracking-tight text-white !leading-tight">
                  +1 7743151065
                </h1>
              </div>

              <div className="space-y-4 text-xl md:text-2xl text-[#a8a8a8] font-title">
                <p>Call this number from your phone</p>
                <p>Emma will answer within one ring</p>
                <p>Experience exactly what potential clients will hear</p>
              </div>

              <p className="text-sm text-white/30">This is a live demo. No sign-up required.</p>

              <div className="pt-8 flex justify-center">
                <button 
                  onClick={() => window.location.href = 'tel:+17743151065'}
                  className="common-button common-button-primary px-8 py-4 text-base font-bold flex items-center gap-2 shadow-[0_0_30px_rgba(43,108,255,0.4)]"
                >
                  Call Emma Now
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

        {/* Change 5: Comparison Table Section */}
        <section className="py-24 bg-black text-white border-t border-white/5">
          <div className="page-wrapper">
            <div className="text-center mb-16">
              <h2 className="common-title text-4xl md:text-6xl mb-4 leading-tight">Emma vs An Intake Specialist vs Voicemail</h2>
              <p className="text-lg md:text-2xl text-white/40 font-title italic">Here is what you are actually choosing between.</p>
            </div>
            
            <div className="glass-card bg-white/5 border border-white/10 rounded-[32px] overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="p-6 md:p-8"></th>
                      <th className="p-6 md:p-8 bg-[#2b6dff]/10 text-[#2b6dff] font-bold">Emma</th>
                      <th className="p-6 md:p-8 text-white/60">Human Intake Specialist</th>
                      <th className="p-6 md:p-8 text-white/60">Just Voicemail</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { label: "Answers calls 24/7", emma: "✓", human: "✗ (8hrs only)", voice: "✗" },
                      { label: "Cost per month", emma: "$297", human: "$2,500–$3,500", voice: "$0 (but costs cases)" },
                      { label: "Qualifies leads & books consultations", emma: "✓", human: "✓", voice: "✗" },
                      { label: "Follows up on potential clients", emma: "✓", human: "✗", voice: "✗" },
                      { label: "Requests Google reviews", emma: "✓", human: "✗", voice: "✗" },
                      { label: "Consultation reminders", emma: "✓", human: "✗", voice: "✗" },
                      { label: "Works weekends & holidays", emma: "✓", human: "✗", voice: "✗" },
                      { label: "Sick days", emma: "Never", human: "Yes", voice: "N/A" },
                      { label: "Setup time", emma: "48 hours", human: "Weeks of hiring", voice: "Already set up" },
                      { label: "Sends monthly reports", emma: "✓", human: "✗", voice: "✗" }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="p-6 md:p-8 text-white font-medium">{row.label}</td>
                        <td className="p-6 md:p-8 text-white bg-[#2b6dff]/5 font-bold">{row.emma}</td>
                        <td className="p-6 md:p-8 text-white/40">{row.human}</td>
                        <td className="p-6 md:p-8 text-white/40">{row.voice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-8 text-center text-white/40 text-sm">
              "Emma does more than a full-time intake specialist at less than 10% of the cost."
            </div>
          </div>
        </section>

        {/* Change 6: Pricing Section */}
        <section id="pricing" className="py-24 bg-black text-white border-t border-white/5">
          <div className="page-wrapper">
            <div className="text-center mb-16">
              <h2 className="common-title text-4xl md:text-6xl mb-4 leading-tight">No surprises, no hidden fees.</h2>
              <p className="text-lg md:text-2xl text-white/40 font-title italic mb-4">Simple flat pricing. Emma works harder the busier you get.</p>
              <p className="text-sm md:text-base text-white/40 italic">
                A human intake specialist costs $2,500 – $3,500 per month and works 8 hours a day.<br />
                Emma costs a fraction of that and works 24 hours a day, 7 days a week, 365 days a year.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Card 1: Starter */}
              <div className="glass-card bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-10 flex flex-col h-full transform hover:scale-[1.02] transition-all duration-300">
                <div className="mb-8">
                  <div className="text-[10px] uppercase tracking-widest font-mono text-white/40 mb-2">Starter</div>
                  <h3 className="text-white text-lg font-medium mb-4 italic">For solo practitioners</h3>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl md:text-5xl font-title font-bold text-white">$297</span>
                    <span className="text-white/40 text-sm">/mo</span>
                  </div>
                  <div className="text-xs text-white/40">everything included</div>
                </div>
                <div className="flex-1 space-y-4 mb-10 text-sm">
                  {[
                    { text: "Emma answers all inbound calls 24/7", included: true },
                    { text: "Consultation booking into your calendar", included: true },
                    { text: "Missed call text back within 60 seconds", included: true },
                    { text: "Consultation confirmation SMS and email", included: true },
                    { text: "24hr and 2hr no-show reminder sequence", included: true },
                    { text: "Google review request after every closed case", included: true },
                    { text: "Monthly performance report", included: true },
                    { text: "Lead follow-up sequences (Growth plan)", included: false },
                    { text: "Unsigned retainer follow-up (Growth plan)", included: false },
                    { text: "Referral outreach campaigns (Growth plan)", included: false }
                  ].map((feat, i) => (
                    <div key={i} className={`flex items-start gap-3 ${feat.included ? 'text-white' : 'text-white/20'}`}>
                      <span className={`shrink-0 ${feat.included ? 'text-blue-accent' : 'text-white/10'}`}>{feat.included ? '✓' : '✗'}</span>
                      <span>{feat.text}</span>
                    </div>
                  ))}
                </div>
                <a href="https://cal.com/emmadesk/emma-desk" className="common-button bg-white/5 border border-white/10 hover:border-white/30 text-white w-full py-4 text-sm font-bold mb-4 flex items-center justify-center">
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
                  <h3 className="text-white text-lg font-medium mb-4 italic">Most popular for growing PI firms</h3>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl md:text-5xl font-title font-bold text-white">$497</span>
                    <span className="text-white/40 text-sm">/mo</span>
                  </div>
                  <div className="text-xs text-white/40">everything included</div>
                </div>
                <div className="flex-1 space-y-4 mb-10 text-sm">
                  {[
                    { text: "Everything in Starter", included: true },
                    { text: "3-message lead follow-up sequence over 5 days", included: true },
                    { text: "4-message unsigned retainer follow-up over 7 days", included: true },
                    { text: "Case status check-in SMS to every client", included: true },
                    { text: "Reputation protection — catches bad reviews early", included: true },
                    { text: "Legal service upsell after closed cases", included: true },
                    { text: "Referral outreach campaigns spring and fall", included: true },
                    { text: "Priority setup and support", included: true }
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 text-white">
                      <span className="shrink-0 text-blue-accent font-bold">✓</span>
                      <span>{feat.text}</span>
                    </div>
                  ))}
                </div>
                <a href="https://cal.com/emmadesk/emma-desk" className="common-button common-button-primary w-full py-4 text-sm font-bold mb-4 shadow-[0_0_40px_rgba(43,108,255,0.4)] flex items-center justify-center">
                  Get started →
                </a>
                <div className="text-center text-[10px] text-white/40 font-mono tracking-widest">
                  NO CONTRACTS · CANCEL ANYTIME
                </div>
              </div>

              {/* Card 3: Pro */}
              <div className="glass-card bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-10 flex flex-col h-full transform hover:scale-[1.02] transition-all duration-300">
                <div className="mb-8">
                  <div className="text-[10px] uppercase tracking-widest font-mono text-white/40 mb-2">Pro</div>
                  <h3 className="text-white text-lg font-medium mb-4 italic">For established personal injury firms</h3>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl md:text-5xl font-title font-bold text-white">$797</span>
                    <span className="text-white/40 text-sm">/mo</span>
                  </div>
                  <div className="text-xs text-white/40">everything included</div>
                </div>
                <div className="flex-1 space-y-4 mb-10 text-sm">
                  {[
                    { text: "Everything in Growth", included: true },
                    { text: "Multi-attorney scheduling support", included: true },
                    { text: "Custom Emma voice and greeting", included: true },
                    { text: "Advanced monthly analytics dashboard", included: true },
                    { text: "Dedicated account manager", included: true },
                    { text: "Priority phone support", included: true },
                    { text: "Early access to new Emma features", included: true },
                    { text: "Setup for multiple jurisdictions", included: true }
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 text-white">
                      <span className="shrink-0 text-blue-accent font-bold">✓</span>
                      <span>{feat.text}</span>
                    </div>
                  ))}
                </div>
                <a href="https://cal.com/emmadesk/emma-desk" className="common-button bg-white/5 border border-white/10 hover:border-white/30 text-white w-full py-4 text-sm font-bold mb-4 flex items-center justify-center">
                  Get started →
                </a>
                <div className="text-center text-[10px] text-white/40 font-mono tracking-widest">
                  NO CONTRACTS · CANCEL ANYTIME
                </div>
              </div>
            </div>
          </div>
        </section>

        <Guarantee />
        <FAQ onNavigate={setView} />

        <section className="py-32 bg-black text-white">
          <div className="page-wrapper flex flex-col lg:flex-row items-end justify-between gap-12">
            <h2 className="common-title text-6xl lg:text-8xl flex-1">Get started with EmmaDesk today.</h2>
            <div className="flex-1 flex flex-col items-start gap-4">
              <div className="flex gap-4 w-full">
                <a 
                  href="https://cal.com/emmadesk/emma-desk"
                  className="common-button common-button-primary px-8 py-4 text-lg flex-1 flex items-center justify-center gap-2"
                >
                  Book a free 15 minutes call <ChevronRight className="w-4 h-4" />
                </a>
              </div>
              <div className="text-xs text-[#a8a8a8]">
                <span className="text-white font-medium">Live in 48 hours</span> · No contracts required
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer onNavigate={setView} />
    </div>
  );
}
