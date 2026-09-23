import React, { useState } from 'react';
import {
  Mail,
  Menu,
  X,
  ArrowUpRight,
  Code,
  Briefcase,
  Sparkles,
  Users,
  Home,
  MessageSquare
} from 'lucide-react';

export type NavTab = 'home' | 'services' | 'work' | 'ai' | 'about' | 'contact';

interface NavbarProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange, onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: NavTab; label: string; tag?: string }[] = [
    { id: 'home', label: 'Overview' },
    { id: 'services', label: 'Services & Pricing', tag: '₹2,999' },
    { id: 'work', label: 'Archive Works' },
    { id: 'ai', label: 'AI Solutions' },
    { id: 'about', label: 'About & Roadmap' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleSelectTab = (tab: NavTab) => {
    onTabChange(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6 lg:px-8 select-none pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Brand Identity Wordmark */}
        <div className="pointer-events-auto">
          <button
            onClick={() => handleSelectTab('home')}
            className="flex items-center gap-2 group cursor-pointer bg-transparent border-0 p-0 text-left"
          >
            <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center font-black text-white font-mono text-sm group-hover:scale-105 transition-transform">
              א
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black tracking-widest text-white uppercase font-editorial">
                BYTEX
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#94A3B8] -mt-0.5">
                STUDIO DIGITAL
              </span>
            </div>
          </button>
        </div>

        {/* Center: Floating Glass Capsule Header (Screenshots 1-6 floating center pill) */}
        <div className="pointer-events-auto hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-[#0A0A0C]/90 border border-white/15 backdrop-blur-xl shadow-2xl">
          {/* Quick Email Trigger */}
          <a
            href="mailto:hello@bytexmedia.in"
            aria-label="Direct Email"
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white flex items-center justify-center transition-colors border border-white/10"
            title="hello@bytexmedia.in"
          >
            <Mail className="w-3.5 h-3.5" />
          </a>

          {/* Stepped dotted indicator divider */}
          <div className="h-4 w-px bg-white/15 mx-1" />

          {/* Nav links */}
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleSelectTab(link.id)}
                className={`px-3 py-1.5 text-xs font-mono rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-white text-black font-bold shadow-md shadow-white/10'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{link.label}</span>
                {link.tag && !isActive && (
                  <span className="text-[10px] text-[#00D2FF] font-semibold">
                    {link.tag}
                  </span>
                )}
              </button>
            );
          })}

          <div className="h-4 w-px bg-white/15 mx-1" />

          {/* Direct WhatsApp Quick Chat */}
          <a
            href="https://wa.me/918185807402?text=Hello%20ByteX%20Media!%20I%20want%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-[#10B981]/20 hover:bg-[#10B981] text-[#10B981] hover:text-black flex items-center justify-center transition-colors border border-[#10B981]/30"
            title="WhatsApp: +91 81858 07402"
          >
            <MessageSquare className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Right: Quick Action CTA & Mobile Trigger */}
        <div className="pointer-events-auto flex items-center gap-3">
          <button
            onClick={onOpenQuote}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold font-mono text-black bg-white hover:bg-[#00D2FF] transition-all cursor-pointer shadow-lg transform hover:-translate-y-0.5"
          >
            <span>Start Build</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden p-2 rounded-xl bg-[#0A0A0C] border border-white/15 text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden mt-3 max-w-lg mx-auto bg-[#0A0A0C]/98 border border-white/15 rounded-3xl p-5 shadow-2xl backdrop-blur-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleSelectTab(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs font-mono font-bold transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-white text-black shadow-md'
                      : 'text-[#CBD5E1] hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.tag && (
                    <span className="text-[10px] text-[#00D2FF]">{link.tag}</span>
                  )}
                </button>
              );
            })}

            <div className="pt-3 border-t border-white/10 mt-2 flex flex-col gap-2">
              <a
                href="https://wa.me/918185807402?text=Hello%20ByteX%20Media!%20I%20want%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-mono font-bold text-white bg-[#10B981] hover:bg-[#059669] transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: +91 81858 07402</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-mono font-bold text-black bg-white hover:bg-[#00D2FF] transition-colors cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
