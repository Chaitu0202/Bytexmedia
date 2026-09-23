import React from 'react';
import { Check, ArrowRight, Sparkles, Tag, ShieldCheck } from 'lucide-react';
import { PACKAGES_DATA } from '../data/content';
import { PackageItem } from '../types';

interface PackagesSectionProps {
  onSelectPackage: (pkg: PackageItem) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-20 md:py-28 bg-[#000000] relative border-t border-[#1A253C]">
      {/* Subtle Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#00D2FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0F19] border border-[#1A253C] text-[11px] font-bold tracking-wider uppercase text-[#00D2FF] mb-3">
            CLEAR • AFFORDABLE • ZERO HIDDEN CHARGES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Transparent Pricing.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] via-[#00D2FF] to-white">
              Unmatched Value.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed">
            Designed for businesses that need high-impact results without inflated agency markups. Choose your solution below.
          </p>
        </div>

        {/* 3 Packages Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES_DATA.map((pkg) => (
            <div
              key={pkg.id}
              id={`package-card-${pkg.id}`}
              className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.isPopular
                  ? 'bg-gradient-to-b from-[#111827] to-[#0B0F19] border-2 border-[#00D2FF] shadow-2xl shadow-[#00A3FF]/20 lg:-translate-y-2'
                  : 'bg-[#0B0F19] border border-[#1A253C] hover:border-[#00D2FF]/50 shadow-xl'
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#0052FE] to-[#00D2FF] text-white text-[11px] font-black uppercase tracking-wider shadow-lg">
                  {pkg.badge}
                </div>
              )}

              <div>
                {/* Header */}
                <div className="mb-5">
                  <h3 className="text-2xl font-black text-white mb-2">{pkg.name}</h3>
                  <p className="text-sm text-[#CBD5E1] leading-relaxed min-h-[40px]">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="p-4 rounded-2xl bg-[#000000] border border-[#1A253C] mb-6">
                  <div className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider mb-1">
                    Special Investment
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-white">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-[#00D2FF] font-semibold">
                      {pkg.id === 'pro' ? 'starting' : 'flat fee'}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#94A3B8] mt-1.5 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>{pkg.pricingNote}</span>
                  </div>
                </div>

                {/* Ideal For */}
                <div className="text-xs text-[#94A3B8] mb-6 pb-4 border-b border-[#1A253C]">
                  <span className="font-semibold text-white">Ideal for: </span>
                  {pkg.idealFor}
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider">
                    What&apos;s Included:
                  </div>
                  {pkg.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#CBD5E1]">
                      <Check className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Package CTA */}
              <button
                id={`btn-package-${pkg.id}`}
                onClick={() => onSelectPackage(pkg)}
                className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  pkg.isPopular
                    ? 'bg-gradient-to-r from-[#0052FE] via-[#00A3FF] to-[#00D2FF] text-white hover:brightness-110 shadow-lg shadow-[#00A3FF]/30'
                    : 'bg-[#000000] text-white border border-[#1A253C] hover:border-[#00D2FF] hover:bg-[#111827]'
                }`}
              >
                <span>{pkg.actionLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Custom Scope Advisory Note */}
        <div className="mt-12 text-center text-xs text-[#94A3B8] max-w-xl mx-auto">
          Need custom combinations (e.g. Website + Google Business Profile + Instagram Handling)? Select your services in the inquiry form below for a combined package.
        </div>
      </div>
    </section>
  );
};
