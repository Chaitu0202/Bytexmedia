import React from 'react';
import {
  Code,
  Smartphone,
  MapPin,
  TrendingUp,
  Instagram,
  ArrowRight,
  Sparkles,
  MessageSquare,
  ShieldCheck,
  Mail,
  Phone
} from 'lucide-react';
import { StudioHero } from './StudioHero';
import { DotMatrixMarquee } from './DotMatrixMarquee';
import { SectorsShowcase } from './SectorsShowcase';
import { ArchiveWorksShowcase } from './ArchiveWorksShowcase';
import { VizagSEOSection } from './VizagSEOSection';
import { NavTab } from './Navbar';
import { ProjectItem } from '../types';

interface HomeOverviewProps {
  onNavigate: (tab: NavTab) => void;
  onStartJourney: (serviceName?: string) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const HomeOverview: React.FC<HomeOverviewProps> = ({
  onNavigate,
  onStartJourney,
  onSelectProject,
}) => {
  return (
    <div className="animate-in fade-in duration-300">
      {/* 1. Studio Hero (Screenshots 1 & 2: STUDIO DIGITAL with 3D Center Card & Equalizer) */}
      <StudioHero
        onNavigate={onNavigate}
        onStartJourney={onStartJourney}
      />

      {/* 2. Dot Matrix Marquee (Screenshots 3 & 5: Dot-matrix typography ticker) */}
      <DotMatrixMarquee />

      {/* 3. The Sectors Showcase (Screenshot 4: THE SECTORS / Core DNA of Digital) */}
      <SectorsShowcase
        onNavigate={onNavigate}
        onStartJourney={onStartJourney}
      />

      {/* 4. Archive of Selected Works (Screenshot 6: ARCHIVE OF THE SELECTED WORKS BY BYTEX) */}
      <ArchiveWorksShowcase
        onNavigate={onNavigate}
        onSelectProject={onSelectProject}
        onStartJourney={onStartJourney}
      />

      {/* 5. Dedicated Vizag SEO Hub: Websites Under ₹3,000 (Rank #1 in Google Searches) */}
      <VizagSEOSection
        onNavigate={onNavigate}
        onStartJourney={onStartJourney}
      />

      {/* 6. Minimalist Studio Direct Consultation Strip */}
      <section className="py-20 bg-[#000000] border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#08080A] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="text-left max-w-xl">
              <div className="text-xs font-mono text-[#00D2FF] uppercase tracking-widest mb-2">
                ( DIRECT TECHNICAL CONSULTATION )
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase font-editorial mb-3">
                READY TO ELEVATE YOUR COMMERCIAL PRESENCE?
              </h3>
              <p className="text-xs sm:text-sm text-[#CBD5E1] font-mono leading-relaxed">
                Direct proposals dispatched within 24 hours to{' '}
                <span className="text-white font-bold">hello@bytexmedia.in</span>. Transparent pricing: Websites from ₹2,999, Mobile Apps from ₹9,999, Google Business Profile ₹999.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://wa.me/918185807402?text=Hello%20ByteX%20Media!%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-mono font-bold text-white bg-[#10B981] hover:bg-[#059669] transition-all shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: +91 81858 07402</span>
              </a>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-mono font-bold text-black bg-white hover:bg-[#00D2FF] hover:text-black transition-all cursor-pointer shadow-lg"
              >
                <span>Direct Inquiry Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
