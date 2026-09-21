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
          <div className="w-full h-48 bg-[#050816] rounded-xl border border-[#263653] p-3 flex flex-col justify-between overflow-hidden relative group-hover:border-[#3B82F6]/50 transition-colors">
            <div className="flex items-center gap-1.5 pb-2 border-b border-[#263653]/60">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-[10px] text-[#94A3B8] font-mono">https://storefront.retail.dev</span>
            </div>
            <div className="space-y-2 py-2">
              <div className="h-6 w-3/4 bg-[#101A33] rounded-md animate-pulse" />
              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="h-16 bg-[#162342] rounded-lg p-2 flex flex-col justify-between">
                  <div className="w-6 h-6 rounded bg-[#3B82F6]/20" />
                  <div className="h-2 w-10 bg-[#CBD5E1]/40 rounded" />
                </div>
                <div className="h-16 bg-[#162342] rounded-lg p-2 flex flex-col justify-between">
                  <div className="w-6 h-6 rounded bg-[#22D3EE]/20" />
                  <div className="h-2 w-12 bg-[#CBD5E1]/40 rounded" />
                </div>
                <div className="h-16 bg-[#162342] rounded-lg p-2 flex flex-col justify-between">
                  <div className="w-6 h-6 rounded bg-[#8B5CF6]/20" />
                  <div className="h-2 w-8 bg-[#CBD5E1]/40 rounded" />
                </div>
              </div>
            </div>
            <div className="pt-2 border-t border-[#263653]/50 flex justify-between text-[10px] text-[#34D399]">
              <span>Core Web Vitals: 99</span>
              <span>Checkout UX Ready</span>
            </div>
          </div>
        );
      case 'mobile':
        return (
          <div className="w-full h-48 bg-[#050816] rounded-xl border border-[#263653] p-3 flex flex-col justify-between items-center overflow-hidden relative group-hover:border-[#22D3EE]/50 transition-colors">
            <div className="w-40 h-full bg-[#101A33] rounded-t-xl border-t border-x border-[#263653] p-2 flex flex-col justify-between">
              <div className="w-12 h-1.5 bg-[#263653] rounded-full mx-auto mb-2" />
              <div className="space-y-1.5 flex-1">
                <div className="p-1.5 rounded bg-[#0A1024] border border-[#263653] text-[9px] text-[#CBD5E1]">
                  Sprint Planning (Done)
                </div>
                <div className="p-1.5 rounded bg-[#162342] border border-[#3B82F6]/40 text-[9px] text-[#22D3EE]">
                  Mobile UI Review (Active)
                </div>
                <div className="p-1.5 rounded bg-[#0A1024] border border-[#263653] text-[9px] text-[#94A3B8]">
                  Release Tag 1.0 (Queued)
                </div>
              </div>
              <div className="h-1 w-16 bg-[#263653] rounded-full mx-auto mt-1" />
            </div>
          </div>
        );
      case 'workflow':
        return (
          <div className="w-full h-48 bg-[#050816] rounded-xl border border-[#263653] p-3 flex flex-col justify-between overflow-hidden relative group-hover:border-[#8B5CF6]/50 transition-colors font-mono">
            <div className="flex justify-between items-center text-[10px] text-[#94A3B8] pb-1 border-b border-[#263653]/60">
              <span className="text-[#8B5CF6]">AI Qualification Node</span>
              <span className="text-amber-400 text-[9px]">Human Gate Enabled</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2">
              <div className="px-2 py-1.5 rounded bg-[#101A33] border border-[#263653] text-[10px] text-[#CBD5E1] text-center">
                Webhook
              </div>
              <span className="text-[#8B5CF6] text-xs">→</span>
              <div className="px-2 py-1.5 rounded bg-[#162342] border border-[#8B5CF6]/60 text-[10px] text-[#22D3EE] text-center">
                LLM Parse
              </div>
              <span className="text-[#8B5CF6] text-xs">→</span>
              <div className="px-2 py-1.5 rounded bg-[#101A33] border border-[#34D399]/60 text-[10px] text-[#34D399] text-center">
                Slack Review
              </div>
            </div>
            <div className="text-[10px] text-[#94A3B8] bg-[#0A1024] p-2 rounded border border-[#263653]">
              Output: Lead intent categorized • 0 data duplication
            </div>
          </div>
        );
      case 'campaign':
        return (
          <div className="w-full h-48 bg-[#050816] rounded-xl border border-[#263653] p-3 flex flex-col justify-between overflow-hidden relative group-hover:border-[#34D399]/50 transition-colors">
            <div className="flex items-center justify-between text-[10px] text-[#94A3B8] pb-1 border-b border-[#263653]/60">
              <span>Brand Kit & Local SEO</span>
              <span className="text-[#34D399]">100% Verified</span>
            </div>
            <div className="grid grid-cols-2 gap-2 py-2">
              <div className="bg-[#101A33] rounded-lg p-2 border border-[#263653]">
                <div className="text-[9px] text-[#94A3B8]">Google Profile</div>
                <div className="text-xs font-bold text-[#F8FAFC]">Top 3 Local Map</div>
              </div>
              <div className="bg-[#101A33] rounded-lg p-2 border border-[#263653]">
                <div className="text-[9px] text-[#94A3B8]">Visual Brand Kit</div>
                <div className="text-xs font-bold text-[#F8FAFC]">Figma + Reels</div>
              </div>
            </div>
            <div className="text-[10px] text-[#CBD5E1] bg-[#0A1024] p-1.5 rounded border border-[#263653]">
              Consistent visual identity across all online touchpoints
            </div>
          </div>
        );
    }
  };

  return (
    <section id="work" className="py-20 md:py-28 bg-[#050816] relative border-t border-[#263653]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101A33] border border-[#263653] text-[11px] font-semibold tracking-wider uppercase text-[#3B82F6] mb-3">
              OUR WORK
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight mb-4">
              Real Projects.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6]">
                Real Solutions.
              </span>
            </h2>
            <p className="text-base text-[#CBD5E1] leading-relaxed">
              Explore how we apply modern engineering, thoughtful UI design, and strategic marketing to deliver tangible value.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 bg-[#0A1024] p-1 rounded-xl border border-[#263653] self-start md:self-auto">
            {(['All', 'Websites', 'Apps', 'AI', 'Marketing'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-[#162342] text-[#F8FAFC] shadow-xs'
                    : 'text-[#94A3B8] hover:text-[#CBD5E1]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group rounded-2xl bg-[#101A33] border border-[#263653] hover:border-[#3B82F6]/50 transition-all duration-300 p-6 flex flex-col justify-between shadow-xl shadow-black/20"
            >
              <div>
                {/* Mockup Preview */}
                <div className="mb-6">
                  {getMockupVisual(project)}
                </div>

                {/* Badges & Category */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold text-[#22D3EE] bg-[#0A1024] px-2.5 py-1 rounded-full border border-[#263653]">
                    {project.categoryLabel}
                  </span>
                  {project.badgeText && (
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                        project.isConceptualDemo
                          ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                          : 'bg-[#34D399]/10 text-[#34D399] border-[#34D399]/30'
                      }`}
                    >
                      {project.badgeText}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#F8FAFC] mb-2 group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-[#CBD5E1] leading-relaxed mb-5 font-normal">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-1.5 mb-6">
                  {project.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-[#CBD5E1]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#22D3EE] shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack & Action button */}
              <div className="pt-4 border-t border-[#263653]/60 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono text-[#94A3B8] bg-[#0A1024] px-2 py-0.5 rounded border border-[#263653]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  id={`view-study-${project.id}`}
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#3B82F6] group-hover:text-[#22D3EE] transition-colors cursor-pointer"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
