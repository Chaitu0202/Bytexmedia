import React, { useState } from 'react';
import { MessageSquare, ArrowUpRight, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center select-none">
      {/* Floating Pill on Hover / Desktop */}
      <a
        href="https://wa.me/918185807402"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center gap-3 p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-[#08080A]/95 border border-[#10B981]/40 shadow-[0_0_25px_rgba(16,185,129,0.25)] hover:shadow-[0_0_35px_rgba(16,185,129,0.45)] backdrop-blur-xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 text-white cursor-pointer"
        aria-label="Direct WhatsApp Consultation +91 81858 07402"
      >
        {/* Pulse ring animation */}
        <span className="absolute -inset-0.5 rounded-full bg-[#10B981]/30 blur-sm animate-pulse pointer-events-none" />

        {/* WhatsApp Icon with green luminous badge */}
        <div className="relative w-8 h-8 rounded-full bg-[#10B981] flex items-center justify-center text-black shadow-md shrink-0 group-hover:scale-110 transition-transform">
          <MessageSquare className="w-4 h-4 fill-black" />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-white rounded-full border-2 border-black" />
        </div>

        {/* Label on desktop or on hover */}
        <div className="hidden sm:flex flex-col text-left">
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-white group-hover:text-[#10B981] transition-colors">
            <span>Direct WhatsApp</span>
            <ArrowUpRight className="w-3 h-3 text-[#10B981] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
          <span className="text-[10px] font-mono text-[#94A3B8]">
            +91 81858 07402 · 24/7 Active
          </span>
        </div>
      </a>
    </div>
  );
};
