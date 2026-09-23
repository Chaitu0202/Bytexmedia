import React from 'react';
import { Code, Smartphone, MapPin, TrendingUp, Instagram, BarChart3 } from 'lucide-react';

export const CapabilityStrip: React.FC = () => {
  const capabilities = [
    {
      icon: Code,
      label: 'Website Building',
      badge: '₹2,999',
      color: 'text-[#00D2FF]',
      borderColor: 'border-[#00D2FF]/40',
      badgeBg: 'bg-[#00D2FF]/15 text-[#00D2FF]',
    },
    {
      icon: Smartphone,
      label: 'App Development',
      badge: '₹9,999',
      color: 'text-[#00A3FF]',
      borderColor: 'border-[#00A3FF]/40',
      badgeBg: 'bg-[#0066FF]/20 text-[#00A3FF]',
    },
    {
      icon: MapPin,
      label: 'Google Business Profile',
      badge: '₹999',
      color: 'text-[#10B981]',
      borderColor: 'border-[#10B981]/40',
      badgeBg: 'bg-[#10B981]/15 text-[#10B981]',
    },
    {
      icon: Instagram,
      label: 'Instagram Handling',
      badge: 'Organic Reach',
      color: 'text-[#FF543E]',
      borderColor: 'border-[#E1306C]/40',
      badgeBg: 'bg-[#E1306C]/15 text-[#FF543E]',
    },
    {
      icon: TrendingUp,
      label: 'Digital Marketing',
      badge: 'Targeted Leads',
      color: 'text-[#00D2FF]',
      borderColor: 'border-[#00D2FF]/40',
      badgeBg: 'bg-[#00D2FF]/15 text-[#00D2FF]',
    },
    {
      icon: BarChart3,
      label: 'More Sales For Your Business',
      badge: 'Your Growth',
      color: 'text-[#10B981]',
      borderColor: 'border-[#10B981]/40',
      badgeBg: 'bg-[#10B981]/15 text-[#10B981]',
    },
  ];

  return (
    <div
      id="capability-strip"
      className="w-full bg-[#05070D] border-y border-[#1A253C] py-4 relative z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar py-1">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <React.Fragment key={cap.label}>
                <div className="flex items-center gap-2.5 shrink-0 px-3.5 py-1.5 rounded-xl bg-[#0B0F19] border border-[#1A253C] hover:border-[#00D2FF]/50 transition-all group cursor-default">
                  <div className={`p-1.5 rounded-lg bg-[#000000] border ${cap.borderColor}`}>
                    <Icon className={`w-4 h-4 ${cap.color}`} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#00D2FF] transition-colors whitespace-nowrap">
                      {cap.label}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold border border-white/10 ${cap.badgeBg}`}>
                      {cap.badge}
                    </span>
                  </div>
                </div>
                {index < capabilities.length - 1 && (
                  <div className="hidden lg:block w-1.5 h-1.5 rounded-full bg-[#1A253C] shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};
