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
        return <Code className="w-5 h-5 text-[#00D2FF]" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-[#00A3FF]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#8B5CF6]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#10B981]" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-[#10B981]" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#EC4899]" />;
      default:
        return <Code className="w-5 h-5 text-[#00D2FF]" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#000000] relative border-t border-[#1A253C]">
      {/* Subtle Cyan Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0052FE]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0F19] border border-[#1A253C] text-[11px] font-bold tracking-wider uppercase text-[#00D2FF] mb-3">
            CLEAR PRICING • HIGH PERFORMANCE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Everything You Need to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] via-[#00D2FF] to-white">
              Build, Market & Grow.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed">
            Professional digital solutions with completely upfront, student-friendly pricing. Websites from ₹2,999, mobile apps from ₹9,999, and Google Business Profile setup for just ₹999.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group p-6 sm:p-7 rounded-2xl bg-[#0B0F19] border border-[#1A253C] hover:border-[#00D2FF]/60 hover:bg-[#111827] transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between shadow-xl shadow-black/40 relative overflow-hidden"
            >
              {/* Highlight bar for featured pricing */}
              {service.price && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-[#0052FE] to-[#00A3FF] text-white text-[11px] font-bold px-3 py-1 rounded-bl-xl font-mono shadow-sm">
                  {service.price}
                </div>
              )}

              {/* Top Row */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#000000] border border-[#1A253C] flex items-center justify-center group-hover:scale-105 group-hover:border-[#00D2FF]/50 transition-all">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#000000] border border-[#1A253C] text-[#94A3B8]">
                    {service.category}
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00D2FF] transition-colors">
                    {service.title}
                  </h3>
                </div>

                {service.featuredPriceBadge && (
                  <div className="inline-block text-xs font-semibold text-[#00D2FF] mb-3">
                    {service.featuredPriceBadge}
                  </div>
                )}

                <p className="text-sm text-[#CBD5E1] leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-[#CBD5E1]">
                      <Check className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-[#1A253C] flex items-center justify-between mt-2">
                <div className="flex items-center gap-1.5 text-xs text-[#94A3B8]">
                  <Clock className="w-3.5 h-3.5 text-[#94A3B8]" />
                  <span>{service.timeline.split(' ')[0]} {service.timeline.split(' ')[1]}</span>
                </div>

                <button
                  id={`btn-service-${service.id}`}
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#00D2FF] group-hover:text-white transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
