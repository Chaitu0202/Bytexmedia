import React from 'react';
import {
  Code,
  Smartphone,
  Sparkles,
  TrendingUp,
  MapPin,
  Palette,
  ArrowRight,
  Check,
  Clock,
  Tag
} from 'lucide-react';
import { SERVICES_DATA } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-white" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-white" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-white" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-white" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-white" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-white" />;
      default:
        return <Code className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#000000] relative border-t border-white/10 select-none">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0052FE]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-mono tracking-widest text-[#00D2FF] uppercase mb-3">
            ( TECHNICAL CAPABILITIES · CORE SERVICES )
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase font-editorial mb-4">
            PRECISION CRAFT.{' '}
            <span className="text-white/40">
              UNCOMPROMISED VALUE.
            </span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[#CBD5E1] leading-relaxed max-w-2xl">
            Custom engineered platforms built for maximum commercial performance. Websites from ₹2,999, mobile apps from ₹9,999, and local Google dominance for ₹999.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="rounded-3xl bg-[#070709] border border-white/10 p-7 flex flex-col justify-between hover:border-white/25 hover:bg-[#0A0A0E] transition-all duration-300 shadow-xl group backdrop-blur-xl"
            >
              <div>
                {/* Category & Index Header */}
                <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8] mb-5">
                  <span className="text-[#00D2FF]">0{index + 1}. {service.category.toUpperCase()}</span>
                  {service.timeline && (
                    <span className="text-white/40 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {service.timeline}
                    </span>
                  )}
                </div>

                {/* Icon & Title */}
                <div className="flex items-start gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white font-editorial tracking-tight group-hover:text-[#00D2FF] transition-colors">
                      {service.title}
                    </h3>
                    {service.featuredPriceBadge && (
                      <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-white/10 text-white font-mono text-[10px] font-bold">
                        {service.featuredPriceBadge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs font-mono text-[#CBD5E1] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables / Features */}
                <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
                  <div className="text-[10px] font-mono text-white/50 uppercase tracking-wider">
                    Core Specifications
                  </div>
                  {service.deliverables.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#CBD5E1]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] shrink-0" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => onSelectService(service)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-mono font-bold text-white bg-white/5 hover:bg-white hover:text-black border border-white/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
