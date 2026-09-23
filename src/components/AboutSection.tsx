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
      title: 'Young & Driven Engineering',
      description: 'Driven by intense curiosity and high standards, our student-led engineering minds build modern, fast applications that actually generate revenue.'
    },
    {
      icon: Cpu,
      title: 'High-Impact Practical Tech',
      description: 'We focus on proven stacks (React, modern web frameworks, tailored automations, local SEO) that provide real business leverage with no unnecessary fluff.'
    },
    {
      icon: ShieldCheck,
      title: 'Transparent Pricing & Delivery',
      description: 'Upfront rates (Websites ₹2,999, Apps ₹9,999, Google Business Profile ₹999), visible progress previews, and zero surprise charges.'
    },
    {
      icon: HeartHandshake,
      title: 'Your Growth, Our Strategy',
      description: 'From rapid digital launches to high-converting Instagram handling and local customer acquisition, we align every step with your revenue.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#000000] relative overflow-hidden border-t border-[#1A253C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Team / Studio Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-gradient-to-b from-[#0B0F19] to-[#000000] border border-[#1A253C] p-6 sm:p-8 shadow-2xl overflow-hidden">
              {/* Subtle ambient lighting */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#0052FE]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Top Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#000000] border border-[#1A253C] text-[11px] font-semibold text-[#00D2FF] mb-6">
                <GraduationCap className="w-3.5 h-3.5 text-[#00A3FF]" />
                <span>Student-Founded Digital Studio</span>
              </div>

              {/* Visual Studio Representation */}
              <div className="w-full rounded-2xl bg-[#000000] border border-[#1A253C] p-5 flex flex-col justify-between mb-6 relative overflow-hidden">
                <div className="flex items-center justify-between text-xs text-[#94A3B8] mb-4">
                  <span className="font-mono text-[#00D2FF]">bytex_media</span>
                  <span className="text-[#10B981] flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" /> Active Studio
                  </span>
                </div>

                <div className="py-2 flex justify-center mb-3">
                  <ByteXLogo size="md" showTagline={true} showSubtext={false} />
                </div>

                <div className="space-y-1.5 text-center">
                  <div className="text-base font-bold text-white">
                    Young Minds. Modern Technology. Real Business Ambition.
                  </div>
                  <p className="text-xs text-[#94A3B8]">
                    Bridging cutting-edge web & mobile technology with unmatched pricing.
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-[#1A253C] flex items-center justify-between text-[11px] text-[#CBD5E1]">
                  <span>Development • Marketing • SEO</span>
                  <span className="text-[#00D2FF] font-mono font-bold">2025 Edition</span>
                </div>
              </div>

              {/* Ideas + Technology + Impact Pill */}
              <div className="p-4 rounded-xl bg-[#000000] border border-[#1A253C] flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#94A3B8] font-mono uppercase tracking-wider">Our Core Moto</div>
                  <div className="text-sm font-bold text-white">Your Growth Our Strategy</div>
                </div>
                <div className="w-8 h-8 rounded-lg bg-[#00D2FF]/20 flex items-center justify-center text-[#00D2FF]">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Pillars */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0F19] border border-[#1A253C] text-[11px] font-bold tracking-wider uppercase text-[#00D2FF] mb-3 self-start">
              ABOUT BYTEX MEDIA
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Built by Students.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] via-[#00D2FF] to-white">
                Engineered for High Performance.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed mb-8">
              We&apos;re a team of ambitious student developers, marketers, and designers dedicated to empowering local businesses and startups. ByteX Media brings together high-speed web development, mobile apps, Instagram management, and Google Business local ranking so you get more customers, not just a link.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="p-4 rounded-xl bg-[#0B0F19] border border-[#1A253C] hover:border-[#00D2FF]/40 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-[#000000] border border-[#1A253C] flex items-center justify-center text-[#00D2FF] mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1.5">{pillar.title}</h3>
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#0052FE] via-[#00A3FF] to-[#00D2FF] hover:brightness-110 shadow-lg shadow-[#00A3FF]/25 transition-all cursor-pointer"
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
