import React from 'react';
import { Linkedin, Instagram, Youtube, Github, ArrowUp, Shield, FileText, Mail, Phone } from 'lucide-react';
import { ByteXLogo } from './ByteXLogo';
import { NavTab } from './Navbar';

interface FooterProps {
  onNavigate: (tab: NavTab) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPrivacy, onOpenTerms }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (tab: NavTab) => {
    onNavigate(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#000000] border-t border-white/10 pt-16 pb-12 text-[#94A3B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-4 text-left">
            <button
              onClick={() => handleNav('home')}
              className="inline-block mb-4 text-left bg-transparent border-0 p-0 cursor-pointer"
            >
              <ByteXLogo size="md" showTagline={true} showSubtext={true} />
            </button>

            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed mb-4 max-w-sm mt-2">
              Transforming businesses with high-converting websites (₹2,999), custom mobile apps (₹9,999), Google Business Profile optimization (₹999), and Instagram handling.
            </p>

            <div className="text-xs text-[#CBD5E1] mb-5 flex flex-col gap-1.5 font-mono">
              <a
                href="mailto:hello@bytexmedia.in"
                className="flex items-center gap-2 hover:text-[#00D2FF] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#00D2FF]" />
                <span>hello@bytexmedia.in</span>
              </a>
              <a
                href="https://wa.me/918185807402?text=Hello%20ByteX%20Media!%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#10B981] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#10B981]" />
                <span>+91 81858 07402</span>
              </a>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/bytexmedia"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-[#0B0F19] border border-[#1A253C] flex items-center justify-center text-white hover:text-[#00D2FF] hover:border-[#00D2FF]/60 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/bytex-media"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-[#0B0F19] border border-[#1A253C] flex items-center justify-center text-white hover:text-[#00A3FF] hover:border-[#00A3FF]/60 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/bytexmedia"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-xl bg-[#0B0F19] border border-[#1A253C] flex items-center justify-center text-white hover:text-[#00D2FF] hover:border-[#00D2FF]/60 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@bytexmedia"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-[#0B0F19] border border-[#1A253C] flex items-center justify-center text-white hover:text-red-500 hover:border-red-500/60 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Pages */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home / Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Services & Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('work')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Our Work & Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('ai')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  AI Workflow Automations
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About & Zero to Hero Roadmap
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Offerings */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-4">
              Core Offerings
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="w-full hover:text-white transition-colors flex items-center justify-between pr-4 cursor-pointer text-left"
                >
                  <span>Website Development</span>
                  <span className="text-[11px] font-mono text-[#00D2FF] font-bold">₹2,999</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="w-full hover:text-white transition-colors flex items-center justify-between pr-4 cursor-pointer text-left"
                >
                  <span>Mobile App Development</span>
                  <span className="text-[11px] font-mono text-[#00A3FF] font-bold">₹9,999</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="w-full hover:text-white transition-colors flex items-center justify-between pr-4 cursor-pointer text-left"
                >
                  <span>Google Business Profile</span>
                  <span className="text-[11px] font-mono text-[#10B981] font-bold">₹999</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Instagram Handling & Growth
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('ai')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  AI Automation & Chatbots
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Creative Branding & Design
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources & Legal */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-4">
              Legal & Trust
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-white transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <Shield className="w-3.5 h-3.5 text-[#00D2FF]" />
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="hover:text-white transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-[#00A3FF]" />
                  <span>Terms of Service</span>
                </button>
              </li>
            </ul>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} ByteX Media. All rights reserved.</span>
            <span>•</span>
            <span className="text-[#00D2FF] font-medium">hello@bytexmedia.in</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B0F19] border border-[#1A253C] hover:text-white hover:border-[#00D2FF]/50 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
