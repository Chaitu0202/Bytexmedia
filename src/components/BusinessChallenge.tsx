import React from 'react';
import { Compass, Clock, MonitorX, GitFork, ArrowRight, ShieldAlert } from 'lucide-react';
import { BUSINESS_CHALLENGES } from '../data/content';

export const BusinessChallenge: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#00D2FF]" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-[#8B5CF6]" />;
      case 'MonitorX':
        return <MonitorX className="w-5 h-5 text-[#00A3FF]" />;
      case 'GitFork':
        return <GitFork className="w-5 h-5 text-[#10B981]" />;
      default:
        return <ShieldAlert className="w-5 h-5 text-[#00D2FF]" />;
    }
  };

  return (
    <section id="challenges" className="py-20 md:py-28 bg-[#000000] relative overflow-hidden border-t border-[#1A253C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0F19] border border-[#1A253C] text-[11px] font-bold tracking-wider uppercase text-[#00D2FF] mb-3">
            SOLVING REAL BUSINESS OBSTACLES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Your Business Has Potential.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] via-[#00D2FF] to-white">
              Let&apos;s Unlock It.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed">
            From getting discovered online to automating everyday work, businesses need more than disconnected tools.
            ByteX Media brings design, engineering, and digital growth solutions together under one roof.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_CHALLENGES.map((challenge, idx) => (
            <div
              key={challenge.id}
              id={`challenge-card-${challenge.id}`}
              className="group p-6 rounded-2xl bg-[#0B0F19] border border-[#1A253C] hover:border-[#00D2FF]/50 hover:bg-[#111827] transition-all duration-300 flex flex-col justify-between shadow-lg shadow-black/40"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#000000] border border-[#1A253C] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(challenge.icon)}
                  </div>
                  <span className="text-xs font-mono text-[#94A3B8]">0{idx + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00D2FF] transition-colors">
                  {challenge.title}
                </h3>
                <p className="text-sm text-[#CBD5E1] leading-relaxed mb-4">
                  {challenge.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1A253C] text-xs text-[#94A3B8] group-hover:text-[#CBD5E1] transition-colors flex items-start gap-1.5">
                <span className="text-[#00D2FF] font-semibold shrink-0">How we help:</span>
                <span>{challenge.solution}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
