import React, { useState } from 'react';
import { Lightbulb, ClipboardList, Code, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';

interface ProcessSectionProps {
  onStartJourney: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartJourney }) => {
  const [activeStep, setActiveStep] = useState(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-[#00D2FF]" />;
      case 'ClipboardList':
        return <ClipboardList className="w-5 h-5 text-[#00A3FF]" />;
      case 'Code':
        return <Code className="w-5 h-5 text-[#0052FE]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#10B981]" />;
      default:
        return <Lightbulb className="w-5 h-5 text-[#00D2FF]" />;
    }
  };

  return (
    <section id="process" className="py-20 md:py-28 bg-[#000000] relative border-t border-[#1A253C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0F19] border border-[#1A253C] text-[11px] font-bold tracking-wider uppercase text-[#00D2FF] mb-3">
            CLEAR EXECUTION ROADMAP
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            The Zero to Hero{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] via-[#00D2FF] to-white">
              Journey.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed">
            Your Growth Our Strategy. We don&apos;t just deliver a file or code — we guide you through strategy, development, and launch.
          </p>
        </div>

        {/* Desktop Horizontal Connected Timeline */}
        <div className="relative mb-16">
          {/* Connecting gradient line behind nodes on desktop */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-gradient-to-r from-[#0052FE] via-[#00A3FF] to-[#00D2FF] z-0 opacity-40" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.number}
                  id={`process-step-${idx}`}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#111827] border-[#00D2FF] shadow-xl shadow-[#00A3FF]/15'
                      : 'bg-[#0B0F19] border-[#1A253C] hover:border-[#00D2FF]/40 hover:bg-[#111827]'
                  }`}
                >
                  <div>
                    {/* Number and Icon node */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-[#000000] border border-[#1A253C] flex items-center justify-center shadow-md">
                        {getIcon(step.iconName)}
                      </div>
                      <span className="text-2xl font-black tracking-tight text-[#1A253C] font-mono">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2.5 flex items-center gap-2">
                      <span>{step.title}</span>
                    </h3>
                    <p className="text-sm text-[#CBD5E1] leading-relaxed mb-6 font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverables List */}
                  <div className="pt-4 border-t border-[#1A253C] space-y-1.5">
                    <div className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider mb-2">
                      Key Deliverables:
                    </div>
                    {step.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-[#CBD5E1]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Bottom CTA Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0B0F19] via-[#111827] to-[#0B0F19] border border-[#1A253C] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
              Have a vision in mind or starting from scratch?
            </h4>
            <p className="text-sm text-[#CBD5E1]">
              We adapt our discovery and building process to your timeline and scope.
            </p>
          </div>
          <button
            id="process-cta"
            onClick={onStartJourney}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#0052FE] via-[#00A3FF] to-[#00D2FF] hover:brightness-110 shadow-lg shadow-[#00A3FF]/25 transition-all cursor-pointer"
          >
            <span>Let&apos;s Build Together</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
