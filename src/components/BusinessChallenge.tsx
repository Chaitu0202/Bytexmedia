import React from 'react';
import { Compass, Clock, MonitorX, GitFork, ArrowRight, ShieldAlert } from 'lucide-react';
import { BUSINESS_CHALLENGES } from '../data/content';

export const BusinessChallenge: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-5 h-5 text-white" />;
      case 'Clock': return <Clock className="w-5 h-5 text-white" />;
      case 'MonitorX': return <MonitorX className="w-5 h-5 text-white" />;
      case 'GitFork': return <GitFork className="w-5 h-5 text-white" />;
      default: return <ShieldAlert className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="challenges" className="py-20 md:py-28 bg-[#000000] relative overflow-hidden border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-mono tracking-widest text-[#00D2FF] uppercase mb-3">
            ( PROBLEM ANALYSIS · COMMERCIAL BOTTLENECKS )
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase font-editorial mb-4">
            UNLOCKING HIDDEN{' '}
            <span className="text-white/40">
              GROWTH CAPACITY.
            </span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[#CBD5E1] leading-relaxed max-w-2xl">
            From fragmented marketing to slow legacy sites. ByteX Studio dismantles technical bottlenecks with high-converting systems.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_CHALLENGES.map((challenge, idx) => (
            <div
              key={challenge.id}
              id={`challenge-card-${challenge.id}`}
              className="group p-6 rounded-3xl bg-[#070709] border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between shadow-2xl backdrop-blur-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                    {getIcon(challenge.icon)}
                  </div>
                  <span className="text-xs font-mono text-[#00D2FF]">0{idx + 1}</span>
                </div>
                <h3 className="text-base font-bold text-white font-editorial mb-2 group-hover:text-[#00D2FF] transition-colors">
                  {challenge.title}
                </h3>
                <p className="text-xs font-mono text-[#94A3B8] leading-relaxed mb-4">
                  {challenge.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10">
                <div className="text-[10px] font-mono text-white/50 uppercase tracking-wider mb-1">
                  Engineered Fix
                </div>
                <div className="text-xs font-mono text-[#10B981] font-semibold flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5" />
                  <span>{challenge.solution}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
