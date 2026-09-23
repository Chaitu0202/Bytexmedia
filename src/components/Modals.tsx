import React from 'react';
import { X, Check, Clock, Calendar, ArrowRight, ShieldCheck, Cpu, Layers, Tag } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200 select-none">
      <div className="bg-[#070709] border border-white/15 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-xl text-[#94A3B8] hover:text-white bg-black border border-white/10 hover:border-white/30 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-black border border-white/15 text-[#00D2FF] inline-block">
              ( {service.category.toUpperCase()} )
            </span>
            {service.price && (
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white text-black inline-flex items-center gap-1 shadow-md">
                <Tag className="w-3 h-3 text-black" />
                {service.price}
              </span>
            )}
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white font-editorial">{service.title}</h3>
          <p className="text-xs sm:text-sm font-mono text-[#CBD5E1] mt-2 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Ideal for card */}
        <div className="p-4 rounded-2xl bg-black border border-white/10 mb-6 text-left">
          <div className="text-[10px] font-mono text-[#00D2FF] uppercase tracking-wider mb-1">
            Target Commercial Fit
          </div>
          <div className="text-xs font-mono text-[#CBD5E1] leading-relaxed">
            {service.idealFor}
          </div>
        </div>

        {/* Deliverables & Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 text-left">
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-white/60 mb-3">
              Included Deliverables
            </h4>
            <div className="space-y-2">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                  <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-white/60 mb-3">
              Key Capabilities
            </h4>
            <div className="space-y-2">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                  <Check className="w-3.5 h-3.5 text-[#00D2FF] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline banner & Action */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
            <Clock className="w-4 h-4 text-[#00D2FF]" />
            <span>Scope Delivery Timeline: {service.timeline}</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onSelectForQuote(service.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-mono font-bold text-black bg-white hover:bg-[#00D2FF] hover:text-black shadow-lg transition-all cursor-pointer"
          >
            <span>Inquire About This Service</span>
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200 select-none">
      <div className="bg-[#070709] border border-white/15 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto text-left">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-xl text-[#94A3B8] hover:text-white bg-black border border-white/10 hover:border-white/30 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-black border border-white/15 text-[#00D2FF]">
              ( {project.categoryLabel.toUpperCase()} )
            </span>
            {project.badgeText && (
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-white border border-white/15">
                {project.badgeText}
              </span>
            )}
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white font-editorial">{project.title}</h3>
          <p className="text-xs sm:text-sm font-mono text-[#CBD5E1] mt-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Intended Use Case */}
        <div className="p-4 rounded-2xl bg-black border border-white/10 mb-6">
          <div className="text-[10px] font-mono text-[#00D2FF] uppercase tracking-wider mb-1">
            Intended Commercial Target
          </div>
          <div className="text-xs font-mono text-[#CBD5E1] leading-relaxed">
            {project.intendedUseCase}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <h4 className="text-[11px] font-mono uppercase tracking-wider text-white/60 mb-3">
            Implementation Specifications
          </h4>
          <div className="space-y-2">
            {project.highlights.map((h, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                <Check className="w-3.5 h-3.5 text-[#00D2FF] shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="mb-6">
          <div className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider mb-2">
            Technologies & Frameworks
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-lg bg-black border border-white/10 text-[#CBD5E1] font-mono"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-[#94A3B8]">
            Need a similar custom architecture?
          </div>
          <button
            onClick={() => {
              onClose();
              onSelectForQuote(project.categoryLabel);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-mono font-bold text-black bg-white hover:bg-[#00D2FF] hover:text-black shadow-lg transition-all cursor-pointer"
          >
            <span>Inquire for Similar Build</span>
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200 select-none">
      <div className="bg-[#070709] border border-white/15 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto text-left">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-xl text-[#94A3B8] hover:text-white bg-black border border-white/10 hover:border-white/30 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div>
            <h3 className="text-2xl font-black text-white font-editorial mb-2">Privacy Policy</h3>
            <p className="text-xs font-mono text-[#94A3B8] mb-6">Last updated: 2026</p>
            <div className="space-y-4 text-xs font-mono text-[#CBD5E1] leading-relaxed">
              <p>
                At ByteX Media, we respect your privacy. This policy explains how we collect and manage information when you explore our digital experiences and contact us for consultations.
              </p>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider pt-2">1. Information We Collect</h4>
              <p>
                We only collect information you voluntarily submit via our consultation inquiry form (such as your name, business name, email address, phone number, and project requirements).
              </p>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider pt-2">2. How We Use Information</h4>
              <p>
                Inquiries are used solely to assess project scope, communicate with you regarding service proposals, and schedule technical consultations. We never sell, rent, or distribute your contact details to third-party brokers.
              </p>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider pt-2">3. Data Security & Retention</h4>
              <p>
                Project information is protected with industry-standard security practices. You may request deletion or updates of your contact details at any time by emailing hello@bytexmedia.in.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-black text-white font-editorial mb-2">Terms of Service</h3>
            <p className="text-xs font-mono text-[#94A3B8] mb-6">Last updated: 2026</p>
            <div className="space-y-4 text-xs font-mono text-[#CBD5E1] leading-relaxed">
              <p>
                Welcome to ByteX Media. By browsing this website or engaging our services, you agree to the following terms and collaboration principles.
              </p>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider pt-2">1. Scope of Engagement</h4>
              <p>
                ByteX Media provides software engineering, web development, mobile app development, Google Business Profile optimization, and digital marketing consulting services. Specific deliverables, payment schedules, and timelines are established through individual written statements of work (SOW).
              </p>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider pt-2">2. Intellectual Property</h4>
              <p>
                Upon complete fulfillment of agreed project milestones, clients retain full ownership of bespoke source code and visual brand assets created for their deliverables, unless open-source licenses dictate otherwise.
              </p>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider pt-2">3. Transparency & Realistic Goals</h4>
              <p>
                While we apply best engineering practices and data-informed marketing methods, external search algorithms, third-party platform policies, and market dynamics remain outside direct control. We provide honest technical stewardship and milestone accountability.
              </p>
            </div>
          </div>
        )}

        <div className="pt-6 mt-6 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-mono font-bold bg-white text-black hover:bg-[#00D2FF] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
