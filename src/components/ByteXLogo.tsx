import React from 'react';

interface ByteXLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  showSubtext?: boolean;
  className?: string;
}

export const ByteXLogo: React.FC<ByteXLogoProps> = ({
  size = 'md',
  showTagline = false,
  showSubtext = true,
  className = '',
}) => {
  // Dimensions based on size
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-3xl',
    xl: 'text-5xl',
  };

  const mediaSizes = {
    sm: 'text-[9px] tracking-[0.25em]',
    md: 'text-[11px] tracking-[0.3em]',
    lg: 'text-sm tracking-[0.35em]',
    xl: 'text-lg tracking-[0.4em]',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Precision Vector B-Mark with Cyan Growth Arrow */}
      <div className={`relative shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(0,163,255,0.45)]"
        >
          <defs>
            {/* Primary Electric Gradient */}
            <linearGradient id="bxElectricGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0052FE" />
              <stop offset="50%" stopColor="#00A3FF" />
              <stop offset="100%" stopColor="#00E5FF" />
            </linearGradient>

            {/* Dark Facet Gradient for 3D depth */}
            <linearGradient id="bxFacetDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0038B8" />
              <stop offset="100%" stopColor="#0077FF" />
            </linearGradient>

            {/* Cyan Arrow Gradient */}
            <linearGradient id="bxArrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0099FF" />
              <stop offset="100%" stopColor="#00F0FF" />
            </linearGradient>

            {/* Subtle glow filter */}
            <filter id="bxGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* White Upper & Back Spine of the 'B' */}
          <path
            d="M24 16 L60 16 C74 16 82 23 82 34 C82 42 76 47 68 50 C80 54 86 63 86 73 C86 86 75 92 58 92 L24 92 Z"
            fill="#FFFFFF"
          />

          {/* Cutout / Negative Space inner holes of 'B' */}
          <path
            d="M40 28 L56 28 C64 28 68 31 68 36 C68 41 64 44 56 44 L40 44 Z"
            fill="#000000"
          />
          <path
            d="M40 56 L58 56 C67 56 71 60 71 66 C71 72 67 76 58 76 L40 76 Z"
            fill="#000000"
          />

          {/* Left 3D Geometric Facet 1 (Lower Wing - Dark Royal) */}
          <path
            d="M16 92 L38 38 L44 92 Z"
            fill="url(#bxFacetDark)"
          />

          {/* Left 3D Geometric Facet 2 (Main Cyan-Electric Front Fold) */}
          <path
            d="M16 92 L38 38 L60 38 L34 92 Z"
            fill="url(#bxElectricGrad)"
          />

          {/* Lower connecting blue plate */}
          <path
            d="M34 70 L64 70 L52 92 L28 92 Z"
            fill="url(#bxElectricGrad)"
          />

          {/* The Distinctive Cyan Growth Arrow (pointing ↗ from center) */}
          <g filter="url(#bxGlow)">
            {/* Arrow Stem */}
            <path
              d="M46 54 L76 26"
              stroke="url(#bxArrowGrad)"
              strokeWidth="9"
              strokeLinecap="round"
            />
            {/* Arrow Head */}
            <path
              d="M58 24 L82 22 L80 46"
              stroke="url(#bxArrowGrad)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>

      {/* Typography: BYTEX with Glowing Cyan 'X' and — MEDIA — */}
      <div className="flex flex-col text-left">
        <div className={`font-black uppercase tracking-tight text-white flex items-center leading-none ${textSizes[size]}`}>
          <span>BYTE</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] via-[#00D2FF] to-[#00F0FF] drop-shadow-[0_0_8px_rgba(0,210,255,0.6)]">
            X
          </span>
        </div>

        {showSubtext && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className="h-[1px] w-3 bg-[#00A3FF]/60" />
            <span className={`font-semibold text-white/90 uppercase ${mediaSizes[size]}`}>
              MEDIA
            </span>
            <span className="h-[1px] w-3 bg-[#00A3FF]/60" />
          </div>
        )}

        {showTagline && (
          <div className="text-[10px] sm:text-xs font-medium text-white/80 mt-1 tracking-wider">
            Your <span className="text-[#00D2FF] font-bold">Growth</span> Our Strategy
          </div>
        )}
      </div>
    </div>
  );
};
