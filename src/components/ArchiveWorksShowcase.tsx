import React, { useState } from 'react';
import {
  ExternalLink,
  ArrowRight,
  TrendingUp,
  Smartphone,
  Globe,
  Sparkles,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { NavTab } from './Navbar';
import { ProjectItem } from '../types';
import { FEATURED_PROJECTS } from '../data/content';

interface ArchiveWorksShowcaseProps {
  onNavigate: (tab: NavTab) => void;
  onSelectProject: (project: ProjectItem) => void;
  onStartJourney: (serviceName?: string) => void;
}

export const ArchiveWorksShowcase: React.FC<ArchiveWorksShowcaseProps> = ({
  onNavigate,
  onSelectProject,
  onStartJourney,
}) => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const projects = FEATURED_PROJECTS;
  const current = projects[selectedIdx];

  // Preload both mockups in memory
  React.useEffect(() => {
    ['/images/studio_laptop_mockup_1790189026060.webp', '/images/studio_smartphone_mockup_1790189013945.webp'].forEach(
      (src) => {
        const img = new Image();
        img.src = src;
      }
    );
  }, []);

  return (
    <section className="py-24 md:py-32 bg-[#000000] relative border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header (Screenshot 6 style) */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="text-xs font-mono tracking-widest text-[#00D2FF] uppercase mb-3">
            ( CURATED SHOWCASE · SELECTED WORKS )
          </div>

          <h2
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase mb-6 font-editorial leading-[1.05]"
            style={{ textShadow: '0 0 30px rgba(255,255,255,0.1)' }}
          >
            ARCHIVE OF THE SELECTED WORKS BY BYTEX
          </h2>

          <p className="text-xs sm:text-sm font-mono text-[#94A3B8] max-w-xl mx-auto tracking-wider">
            HIGH-CONVERTING WEBSITES, SCALABLE MOBILE APPS, AND VERIFIED LOCAL GOOGLE DOMINANCE.
          </p>
        </div>

        {/* Project Selector Horizontal Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {projects.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setSelectedIdx(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                selectedIdx === idx
                  ? 'bg-white text-black font-bold shadow-lg scale-105'
                  : 'bg-white/5 text-[#94A3B8] hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              <span>0{idx + 1}. </span>
              <span>{p.title}</span>
            </button>
          ))}
        </div>

        {/* Asymmetric Showcase Grid (Screenshot 6 layout: phone top-left + macbook bottom-right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#070709] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Left Column: Project Details & Metrics */}
          <div className="lg:col-span-6 flex flex-col justify-between text-left space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#00D2FF] mb-2 uppercase">
                <span>{current.category}</span>
                <span>•</span>
                <span>{current.categoryLabel}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 font-editorial">
                {current.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed mb-6 font-normal">
                {current.description}
              </p>

              {/* Concrete Metric Badge */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6">
                <div className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-wider mb-1">
                  Validated Outcome
                </div>
                <div className="text-xl sm:text-2xl font-black text-white font-mono flex items-center gap-2 text-[#00D2FF]">
                  <TrendingUp className="w-5 h-5" />
                  <span>{current.metrics?.[0]?.value || current.highlights[0]}</span>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {current.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-black border border-white/15 text-[#94A3B8]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
              <button
                onClick={() => onSelectProject(current)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-black bg-white hover:bg-[#00D2FF] hover:text-black transition-all cursor-pointer shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onStartJourney(current.category)}
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white/80 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <span>Request Similar Build</span>
                <ExternalLink className="w-4 h-4 text-[#94A3B8]" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Showcase Device Mockup */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black border border-white/15 shadow-2xl group">
              <picture>
                <source
                  srcSet={
                    selectedIdx % 2 === 0
                      ? '/images/studio_laptop_mockup_1790189026060.webp'
                      : '/images/studio_smartphone_mockup_1790189013945.webp'
                  }
                  type="image/webp"
                />
                <img
                  src={
                    selectedIdx % 2 === 0
                      ? '/images/studio_laptop_mockup_1790189026060.jpg'
                      : '/images/studio_smartphone_mockup_1790189013945.jpg'
                  }
                  alt={current.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90">
                <span className="px-3 py-1 rounded-full bg-black/80 border border-white/20">
                  {current.categoryLabel}
                </span>
                <span className="text-[#00D2FF] font-bold">
                  {current.category}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* View All Works CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate('work')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-[#00D2FF] hover:text-white transition-colors cursor-pointer"
          >
            <span>EXPLORE ALL ARCHIVED CASE STUDIES & DEPLOYMENTS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
