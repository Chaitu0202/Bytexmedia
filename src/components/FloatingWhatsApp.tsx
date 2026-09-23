import React, { useState } from 'react';
import { MessageSquare, ArrowUpRight } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center select-none animate-fade-in-up">
      {/* Floating Pill optimized for touch & desktop */}
      <a
        href="https://wa.me/918185807402?text=Hello%20ByteX%20Media!%20I%20am%20interested%20in%20discussing%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center gap-2 sm:gap-3 p-2 pr-3.5 sm:px-4 sm:py-3 rounded-full bg-[#08080A]/95 border border-[#10B981]/40 shadow-[0_4px_20px_rgba(0,0,0,0.6),0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.45)] backdrop-blur-xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 text-white cursor-pointer min-h-[44px]"
        aria-label="Direct WhatsApp Consultation +91 81858 07402"
      >
        {/* Pulse ring animation */}
        <span className="absolute -inset-0.5 rounded-full bg-[#10B981]/30 blur-sm animate-pulse pointer-events-none" />

        {/* WhatsApp Icon with green luminous badge */}
        <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#10B981] flex items-center justify-center text-black shadow-md shrink-0 group-hover:scale-105 transition-transform">
          <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-black" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full border border-black" />
        </div>

        {/* Responsive Accessible Label: visible on both touch screens and desktop without overcrowding */}
        <div className="flex flex-col text-left leading-tight">
          <div className="flex items-center gap-1 text-[11px] sm:text-xs font-mono font-bold text-white group-hover:text-[#10B981] transition-colors">
            <span>WhatsApp</span>
            <ArrowUpRight className="w-3 h-3 text-[#10B981] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </div>
          <span className="text-[9px] sm:text-[10px] font-mono text-[#94A3B8] tracking-tight">
            +91 81858 07402
          </span>
        </div>
      </a>
    </div>
  );
};
