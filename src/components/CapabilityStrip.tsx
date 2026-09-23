import React from 'react';
import { Code, Smartphone, MapPin, TrendingUp, Instagram, BarChart3 } from 'lucide-react';

export const CapabilityStrip: React.FC = () => {
  const capabilities = [
    {
      icon: Code,
      label: 'Website Building',
      badge: 'From ₹2,999',
    },
    {
      icon: Smartphone,
      label: 'App Development',
      badge: 'From ₹9,999',
    },
    {
      icon: MapPin,
      label: 'Google Business Profile',
      badge: 'Full Setup ₹999',
    },
    {
      icon: Instagram,
      label: 'Instagram Handling',
      badge: 'Organic Growth',
    },
    {
      icon: TrendingUp,
      label: 'Digital Marketing',
      badge: 'Targeted Leads',
    },
    {
      icon: BarChart3,
      label: 'Direct Business Sales',
      badge: 'Your Growth',
    },
  ];

  return (
    <div
      id="capability-strip"
      className="w-full bg-[#000000] border-y border-white/10 py-5 relative z-10 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#070709] border border-white/10 hover:border-white/20 transition-all text-center group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-2 group-hover:scale-105 transition-transform text-white">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold text-white font-mono tracking-tight leading-tight mb-1">
                  {item.label}
                </span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-[#00D2FF]">
                  {item.badge}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
