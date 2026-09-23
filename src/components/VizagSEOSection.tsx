import React, { useState } from 'react';
import {
  Globe,
  MapPin,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Smartphone,
  MessageSquare,
  HelpCircle,
  ChevronDown,
  Building2,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { NavTab } from './Navbar';

interface VizagSEOSectionProps {
  onStartJourney: (serviceName?: string) => void;
  onNavigate: (tab: NavTab) => void;
}

export const VizagSEOSection: React.FC<VizagSEOSectionProps> = ({
  onStartJourney,
  onNavigate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const businessTypes = [
    {
      title: 'Retail & Local Shops',
      locations: 'Jagadamba, Gajuwaka & Kurmannapalem',
      benefit: 'Product catalogs, Google Maps ranking, and WhatsApp order placement directly from customers in Vizag.',
      deliverable: '1-3 Custom Pages + WhatsApp Store Catalog + Local Maps Pin',
      price: '₹2,999',
    },
    {
      title: 'Cafes & Restaurants',
      locations: 'Siripuram, RK Beach & Rushikonda',
      benefit: 'Digital QR menus, instant location navigation on Google Maps, and food order inquiries via WhatsApp.',
      deliverable: 'Visual Menu Showcase + Location Directions + Review Booster',
      price: '₹2,999',
    },
    {
      title: 'Clinics & Healthcare',
      locations: 'MVP Colony, Dwaraka Nagar & Maharanipeta',
      benefit: 'Appointment scheduling buttons, doctor profiles, patient trust badges, and click-to-call integration.',
      deliverable: 'Appointment Lead Form + Doctor Profiles + Local NAP SEO',
      price: '₹2,999',
    },
    {
      title: 'Real Estate & Builders',
      locations: 'Madhurawada, Kommadi & Anandapuram',
      benefit: 'High-resolution property project showcases, floor plans, and instant WhatsApp inquiry capture.',
      deliverable: 'Project Gallery + Floor Plan Viewer + Lead WhatsApp Funnel',
      price: '₹2,999',
    },
    {
      title: 'Services & Startups',
      locations: 'IT SEZ Rushikonda & Visakhapatnam City',
      benefit: 'Sleek portfolio, service tiers, client testimonials, and fast mobile-first lead generation.',
      deliverable: 'Service Tier Breakdown + Fast Speed (98+ score) + Analytics',
      price: '₹2,999',
    },
  ];

  const currentBiz = businessTypes[selectedCategory];

  const vizagFaqs = [
    {
      q: 'Can I genuinely get a professional business website under ₹3,000 in Vizag?',
      a: 'Yes, absolutely. At ByteX Media, our Starter Business Website package is exactly ₹2,999. Unlike traditional agencies that charge ₹15,000 to ₹25,000 with huge markups, we are an agile, student-led engineering collective in Visakhapatnam. We build lightweight, high-performance websites with clean code, sub-second speeds, and zero agency overhead.',
    },
    {
      q: 'What is included in the ₹2,999 website package for Vizag businesses?',
      a: 'The ₹2,999 package includes: 1 to 3 fully custom, mobile-responsive pages, 1-click WhatsApp customer chat button, Google Maps location embed, on-page SEO meta tags for Vizag search ranking, SSL security configuration, contact/inquiry forms, and 100% full source code and asset ownership.',
    },
    {
      q: 'Will my ₹2,999 website rank on Google Search when customers in Vizag search for my business?',
      a: 'Yes. Every website we build is structured with semantic HTML5, localized Schema.org structured data, fast loading speeds (Core Web Vitals compliant), and clean NAP (Name, Address, Phone) metadata targeted specifically at Visakhapatnam (Vizag) and your local neighborhood.',
    },
    {
      q: 'How fast will my website be delivered after ordering in Vizag?',
      a: 'We deliver your initial live staging prototype within 3 to 5 business days. Once you approve the design and copy, we connect your domain and launch the site live immediately.',
    },
    {
      q: 'Do you help with domain names (.in / .com) and hosting setup?',
      a: 'Yes! We guide you step-by-step to register your domain directly in your own name (cost ~₹499 to ₹899/year directly at registrar cost). We also set up ultra-fast cloud hosting with free SSL, ensuring you have 100% ownership with zero hidden vendor lock-in.',
    },
    {
      q: 'Which areas of Visakhapatnam (Vizag) do you serve?',
      a: 'We serve all commercial zones across Visakhapatnam, including Dwaraka Nagar, MVP Colony, Siripuram, Madhurawada, Gajuwaka, Rushikonda, Kurmannapalem, Jagadamba Centre, Seethammadhara, Akkayyapalem, and Pendurthi, as well as clients pan-India.',
    },
  ];

  const handleWhatsAppBooking = (typeTitle: string) => {
    const text = encodeURIComponent(
      `Hello ByteX Media Team! I found you on Google searching for "Websites under 3000 in Vizag". I am interested in the ₹2,999 website package for my business (${typeTitle}). Please share the onboarding details.`
    );
    window.open(`https://wa.me/918185807402?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="vizag-websites" className="py-20 md:py-28 bg-[#000000] relative border-t border-white/10 select-none overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with targeted H1/H2 keywords for Google Crawlers */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D2FF]/10 border border-[#00D2FF]/30 text-xs font-mono text-[#00D2FF] uppercase tracking-widest mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>( VIZAG #1 LOCAL WEB STUDIO · WEBSITES UNDER ₹3,000 )</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase font-editorial mb-4">
            WEBSITES UNDER ₹3,000 IN VIZAG.{' '}
            <span className="text-[#00D2FF]">
              STARTING AT ₹2,999.
            </span>
          </h2>

          <p className="text-xs sm:text-sm font-mono text-[#CBD5E1] leading-relaxed max-w-2xl">
            Searching for <strong>websites under 3000 in Vizag</strong>? ByteX Media delivers modern, sub-second responsive business websites tailored for Visakhapatnam stores, clinics, startups, and service providers. Complete build for <strong>₹2,999</strong> with zero hidden surprises.
          </p>
        </div>

        {/* 3 Pillars Grid: Speed, Price, Local SEO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-[#08080A] border border-white/10 shadow-lg relative group hover:border-[#00D2FF]/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#00D2FF]/10 border border-[#00D2FF]/30 text-[#00D2FF] flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-[#00D2FF] uppercase tracking-wider mb-1 font-bold">
              Guaranteed ₹2,999 Price
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Websites Under ₹3,000</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Transparent commercial pricing. Complete 1–3 page business website for just ₹2,999. No ₹20,000 agency markup.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#08080A] border border-white/10 shadow-lg relative group hover:border-[#00D2FF]/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#00D2FF]/10 border border-[#00D2FF]/30 text-[#00D2FF] flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-[#00D2FF] uppercase tracking-wider mb-1 font-bold">
              Visakhapatnam Local Ranking
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Rank #1 in Vizag Searches</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Localized SEO tags, Google Business Profile coordination, and neighborhood keyword targeting across Vizag.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#08080A] border border-white/10 shadow-lg relative group hover:border-[#00D2FF]/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#00D2FF]/10 border border-[#00D2FF]/30 text-[#00D2FF] flex items-center justify-center mb-4">
              <Smartphone className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono text-[#00D2FF] uppercase tracking-wider mb-1 font-bold">
              WhatsApp Conversion Engine
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Instant Customer Leads</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Mobile-first design with 1-click WhatsApp messaging. Visitors convert directly into real customers without friction.
            </p>
          </div>
        </div>

        {/* Interactive Vizag Business Website Selector */}
        <div className="bg-[#070709] border border-white/10 rounded-3xl p-6 sm:p-10 mb-16 shadow-2xl relative">
          <div className="text-xs font-mono text-[#00D2FF] uppercase tracking-widest mb-2 text-left">
            ( VIZAG BUSINESS WEBSITE ESTIMATOR · EXACT ₹2,999 DELIVERABLE )
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase font-editorial mb-6 text-left">
            Select Your Vizag Business Type
          </h3>

          {/* Business Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
            {businessTypes.map((biz, idx) => (
              <button
                key={biz.title}
                onClick={() => setSelectedCategory(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === idx
                    ? 'bg-[#00D2FF] text-black font-bold shadow-[0_0_15px_rgba(0,210,255,0.4)]'
                    : 'bg-white/5 text-[#94A3B8] hover:text-white border border-white/10'
                }`}
              >
                {biz.title}
              </button>
            ))}
          </div>

          {/* Selected Business Preview Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-black/60 border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="lg:col-span-8 text-left space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-lg sm:text-xl font-bold text-white">
                  {currentBiz.title} in Vizag
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/10 text-[#00D2FF] border border-white/15">
                  Popular in {currentBiz.locations}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                {currentBiz.benefit}
              </p>

              <div className="pt-2">
                <div className="text-[10px] font-mono uppercase text-[#94A3B8] tracking-wider mb-2">
                  What You Get in the ₹2,999 Package:
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-white font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0" />
                  <span>{currentBiz.deliverable}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center gap-3 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
              <div className="text-center lg:text-right">
                <div className="text-[11px] font-mono text-[#94A3B8]">Total Package Price</div>
                <div className="text-3xl sm:text-4xl font-black text-white font-mono text-[#00D2FF]">
                  ₹2,999
                </div>
                <div className="text-[10px] text-[#10B981] font-mono">Under ₹3,000 Guaranteed</div>
              </div>

              <button
                onClick={() => handleWhatsAppBooking(currentBiz.title)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-black bg-white hover:bg-[#00D2FF] transition-all cursor-pointer shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Book for ₹2,999 on WhatsApp</span>
              </button>

              <button
                onClick={() => onStartJourney('Website Development (from ₹2,999)')}
                className="text-xs font-mono text-[#94A3B8] hover:text-white underline cursor-pointer"
              >
                Or submit technical requirements online →
              </button>
            </div>
          </div>
        </div>

        {/* Feature Comparison Table: ByteX ₹2,999 vs Other Vizag Agencies ₹15,000+ */}
        <div className="bg-[#070709] border border-white/10 rounded-3xl p-6 sm:p-10 mb-16 shadow-2xl text-left">
          <div className="text-xs font-mono text-[#00D2FF] uppercase tracking-widest mb-2">
            ( COMMERCIAL BENCHMARK · VALUE ANALYSIS )
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase font-editorial mb-6">
            ByteX ₹2,999 Starter vs Other Agencies in Vizag
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-white/10 text-[#94A3B8]">
                  <th className="pb-3 font-semibold">Service Parameter</th>
                  <th className="pb-3 font-bold text-[#00D2FF]">ByteX Media (Vizag)</th>
                  <th className="pb-3 font-semibold text-white/50">Other Vizag Agencies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-3 text-white font-medium">Pricing Guarantee</td>
                  <td className="py-3 text-[#00D2FF] font-bold">₹2,999 (Under ₹3,000)</td>
                  <td className="py-3 text-white/50">₹15,000 to ₹35,000</td>
                </tr>
                <tr>
                  <td className="py-3 text-white font-medium">Delivery Timeline</td>
                  <td className="py-3 text-white font-bold">3–5 Business Days</td>
                  <td className="py-3 text-white/50">3 to 6 Weeks</td>
                </tr>
                <tr>
                  <td className="py-3 text-white font-medium">Mobile Responsiveness</td>
                  <td className="py-3 text-[#10B981] font-bold">100% Mobile & Tablet Optimized</td>
                  <td className="py-3 text-white/50">Often templates with mobile bugs</td>
                </tr>
                <tr>
                  <td className="py-3 text-white font-medium">WhatsApp Lead Integration</td>
                  <td className="py-3 text-[#10B981] font-bold">Included Free</td>
                  <td className="py-3 text-white/50">Charged as extra plugin</td>
                </tr>
                <tr>
                  <td className="py-3 text-white font-medium">Google Maps & Local SEO Setup</td>
                  <td className="py-3 text-[#10B981] font-bold">Included for Vizag Searches</td>
                  <td className="py-3 text-white/50">Extra ₹5,000/mo SEO contract</td>
                </tr>
                <tr>
                  <td className="py-3 text-white font-medium">Code & Asset Ownership</td>
                  <td className="py-3 text-[#00D2FF] font-bold">100% Client Ownership (No Lock-In)</td>
                  <td className="py-3 text-white/50">Yearly proprietary maintenance fees</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Google SERP FAQ Accordion (Schema.org matched) */}
        <div className="max-w-4xl mx-auto text-left">
          <div className="text-center mb-10">
            <div className="text-xs font-mono text-[#00D2FF] uppercase tracking-widest mb-2">
              ( FREQUENTLY ASKED QUESTIONS · GOOGLE RANKING KNOWLEDGE BASE )
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase font-editorial">
              Everything You Need to Know About Websites Under ₹3,000 in Vizag
            </h3>
          </div>

          <div className="space-y-4">
            {vizagFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#08080A] border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#00D2FF] transition-transform duration-300 shrink-0 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#CBD5E1] font-mono leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Direct CTA Banner */}
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-blue-900/30 via-[#00D2FF]/20 to-blue-900/30 border border-[#00D2FF]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="text-left">
              <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase font-editorial mb-1">
                Ready to Get Your Website Under ₹3,000 in Vizag?
              </h4>
              <p className="text-xs text-[#CBD5E1] font-mono">
                Speak directly with ByteX developers in Visakhapatnam. Prototypes ready in 3–5 days.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => handleWhatsAppBooking('Websites Under 3000 in Vizag')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-black bg-white hover:bg-[#00D2FF] transition-all cursor-pointer shadow-lg"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call / WhatsApp: +91 8185807402</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
