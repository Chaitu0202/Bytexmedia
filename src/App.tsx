import React, { useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CapabilityStrip } from './components/CapabilityStrip';
import { BusinessChallenge } from './components/BusinessChallenge';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { AISolutionsSection } from './components/AISolutionsSection';
import { PackagesSection } from './components/PackagesSection';
import { TrustSection } from './components/TrustSection';
import { ContactSection, ContactSectionRef } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceDetailModal, CaseStudyModal, LegalModal } from './components/Modals';
import { ServiceItem, ProjectItem, PackageItem } from './types';

export default function App() {
  const contactRef = useRef<ContactSectionRef>(null);

  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleStartJourney = (preferredService?: string) => {
    if (preferredService && contactRef.current) {
      contactRef.current.setPreselectedService(preferredService);
    } else {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePackageSelect = (pkg: PackageItem) => {
    let serviceMap: Record<string, string> = {
      starter: 'Website Development',
      growth: 'Digital Marketing',
      pro: 'AI Automation',
    };
    const targetService = serviceMap[pkg.id] || 'Website Development';
    handleStartJourney(targetService);
  };

  return (
    <div className="min-h-screen bg-[#050816] text-[#F8FAFC] flex flex-col font-sans selection:bg-[#3B82F6]/30 selection:text-[#22D3EE]">
      {/* 1. Sticky Navigation */}
      <Navbar onOpenQuote={() => handleStartJourney('Website Development')} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onStartJourney={() => handleStartJourney()}
          onExploreServices={handleExploreServices}
        />

        {/* 3. Capability Strip */}
        <CapabilityStrip />

        {/* 4. Business Challenge Section */}
        <BusinessChallenge />

        {/* 5. Services Section */}
        <ServicesSection onSelectService={(service) => setSelectedService(service)} />

        {/* 6. About ByteX Media */}
        <AboutSection onStartJourney={() => handleStartJourney()} />

        {/* 7. Zero to Hero Process */}
        <ProcessSection onStartJourney={() => handleStartJourney()} />

        {/* 8. Featured Projects */}
        <FeaturedProjects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 9. AI Solutions Section */}
        <AISolutionsSection onStartJourney={() => handleStartJourney('AI Automation')} />

        {/* 10. Packages / Engagement Options */}
        <PackagesSection onSelectPackage={handlePackageSelect} />

        {/* 11. Testimonials / Trust Section */}
        <TrustSection />

        {/* 12. Contact / Final CTA Section */}
        <ContactSection ref={contactRef} />
      </main>

      {/* 13. Footer */}
      <Footer
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
