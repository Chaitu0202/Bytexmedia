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
  Info
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
      case 'Inbox': return <Inbox className="w-4 h-4 text-white" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-[#00D2FF]" />;
      case 'UserCheck': return <UserCheck className="w-4 h-4 text-[#10B981]" />;
      case 'Send': return <Send className="w-4 h-4 text-white" />;
      case 'MessageSquare': return <MessageSquare className="w-4 h-4 text-[#00D2FF]" />;
      case 'Search': return <Search className="w-4 h-4 text-white" />;
      case 'FileText': return <FileText className="w-4 h-4 text-white" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-[#10B981]" />;
      case 'Target': return <Target className="w-4 h-4 text-[#00D2FF]" />;
      case 'PenTool': return <PenTool className="w-4 h-4 text-white" />;
      case 'Edit3': return <Edit3 className="w-4 h-4 text-white" />;
      case 'Calendar': return <Calendar className="w-4 h-4 text-[#10B981]" />;
      case 'Layers': return <Layers className="w-4 h-4 text-white" />;
      case 'CheckSquare': return <CheckSquare className="w-4 h-4 text-[#10B981]" />;
      case 'RefreshCw': return <RefreshCw className="w-4 h-4 text-[#00D2FF]" />;
      case 'FileBarChart': return <FileBarChart className="w-4 h-4 text-white" />;
      default: return <Sparkles className="w-4 h-4 text-[#00D2FF]" />;
    }
  };

  return (
    <section id="ai-solutions" className="py-20 md:py-28 bg-[#000000] relative border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-mono tracking-widest text-[#00D2FF] uppercase mb-3">
            ( INTELLIGENT AUTOMATION · AI WORKFLOWS )
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase font-editorial mb-4">
            AI WORKFLOWS.{' '}
            <span className="text-white/40">
              ZERO OPERATIONAL FRICTION.
            </span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[#CBD5E1] leading-relaxed max-w-2xl">
            Automate WhatsApp customer qualification, booking routing, and content generation. Connects directly to your daily tools.
          </p>
        </div>

        {/* Interactive Feature Panel in Studio Style */}
        <div className="rounded-3xl bg-[#070709] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          {/* Conceptual Simulation Notice */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/70 mb-8 w-fit">
            <Info className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
            <span>Direct pipeline integration with WhatsApp API, Google Sheets & CRM.</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Use-Case Selectors */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-mono uppercase text-[#94A3B8] tracking-wider mb-2">
                ( SELECT ACTIVE BLUEPRINT )
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
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start justify-between gap-3 ${
                      isSelected
                        ? 'bg-white text-black border-white shadow-xl shadow-white/5'
                        : 'bg-black border-white/10 hover:border-white/25 text-white'
                    }`}
                  >
                    <div>
                      <div className={`text-sm font-black font-editorial mb-1 ${isSelected ? 'text-black' : 'text-white'}`}>
                        {wf.title}
                      </div>
                      <p className={`text-xs font-mono line-clamp-2 ${isSelected ? 'text-black/70' : 'text-[#94A3B8]'}`}>
                        {wf.summary}
                      </p>
                    </div>
                    {isSelected && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-black text-white font-mono shrink-0">
                        ACTIVE
                      </span>
                    )}
                  </button>
                );
              })}

              {/* Bottom impact callout */}
              <div className="p-4 rounded-2xl bg-black border border-white/10 mt-6">
                <div className="text-[10px] text-[#00D2FF] font-mono uppercase tracking-wider mb-1">
                  Validated Impact
                </div>
                <div className="text-xs font-mono text-[#CBD5E1] leading-relaxed">
                  {currentWorkflow.businessImpact}
                </div>
              </div>
            </div>

            {/* Right Column: Workflow Interactive Visual Pipeline */}
            <div className="lg:col-span-7 bg-black rounded-2xl border border-white/10 p-6 flex flex-col justify-between">
              <div>
                {/* Workflow Title Header */}
                <div className="flex flex-wrap items-center justify-between pb-4 border-b border-white/10 gap-2 mb-6">
                  <div>
                    <h3 className="text-lg font-black text-white font-editorial">
                      {currentWorkflow.title}
                    </h3>
                    <span className="text-xs font-mono text-[#94A3B8]">
                      End-to-End Orchestration Architecture
                    </span>
                  </div>
                  <span className="text-xs font-mono text-black bg-white px-3 py-1 rounded-full font-bold">
                    {currentWorkflow.steps.length} Steps
                  </span>
                </div>

                {/* Step-by-Step Interactive Pipeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {currentWorkflow.steps.map((step, sIdx) => {
                    const isActive = activeStepIndex === sIdx;
                    return (
                      <div
                        key={step.stage}
                        onClick={() => setActiveStepIndex(sIdx)}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                          isActive
                            ? 'bg-[#111116] border-[#00D2FF]'
                            : 'bg-[#070709] border-white/10 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-white/10 border border-white/15 text-[10px] font-mono flex items-center justify-center text-white">
                              {step.stage}
                            </span>
                            {getStepIcon(step.icon)}
                          </div>

                          {step.isHumanReview && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white font-mono">
                              Human Gate
                            </span>
                          )}
                        </div>

                        <div className="text-xs font-bold text-white mb-1">
                          {step.name}
                        </div>
                        <p className="text-[11px] font-mono text-[#CBD5E1] leading-relaxed">
                          {step.detail}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Human Review & Safety Consideration */}
                <div className="p-3.5 rounded-xl bg-[#070709] border border-white/10 mb-6 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-[#10B981] shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white mb-0.5">
                      Reliable Quality Safeguard
                    </div>
                    <div className="text-xs font-mono text-[#CBD5E1] leading-relaxed">
                      {currentWorkflow.reviewConsideration}
                    </div>
                  </div>
                </div>

                {/* Integrations Chips */}
                <div>
                  <div className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-wider mb-2">
                    Compatible Integrations:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentWorkflow.integrations.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs font-mono px-2.5 py-1 rounded-lg bg-[#070709] border border-white/10 text-[#CBD5E1]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-mono text-[#94A3B8]">
                  Direct webhook and API dispatch
                </span>
                <button
                  id="ai-discuss-cta"
                  onClick={onStartJourney}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold text-black bg-white hover:bg-[#00D2FF] hover:text-black transition-all cursor-pointer shadow-lg"
                >
                  <span>Inquire for Deployment</span>
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
