import React from 'react';
import { Sparkles, Users, Cpu, ShieldCheck, HeartHandshake, ArrowRight, Code2, GraduationCap } from 'lucide-react';

interface AboutSectionProps {
  onStartJourney: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onStartJourney }) => {
  const pillars = [
    {
      icon: Users,
      title: 'Young & Passionate Team',
      description: 'Driven by curiosity and high standards, our student-led engineering and creative minds bring fresh perspectives to modern digital challenges.'
    },
    {
      icon: Cpu,
      title: 'Practical Technology Solutions',
      description: 'We focus on reliable tech stacks (React, TypeScript, tailored automations, local SEO) that generate actual utility without unnecessary complexity.'
    },
    {
      icon: ShieldCheck,
      title: 'Transparent Communication',
      description: 'Clear milestone roadmaps, visible progress previews, and zero misleading corporate jargon throughout your journey.'
    },
    {
      icon: HeartHandshake,
      title: 'Flexible Engagement',
      description: 'From one-off digital launches to ongoing monthly collaborations, we adapt our pace and deliverables to your business goals.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#050816] relative overflow-hidden border-t border-[#263653]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Team / Studio Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-gradient-to-b from-[#101A33] to-[#0A1024] border border-[#263653] p-6 sm:p-8 shadow-2xl overflow-hidden">
              {/* Subtle ambient lighting inside card */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#3B82F6]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8B5CF6]/15 rounded-full blur-3xl pointer-events-none" />

              {/* Top Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#050816] border border-[#263653] text-[11px] font-semibold text-[#22D3EE] mb-6">
                <GraduationCap className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>Student-Founded Collective</span>
              </div>

              {/* Visual Studio Representation */}
              <div className="w-full h-52 rounded-2xl bg-[#050816] border border-[#263653]/80 p-5 flex flex-col justify-between mb-6 relative overflow-hidden">
                <div className="flex items-center justify-between text-xs text-[#94A3B8]">
                  <span className="font-mono">byteX_collective</span>
                  <span className="text-[#34D399] flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" /> Live Studio
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="text-xl font-bold text-[#F8FAFC]">
                    Young Minds. Modern Technology. Real Business Ambition.
                  </div>
                  <p className="text-xs text-[#94A3B8]">
                    Bridging academic engineering curiosity with pragmatic market solutions.
                  </p>
                </div>

                <div className="pt-2 border-t border-[#263653]/50 flex items-center justify-between text-[11px] text-[#CBD5E1]">
                  <span>Team: Engineering • Design • Marketing</span>
                  <span className="text-[#22D3EE]">V2.0</span>
                </div>
              </div>

              {/* Ideas + Technology + Impact Pill */}
              <div className="p-4 rounded-xl bg-[#0A1024] border border-[#263653] mb-4 flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#94A3B8] font-mono uppercase tracking-wider">Our North Star</div>
                  <div className="text-sm font-bold text-[#F8FAFC]">Ideas + Technology + Impact</div>
                </div>
                <div className="w-8 h-8 rounded-lg bg-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6]">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

              {/* Authentic Photo Replacement Notice */}
              <div className="text-[11px] text-[#94A3B8] text-center pt-2">
                Team photo placeholder. Ready to be linked with verified team photography.
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Pillars */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101A33] border border-[#263653] text-[11px] font-semibold tracking-wider uppercase text-[#8B5CF6] mb-3 self-start">
              ABOUT BYTEX MEDIA
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight mb-4">
              Built by Students.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#22D3EE] to-[#8B5CF6]">
                Designed for the Real World.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed mb-8">
              We&apos;re a team of ambitious students passionate about technology, creativity, and business growth. ByteX Media brings together digital marketing, web development, AI experimentation, and design to help businesses take their next step.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="p-4 rounded-xl bg-[#101A33]/70 border border-[#263653] hover:border-[#3B82F6]/40 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-[#0A1024] border border-[#263653] flex items-center justify-center text-[#22D3EE] mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-[#F8FAFC] mb-1.5">{pillar.title}</h3>
                    <p className="text-xs text-[#CBD5E1] leading-relaxed">{pillar.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Action CTA */}
            <div>
              <button
                id="about-cta"
                onClick={onStartJourney}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-[#F8FAFC] bg-gradient-to-r from-[#2563EB] to-[#06B6D4] hover:opacity-95 shadow-md shadow-[#2563EB]/20 transition-all cursor-pointer"
              >
                <span>Let&apos;s Build Together</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
