import React, { useState } from 'react';
import {
  Sparkles,
  Inbox,
  Cpu,
  UserCheck,
  Send,
  MessageSquare,
  Search,
  FileText,
  ShieldCheck,
  Target,
  PenTool,
  Edit3,
  Calendar,
  Layers,
  CheckSquare,
  RefreshCw,
  FileBarChart,
  ArrowRight,
  Info,
  Sliders
} from 'lucide-react';
import { AI_WORKFLOWS } from '../data/content';
import { AIWorkflowItem } from '../types';

interface AISolutionsSectionProps {
  onStartJourney: () => void;
}

export const AISolutionsSection: React.FC<AISolutionsSectionProps> = ({ onStartJourney }) => {
  const [selectedWorkflowId, setSelectedWorkflowId] = useState<string>('lead-generation');
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const currentWorkflow: AIWorkflowItem =
    AI_WORKFLOWS.find((w) => w.id === selectedWorkflowId) || AI_WORKFLOWS[0];

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Inbox': return <Inbox className="w-4 h-4 text-[#00D2FF]" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-[#8B5CF6]" />;
      case 'UserCheck': return <UserCheck className="w-4 h-4 text-amber-400" />;
      case 'Send': return <Send className="w-4 h-4 text-[#10B981]" />;
      case 'MessageSquare': return <MessageSquare className="w-4 h-4 text-[#00D2FF]" />;
      case 'Search': return <Search className="w-4 h-4 text-[#00A3FF]" />;
      case 'FileText': return <FileText className="w-4 h-4 text-[#8B5CF6]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-[#10B981]" />;
      case 'Target': return <Target className="w-4 h-4 text-[#00D2FF]" />;
      case 'PenTool': return <PenTool className="w-4 h-4 text-[#8B5CF6]" />;
      case 'Edit3': return <Edit3 className="w-4 h-4 text-amber-400" />;
      case 'Calendar': return <Calendar className="w-4 h-4 text-[#10B981]" />;
      case 'Layers': return <Layers className="w-4 h-4 text-[#00D2FF]" />;
      case 'CheckSquare': return <CheckSquare className="w-4 h-4 text-[#00A3FF]" />;
      case 'RefreshCw': return <RefreshCw className="w-4 h-4 text-[#8B5CF6]" />;
      case 'FileBarChart': return <FileBarChart className="w-4 h-4 text-[#10B981]" />;
      default: return <Sparkles className="w-4 h-4 text-[#00D2FF]" />;
    }
  };

  return (
    <section id="ai-solutions" className="py-20 md:py-28 bg-[#000000] relative border-t border-[#1A253C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0F19] border border-[#1A253C] text-[11px] font-bold tracking-wider uppercase text-[#00D2FF] mb-3">
            PRACTICAL AUTOMATION & AI
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Smart Automations for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] via-[#00D2FF] to-white">
              Everyday Operations.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed">
            Eliminate repetitive tasks with AI chatbots, instant lead capture, and workflow automations built specifically for your business.
          </p>
        </div>

        {/* Big Interactive Feature Panel */}
        <div className="rounded-3xl bg-gradient-to-b from-[#0B0F19] to-[#000000] border border-[#1A253C] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0052FE]/15 rounded-full blur-[140px] pointer-events-none" />

          {/* Conceptual Simulation Notice */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#000000] border border-[#1A253C] text-xs text-[#94A3B8] mb-8 w-fit">
            <Info className="w-4 h-4 text-[#00D2FF] shrink-0" />
            <span>Interactive conceptual workflow demonstration. Real deployments connect directly to your CRM, WhatsApp & email.</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Use-Case Selectors */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-mono uppercase text-[#94A3B8] tracking-wider mb-2">
                Select Business Workflow
              </div>

              {AI_WORKFLOWS.map((wf) => {
                const isSelected = selectedWorkflowId === wf.id;
                return (
                  <button
                    key={wf.id}
                    id={`ai-wf-tab-${wf.id}`}
                    onClick={() => {
                      setSelectedWorkflowId(wf.id);
                      setActiveStepIndex(0);
                    }}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-start justify-between gap-3 ${
                      isSelected
                        ? 'bg-[#111827] border-[#00D2FF] shadow-lg shadow-[#00A3FF]/15'
                        : 'bg-[#000000] border-[#1A253C] hover:border-[#00D2FF]/40 hover:bg-[#0B0F19]'
                    }`}
                  >
                    <div>
                      <div className={`text-sm font-bold mb-1 ${isSelected ? 'text-white' : 'text-[#CBD5E1]'}`}>
                        {wf.title}
                      </div>
                      <p className="text-xs text-[#94A3B8] line-clamp-2">
                        {wf.summary}
                      </p>
                    </div>
                    {isSelected && (
                      <span className="text-xs px-2 py-0.5 rounded-md bg-[#00D2FF]/20 text-[#00D2FF] font-mono shrink-0">
                        ACTIVE
                      </span>
                    )}
                  </button>
                );
              })}

              {/* Bottom impact callout */}
              <div className="p-4 rounded-xl bg-[#000000] border border-[#1A253C] mt-6">
                <div className="text-xs text-[#94A3B8] font-mono mb-1">Impact Goal</div>
                <div className="text-xs text-[#CBD5E1] leading-relaxed">
                  {currentWorkflow.businessImpact}
                </div>
              </div>
            </div>

            {/* Right Column: Workflow Interactive Visual Pipeline */}
            <div className="lg:col-span-7 bg-[#000000] rounded-2xl border border-[#1A253C] p-6 flex flex-col justify-between">
              <div>
                {/* Workflow Title Header */}
                <div className="flex flex-wrap items-center justify-between pb-4 border-b border-[#1A253C] gap-2 mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {currentWorkflow.title}
                    </h3>
                    <span className="text-xs text-[#94A3B8]">
                      End-to-End Orchestration Architecture
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#00D2FF] bg-[#0B0F19] px-3 py-1 rounded-full border border-[#1A253C]">
                    {currentWorkflow.steps.length} Steps
                  </span>
                </div>

                {/* Step-by-Step Interactive Pipeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                  {currentWorkflow.steps.map((step, sIdx) => {
                    const isActive = activeStepIndex === sIdx;
                    return (
                      <div
                        key={step.stage}
                        onClick={() => setActiveStepIndex(sIdx)}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                          isActive
                            ? 'bg-[#111827] border-[#00D2FF]'
                            : 'bg-[#0B0F19] border-[#1A253C] hover:border-[#00D2FF]/40'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-[#000000] border border-[#1A253C] text-[10px] font-mono flex items-center justify-center text-[#94A3B8]">
                              {step.stage}
                            </span>
                            {getStepIcon(step.icon)}
                          </div>

                          {step.isHumanReview && (
                            <span className="text-[10px] px-2 py-0.5 rounded bg-amber-400/15 text-amber-300 font-mono">
                              Human Gate
                            </span>
                          )}
                        </div>

                        <div className="text-xs font-bold text-white mb-1">
                          {step.name}
                        </div>
                        <p className="text-[11px] text-[#CBD5E1] leading-relaxed">
                          {step.detail}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Human Review & Safety Consideration */}
                <div className="p-3.5 rounded-xl bg-[#0B0F19] border border-[#1A253C] mb-6 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-amber-300 mb-0.5">
                      Reliable Oversight Safeguard
                    </div>
                    <div className="text-xs text-[#CBD5E1] leading-relaxed">
                      {currentWorkflow.reviewConsideration}
                    </div>
                  </div>
                </div>

                {/* Integrations Chips */}
                <div>
                  <div className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider mb-2">
                    Compatible Integrations:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentWorkflow.integrations.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-2.5 py-1 rounded-lg bg-[#0B0F19] border border-[#1A253C] text-[#CBD5E1]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-[#1A253C] flex items-center justify-between">
                <span className="text-xs text-[#94A3B8]">
                  Customizable triggers and webhooks
                </span>
                <button
                  id="ai-discuss-cta"
                  onClick={onStartJourney}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0052FE] via-[#00A3FF] to-[#00D2FF] hover:brightness-110 shadow-md shadow-[#00A3FF]/20 transition-all cursor-pointer"
                >
                  <span>Explore AI Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
