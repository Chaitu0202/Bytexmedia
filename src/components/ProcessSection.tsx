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
      case 'Lightbulb': return <Lightbulb className="w-5 h-5 text-white" />;
      case 'ClipboardList': return <ClipboardList className="w-5 h-5 text-white" />;
      case 'Code': return <Code className="w-5 h-5 text-white" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-white" />;
      default: return <Lightbulb className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="process" className="py-20 md:py-28 bg-[#000000] relative border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-mono tracking-widest text-[#00D2FF] uppercase mb-3">
            ( EXECUTION PROTOCOL · DELIVERY PHASES )
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase font-editorial mb-4">
            THE ZERO TO HERO{' '}
            <span className="text-white/40">
              JOURNEY.
            </span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[#CBD5E1] leading-relaxed max-w-2xl">
            Your Growth Our Strategy. Transparent milestones, rapid prototypes, and guaranteed delivery within committed timelines.
          </p>
        </div>

        {/* Desktop Connected Milestones */}
        <div className="relative mb-16">
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-px bg-white/10 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.number}
                  id={`process-step-${idx}`}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between backdrop-blur-xl ${
                    isSelected
                      ? 'bg-white text-black border-white shadow-2xl scale-[1.02]'
                      : 'bg-[#070709] border-white/10 hover:border-white/25 text-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm ${
                          isSelected
                            ? 'bg-black text-white'
                            : 'bg-white/10 text-[#00D2FF] border border-white/15'
                        }`}
                      >
                        {step.number}
                      </div>
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                          isSelected ? 'bg-black/10 text-black' : 'bg-white/5 text-white'
                        }`}
                      >
                        {getIcon(step.iconName)}
                      </div>
                    </div>

                    <h3 className={`text-lg font-black font-editorial mb-2 ${isSelected ? 'text-black' : 'text-white'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-xs font-mono leading-relaxed mb-4 ${isSelected ? 'text-black/75' : 'text-[#94A3B8]'}`}>
                      {step.description}
                    </p>
                  </div>

                  <div className={`pt-3 border-t text-[11px] font-mono flex items-center gap-1.5 ${isSelected ? 'border-black/15 text-black font-bold' : 'border-white/10 text-[#00D2FF]'}`}>
                    <span>Phase 0{idx + 1} Deliverables</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Phase Detail Focus */}
        <div className="rounded-3xl bg-[#070709] border border-white/10 p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-left backdrop-blur-xl">
          <div className="space-y-3">
            <div className="text-xs font-mono text-[#00D2FF] uppercase tracking-wider">
              Active Milestone: {PROCESS_STEPS[activeStep].number} — {PROCESS_STEPS[activeStep].title}
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-white font-editorial">
              Concrete Output & Deliverables
            </h4>
            <div className="flex flex-wrap gap-2 pt-1">
              {PROCESS_STEPS[activeStep].deliverables.map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-black border border-white/10 text-xs font-mono text-[#CBD5E1]"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={onStartJourney}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-mono font-bold text-black bg-white hover:bg-[#00D2FF] hover:text-black transition-all cursor-pointer shadow-lg shrink-0"
          >
            <span>Start Your Build</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
