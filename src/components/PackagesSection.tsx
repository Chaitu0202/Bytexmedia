import React from 'react';
import { Check, ArrowRight, Sparkles, Tag, ShieldCheck } from 'lucide-react';
import { PACKAGES_DATA } from '../data/content';
import { PackageItem } from '../types';

interface PackagesSectionProps {
  onSelectPackage: (pkg: PackageItem) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-20 md:py-28 bg-[#000000] relative border-b border-white/10 select-none">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#00D2FF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-mono tracking-widest text-[#00D2FF] uppercase mb-3">
            ( TRANSPARENT PRICING · COMMERCIAL TIERS )
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase font-editorial mb-4">
            TRANSPARENT PRICING.{' '}
            <span className="text-white/40">
              UNCOMPROMISED PRECISION.
            </span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[#CBD5E1] leading-relaxed max-w-2xl">
            Engineered for high-growth businesses. Websites from ₹2,999, mobile applications from ₹9,999, and local Google dominance for ₹999. Zero hidden surcharges.
          </p>
        </div>

        {/* 3 Packages Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES_DATA.map((pkg) => (
            <div
              key={pkg.id}
              id={`package-card-${pkg.id}`}
              className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative backdrop-blur-xl ${
                pkg.isPopular
                  ? 'bg-[#0B0B0E] border-2 border-white/40 shadow-2xl shadow-white/5 lg:-translate-y-2'
                  : 'bg-[#070709] border border-white/10 hover:border-white/25 shadow-xl'
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white text-black text-[10px] font-mono font-black uppercase tracking-widest shadow-lg">
                  {pkg.badge}
                </div>
              )}

              <div>
                {/* Header */}
                <div className="mb-6">
                  <div className="text-[10px] font-mono text-[#00D2FF] uppercase tracking-wider mb-1">
                    ( {pkg.id.toUpperCase()} )
                  </div>
                  <h3 className="text-2xl font-black text-white font-editorial mb-2">{pkg.name}</h3>
                  <p className="text-xs font-mono text-[#94A3B8] leading-relaxed min-h-[36px]">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-xs font-mono text-[#94A3B8]">{pkg.billingNote}</span>
                  </div>
                  {pkg.savingsNote && (
                    <div className="mt-2 text-xs font-mono text-[#10B981] font-semibold flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5" />
                      <span>{pkg.savingsNote}</span>
                    </div>
                  )}
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <div className="text-[10px] font-mono text-white/50 uppercase tracking-wider">
                    Included Specifications
                  </div>
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                      <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#00D2FF]" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => onSelectPackage(pkg)}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    pkg.isPopular
                      ? 'bg-white text-black hover:bg-[#00D2FF] hover:text-black shadow-lg shadow-white/10'
                      : 'bg-white/5 hover:bg-white/15 text-white border border-white/15'
                  }`}
                >
                  <span>Select {pkg.name.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#070709] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#10B981] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                Full Intellectual Property & Direct Code Ownership
              </div>
              <div className="text-xs text-[#94A3B8]">
                You receive 100% of the repository, domain credentials, and raw media assets upon completion.
              </div>
            </div>
          </div>
          <a
            href="https://wa.me/918185807402?text=Hello%20ByteX%20Media!%20I%20have%20questions%20about%20your%20packages."
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[#00D2FF] hover:text-white transition-colors shrink-0 flex items-center gap-1"
          >
            <span>Questions? Chat with an Engineer</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
