import React from 'react';

export const DotMatrixMarquee: React.FC = () => {
  const items = [
    'WEBSITE BUILDING ₹2,999',
    'APP ENGINEERING ₹9,999',
    'GOOGLE PROFILE ₹999',
    'INSTAGRAM HANDLING',
    'AI AUTOMATIONS',
    'DIGITAL STRATEGY',
    'HIGH PERFORMANCE',
    '100% CODE OWNERSHIP',
  ];

  return (
    <div className="w-full bg-[#000000] border-y border-white/10 py-5 overflow-hidden select-none relative z-20">
      <div className="flex items-center gap-12 whitespace-nowrap animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused]">
        {[...items, ...items, ...items].map((text, i) => (
          <div key={i} className="flex items-center gap-12">
            <span
              className="text-2xl sm:text-4xl md:text-5xl font-black tracking-[0.2em] text-white/90 uppercase font-mono"
              style={{
                fontFamily: "'Space Grotesk', monospace",
                textShadow: '0 0 12px rgba(255,255,255,0.4)',
              }}
            >
              {text}
            </span>
            <div className="w-3.5 h-3.5 rounded-full bg-white flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              <div className="w-1.5 h-1.5 rounded-full bg-black" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
