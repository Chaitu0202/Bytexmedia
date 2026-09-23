import React from 'react';
import {
  Code,
  Smartphone,
  MapPin,
  TrendingUp,
  Instagram,
  ArrowRight,
  Sparkles,
  Layers,
  CheckCircle2,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  MessageSquare,
  Globe
} from 'lucide-react';
import { Hero } from './Hero';
import { CapabilityStrip } from './CapabilityStrip';
import { NavTab } from './Navbar';

interface HomeOverviewProps {
  onNavigate: (tab: NavTab) => void;
  onStartJourney: (serviceName?: string) => void;
}

export const HomeOverview: React.FC<HomeOverviewProps> = ({ onNavigate, onStartJourney }) => {
  return (
    <div className="animate-in fade-in duration-300">
      {/* 1. Hero Section */}
      <Hero
        onStartJourney={onStartJourney}
        onExploreServices={() => onNavigate('services')}
      />

      {/* 2. Interactive Capability Strip */}
      <CapabilityStrip />

      {/* 3. Navigation Hub: Explore ByteX Media Studio (Eliminates Heavy Scrolling) */}
      <section className="py-16 md:py-24 bg-[#000000] border-t border-[#1A253C] relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0052FE]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0F19] border border-[#1A253C] text-[11px] font-bold tracking-wider uppercase text-[#00D2FF] mb-3">
              EXPLORE OUR PLATFORM
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Everything Your Brand Needs,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] via-[#00D2FF] to-white">
                One Click Away.
              </span>
            </h2>
            <p className="text-base text-[#CBD5E1] leading-relaxed">
              No endless scrolling required. Select any division below to dive straight into our services, verified case studies, or AI automation pipelines.
            </p>
          </div>

          {/* 4 Core Explorer Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Card 1: Services & Transparent Pricing */}
            <div
              onClick={() => onNavigate('services')}
              className="p-7 rounded-3xl bg-[#0B0F19] border border-[#1A253C] hover:border-[#00D2FF]/60 hover:bg-[#111827] transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-xl relative overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#0052FE]/20 rounded-full blur-2xl group-hover:scale-150 transition-transform pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#000000] border border-[#1A253C] flex items-center justify-center text-[#00D2FF] group-hover:scale-105 transition-transform">
                    <Code className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#0052FE]/20 text-[#00D2FF] border border-[#0052FE]/40">
                    Transparent Rates
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2 group-hover:text-[#00D2FF] transition-colors">
                  Services & Pricing
                </h3>
                <p className="text-sm text-[#CBD5E1] leading-relaxed mb-6 font-normal">
                  Explore full packages with upfront pricing: Websites from <strong className="text-white font-bold">₹2,999</strong>, Mobile Apps from <strong className="text-white font-bold">₹9,999</strong>, Google Business Profile for <strong className="text-white font-bold">₹999</strong>, and Instagram Handling.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-[11px] px-2.5 py-1 rounded-lg bg-[#000000] border border-[#1A253C] text-[#CBD5E1] font-mono">
                    Web Dev (₹2,999)
                  </span>
                  <span className="text-[11px] px-2.5 py-1 rounded-lg bg-[#000000] border border-[#1A253C] text-[#CBD5E1] font-mono">
                    App Dev (₹9,999)
                  </span>
                  <span className="text-[11px] px-2.5 py-1 rounded-lg bg-[#000000] border border-[#1A253C] text-[#CBD5E1] font-mono">
                    Google Profile (₹999)
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1A253C] flex items-center justify-between text-xs sm:text-sm font-bold text-[#00D2FF]">
                <span>View Full Pricing & Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 2: Portfolio & Case Studies */}
            <div
              onClick={() => onNavigate('work')}
              className="p-7 rounded-3xl bg-[#0B0F19] border border-[#1A253C] hover:border-[#00D2FF]/60 hover:bg-[#111827] transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-xl relative overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#00D2FF]/20 rounded-full blur-2xl group-hover:scale-150 transition-transform pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#000000] border border-[#1A253C] flex items-center justify-center text-[#00A3FF] group-hover:scale-105 transition-transform">
                    <Globe className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#00D2FF]/20 text-[#00D2FF] border border-[#00D2FF]/40">
                    Live Demos
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2 group-hover:text-[#00D2FF] transition-colors">
                  Our Work & Case Studies
                </h3>
                <p className="text-sm text-[#CBD5E1] leading-relaxed mb-6 font-normal">
                  Browse high-performance digital stores, cross-platform apps, and local Google Map rank takeovers built for real commercial outcomes.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-[11px] px-2.5 py-1 rounded-lg bg-[#000000] border border-[#1A253C] text-[#CBD5E1] font-mono">
                    E-Commerce Stores
                  </span>
                  <span className="text-[11px] px-2.5 py-1 rounded-lg bg-[#000000] border border-[#1A253C] text-[#CBD5E1] font-mono">
                    Mobile Apps
                  </span>
                  <span className="text-[11px] px-2.5 py-1 rounded-lg bg-[#000000] border border-[#1A253C] text-[#CBD5E1] font-mono">
                    Local Map Packs
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1A253C] flex items-center justify-between text-xs sm:text-sm font-bold text-[#00D2FF]">
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 3: AI Solutions & Automation */}
            <div
              onClick={() => onNavigate('ai')}
              className="p-7 rounded-3xl bg-[#0B0F19] border border-[#1A253C] hover:border-[#00D2FF]/60 hover:bg-[#111827] transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-xl relative overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#8B5CF6]/20 rounded-full blur-2xl group-hover:scale-150 transition-transform pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#000000] border border-[#1A253C] flex items-center justify-center text-[#8B5CF6] group-hover:scale-105 transition-transform">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6] border border-[#8B5CF6]/40">
                    Interactive Demo
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2 group-hover:text-[#00D2FF] transition-colors">
                  AI Solutions & Automations
                </h3>
                <p className="text-sm text-[#CBD5E1] leading-relaxed mb-6 font-normal">
                  Stop losing leads to manual response delays. Test our interactive workflow simulator featuring WhatsApp alerts, automated lead qualification, and customer bots.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-[11px] px-2.5 py-1 rounded-lg bg-[#000000] border border-[#1A253C] text-[#CBD5E1] font-mono">
                    Instant WhatsApp Alerts
                  </span>
                  <span className="text-[11px] px-2.5 py-1 rounded-lg bg-[#000000] border border-[#1A253C] text-[#CBD5E1] font-mono">
                    AI Lead Qualifier
                  </span>
                  <span className="text-[11px] px-2.5 py-1 rounded-lg bg-[#000000] border border-[#1A253C] text-[#CBD5E1] font-mono">
                    Support Bots
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1A253C] flex items-center justify-between text-xs sm:text-sm font-bold text-[#00D2FF]">
                <span>Launch Interactive Pipeline</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 4: About & Zero to Hero Roadmap */}
            <div
              onClick={() => onNavigate('about')}
              className="p-7 rounded-3xl bg-[#0B0F19] border border-[#1A253C] hover:border-[#00D2FF]/60 hover:bg-[#111827] transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-xl relative overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#10B981]/20 rounded-full blur-2xl group-hover:scale-150 transition-transform pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#000000] border border-[#1A253C] flex items-center justify-center text-[#10B981] group-hover:scale-105 transition-transform">
                    <Zap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40">
                    Transparent Process
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2 group-hover:text-[#00D2FF] transition-colors">
                  About & Zero to Hero Roadmap
                </h3>
                <p className="text-sm text-[#CBD5E1] leading-relaxed mb-6 font-normal">
                  Learn about ByteX Media&apos;s student collective, our 4-phase delivery system, milestone sign-offs, and 100% intellectual property ownership guarantees.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-[11px] px-2.5 py-1 rounded-lg bg-[#000000] border border-[#1A253C] text-[#CBD5E1] font-mono">
                    100% Code Ownership
                  </span>
                  <span className="text-[11px] px-2.5 py-1 rounded-lg bg-[#000000] border border-[#1A253C] text-[#CBD5E1] font-mono">
                    Milestone Sign-Offs
                  </span>
                  <span className="text-[11px] px-2.5 py-1 rounded-lg bg-[#000000] border border-[#1A253C] text-[#CBD5E1] font-mono">
                    Fast Handover
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1A253C] flex items-center justify-between text-xs sm:text-sm font-bold text-[#00D2FF]">
                <span>Read Story & 4-Stage Roadmap</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Quick Direct Inquire Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0B0F19] via-[#111827] to-[#0B0F19] border border-[#1A253C] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="text-left">
              <span className="text-xs font-mono uppercase tracking-wider text-[#00D2FF] mb-1 block">
                Have a project ready?
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-white mb-1">
                Skip the browsing — talk directly with our tech team.
              </h4>
              <p className="text-xs sm:text-sm text-[#CBD5E1]">
                Email <span className="text-white font-mono font-bold">hello@bytexmedia.in</span> or WhatsApp us for an instant quote.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://wa.me/919390244788?text=Hello%20ByteX%20Media!%20I%20want%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#10B981] hover:bg-[#059669] transition-colors shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: +91 93902 44788</span>
              </a>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0052FE] via-[#00A3FF] to-[#00D2FF] hover:brightness-110 shadow-lg shadow-[#00A3FF]/25 cursor-pointer"
              >
                <span>Contact Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
