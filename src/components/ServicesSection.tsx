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
  Clock
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
        return <Code className="w-5 h-5 text-[#3B82F6]" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-[#22D3EE]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#8B5CF6]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#34D399]" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-[#22D3EE]" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#6366F1]" />;
      default:
        return <Code className="w-5 h-5 text-[#3B82F6]" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#0A1024] relative border-t border-[#263653]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101A33] border border-[#263653] text-[11px] font-semibold tracking-wider uppercase text-[#3B82F6] mb-3">
            OUR SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight mb-4">
            Everything You Need to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] via-[#3B82F6] to-[#8B5CF6]">
              Build, Market & Grow.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed">
            From beautiful websites to intelligent automation, we combine creativity and technology to create solutions designed around your business.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group p-6 sm:p-7 rounded-2xl bg-[#101A33] border border-[#263653] hover:border-[#3B82F6]/60 hover:bg-[#162342] transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between shadow-xl shadow-black/25 relative overflow-hidden"
            >
              {/* Top Row */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#0A1024] border border-[#263653] flex items-center justify-center group-hover:scale-105 group-hover:border-[#3B82F6]/50 transition-all">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#0A1024] border border-[#263653] text-[#94A3B8]">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#F8FAFC] mb-2.5 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[#CBD5E1] leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-[#CBD5E1]">
                      <Check className="w-3.5 h-3.5 text-[#22D3EE] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-[#263653]/60 flex items-center justify-between mt-2">
                <div className="flex items-center gap-1.5 text-xs text-[#94A3B8]">
                  <Clock className="w-3.5 h-3.5 text-[#94A3B8]" />
                  <span>{service.timeline.split(' ')[0]} {service.timeline.split(' ')[1]}</span>
                </div>

                <button
                  id={`btn-service-${service.id}`}
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#22D3EE] group-hover:text-white transition-colors cursor-pointer"
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
