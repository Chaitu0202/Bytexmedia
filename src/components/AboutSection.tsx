import React from 'react';
import { Sparkles, Users, Cpu, ShieldCheck, HeartHandshake, ArrowRight, Code2, GraduationCap } from 'lucide-react';
import { ByteXLogo } from './ByteXLogo';

interface AboutSectionProps {
  onStartJourney: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onStartJourney }) => {
  const pillars = [
    {
      icon: Users,
      title: 'Hungry Technical Minds',
      description: 'Driven by relentless curiosity and meticulous execution. We develop high-speed web apps and mobile solutions designed to maximize commerce.'
    },
    {
      icon: Cpu,
      title: 'Modern Architecture',
      description: 'We deploy lightning-fast modern frameworks, sub-second TTFB, automated lead routing, and Google local map pack dominance.'
    },
    {
      icon: ShieldCheck,
      title: 'Radical Transparency',
      description: 'Upfront rates (Websites ₹2,999, Apps ₹9,999, Google Business Profile ₹999), 100% intellectual property ownership, and zero surprise fees.'
    },
    {
      icon: HeartHandshake,
      title: 'Commercial Growth DNA',
      description: 'Your Growth Our Strategy. From launch to scale, we engineer conversion funnels that translate directly into business inquiries.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#000000] relative overflow-hidden border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Studio Manifesto Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-[#070709] border border-white/10 p-6 sm:p-8 shadow-2xl backdrop-blur-xl overflow-hidden">
              {/* Subtle ambient lighting */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#0052FE]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Top Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono font-bold text-white mb-6">
                <GraduationCap className="w-3.5 h-3.5 text-[#00D2FF]" />
                <span>STUDIO CODING COLLECTIVE</span>
              </div>

              {/* Visual Studio Representation */}
              <div className="w-full rounded-2xl bg-black border border-white/10 p-5 flex flex-col justify-between mb-6 relative overflow-hidden">
                <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8] mb-4">
                  <span className="text-[#00D2FF]">bytex_media_studio</span>
                  <span className="text-[#10B981] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" /> Active
                  </span>
                </div>

                <div className="py-2 flex justify-center mb-3">
                  <ByteXLogo size="md" showTagline={true} showSubtext={false} />
                </div>

                <div className="space-y-1.5 text-center">
                  <div className="text-base font-bold text-white font-editorial">
                    Engineering Ambition. Commercial Precision.
                  </div>
                  <p className="text-xs font-mono text-[#94A3B8]">
                    High-performance digital products engineered for tangible business ROI.
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#CBD5E1]">
                  <span>Development • SEO • AI</span>
                  <span className="text-white font-bold">2026 EDITION</span>
                </div>
              </div>

              {/* Core Motto Pill */}
              <div className="p-4 rounded-2xl bg-black border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-[#94A3B8] font-mono uppercase tracking-wider">Our Core Principle</div>
                  <div className="text-sm font-black text-white font-editorial">YOUR GROWTH OUR STRATEGY</div>
                </div>
                <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-[#00D2FF]">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Pillars */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <div className="text-xs font-mono tracking-widest text-[#00D2FF] uppercase mb-3 self-start">
              ( STUDIO MANIFESTO · OUR VISION )
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase font-editorial mb-4">
              BUILT BY STUDENTS.{' '}
              <span className="text-white/40">
                ENGINEERED FOR SUPREMACY.
              </span>
            </h2>

            <p className="text-xs sm:text-sm font-mono text-[#CBD5E1] leading-relaxed mb-8">
              ByteX Media was founded with a singular conviction: small and growing businesses deserve tier-one software engineering without excessive agency bureaucracy. We bridge elite modern stacks with transparent, accessible pricing.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="p-5 rounded-2xl bg-[#070709] border border-white/10 hover:border-white/25 transition-all">
                    <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-white mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-white font-editorial mb-1.5">{pillar.title}</h3>
                    <p className="text-xs font-mono text-[#94A3B8] leading-relaxed">{pillar.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Action CTA */}
            <div>
              <button
                id="about-cta"
                onClick={onStartJourney}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono font-bold text-xs sm:text-sm text-black bg-white hover:bg-[#00D2FF] hover:text-black transition-all cursor-pointer shadow-lg"
              >
                <span>Initiate Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
