import React from 'react';
import { Code, Smartphone, Sparkles, TrendingUp, MapPin, Palette } from 'lucide-react';

export const CapabilityStrip: React.FC = () => {
  const capabilities = [
    { icon: Code, label: 'Web Development', color: 'text-[#3B82F6]' },
    { icon: Smartphone, label: 'Mobile Apps', color: 'text-[#22D3EE]' },
    { icon: Sparkles, label: 'AI Automation', color: 'text-[#8B5CF6]' },
    { icon: TrendingUp, label: 'Digital Marketing', color: 'text-[#34D399]' },
    { icon: MapPin, label: 'Google Business Profile', color: 'text-[#22D3EE]' },
    { icon: Palette, label: 'Creative Design', color: 'text-[#6366F1]' },
  ];

  return (
    <div
      id="capability-strip"
      className="w-full bg-[#0A1024] border-y border-[#263653] py-4 relative z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar py-1">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <React.Fragment key={cap.label}>
                <div className="flex items-center gap-2.5 shrink-0 px-3 py-1.5 rounded-lg hover:bg-[#101A33] transition-colors group cursor-default">
                  <div className={`p-1.5 rounded-md bg-[#101A33] border border-[#263653] group-hover:border-[#3B82F6]/50 transition-colors`}>
                    <Icon className={`w-4 h-4 ${cap.color}`} />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#CBD5E1] group-hover:text-[#F8FAFC] transition-colors whitespace-nowrap">
                    {cap.label}
                  </span>
                </div>
                {index < capabilities.length - 1 && (
                  <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#263653] shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};
