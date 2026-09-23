import React from 'react';
import { MessageCircle, Wrench, FileCheck, Users, Shield, Award, CheckCircle2 } from 'lucide-react';
import { TRUST_VALUES } from '../data/content';

export const TrustSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageCircle': return <MessageCircle className="w-5 h-5 text-white" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-white" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5 text-white" />;
      case 'Users': return <Users className="w-5 h-5 text-white" />;
      default: return <Shield className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="trust" className="py-20 md:py-28 bg-[#000000] relative border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-mono tracking-widest text-[#00D2FF] uppercase mb-3">
            ( QUALITY COMMITMENT · STANDARDS OF ENGAGEMENT )
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase font-editorial mb-4">
            COMMUNICATION.{' '}
            <span className="text-white/40">
              HONEST EXECUTION.
            </span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[#CBD5E1] leading-relaxed max-w-2xl">
            Zero inflated metrics or misleading claims. We earn your commercial loyalty through daily transparency, responsive WhatsApp communication, and verified deliverables.
          </p>
        </div>

        {/* 4 Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {TRUST_VALUES.map((val) => (
            <div
              key={val.title}
              className="p-6 rounded-3xl bg-[#070709] border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-5 text-white">
                  {getIcon(val.icon)}
                </div>
                <h3 className="text-base font-bold text-white font-editorial mb-2">
                  {val.title}
                </h3>
                <p className="text-xs font-mono text-[#94A3B8] leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Partnership Standards Bar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#070709] border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#00D2FF] shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white font-mono uppercase">Direct Contact</div>
              <div className="text-[11px] font-mono text-[#94A3B8]">WhatsApp and direct phone lines</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#10B981] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white font-mono uppercase">Full Repository Access</div>
              <div className="text-[11px] font-mono text-[#94A3B8]">Zero vendor lock-in or hostages</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white font-mono uppercase">Milestone Deliveries</div>
              <div className="text-[11px] font-mono text-[#94A3B8]">Review staging before full payment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
