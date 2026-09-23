import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  Sparkles,
  Code,
  Smartphone,
  MapPin,
  Instagram,
  ArrowUpRight,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { NavTab } from './Navbar';

interface StudioHeroProps {
  onNavigate: (tab: NavTab) => void;
  onStartJourney: (serviceName?: string) => void;
}

export const StudioHero: React.FC<StudioHeroProps> = ({ onNavigate, onStartJourney }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);

  const slides = [
    {
      id: 'web',
      tag: '( WEB ENGINEERING · DEV )',
      title: 'High-Converting Websites',
      price: '₹2,999',
      priceLabel: 'Starting from ₹2,999',
      serviceName: 'Website Development (from ₹2,999)',
      image: '/images/studio_laptop_mockup_1790189026060.jpg',
      category: 'WEBSITE BUILDING',
      desc: 'Sub-second speed, custom design, mobile responsiveness, and WhatsApp lead capture.',
    },
    {
      id: 'app',
      tag: '( MOBILE APPS · IOS & ANDROID )',
      title: 'Mobile App Engineering',
      price: '₹9,999',
      priceLabel: 'Starting from ₹9,999',
      serviceName: 'Mobile App Development (from ₹9,999)',
      image: '/images/studio_smartphone_mockup_1790189013945.jpg',
      category: 'MOBILE APP DEV',
      desc: 'Cross-platform iOS and Android apps with modern UI/UX, database, and push alerts.',
    },
    {
      id: 'gbp',
      tag: '( LOCAL SEO · GOOGLE MAPS )',
      title: 'Google Business Profile',
      price: '₹999',
      priceLabel: 'Full Setup for ₹999',
      serviceName: 'Google Business Profile (₹999)',
      image: '/images/studio_magazine_editorial_1790189038500.jpg',
      category: 'GOOGLE MAPS SEO',
      desc: 'Complete GBP audit, NAP consistency, local map pack ranking, and review toolkit.',
    },
    {
      id: 'ai',
      tag: '( AI AUTOMATION · WORKFLOWS )',
      title: 'AI Automation & Workflows',
      price: 'Custom',
      priceLabel: 'Growth Engine',
      serviceName: 'AI Automation & Custom Tools',
      image: '/images/hero_studio_stone_flow_1790189001110.jpg',
      category: 'AI AUTOMATIONS',
      desc: 'Instant WhatsApp lead qualifiers, customer support bots, and automated task sync.',
    },
  ];

  // Auto rotate slides gently
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const active = slides[currentSlide];

  return (
    <section className="relative min-h-[100svh] bg-[#000000] text-white flex flex-col justify-between overflow-hidden pt-24 pb-8 select-none">
      {/* 3D Dark Stone Backdrop */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="/images/hero_studio_stone_flow_1790189001110.jpg"
          alt="Studio Background"
          className="w-full h-full object-cover opacity-35 filter contrast-125 brightness-75 scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)]" />
      </div>

      {/* Massive Editorial Background Typography "BYTEX DIGITAL" */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-0 pointer-events-none flex justify-between items-center px-4 sm:px-8 md:px-16 w-full opacity-90 overflow-hidden">
        <h1
          className="text-[14vw] sm:text-[15vw] font-black tracking-tighter leading-none text-white font-editorial select-none"
          style={{ textShadow: '0 0 30px rgba(255,255,255,0.1)' }}
        >
          BYTEX
        </h1>
        <h1
          className="text-[14vw] sm:text-[15vw] font-black tracking-tighter leading-none text-white/90 font-editorial select-none"
          style={{ textShadow: '0 0 30px rgba(255,255,255,0.1)' }}
        >
          DIGITAL
        </h1>
      </div>

      {/* Top Editorial Metadata (Floating Corners) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-start justify-between text-[11px] sm:text-xs text-[#94A3B8] font-mono tracking-wider pt-2">
        {/* Left Metadata */}
        <div className="hidden md:flex flex-col gap-1 text-left">
          <span className="text-white/80 font-bold">( CORE ARCHITECTURE · STRATEGY )</span>
          <span>( BRAND IDENTITY · DESIGN )</span>
          <span>( CREATIVE CONTENT · GROWTH )</span>
          <span>( BUSINESS SCALING · ROI )</span>
        </div>

        {/* Center Tagline / Pill */}
        <div className="mx-auto md:mx-0 flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-pulse" />
          <span className="text-white font-bold tracking-widest uppercase text-[10px]">
            Your Growth Our Strategy
          </span>
        </div>

        {/* Right Metadata */}
        <div className="hidden md:flex flex-col gap-1 text-right">
          <button
            onClick={() => onNavigate('services')}
            className="hover:text-white transition-colors cursor-pointer text-right"
          >
            ( Web Dev · ₹2,999 )
          </button>
          <button
            onClick={() => onNavigate('services')}
            className="hover:text-white transition-colors cursor-pointer text-right"
          >
            ( Mobile App · ₹9,999 )
          </button>
          <button
            onClick={() => onNavigate('services')}
            className="hover:text-white transition-colors cursor-pointer text-right"
          >
            ( Google Profile · ₹999 )
          </button>
          <button
            onClick={() => onNavigate('services')}
            className="hover:text-white transition-colors cursor-pointer text-right"
          >
            ( Instagram Handling )
          </button>
        </div>
      </div>

      {/* Center 3D Showcase Card (Exact aesthetic of Screenshots 1 & 2) */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 w-full my-auto flex flex-col items-center">
        {/* Floating Chromatic Glass Showcase Container */}
        <div className="relative w-full max-w-lg md:max-w-xl group">
          {/* Chromatic Fringe Border Glow */}
          <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-red-500/20 via-[#00D2FF]/30 to-blue-600/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none" />

          {/* Main Card */}
          <div className="relative rounded-[28px] bg-[#0A0A0C]/90 border border-white/15 p-4 sm:p-6 shadow-2xl backdrop-blur-xl overflow-hidden text-center">
            {/* Slide Category & Navigation indicator */}
            <div className="flex items-center justify-between text-xs text-[#94A3B8] font-mono mb-3">
              <span className="text-[#00D2FF] font-semibold">{active.tag}</span>
              <div className="flex items-center gap-1.5 text-white/80">
                <span>0{currentSlide + 1}</span>
                <span>/</span>
                <span>0{slides.length}</span>
              </div>
            </div>

            {/* Showcase Visual Slot with Chromatic Aberration frame */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-black border border-white/10 mb-4 group/image shadow-inner">
              <img
                src={active.image}
                alt={active.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/image:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Price Banner Overlay */}
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <div className="text-left">
                  <div className="text-[11px] font-mono uppercase text-[#00D2FF] tracking-wider font-bold">
                    {active.category}
                  </div>
                  <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight">
                    {active.title}
                  </h3>
                </div>

                <div className="px-3 py-1.5 rounded-xl bg-black/80 border border-white/20 backdrop-blur-md text-right">
                  <div className="text-xs sm:text-sm font-black text-white font-mono">
                    {active.price}
                  </div>
                  <div className="text-[9px] text-[#10B981] font-mono">
                    {active.priceLabel}
                  </div>
                </div>
              </div>
            </div>

            {/* Description & Action */}
            <p className="text-xs sm:text-sm text-[#CBD5E1] mb-4 text-center max-w-md mx-auto line-clamp-2">
              {active.desc}
            </p>

            {/* Action Bar */}
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => onStartJourney(active.serviceName)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-black bg-white hover:bg-[#00D2FF] hover:text-black transition-all cursor-pointer shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Order for {active.price}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white/80 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <span>View Scope</span>
                <ArrowUpRight className="w-4 h-4 text-[#94A3B8]" />
              </button>
            </div>

            {/* Interactive Slider Navigation Arrows */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Audio Frequency Equalizer Visualizer Strip (Matches Screenshot 1 & 2 soundwave) */}
        <div className="mt-5 flex items-center gap-3 px-4 py-2 rounded-full bg-[#0A0A0C]/90 border border-white/10 backdrop-blur-md">
          <button
            onClick={() => setIsPlayingAudio(!isPlayingAudio)}
            className="text-white/60 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle audio ambiance"
          >
            {isPlayingAudio ? (
              <Volume2 className="w-4 h-4 text-[#00D2FF]" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>

          {/* Equalizer Frequency Bars */}
          <div className="flex items-center gap-1 h-4">
            {[4, 10, 14, 8, 16, 12, 6, 15, 9, 13, 7, 11, 15, 8, 5, 12, 16, 7, 10, 6].map((h, i) => (
              <div
                key={i}
                className="w-0.5 rounded-full bg-gradient-to-t from-white/30 to-[#00D2FF] transition-all duration-300"
                style={{
                  height: isPlayingAudio ? `${((h * 1.5 + (i % 3) * 2) % 16) + 3}px` : '3px',
                }}
              />
            ))}
          </div>

          <span className="text-[10px] font-mono text-white/50 tracking-wider">
            {isPlayingAudio ? 'STUDIO AUDIO ON' : 'MUTED'}
          </span>
        </div>

        {/* Thumbnail Selector Strip along the bottom */}
        <div className="flex items-center gap-2 mt-4 overflow-x-auto py-1 max-w-full">
          {slides.map((s, index) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(index)}
              className={`px-3 py-1.5 rounded-xl border text-[11px] font-mono flex items-center gap-2 transition-all cursor-pointer ${
                currentSlide === index
                  ? 'bg-white text-black border-white font-bold shadow-lg'
                  : 'bg-black/60 text-[#94A3B8] border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              <span>0{index + 1}</span>
              <span className="hidden sm:inline">{s.title.split(' ')[0]}</span>
              <span className="text-[9px] opacity-75">({s.price})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Editorial Footer Bar (Screenshots 1 & 2 Footer) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-[#94A3B8] font-mono">
        {/* Left Studio Statement */}
        <div className="text-center md:text-left max-w-xs">
          Strategy, Design, and Development. Lightning-fast, lean, and sensibly priced.
        </div>

        {/* Center Contact & Direct Details */}
        <div className="text-center flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-white/90">
          <a
            href="mailto:hello@bytexmedia.in"
            className="hover:text-[#00D2FF] transition-colors"
          >
            hello@bytexmedia.in
          </a>
          <span className="hidden sm:inline text-white/20">•</span>
          <a
            href="https://wa.me/918185807402"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#10B981] transition-colors flex items-center gap-1"
          >
            <MessageSquare className="w-3 h-3 text-[#10B981]" />
            <span>+91 81858 07402</span>
          </a>
          <span className="hidden sm:inline text-white/20">•</span>
          <span>ByteX Media Studio 2026©</span>
        </div>

        {/* Right Social Channels */}
        <div className="flex items-center gap-4 text-white/80">
          <a
            href="https://instagram.com/bytexmedia"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00D2FF] transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/918185807402"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#10B981] transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://linkedin.com/company/bytex-media"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00D2FF] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* FWA Ribbon in Bottom Left Corner (exact replica of screenshots 1 & 2) */}
      <div className="hidden lg:block absolute bottom-0 left-0 z-20 pointer-events-none">
        <div className="w-24 h-24 overflow-hidden relative">
          <div className="absolute bottom-4 -left-6 w-32 bg-[#FFD700] text-black font-black text-[9px] font-mono py-1 text-center -rotate-45 shadow-lg tracking-wider">
            FWA OF THE DAY
          </div>
        </div>
      </div>
    </section>
  );
};
