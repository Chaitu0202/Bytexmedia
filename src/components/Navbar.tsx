import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Layers } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'services', 'about', 'process', 'work', 'ai-solutions', 'packages', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'AI Solutions', href: '#ai-solutions', id: 'ai-solutions' },
    { label: 'Packages', href: '#packages', id: 'packages' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050816]/90 backdrop-blur-md border-b border-[#263653] py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          id="nav-logo"
          className="flex items-center gap-3 group"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#22D3EE] p-[1.5px] flex items-center justify-center shadow-md shadow-[#3B82F6]/20 group-hover:shadow-[#3B82F6]/40 transition-all">
            <div className="w-full h-full bg-[#050816] rounded-[10px] flex items-center justify-center">
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] text-lg tracking-tighter">
                BX
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-[#F8FAFC] group-hover:text-white transition-colors flex items-center gap-1.5">
              ByteX <span className="text-[#3B82F6]">Media</span>
            </span>
            <span className="text-[11px] font-medium text-[#94A3B8] tracking-wider uppercase">
              Build • Market • Grow
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav-menu" className="hidden lg:flex items-center gap-1 bg-[#0A1024]/70 border border-[#263653]/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-[#F8FAFC] bg-[#162342] shadow-xs'
                    : 'text-[#94A3B8] hover:text-[#CBD5E1] hover:bg-[#101A33]/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="nav-quote-button"
            onClick={onOpenQuote}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#F8FAFC] bg-gradient-to-r from-[#2563EB] to-[#06B6D4] hover:opacity-95 shadow-md shadow-[#2563EB]/25 hover:shadow-[#2563EB]/40 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Get a Free Quote</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          className="lg:hidden p-2 rounded-xl text-[#CBD5E1] bg-[#101A33] border border-[#263653] hover:text-white transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-b border-[#263653] bg-[#0A1024]/95 backdrop-blur-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`mobile-link-${link.id}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#162342] text-[#22D3EE] font-semibold'
                    : 'text-[#CBD5E1] hover:bg-[#101A33] hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#263653] mt-2">
              <button
                id="mobile-quote-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#06B6D4] shadow-md cursor-pointer"
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
