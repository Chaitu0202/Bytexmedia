import React, { useState } from 'react';
import {
  ArrowRight,
  Code,
  Sparkles,
  TrendingUp,
  MapPin,
  Palette,
  CheckCircle2,
  Terminal,
  Cpu,
  Layers,
  Zap,
  Globe,
  Smartphone
} from 'lucide-react';

interface HeroProps {
  onStartJourney: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartJourney, onExploreServices }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'radar'>('preview');

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden flex items-center bg-[#050816]"
    >
      {/* Subtle atmospheric background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#3B82F6]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[300px] bg-[#8B5CF6]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[250px] bg-[#22D3EE]/8 rounded-full blur-[110px] pointer-events-none" />

      {/* Subtle engineering grid background */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#F8FAFC 1px, transparent 1px), linear-gradient(to right, #F8FAFC 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Student-Powered Pill Badge */}
            <div
              id="hero-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101A33]/80 border border-[#263653] shadow-xs backdrop-blur-md mb-6 hover:border-[#3B82F6]/50 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22D3EE]"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-[#CBD5E1]">
                Student-Powered Digital Marketing & Technology Company
              </span>
            </div>

            {/* Main Heading */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#F8FAFC] tracking-tight leading-[1.12] mb-6"
            >
              Your Business Deserves More Than Just a Digital Presence.{' '}
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#22D3EE] to-[#8B5CF6]">
                It Deserves a Growth Engine.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p
              id="hero-subtext"
              className="text-base sm:text-lg text-[#CBD5E1] max-w-2xl leading-relaxed mb-8 font-normal"
            >
              We build websites, apps, AI automations, and digital growth solutions that help businesses move from zero to hero.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                id="hero-primary-cta"
                onClick={onStartJourney}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[#F8FAFC] bg-gradient-to-r from-[#2563EB] to-[#06B6D4] hover:opacity-95 shadow-lg shadow-[#2563EB]/25 hover:shadow-[#2563EB]/40 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[#CBD5E1] bg-[#101A33] border border-[#263653] hover:bg-[#162342] hover:text-white transition-all cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-[#94A3B8]" />
              </button>
            </div>

            {/* Trust and Support Strip */}
            <div
              id="hero-trust-strip"
              className="pt-6 border-t border-[#263653]/60 w-full flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm font-medium text-[#94A3B8]"
            >
              <span className="flex items-center gap-1.5 text-[#CBD5E1]">
                <Globe className="w-3.5 h-3.5 text-[#3B82F6]" /> Websites
              </span>
              <span className="text-[#263653]">•</span>
              <span className="flex items-center gap-1.5 text-[#CBD5E1]">
                <Smartphone className="w-3.5 h-3.5 text-[#22D3EE]" /> Apps
              </span>
              <span className="text-[#263653]">•</span>
              <span className="flex items-center gap-1.5 text-[#CBD5E1]">
                <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" /> AI Automations
              </span>
              <span className="text-[#263653]">•</span>
              <span className="flex items-center gap-1.5 text-[#CBD5E1]">
                <TrendingUp className="w-3.5 h-3.5 text-[#34D399]" /> Marketing
              </span>
              <span className="text-[#263653]">•</span>
              <span className="flex items-center gap-1.5 text-[#CBD5E1]">
                <Palette className="w-3.5 h-3.5 text-[#6366F1]" /> Creative Solutions
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Tech Terminal / Laptop Mockup Frame */}
            <div
              id="hero-interactive-frame"
              className="w-full max-w-lg bg-[#0A1024] border border-[#263653] rounded-2xl shadow-2xl shadow-black/60 overflow-hidden relative"
            >
              {/* Top Window Bar */}
              <div className="bg-[#101A33] px-4 py-3 border-b border-[#263653] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#10B981]/80" />
                  <span className="ml-2 text-[11px] font-mono text-[#94A3B8] tracking-wide">
                    bytex.engine.tsx
                  </span>
                </div>
                {/* Visual View Switcher */}
                <div className="flex items-center gap-1 bg-[#050816] p-0.5 rounded-lg border border-[#263653]/70">
                  <button
                    onClick={() => setActiveTab('preview')}
                    className={`px-2 py-1 text-[10px] font-medium rounded-md transition-colors ${
                      activeTab === 'preview'
                        ? 'bg-[#162342] text-[#22D3EE]'
                        : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={() => setActiveTab('radar')}
                    className={`px-2 py-1 text-[10px] font-medium rounded-md transition-colors ${
                      activeTab === 'radar'
                        ? 'bg-[#162342] text-[#8B5CF6]'
                        : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    Health Score
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-2 py-1 text-[10px] font-medium rounded-md transition-colors ${
                      activeTab === 'code'
                        ? 'bg-[#162342] text-[#3B82F6]'
                        : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    Pipeline
                  </button>
                </div>
              </div>

              {/* Window Content */}
              <div className="p-5 min-h-[310px] bg-[#050816]/70 flex flex-col justify-between">
                {activeTab === 'preview' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-3 border-b border-[#263653]/60">
                      <div>
                        <div className="text-xs text-[#94A3B8]">Unified Digital Engine</div>
                        <div className="text-sm font-bold text-[#F8FAFC] flex items-center gap-2">
                          Client Growth Pipeline
                          <span className="text-[10px] px-2 py-0.5 rounded bg-[#34D399]/20 text-[#34D399] font-mono">
                            ACTIVE
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-[#3B82F6] font-mono">Zero → Hero</span>
                      </div>
                    </div>

                    {/* Metric Cards Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-[#101A33] border border-[#263653]">
                        <div className="flex items-center justify-between text-xs text-[#94A3B8] mb-1">
                          <span>Web Speed</span>
                          <Zap className="w-3.5 h-3.5 text-[#22D3EE]" />
                        </div>
                        <div className="text-lg font-bold text-[#F8FAFC]">0.8s</div>
                        <div className="text-[11px] text-[#34D399] font-medium">99 Core Web Vitals</div>
                      </div>

                      <div className="p-3 rounded-xl bg-[#101A33] border border-[#263653]">
                        <div className="flex items-center justify-between text-xs text-[#94A3B8] mb-1">
                          <span>AI Workflow</span>
                          <Cpu className="w-3.5 h-3.5 text-[#8B5CF6]" />
                        </div>
                        <div className="text-lg font-bold text-[#F8FAFC]">Automated</div>
                        <div className="text-[11px] text-[#8B5CF6] font-medium">Human in the loop</div>
                      </div>
                    </div>

                    {/* Active Workflow Status Row */}
                    <div className="p-3 rounded-xl bg-[#0A1024] border border-[#263653] flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6]">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-[#F8FAFC]">Google Business Profile</div>
                          <div className="text-[11px] text-[#94A3B8]">100% Verified & Local SEO Indexed</div>
                        </div>
                      </div>
                      <span className="text-xs text-[#22D3EE] font-medium">Ready</span>
                    </div>
                  </div>
                )}

                {activeTab === 'radar' && (
                  <div className="space-y-3.5 animate-in fade-in duration-200">
                    <div className="text-xs text-[#94A3B8] flex items-center justify-between">
                      <span>Full-Spectrum Digital Readiness</span>
                      <span className="text-[#34D399] font-mono font-semibold">98 / 100</span>
                    </div>

                    <div className="space-y-2.5">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-[#CBD5E1]">Architecture & Mobile Responsiveness</span>
                          <span className="text-[#3B82F6] font-mono">100%</span>
                        </div>
                        <div className="w-full h-1.5 bg-[#162342] rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] w-full" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-[#CBD5E1]">Local Search & Google Profile Indexing</span>
                          <span className="text-[#22D3EE] font-mono">96%</span>
                        </div>
                        <div className="w-full h-1.5 bg-[#162342] rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#22D3EE] to-[#34D399] w-[96%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-[#CBD5E1]">Intelligent Repetitive Task Automation</span>
                          <span className="text-[#8B5CF6] font-mono">95%</span>
                        </div>
                        <div className="w-full h-1.5 bg-[#162342] rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] w-[95%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-[#CBD5E1]">Consistent Visual Brand Identity</span>
                          <span className="text-[#34D399] font-mono">98%</span>
                        </div>
                        <div className="w-full h-1.5 bg-[#162342] rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#34D399] to-[#22D3EE] w-[98%]" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'code' && (
                  <div className="font-mono text-xs text-[#CBD5E1] space-y-1.5 bg-[#050816] p-3 rounded-lg border border-[#263653]/60 animate-in fade-in duration-200">
                    <div className="text-[#94A3B8]">// ByteX Multi-tier Architecture</div>
                    <div>
                      <span className="text-[#8B5CF6]">const</span> clientPipeline ={' '}
                      <span className="text-[#3B82F6]">await</span> byteXEngine.{' '}
                      <span className="text-[#22D3EE]">initialize</span>({`{`}
                    </div>
                    <div className="pl-4">
                      ui: <span className="text-[#34D399]">&apos;responsive-react-vite&apos;</span>,
                    </div>
                    <div className="pl-4">
                      seo: <span className="text-[#34D399]">&apos;structured-local-schema&apos;</span>,
                    </div>
                    <div className="pl-4">
                      automation: <span className="text-[#34D399]">&apos;smart-webhook-triage&apos;</span>,
                    </div>
                    <div className="pl-4">
                      guardrails: <span className="text-[#8B5CF6]">true</span>
                    </div>
                    <div>{`});`}</div>
                    <div className="text-[#34D399] pt-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Pipeline active. Ready for production deployment.
                    </div>
                  </div>
                )}

                {/* Bottom interactive status bar */}
                <div className="pt-3 border-t border-[#263653]/50 flex items-center justify-between text-[11px] text-[#94A3B8]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                    Engine status: Optimal
                  </span>
                  <span>ByteX Core v2.4</span>
                </div>
              </div>
            </div>

            {/* Floating Service Badges around mockup */}
            <div className="hidden sm:flex absolute -top-4 -left-6 z-20 items-center gap-2 px-3 py-2 rounded-xl bg-[#101A33]/95 border border-[#3B82F6]/40 shadow-xl backdrop-blur-md">
              <Code className="w-4 h-4 text-[#3B82F6]" />
              <span className="text-xs font-semibold text-[#F8FAFC]">Web Apps & Websites</span>
            </div>

            <div className="hidden sm:flex absolute -bottom-5 -left-4 z-20 items-center gap-2 px-3 py-2 rounded-xl bg-[#101A33]/95 border border-[#8B5CF6]/40 shadow-xl backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
              <span className="text-xs font-semibold text-[#F8FAFC]">AI Automations</span>
            </div>

            <div className="hidden sm:flex absolute -bottom-4 -right-4 z-20 items-center gap-2 px-3 py-2 rounded-xl bg-[#101A33]/95 border border-[#34D399]/40 shadow-xl backdrop-blur-md">
              <TrendingUp className="w-4 h-4 text-[#34D399]" />
              <span className="text-xs font-semibold text-[#F8FAFC]">Digital Marketing</span>
            </div>

            <div className="hidden sm:flex absolute top-12 -right-8 z-20 items-center gap-2 px-3 py-2 rounded-xl bg-[#101A33]/95 border border-[#22D3EE]/40 shadow-xl backdrop-blur-md">
              <MapPin className="w-4 h-4 text-[#22D3EE]" />
              <span className="text-xs font-semibold text-[#F8FAFC]">Google Business Profile</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
