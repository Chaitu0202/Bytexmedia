import React, { useState } from 'react';
import {
  Code,
  Smartphone,
  MapPin,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Instagram,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { NavTab } from './Navbar';

interface SectorsShowcaseProps {
  onNavigate: (tab: NavTab) => void;
  onStartJourney: (serviceName?: string) => void;
}

export const SectorsShowcase: React.FC<SectorsShowcaseProps> = ({
  onNavigate,
  onStartJourney,
}) => {
  const [activeSector, setActiveSector] = useState(0);

  const sectors = [
    {
      id: 'web',
      tag: '( 網頁視覺美學 · Web Aesthetics )',
      title: 'High-Converting Websites',
      price: '₹2,999',
      badge: 'Starts ₹2,999',
      serviceName: 'Website Development (from ₹2,999)',
      image: '/src/assets/images/studio_laptop_mockup_1790189026060.jpg',
      icon: Code,
      specs: ['Responsive Desktop & Mobile', 'Next-Gen Speed (98+ score)', 'WhatsApp Lead Chat Integration', '3-5 Days Turnaround'],
      stats: '4.8x Higher Conversion vs Legacy Sites',
    },
    {
      id: 'app',
      tag: '( 高階商業視覺 · Mobile Ecosystems )',
      title: 'Mobile App Development',
      price: '₹9,999',
      badge: 'Starts ₹9,999',
      serviceName: 'Mobile App Development (from ₹9,999)',
      image: '/src/assets/images/studio_smartphone_mockup_1790189013945.jpg',
      icon: Smartphone,
      specs: ['iOS & Android Cross-Platform', 'Fluid Native Gestures', 'Clean Backend Authentication', 'Store Readiness Protocol'],
      stats: 'Engineered for High Retention',
    },
    {
      id: 'gbp',
      tag: '( 使用體驗與在地排名 · Local Maps Discovery )',
      title: 'Google Business Profile',
      price: '₹999',
      badge: 'Complete Setup ₹999',
      serviceName: 'Google Business Profile (₹999)',
      image: '/src/assets/images/studio_magazine_editorial_1790189038500.jpg',
      icon: MapPin,
      specs: ['Local Search Pack Audit', '100% NAP Consistency Fix', 'Keyword & Category Optimization', 'Review Generation Assets'],
      stats: 'Immediate Local Footfall Surge',
    },
    {
      id: 'marketing',
      tag: '( 社群品牌行銷 · Instagram Growth )',
      title: 'Instagram Handling & Content',
      price: 'Growth',
      badge: 'Monthly Plan',
      serviceName: 'Instagram Handling & Marketing',
      image: '/src/assets/images/hero_studio_stone_flow_1790189001110.jpg',
      icon: Instagram,
      specs: ['Curated Visual Grid Aesthetic', 'Engaging Reels & Motion Scripts', 'Direct Message Lead Funnels', 'Bi-Weekly Performance Metrics'],
      stats: 'Organic Follower to Buyer Pipeline',
    },
    {
      id: 'ai',
      tag: '( AI MOTION · GEN-AI VISUAL · Automations )',
      title: 'AI Automation & Custom Tools',
      price: 'Custom',
      badge: 'Scale Engine',
      serviceName: 'AI Automation & Custom Tools',
      image: '/src/assets/images/studio_smartphone_mockup_1790189013945.jpg',
      icon: Sparkles,
      specs: ['WhatsApp Auto-Reply Qualifier', 'Customer Support Bot Integration', 'Automated CRM Lead Routing', 'Zero Manual Delay'],
      stats: '24/7 Instant Response Automation',
    },
  ];

  const current = sectors[activeSector];
  const Icon = current.icon;

  return (
    <section className="py-24 md:py-32 bg-[#000000] relative overflow-hidden border-t border-white/10 select-none">
      {/* Background Radial Subtle Vignette */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-blue-900/10 via-[#00D2FF]/5 to-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header (Screenshot 4 style) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono tracking-[0.3em] text-[#00D2FF] uppercase mb-3">
            SECTOR TAXONOMY
          </div>

          <h2
            className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter uppercase mb-4 font-editorial"
            style={{ textShadow: '0 0 25px rgba(255,255,255,0.15)' }}
          >
            THE SECTORS
          </h2>

          <p className="text-xs sm:text-sm font-mono text-white/60 tracking-widest uppercase mb-8">
            DEFINING THE CORE DNA OF DIGITAL EXCELLENCE
          </p>

          {/* Metadata Specs Bar (Screenshot 4: 14Y_VISUAL_MASTERY, 400+_DEPLOYED_WORKS...) */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[11px] sm:text-xs font-mono text-[#94A3B8] pb-6 border-b border-white/10">
            <span>100%_CODE_OWNERSHIP</span>
            <span className="text-white/20">•</span>
            <span>150+_DEPLOYED_PLATFORMS</span>
            <span className="text-white/20">•</span>
            <span>ESTABLISHED_2026</span>
          </div>
        </div>

        {/* Category Pills Bar (Parenthesis Style from Screenshot 4) */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-14">
          {sectors.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveSector(idx)}
              className={`px-3.5 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                activeSector === idx
                  ? 'bg-white text-black font-bold shadow-lg shadow-white/10 scale-105'
                  : 'bg-white/5 text-[#94A3B8] hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {s.tag}
            </button>
          ))}
        </div>

        {/* Active Sector Showcase Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#070709] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          {/* Subtle gradient light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D2FF]/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Left: Sector Details */}
          <div className="lg:col-span-6 flex flex-col justify-between text-left space-y-6">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#00D2FF]">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-[#00D2FF] font-semibold uppercase">
                  {current.badge}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 font-editorial">
                {current.title}
              </h3>

              <div className="inline-block px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-[#10B981] mb-6">
                ★ {current.stats}
              </div>

              {/* Specifications */}
              <div className="space-y-3 mb-8">
                {current.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-[#CBD5E1]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
              <button
                onClick={() => onStartJourney(current.serviceName)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-black bg-white hover:bg-[#00D2FF] hover:text-black transition-all cursor-pointer shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Inquire for {current.price}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white/80 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <span>All Capabilities</span>
                <ExternalLink className="w-4 h-4 text-[#94A3B8]" />
              </button>
            </div>
          </div>

          {/* Right: Floating Visual Slot */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black border border-white/15 shadow-2xl group">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90">
                <span className="px-2.5 py-1 rounded bg-black/70 border border-white/20">
                  {current.tag}
                </span>
                <span className="font-bold text-lg text-white">
                  {current.price}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
