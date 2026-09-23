import React from 'react';
import { MessageCircle, Wrench, FileCheck, Users, Shield, Award, CheckCircle2 } from 'lucide-react';
import { TRUST_VALUES } from '../data/content';

export const TrustSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageCircle': return <MessageCircle className="w-5 h-5 text-[#00D2FF]" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-[#00A3FF]" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5 text-[#10B981]" />;
      case 'Users': return <Users className="w-5 h-5 text-[#8B5CF6]" />;
      default: return <Shield className="w-5 h-5 text-[#00D2FF]" />;
    }
  };

  return (
    <section id="trust" className="py-20 md:py-28 bg-[#000000] relative border-t border-[#1A253C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0F19] border border-[#1A253C] text-[11px] font-bold tracking-wider uppercase text-[#10B981] mb-3">
            HONEST INTEGRITY • HIGH STANDARDS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Built on Communication.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] via-[#00D2FF] to-white">
              Driven by Value.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed">
            We don&apos;t invent testimonials or inflate metrics. We earn your business through responsive communication, upfront pricing, and fast turnarounds.
          </p>
        </div>

        {/* 4 Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {TRUST_VALUES.map((val) => (
            <div
              key={val.title}
              className="p-6 rounded-2xl bg-[#0B0F19] border border-[#1A253C] hover:border-[#00D2FF]/50 hover:bg-[#111827] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#000000] border border-[#1A253C] flex items-center justify-center mb-5">
                  {getIcon(val.icon)}
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5">
                  {val.title}
                </h3>
                <p className="text-sm text-[#CBD5E1] leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Partnership Standards Bar */}
        <div className="p-6 sm:p-7 rounded-2xl bg-[#0B0F19] border border-[#1A253C] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#000000] border border-[#1A253C] flex items-center justify-center text-[#00D2FF] shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">100% Code & Asset Ownership</div>
              <div className="text-xs text-[#94A3B8]">You retain full IP and domain rights.</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#000000] border border-[#1A253C] flex items-center justify-center text-[#00A3FF] shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Milestone Previews</div>
              <div className="text-xs text-[#94A3B8]">Live link inspection before finalizing.</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#000000] border border-[#1A253C] flex items-center justify-center text-[#10B981] shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Support & Handover</div>
              <div className="text-xs text-[#94A3B8]">Complete training to update your website easily.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
