import React from 'react';
import { MessageCircle, Wrench, FileCheck, Users, Shield, Award, CheckCircle2 } from 'lucide-react';
import { TRUST_VALUES } from '../data/content';

export const TrustSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageCircle': return <MessageCircle className="w-5 h-5 text-[#3B82F6]" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-[#22D3EE]" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5 text-[#34D399]" />;
      case 'Users': return <Users className="w-5 h-5 text-[#8B5CF6]" />;
      default: return <Shield className="w-5 h-5 text-[#3B82F6]" />;
    }
  };

  return (
    <section id="trust" className="py-20 md:py-28 bg-[#0A1024] relative border-t border-[#263653]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101A33] border border-[#263653] text-[11px] font-semibold tracking-wider uppercase text-[#34D399] mb-3">
            TRUST & PRINCIPLES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight mb-4">
            Built on Communication.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] via-[#3B82F6] to-[#8B5CF6]">
              Driven by Possibility.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed">
            We don&apos;t invent testimonials or inflate metrics. We earn trust through responsiveness, modern engineering discipline, and transparent collaboration.
          </p>
        </div>

        {/* 4 Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {TRUST_VALUES.map((val) => (
            <div
              key={val.title}
              className="p-6 rounded-2xl bg-[#101A33] border border-[#263653] hover:border-[#3B82F6]/50 hover:bg-[#162342] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0A1024] border border-[#263653] flex items-center justify-center mb-5">
                  {getIcon(val.icon)}
                </div>
                <h3 className="text-lg font-bold text-[#F8FAFC] mb-2.5">
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
        <div className="p-6 sm:p-7 rounded-2xl bg-[#050816] border border-[#263653] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#101A33] border border-[#263653] flex items-center justify-center text-[#3B82F6] shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#F8FAFC]">100% Code Ownership</div>
              <div className="text-xs text-[#94A3B8]">You retain full IP and codebase rights.</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#101A33] border border-[#263653] flex items-center justify-center text-[#22D3EE] shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#F8FAFC]">Milestone Reviews</div>
              <div className="text-xs text-[#94A3B8]">Progress sign-offs before next phases.</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#101A33] border border-[#263653] flex items-center justify-center text-[#8B5CF6] shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#F8FAFC]">Post-Launch Handover</div>
              <div className="text-xs text-[#94A3B8]">Comprehensive walkthrough and support.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
