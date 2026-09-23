import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowUpRight, CheckCircle, Smartphone, Globe, Cpu, Megaphone } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/content';
import { ProjectItem } from '../types';

interface FeaturedProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Websites' | 'Apps' | 'AI' | 'Marketing'>('All');

  const filteredProjects = activeFilter === 'All'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter((p) => p.category === activeFilter);

  const getMockupVisual = (project: ProjectItem) => {
    switch (project.mockupType) {
      case 'browser':
        return (
          <div className="w-full h-48 bg-[#000000] rounded-2xl border border-white/10 p-3.5 flex flex-col justify-between overflow-hidden relative group-hover:border-white/30 transition-all font-mono">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white/30" />
                <span className="w-2 h-2 rounded-full bg-white/30" />
                <span className="w-2 h-2 rounded-full bg-white/30" />
              </div>
              <span className="text-[10px] text-white/50">bytex.studio/works/{project.id}</span>
            </div>
            <div className="space-y-2 py-3">
              <div className="h-6 w-2/3 bg-white/10 rounded-md" />
              <div className="grid grid-cols-3 gap-2">
                <div className="h-16 bg-white/5 rounded-xl border border-white/10 p-2 flex flex-col justify-between">
                  <div className="w-5 h-5 rounded bg-[#00D2FF]/20" />
                  <div className="h-1.5 w-8 bg-white/20 rounded" />
                </div>
                <div className="h-16 bg-white/5 rounded-xl border border-white/10 p-2 flex flex-col justify-between">
                  <div className="w-5 h-5 rounded bg-white/20" />
                  <div className="h-1.5 w-10 bg-white/20 rounded" />
                </div>
                <div className="h-16 bg-white/5 rounded-xl border border-white/10 p-2 flex flex-col justify-between">
                  <div className="w-5 h-5 rounded bg-[#10B981]/20" />
                  <div className="h-1.5 w-7 bg-white/20 rounded" />
                </div>
              </div>
            </div>
            <div className="pt-2 border-t border-white/10 flex justify-between text-[10px] text-[#00D2FF]">
              <span>Speed: 99/100</span>
              <span className="text-white/60">₹2,999 Build Standard</span>
            </div>
          </div>
        );
      case 'mobile':
        return (
          <div className="w-full h-48 bg-[#000000] rounded-2xl border border-white/10 p-3.5 flex flex-col justify-between items-center overflow-hidden relative group-hover:border-white/30 transition-all font-mono">
            <div className="w-44 h-full bg-[#070709] rounded-t-2xl border-t border-x border-white/15 p-2.5 flex flex-col justify-between shadow-inner">
              <div className="w-10 h-1 bg-white/20 rounded-full mx-auto mb-2" />
              <div className="space-y-1.5 flex-1">
                <div className="p-1.5 rounded-lg bg-black border border-white/10 text-[9px] text-[#CBD5E1]">
                  • Real-time Appointments (Active)
                </div>
                <div className="p-1.5 rounded-lg bg-white/10 border border-white/20 text-[9px] text-white">
                  • Push Notification Dispatch (Sent)
                </div>
                <div className="p-1.5 rounded-lg bg-black border border-white/10 text-[9px] text-white/50">
                  • Offline Cache Ready
                </div>
              </div>
              <div className="h-1 w-14 bg-white/20 rounded-full mx-auto mt-1" />
            </div>
          </div>
        );
      case 'workflow':
        return (
          <div className="w-full h-48 bg-[#000000] rounded-2xl border border-white/10 p-3.5 flex flex-col justify-between overflow-hidden relative group-hover:border-white/30 transition-all font-mono">
            <div className="flex justify-between items-center text-[10px] text-white/60 pb-1.5 border-b border-white/10">
              <span className="text-[#00D2FF]">WhatsApp Automation Node</span>
              <span className="text-[#10B981] text-[9px]">Status: Active</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-3">
              <div className="px-2.5 py-1.5 rounded-lg bg-[#070709] border border-white/10 text-[10px] text-white text-center">
                User Chat
              </div>
              <span className="text-[#00D2FF] text-xs">→</span>
              <div className="px-2.5 py-1.5 rounded-lg bg-white/10 border border-white/20 text-[10px] text-white text-center">
                Lead Qualify
              </div>
              <span className="text-[#00D2FF] text-xs">→</span>
              <div className="px-2.5 py-1.5 rounded-lg bg-[#070709] border border-[#10B981]/50 text-[10px] text-[#10B981] text-center">
                Owner Alert
              </div>
            </div>
            <div className="text-[10px] text-white/70 bg-[#070709] p-2 rounded-xl border border-white/10">
              Output: Instant Response • Zero manual response delay
            </div>
          </div>
        );
      case 'campaign':
        return (
          <div className="w-full h-48 bg-[#000000] rounded-2xl border border-white/10 p-3.5 flex flex-col justify-between overflow-hidden relative group-hover:border-white/30 transition-all font-mono">
            <div className="flex items-center justify-between text-[10px] text-white/60 pb-1.5 border-b border-white/10">
              <span>Local Map Pack & Branding</span>
              <span className="text-[#10B981]">Verified #1</span>
            </div>
            <div className="grid grid-cols-2 gap-2 py-2">
              <div className="bg-[#070709] rounded-xl p-2.5 border border-white/10">
                <div className="text-[9px] text-[#94A3B8]">Google Profile ₹999</div>
                <div className="text-xs font-bold text-white">#1 Local 3-Pack</div>
              </div>
              <div className="bg-[#070709] rounded-xl p-2.5 border border-white/10">
                <div className="text-[9px] text-[#94A3B8]">Instagram Grid</div>
                <div className="text-xs font-bold text-white">Curated Content</div>
              </div>
            </div>
            <div className="text-[10px] text-white/60 bg-black p-1.5 rounded-lg border border-white/10">
              Continuous customer flow across local search and social feeds
            </div>
          </div>
        );
    }
  };

  return (
    <section id="work" className="py-20 md:py-28 bg-[#000000] relative border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <div className="text-xs font-mono tracking-widest text-[#00D2FF] uppercase mb-3">
              ( CASE ARCHIVE · DEPLOYED SYSTEMS )
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase font-editorial mb-4">
              PROVEN BUILDS.{' '}
              <span className="text-white/40">
                TANGIBLE IMPACT.
              </span>
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#CBD5E1] leading-relaxed">
              Explore how we deliver engineered speed, aesthetic precision, and measurable business growth for clients across India.
            </p>
          </div>

          {/* Filter Pills in Studio Capsule Style */}
          <div className="flex flex-wrap gap-2 bg-[#070709] p-1.5 rounded-full border border-white/10 self-start md:self-auto">
            {(['All', 'Websites', 'Apps', 'AI', 'Marketing'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-white text-black shadow-md'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                }`}
              >
                {filter === 'All' ? 'All (04)' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group rounded-3xl bg-[#070709] border border-white/10 hover:border-white/30 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative backdrop-blur-xl"
            >
              <div>
                {/* Mockup Preview */}
                <div className="mb-6">
                  {getMockupVisual(project)}
                </div>

                {/* Badges & Category Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-bold text-[#00D2FF]">
                    0{idx + 1}. ( {project.categoryLabel.toUpperCase()} )
                  </span>
                  {project.badgeText && (
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-white">
                      {project.badgeText}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-white font-editorial tracking-tight mb-2 group-hover:text-[#00D2FF] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs font-mono text-[#CBD5E1] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2.5 text-xs text-[#CBD5E1]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack & Action button */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono text-[#94A3B8] bg-black px-2 py-0.5 rounded border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  id={`view-study-${project.id}`}
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-black bg-white hover:bg-[#00D2FF] hover:text-black px-3.5 py-2 rounded-xl transition-all cursor-pointer shadow-md"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
