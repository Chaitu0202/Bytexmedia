import React from 'react';
import { Linkedin, Instagram, Youtube, Github, ArrowUp, Shield, FileText } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#0A1024] border-t border-[#263653] pt-16 pb-12 text-[#94A3B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#263653]/60">
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-4 text-left">
            <a href="#hero" className="flex items-center gap-3 group mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#22D3EE] p-[1.5px] flex items-center justify-center shadow-md">
                <div className="w-full h-full bg-[#050816] rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] text-sm tracking-tighter">
                    BX
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight text-[#F8FAFC]">
                  ByteX <span className="text-[#3B82F6]">Media</span>
                </span>
                <span className="text-[10px] font-semibold text-[#94A3B8] uppercase tracking-wider">
                  Build • Market • Grow
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed mb-6 max-w-sm">
              Student-powered technology and digital growth solutions for ambitious businesses. We help you move from zero to hero through modern engineering and growth strategy.
            </p>

            {/* Social Channels */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/company/bytex-media"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-[#101A33] border border-[#263653] flex items-center justify-center text-[#CBD5E1] hover:text-[#3B82F6] hover:border-[#3B82F6]/50 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/bytexmedia"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-[#101A33] border border-[#263653] flex items-center justify-center text-[#CBD5E1] hover:text-[#22D3EE] hover:border-[#22D3EE]/50 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@bytexmedia"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-[#101A33] border border-[#263653] flex items-center justify-center text-[#CBD5E1] hover:text-red-400 hover:border-red-400/50 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/bytexmedia"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-xl bg-[#101A33] border border-[#263653] flex items-center justify-center text-[#CBD5E1] hover:text-white hover:border-white/50 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Company Navigation */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F8FAFC] mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-[#F8FAFC] transition-colors">About ByteX Media</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F8FAFC] transition-colors">Our Capabilities</a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#F8FAFC] transition-colors">Zero to Hero Journey</a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#F8FAFC] transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#F8FAFC] transition-colors">Packages & Scope</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F8FAFC] transition-colors">Contact & Inquiries</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F8FAFC] mb-4">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-[#F8FAFC] transition-colors">Modern Web Development</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F8FAFC] transition-colors">Mobile App Solutions</a>
              </li>
              <li>
                <a href="#ai-solutions" className="hover:text-[#F8FAFC] transition-colors">AI & Workflow Automation</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F8FAFC] transition-colors">Digital Marketing & SEO</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F8FAFC] transition-colors">Google Business Profile</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F8FAFC] transition-colors">Brand & Creative Design</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources & Legal */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F8FAFC] mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-[#F8FAFC] transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <Shield className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="hover:text-[#F8FAFC] transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-[#22D3EE]" />
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
            <span className="text-[#CBD5E1]">Student-Powered Innovation</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#101A33] border border-[#263653] hover:text-white hover:border-[#3B82F6]/40 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
