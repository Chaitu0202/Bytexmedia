import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Code, Briefcase, Sparkles, Users, Mail, Home } from 'lucide-react';
import { ByteXLogo } from './ByteXLogo';

export type NavTab = 'home' | 'services' | 'work' | 'ai' | 'about' | 'contact';

interface NavbarProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange, onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: NavTab; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'home', label: 'Overview', icon: Home },
    { id: 'services', label: 'Services & Pricing', icon: Code },
    { id: 'work', label: 'Our Work', icon: Briefcase },
    { id: 'ai', label: 'AI Solutions', icon: Sparkles },
    { id: 'about', label: 'About & Process', icon: Users },
    { id: 'contact', label: 'Contact Us', icon: Mail },
  ];

  const handleSelectTab = (tab: NavTab) => {
    onTabChange(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navigation"
      className="fixed top-0 left-0 right-0 z-50 bg-[#000000]/95 backdrop-blur-md border-b border-[#1A253C] py-3.5 shadow-lg shadow-black/80 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleSelectTab('home')}
          id="nav-logo"
          className="group cursor-pointer text-left bg-transparent border-0 p-0"
        >
          <ByteXLogo size="md" showTagline={false} showSubtext={true} />
        </button>

        {/* Desktop Navigation Links */}
        <nav
          id="desktop-nav-menu"
          className="hidden lg:flex items-center gap-1 bg-[#0B0F19] border border-[#1A253C] px-2 py-1.5 rounded-full"
        >
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            const Icon = link.icon;
            return (
              <button
                key={link.id}
                id={`nav-tab-${link.id}`}
                onClick={() => handleSelectTab(link.id)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-[#0052FE] to-[#00A3FF] shadow-md shadow-[#00A3FF]/25'
                    : 'text-[#94A3B8] hover:text-white hover:bg-[#111827]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="nav-quote-button"
            onClick={onOpenQuote}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0052FE] via-[#00A3FF] to-[#00D2FF] hover:brightness-110 shadow-lg shadow-[#00A3FF]/25 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Get a Quote</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          className="lg:hidden p-2 rounded-xl text-[#CBD5E1] bg-[#0B0F19] border border-[#1A253C] hover:text-white transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-b border-[#1A253C] bg-[#000000]/98 backdrop-blur-2xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200"
        >
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  id={`mobile-tab-${link.id}`}
                  onClick={() => handleSelectTab(link.id)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-bold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-gradient-to-r from-[#0052FE] to-[#00A3FF] text-white shadow-md'
                      : 'text-[#CBD5E1] hover:bg-[#0B0F19] hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4" />
                    <span>{link.label}</span>
                  </div>
                  {isActive && <span className="text-xs font-mono font-normal">Active</span>}
                </button>
              );
            })}
            <div className="pt-3 border-t border-[#1A253C] mt-2">
              <button
                id="mobile-quote-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0052FE] to-[#00D2FF] shadow-md cursor-pointer"
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
