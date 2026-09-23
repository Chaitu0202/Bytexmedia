import React, { useState, useEffect, useRef } from 'react';
import { Navbar, NavTab } from './components/Navbar';
import { HomeOverview } from './components/HomeOverview';
import { ServicesSection } from './components/ServicesSection';
import { PackagesSection } from './components/PackagesSection';
import { CapabilityStrip } from './components/CapabilityStrip';
import { FeaturedProjects } from './components/FeaturedProjects';
import { AISolutionsSection } from './components/AISolutionsSection';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { TrustSection } from './components/TrustSection';
import { ContactSection, ContactSectionRef } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceDetailModal, CaseStudyModal, LegalModal } from './components/Modals';
import { ServiceItem, ProjectItem, PackageItem } from './types';
import {
  Home,
  Code,
  Briefcase,
  Sparkles,
  Users,
  Mail,
  ChevronRight,
  ArrowLeft
} from 'lucide-react';

export default function App() {
  const contactRef = useRef<ContactSectionRef>(null);

  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Sync hash with active tab
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavTab;
      if (['home', 'services', 'work', 'ai', 'about', 'contact'].includes(hash)) {
        setActiveTab(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartJourney = (preferredService?: string) => {
    setActiveTab('contact');
    window.location.hash = 'contact';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (preferredService) {
      setTimeout(() => {
        if (contactRef.current) {
          contactRef.current.setPreselectedService(preferredService);
        }
      }, 100);
    }
  };

  const handlePackageSelect = (pkg: PackageItem) => {
    let serviceName = 'Website Development (from ₹2,999)';
    if (pkg.id === 'pro') {
      serviceName = 'Mobile App Development (from ₹9,999)';
    } else if (pkg.id === 'growth') {
      serviceName = 'Google Business Profile (₹999)';
    }
    handleStartJourney(serviceName);
  };

  const tabLabels: Record<NavTab, { title: string; subtitle: string; icon: React.FC<{ className?: string }> }> = {
    home: { title: 'Overview', subtitle: 'ByteX Media Digital Studio', icon: Home },
    services: { title: 'Services & Pricing', subtitle: 'Websites from ₹2,999 • Apps from ₹9,999 • Google Profile for ₹999', icon: Code },
    work: { title: 'Our Work & Case Studies', subtitle: 'Live commercial projects with measurable impact', icon: Briefcase },
    ai: { title: 'AI Automation Studio', subtitle: 'Interactive business workflow pipelines', icon: Sparkles },
    about: { title: 'About Us & Roadmap', subtitle: 'Our student collective & Zero to Hero process', icon: Users },
    contact: { title: 'Contact & Inquiries', subtitle: 'Send directly to hello@bytexmedia.in or WhatsApp', icon: Mail },
  };

  const CurrentIcon = tabLabels[activeTab].icon;

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col font-sans selection:bg-[#00D2FF]/30 selection:text-[#00D2FF]">
      {/* 1. Sticky Navigation */}
      <Navbar
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onOpenQuote={() => handleStartJourney('Website Development (from ₹2,999)')}
      />

      <main className="flex-1 pt-16">
        {/* Sub-navigation bar when viewing dedicated pages (less to scroll, fast switching) */}
        {activeTab !== 'home' && (
          <div className="bg-[#0B0F19] border-b border-[#1A253C] sticky top-16 z-40 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <button
                  onClick={() => handleTabChange('home')}
                  className="flex items-center gap-1 text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Home</span>
                </button>
                <ChevronRight className="w-3 h-3 text-[#1A253C]" />
                <div className="flex items-center gap-1.5 text-white font-bold">
                  <CurrentIcon className="w-4 h-4 text-[#00D2FF]" />
                  <span>{tabLabels[activeTab].title}</span>
                </div>
              </div>

              {/* View Switcher Pills */}
              <div className="flex items-center gap-1 overflow-x-auto py-1 max-w-full">
                {(['services', 'work', 'ai', 'about', 'contact'] as NavTab[]).map((tab) => {
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => handleTabChange(tab)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[#111827] text-[#00D2FF] border border-[#00D2FF]/40'
                          : 'text-[#94A3B8] hover:text-white hover:bg-[#000000]'
                      }`}
                    >
                      {tabLabels[tab].title.split(' ')[0]}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* 2. Dynamic View Content (Clean, Focused, Zero Heavy Scrolling) */}
        {activeTab === 'home' && (
          <HomeOverview
            onNavigate={handleTabChange}
            onStartJourney={handleStartJourney}
            onSelectProject={(project) => setSelectedProject(project)}
          />
        )}

        {activeTab === 'services' && (
          <div className="animate-in fade-in duration-300">
            {/* Transparent Pricing First */}
            <PackagesSection onSelectPackage={handlePackageSelect} />
            {/* Detailed Services Grid */}
            <ServicesSection onSelectService={(service) => setSelectedService(service)} />
            {/* Capability Badges */}
            <CapabilityStrip />
          </div>
        )}

        {activeTab === 'work' && (
          <div className="animate-in fade-in duration-300">
            <FeaturedProjects onSelectProject={(project) => setSelectedProject(project)} />
          </div>
        )}

        {activeTab === 'ai' && (
          <div className="animate-in fade-in duration-300">
            <AISolutionsSection onStartJourney={() => handleStartJourney('AI Automation & Custom Tools')} />
          </div>
        )}

        {activeTab === 'about' && (
          <div className="animate-in fade-in duration-300">
            <AboutSection onStartJourney={() => handleStartJourney()} />
            <ProcessSection onStartJourney={() => handleStartJourney()} />
            <TrustSection />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="animate-in fade-in duration-300">
            <ContactSection ref={contactRef} />
          </div>
        )}
      </main>

      {/* 3. Footer */}
      <Footer
        onNavigate={handleTabChange}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Modals */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectForQuote={(name) => handleStartJourney(name)}
      />

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectForQuote={(cat) => handleStartJourney(cat)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
