import React from 'react';
import { Compass, Clock, MonitorX, GitFork, ArrowRight, ShieldAlert } from 'lucide-react';
import { BUSINESS_CHALLENGES } from '../data/content';

export const BusinessChallenge: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#3B82F6]" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-[#8B5CF6]" />;
      case 'MonitorX':
        return <MonitorX className="w-5 h-5 text-[#22D3EE]" />;
      case 'GitFork':
        return <GitFork className="w-5 h-5 text-[#34D399]" />;
      default:
        return <ShieldAlert className="w-5 h-5 text-[#3B82F6]" />;
    }
  };

  return (
    <section id="challenges" className="py-20 md:py-28 bg-[#050816] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101A33] border border-[#263653] text-[11px] font-semibold tracking-wider uppercase text-[#22D3EE] mb-3">
            Real Business Obstacles
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight mb-4">
            Your Business Has Potential.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#22D3EE]">
              Let&apos;s Unlock It.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed">
            From getting discovered online to automating everyday work, businesses need more than disconnected tools.
            ByteX Media brings design, technology, and digital growth solutions together.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_CHALLENGES.map((challenge, idx) => (
            <div
              key={challenge.id}
              id={`challenge-card-${challenge.id}`}
              className="group p-6 rounded-2xl bg-[#101A33] border border-[#263653] hover:border-[#3B82F6]/50 hover:bg-[#162342] transition-all duration-300 flex flex-col justify-between shadow-lg shadow-black/30"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0A1024] border border-[#263653] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(challenge.icon)}
                  </div>
                  <span className="text-xs font-mono text-[#94A3B8]">0{idx + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-[#F8FAFC] mb-2 group-hover:text-white transition-colors">
                  {challenge.title}
                </h3>
                <p className="text-sm text-[#CBD5E1] leading-relaxed mb-4">
                  {challenge.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#263653]/60 text-xs text-[#94A3B8] group-hover:text-[#CBD5E1] transition-colors flex items-start gap-1.5">
                <span className="text-[#22D3EE] font-medium shrink-0">How we help:</span>
                <span>{challenge.solution}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
