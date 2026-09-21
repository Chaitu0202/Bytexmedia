import React from 'react';
import { X, Check, Clock, Calendar, ArrowRight, ShieldCheck, Cpu, Layers } from 'lucide-react';
import { ServiceItem, ProjectItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForQuote: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectForQuote,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#0A1024] border border-[#263653] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-[#94A3B8] hover:text-white bg-[#101A33] border border-[#263653] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6 text-left">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#101A33] border border-[#263653] text-[#22D3EE] mb-2 inline-block">
            {service.category}
          </span>
          <h3 className="text-2xl font-bold text-[#F8FAFC]">{service.title}</h3>
          <p className="text-sm text-[#CBD5E1] mt-2 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Ideal for card */}
        <div className="p-4 rounded-xl bg-[#101A33] border border-[#263653] mb-6 text-left">
          <div className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-1">
            Ideal For
          </div>
          <div className="text-xs text-[#CBD5E1] leading-relaxed">
            {service.idealFor}
          </div>
        </div>

        {/* Deliverables & Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 text-left">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F8FAFC] mb-3">
              Included Deliverables
            </h4>
            <div className="space-y-2">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                  <Check className="w-3.5 h-3.5 text-[#34D399] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F8FAFC] mb-3">
              Key Capabilities
            </h4>
            <div className="space-y-2">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                  <Check className="w-3.5 h-3.5 text-[#22D3EE] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline banner & Action */}
        <div className="pt-6 border-t border-[#263653] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
            <Clock className="w-4 h-4 text-[#3B82F6]" />
            <span>Estimated Scope Timeline: {service.timeline}</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onSelectForQuote(service.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#06B6D4] hover:opacity-95 shadow-md transition-all cursor-pointer"
          >
            <span>Request Quote for this Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectForQuote: (category: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectForQuote,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#0A1024] border border-[#263653] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-[#94A3B8] hover:text-white bg-[#101A33] border border-[#263653] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#101A33] border border-[#263653] text-[#22D3EE]">
              {project.categoryLabel}
            </span>
            {project.badgeText && (
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/30">
                {project.badgeText}
              </span>
            )}
          </div>
          <h3 className="text-2xl font-bold text-[#F8FAFC]">{project.title}</h3>
          <p className="text-sm text-[#CBD5E1] mt-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Intended Use Case */}
        <div className="p-4 rounded-xl bg-[#101A33] border border-[#263653] mb-6">
          <div className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-1">
            Intended Business Outcome
          </div>
          <div className="text-xs text-[#CBD5E1] leading-relaxed">
            {project.intendedUseCase}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#F8FAFC] mb-3">
            Implementation Highlights
          </h4>
          <div className="space-y-2">
            {project.highlights.map((h, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                <Check className="w-3.5 h-3.5 text-[#34D399] shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="mb-6">
          <div className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-2">
            Technologies & Frameworks
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-lg bg-[#050816] border border-[#263653] text-[#CBD5E1] font-mono"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-6 border-t border-[#263653] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#94A3B8]">
            Want a tailored solution like this?
          </div>
          <button
            onClick={() => {
              onClose();
              onSelectForQuote(project.categoryLabel);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#06B6D4] hover:opacity-95 shadow-md transition-all cursor-pointer"
          >
            <span>Discuss This Type of Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#0A1024] border border-[#263653] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-[#94A3B8] hover:text-white bg-[#101A33] border border-[#263653] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div>
            <h3 className="text-2xl font-bold text-[#F8FAFC] mb-2">Privacy Policy</h3>
            <p className="text-xs text-[#94A3B8] mb-6">Last updated: September 2026</p>
            <div className="space-y-4 text-xs text-[#CBD5E1] leading-relaxed">
              <p>
                At ByteX Media, we respect your privacy. This policy explains how we collect and manage information when you explore our digital experiences and contact us for consultations.
              </p>
              <h4 className="text-sm font-bold text-[#F8FAFC] pt-2">1. Information We Collect</h4>
              <p>
                We only collect information you voluntarily submit via our consultation inquiry form (such as your name, business name, email address, phone number, and project scope details).
              </p>
              <h4 className="text-sm font-bold text-[#F8FAFC] pt-2">2. How We Use Information</h4>
              <p>
                Inquiries are used solely to assess project scope, communicate with you regarding service proposals, and schedule technical consultations. We never sell, rent, or distribute your contact details to third-party brokers.
              </p>
              <h4 className="text-sm font-bold text-[#F8FAFC] pt-2">3. Data Security & Retention</h4>
              <p>
                Project information is protected with industry-standard security practices. You may request deletion or updates of your contact details at any time by emailing hello@bytexmedia.com.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-bold text-[#F8FAFC] mb-2">Terms of Service</h3>
            <p className="text-xs text-[#94A3B8] mb-6">Last updated: September 2026</p>
            <div className="space-y-4 text-xs text-[#CBD5E1] leading-relaxed">
              <p>
                Welcome to ByteX Media. By browsing this website or engaging our services, you agree to the following terms and collaboration principles.
              </p>
              <h4 className="text-sm font-bold text-[#F8FAFC] pt-2">1. Scope of Engagement</h4>
              <p>
                ByteX Media provides software engineering, mobile app development, workflow automation, and digital marketing consulting services. Specific deliverables, payment schedules, and timelines are established through individual written statements of work (SOW).
              </p>
              <h4 className="text-sm font-bold text-[#F8FAFC] pt-2">2. Intellectual Property</h4>
              <p>
                Upon complete fulfillment of agreed project milestones, clients retain full ownership of bespoke source code and visual brand assets created for their deliverables, unless open-source licenses dictate otherwise.
              </p>
              <h4 className="text-sm font-bold text-[#F8FAFC] pt-2">3. Transparency & Realistic Goals</h4>
              <p>
                While we apply best engineering practices and data-informed marketing methods, external search algorithms, third-party platform policies, and market dynamics remain outside direct control. We provide honest technical stewardship and milestone accountability.
              </p>
            </div>
          </div>
        )}

        <div className="pt-6 mt-6 border-t border-[#263653] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#101A33] text-[#F8FAFC] border border-[#263653] hover:bg-[#162342] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
