import React, { useState } from 'react';
import {
  ArrowRight,
  Code,
  Sparkles,
  TrendingUp,
  MapPin,
  Palette,
  CheckCircle2,
  Zap,
  Globe,
  Smartphone,
  Instagram,
  BarChart3,
  BadgePercent
} from 'lucide-react';
import { ByteXLogo } from './ByteXLogo';

interface HeroProps {
  onStartJourney: (serviceName?: string) => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartJourney, onExploreServices }) => {
  const [selectedHighlight, setSelectedHighlight] = useState<string>('web');

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden flex items-center bg-[#000000]"
    >
      {/* Subtle atmospheric cyan & azure glows matching user image */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0052FE]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[350px] bg-[#00D2FF]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[300px] bg-[#0066FF]/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#00D2FF 1px, transparent 1px), linear-gradient(to right, #00D2FF 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & Pricing Prompts */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Tagline / Badge */}
            <div
              id="hero-badge"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B0F19] border border-[#1A253C] shadow-lg backdrop-blur-md mb-6 hover:border-[#00D2FF]/50 transition-colors"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D2FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00D2FF]"></span>
              </span>
              <span className="text-xs font-bold tracking-wider uppercase text-white">
                Your <span className="text-[#00D2FF]">Growth</span> Our Strategy
              </span>
            </div>

            {/* Main Heading */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-[1.1] mb-6"
            >
              Transform Your Brand With High-Performance Tech &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] via-[#00D2FF] to-white drop-shadow-[0_0_24px_rgba(0,163,255,0.4)]">
                Digital Marketing.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p
              id="hero-subtext"
              className="text-base sm:text-lg text-[#CBD5E1] max-w-2xl leading-relaxed mb-8 font-normal"
            >
              Student-powered digital innovation. From modern websites and mobile apps to Google Business optimization and Instagram handling — built to drive real sales.
            </p>

            {/* Pricing Quick Bar directly requested by user */}
            <div className="w-full grid grid-cols-3 gap-2.5 sm:gap-3.5 mb-8">
              <div
                onClick={() => onStartJourney('Website Development')}
                className="p-3 sm:p-3.5 rounded-xl bg-[#0B0F19] border border-[#1A253C] hover:border-[#00D2FF] hover:bg-[#111827] transition-all cursor-pointer group shadow-md"
              >
                <div className="text-[10px] sm:text-xs text-[#94A3B8] font-semibold flex items-center gap-1 mb-1">
                  <Code className="w-3.5 h-3.5 text-[#00D2FF]" />
                  <span>Web Dev</span>
                </div>
                <div className="text-lg sm:text-2xl font-black text-white group-hover:text-[#00D2FF] transition-colors">
                  ₹2,999
                </div>
                <div className="text-[10px] text-[#10B981] font-medium">Starting price</div>
              </div>

              <div
                onClick={() => onStartJourney('Mobile App')}
                className="p-3 sm:p-3.5 rounded-xl bg-[#0B0F19] border border-[#1A253C] hover:border-[#00D2FF] hover:bg-[#111827] transition-all cursor-pointer group shadow-md"
              >
                <div className="text-[10px] sm:text-xs text-[#94A3B8] font-semibold flex items-center gap-1 mb-1">
                  <Smartphone className="w-3.5 h-3.5 text-[#00A3FF]" />
                  <span>App Dev</span>
                </div>
                <div className="text-lg sm:text-2xl font-black text-white group-hover:text-[#00D2FF] transition-colors">
                  ₹9,999
                </div>
                <div className="text-[10px] text-[#00D2FF] font-medium">Starting price</div>
              </div>

              <div
                onClick={() => onStartJourney('Google Business Profile')}
                className="p-3 sm:p-3.5 rounded-xl bg-[#0B0F19] border border-[#1A253C] hover:border-[#00D2FF] hover:bg-[#111827] transition-all cursor-pointer group shadow-md"
              >
                <div className="text-[10px] sm:text-xs text-[#94A3B8] font-semibold flex items-center gap-1 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Google Profile</span>
                </div>
                <div className="text-lg sm:text-2xl font-black text-white group-hover:text-[#00D2FF] transition-colors">
                  ₹999
                </div>
                <div className="text-[10px] text-[#10B981] font-medium">Full setup</div>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                id="hero-primary-cta"
                onClick={() => onStartJourney()}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#0052FE] via-[#00A3FF] to-[#00D2FF] hover:brightness-110 shadow-xl shadow-[#00A3FF]/30 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[#CBD5E1] bg-[#0B0F19] border border-[#1A253C] hover:bg-[#111827] hover:text-white transition-all cursor-pointer"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4 text-[#94A3B8]" />
              </button>
            </div>

            {/* Trust and Support Strip */}
            <div
              id="hero-trust-strip"
              className="pt-6 border-t border-[#1A253C] w-full flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-semibold text-[#94A3B8]"
            >
              <span className="flex items-center gap-1.5 text-white">
                <Globe className="w-3.5 h-3.5 text-[#00D2FF]" /> Websites (₹2,999)
              </span>
              <span className="text-[#1A253C]">•</span>
              <span className="flex items-center gap-1.5 text-white">
                <Smartphone className="w-3.5 h-3.5 text-[#00A3FF]" /> Apps (₹9,999)
              </span>
              <span className="text-[#1A253C]">•</span>
              <span className="flex items-center gap-1.5 text-white">
                <MapPin className="w-3.5 h-3.5 text-[#10B981]" /> Google Profile (₹999)
              </span>
              <span className="text-[#1A253C]">•</span>
              <span className="flex items-center gap-1.5 text-white">
                <Instagram className="w-3.5 h-3.5 text-[#E1306C]" /> Instagram Handling
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase featuring the Official Brand Card */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Main Brand Visual Showcase Card (Exact aesthetic of user image) */}
            <div
              id="hero-brand-card"
              className="w-full max-w-md bg-[#000000] border-2 border-[#1A253C] rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,163,255,0.2)] relative overflow-hidden flex flex-col items-center text-center"
            >
              {/* Radial Cyan Glow behind Logo */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-[#00A3FF]/20 rounded-full blur-[70px] pointer-events-none" />

              {/* Large Central 3D 'B' Logo with Cyan Growth Arrow */}
              <div className="relative mb-6 transform hover:scale-105 transition-transform duration-300">
                <div className="w-28 h-28 sm:w-32 sm:h-32">
                  <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full drop-shadow-[0_0_20px_rgba(0,163,255,0.6)]"
                  >
                    <defs>
                      <linearGradient id="heroBGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0052FE" />
                        <stop offset="50%" stopColor="#00A3FF" />
                        <stop offset="100%" stopColor="#00F0FF" />
                      </linearGradient>
                      <linearGradient id="heroBFacet" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0038B8" />
                        <stop offset="100%" stopColor="#0077FF" />
                      </linearGradient>
                      <linearGradient id="heroArrow" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0099FF" />
                        <stop offset="100%" stopColor="#00F0FF" />
                      </linearGradient>
                    </defs>

                    {/* White Upper and Right Spine */}
                    <path
                      d="M24 16 L60 16 C74 16 82 23 82 34 C82 42 76 47 68 50 C80 54 86 63 86 73 C86 86 75 92 58 92 L24 92 Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M40 28 L56 28 C64 28 68 31 68 36 C68 41 64 44 56 44 L40 44 Z"
                      fill="#000000"
                    />
                    <path
                      d="M40 56 L58 56 C67 56 71 60 71 66 C71 72 67 76 58 76 L40 76 Z"
                      fill="#000000"
                    />

                    {/* 3D Geometric Facets */}
                    <path d="M16 92 L38 38 L44 92 Z" fill="url(#heroBFacet)" />
                    <path d="M16 92 L38 38 L60 38 L34 92 Z" fill="url(#heroBGrad)" />
                    <path d="M34 70 L64 70 L52 92 L28 92 Z" fill="url(#heroBGrad)" />

                    {/* Cyan Arrow Pointing ↗ */}
                    <path
                      d="M46 54 L76 26"
                      stroke="url(#heroArrow)"
                      strokeWidth="9"
                      strokeLinecap="round"
                    />
                    <path
                      d="M58 24 L82 22 L80 46"
                      stroke="url(#heroArrow)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Bold BYTEX Typography */}
              <div className="font-black text-3xl sm:text-4xl text-white tracking-wider flex items-center justify-center leading-none mb-2">
                <span>BYTE</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] via-[#00D2FF] to-[#00F0FF] drop-shadow-[0_0_10px_rgba(0,210,255,0.7)]">
                  X
                </span>
              </div>

              {/* — MEDIA — */}
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="h-[1px] w-6 bg-white/40" />
                <span className="text-xs sm:text-sm font-bold tracking-[0.35em] text-white uppercase">
                  MEDIA
                </span>
                <span className="h-[1px] w-6 bg-white/40" />
              </div>

              {/* Tagline */}
              <div className="text-xs sm:text-sm font-medium tracking-wide text-white/90 mb-8">
                Your <span className="text-[#00D2FF] font-bold">Growth</span> Our Strategy
              </div>

              {/* The 4 Signature Logo Pillars from the User's Image */}
              <div className="w-full grid grid-cols-2 gap-2.5 pt-4 border-t border-[#1A253C]">
                {/* 1. Instagram Handling */}
                <div className="p-2.5 rounded-xl bg-[#0B0F19] border border-[#1A253C] flex flex-col items-center text-center">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#FF543E] via-[#E1306C] to-[#833AB4] flex items-center justify-center text-white mb-1.5 shadow-sm">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider text-white uppercase leading-tight">
                    Instagram Handling
                  </span>
                </div>

                {/* 2. Digital Marketing */}
                <div className="p-2.5 rounded-xl bg-[#0B0F19] border border-[#1A253C] flex flex-col items-center text-center">
                  <div className="w-7 h-7 rounded-lg bg-[#00D2FF]/20 text-[#00D2FF] flex items-center justify-center mb-1.5 border border-[#00D2FF]/30">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider text-white uppercase leading-tight">
                    Digital Marketing
                  </span>
                </div>

                {/* 3. Website Building */}
                <div className="p-2.5 rounded-xl bg-[#0B0F19] border border-[#1A253C] flex flex-col items-center text-center">
                  <div className="w-7 h-7 rounded-lg bg-[#0066FF]/20 text-[#00D2FF] flex items-center justify-center mb-1.5 border border-[#0066FF]/40">
                    <Code className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider text-white uppercase leading-tight">
                    Website Building
                  </span>
                  <span className="text-[9px] text-[#00D2FF] font-semibold mt-0.5">₹2,999</span>
                </div>

                {/* 4. More Sales For Your Business */}
                <div className="p-2.5 rounded-xl bg-[#0B0F19] border border-[#1A253C] flex flex-col items-center text-center">
                  <div className="w-7 h-7 rounded-lg bg-[#10B981]/20 text-[#10B981] flex items-center justify-center mb-1.5 border border-[#10B981]/40">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider text-white uppercase leading-tight">
                    More Sales
                  </span>
                  <span className="text-[9px] text-[#10B981] font-semibold mt-0.5">Growth Focus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

