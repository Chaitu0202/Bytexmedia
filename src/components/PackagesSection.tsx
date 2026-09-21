import React from 'react';
import { Check, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { PACKAGES_DATA } from '../data/content';
import { PackageItem } from '../types';

interface PackagesSectionProps {
  onSelectPackage: (pkg: PackageItem) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-20 md:py-28 bg-[#050816] relative border-t border-[#263653]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101A33] border border-[#263653] text-[11px] font-semibold tracking-wider uppercase text-[#3B82F6] mb-3">
            OUR PACKAGES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight mb-4">
            Simple Packages.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#22D3EE] to-[#8B5CF6]">
              Big Possibilities.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed">
            Choose a starting point for your goals. We&apos;ll help you define the right scope for your business.
          </p>
        </div>

        {/* 3 Packages Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES_DATA.map((pkg) => (
            <div
              key={pkg.id}
              id={`package-card-${pkg.id}`}
              className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.isPopular
                  ? 'bg-gradient-to-b from-[#162342] to-[#101A33] border-2 border-[#3B82F6] shadow-2xl shadow-[#3B82F6]/15 lg:-translate-y-2'
                  : 'bg-[#101A33] border border-[#263653] hover:border-[#3B82F6]/50 shadow-xl'
              }`}
            >
              {/* Popular Badge */}
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                  {pkg.badge}
                </div>
              )}

              <div>
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#F8FAFC] mb-2">{pkg.name}</h3>
                  <p className="text-sm text-[#CBD5E1] leading-relaxed min-h-[40px]">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Scope & Pricing indicator (no fake dollar claims) */}
                <div className="p-4 rounded-xl bg-[#0A1024] border border-[#263653] mb-6">
                  <div className="text-xs font-mono text-[#94A3B8] uppercase mb-1">Pricing Model</div>
                  <div className="text-sm font-semibold text-[#22D3EE]">
                    Custom Quote Tailored to Scope
                  </div>
                  <div className="text-[11px] text-[#CBD5E1] mt-1">
                    Transparent milestone billing • No surprise fees
                  </div>
                </div>

                {/* Ideal For */}
                <div className="text-xs text-[#94A3B8] mb-6 pb-4 border-b border-[#263653]/60">
                  <span className="font-semibold text-[#CBD5E1]">Best for: </span>
                  {pkg.idealFor}
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider">
                    Included Services:
                  </div>
                  {pkg.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#CBD5E1]">
                      <Check className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Package CTA */}
              <button
                id={`btn-package-${pkg.id}`}
                onClick={() => onSelectPackage(pkg)}
                className={`w-full py-3.5 px-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  pkg.isPopular
                    ? 'bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white hover:opacity-95 shadow-lg shadow-[#2563EB]/25'
                    : 'bg-[#0A1024] text-[#CBD5E1] border border-[#263653] hover:bg-[#162342] hover:text-white'
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
          Need a specific combination of services not listed here? Every package can be customized based on your business stage and requirements.
        </div>
      </div>
    </section>
  );
};
