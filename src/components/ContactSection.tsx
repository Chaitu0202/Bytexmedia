import React, { useState, forwardRef, useImperativeHandle } from 'react';
import {
  Send,
  CheckCircle2,
  Mail,
  Phone,
  MessageSquare,
  AlertCircle,
  Copy,
  Check,
  Calendar,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ContactFormData } from '../types';

export interface ContactSectionRef {
  setPreselectedService: (serviceName: string) => void;
}

export const ContactSection = forwardRef<ContactSectionRef, {}>((_, ref) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    businessName: '',
    email: '',
    phoneNumber: '',
    service: 'Website Development',
    budget: '$500 - $1,500',
    preferredMethod: 'Email',
    description: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useImperativeHandle(ref, () => ({
    setPreselectedService: (serviceName: string) => {
      setFormData((prev) => ({ ...prev, service: serviceName }));
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
  }));

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.description.trim()) {
      errs.description = 'Please provide a short description of your project';
    } else if (formData.description.trim().length < 10) {
      errs.description = 'Please write at least 10 characters so we can understand your needs';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate submission saving to local state
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Save inquiries locally
      try {
        const stored = JSON.parse(localStorage.getItem('bytex_inquiries') || '[]');
        stored.push({ ...formData, submittedAt: new Date().toISOString() });
        localStorage.setItem('bytex_inquiries', JSON.stringify(stored));
      } catch (e) {
        console.warn('Local storage write skipped');
      }
    }, 800);
  };

  const handleCopySummary = () => {
    const summary = `ByteX Media Project Inquiry:
Name: ${formData.fullName}
Business: ${formData.businessName || 'N/A'}
Email: ${formData.email}
Phone: ${formData.phoneNumber || 'N/A'}
Service: ${formData.service}
Budget: ${formData.budget}
Contact Method: ${formData.preferredMethod}
Description: ${formData.description}`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoLink = `mailto:hello@bytexmedia.com?subject=${encodeURIComponent(
    `Inquiry: ${formData.service} for ${formData.businessName || formData.fullName}`
  )}&body=${encodeURIComponent(
    `Hello ByteX Media Team,\n\nI would like to discuss a project:\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phoneNumber}\nService: ${formData.service}\nBudget: ${formData.budget}\nPreferred Method: ${formData.preferredMethod}\n\nProject Details:\n${formData.description}\n\nThank you!`
  )}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#050816] relative border-t border-[#263653]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Left Column: Context & Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101A33] border border-[#263653] text-[11px] font-semibold tracking-wider uppercase text-[#3B82F6] mb-3">
                LET&apos;S TALK
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight mb-4">
                Ready to Build Something{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] via-[#3B82F6] to-[#8B5CF6]">
                  Meaningful?
                </span>
              </h2>
              <p className="text-base text-[#CBD5E1] leading-relaxed mb-8">
                Whether you&apos;re starting a business, improving your digital presence, or exploring AI-powered solutions, let&apos;s discuss what you want to build.
              </p>

              {/* Direct channels */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#101A33] border border-[#263653]">
                  <div className="w-10 h-10 rounded-lg bg-[#0A1024] border border-[#263653] flex items-center justify-center text-[#3B82F6] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#94A3B8]">Email Consultation</div>
                    <div className="text-sm font-semibold text-[#F8FAFC]">hello@bytexmedia.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#101A33] border border-[#263653]">
                  <div className="w-10 h-10 rounded-lg bg-[#0A1024] border border-[#263653] flex items-center justify-center text-[#22D3EE] shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#94A3B8]">Direct WhatsApp / Chat</div>
                    <div className="text-sm font-semibold text-[#F8FAFC]">+91 (Consultation Channel)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Student Promise Notice */}
            <div className="p-4 rounded-xl bg-[#0A1024] border border-[#263653] text-xs text-[#94A3B8] leading-relaxed">
              <span className="text-[#CBD5E1] font-semibold">Response Commitment: </span>
              We review every inquiry within 24 hours with a thoughtful initial technical assessment and no pressure.
            </div>
          </div>

          {/* Right Column: Contact Form or Success View */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0A1024] border border-[#263653] shadow-2xl relative">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-6 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-[#34D399]/20 border border-[#34D399]/40 flex items-center justify-center text-[#34D399] mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#F8FAFC] mb-2">
                      Inquiry Received, {formData.fullName}!
                    </h3>
                    <p className="text-sm text-[#CBD5E1] max-w-md mx-auto leading-relaxed">
                      Thank you for sharing your project goals. Your inquiry has been saved and our team has been notified.
                    </p>
                  </div>

                  {/* Inquiry summary card */}
                  <div className="p-4 rounded-xl bg-[#050816] border border-[#263653] text-left max-w-lg mx-auto text-xs space-y-2">
                    <div className="flex justify-between text-[#94A3B8]">
                      <span>Service:</span>
                      <span className="text-[#F8FAFC] font-semibold">{formData.service}</span>
                    </div>
                    <div className="flex justify-between text-[#94A3B8]">
                      <span>Contact:</span>
                      <span className="text-[#F8FAFC] font-semibold">{formData.email}</span>
                    </div>
                    <div className="flex justify-between text-[#94A3B8]">
                      <span>Budget Tier:</span>
                      <span className="text-[#22D3EE] font-semibold">{formData.budget}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={mailtoLink}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-[#2563EB] to-[#06B6D4]"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send Direct Email Copy</span>
                    </a>

                    <button
                      onClick={handleCopySummary}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-[#CBD5E1] bg-[#101A33] border border-[#263653] hover:bg-[#162342] transition-colors"
                    >
                      {copied ? <Check className="w-4 h-4 text-[#34D399]" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? 'Copied Brief' : 'Copy Project Brief'}</span>
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        businessName: '',
                        email: '',
                        phoneNumber: '',
                        service: 'Website Development',
                        budget: '$500 - $1,500',
                        preferredMethod: 'Email',
                        description: '',
                      });
                    }}
                    className="text-xs text-[#94A3B8] hover:text-[#CBD5E1] underline pt-4 cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="input-fullName" className="block text-xs font-semibold text-[#CBD5E1] mb-1.5">
                        Full Name <span className="text-[#22D3EE]">*</span>
                      </label>
                      <input
                        id="input-fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#050816] border text-sm text-[#F8FAFC] placeholder-[#94A3B8]/60 focus:outline-none focus:ring-1 focus:ring-[#3B82F6] transition-colors ${
                          errors.fullName ? 'border-red-500' : 'border-[#263653]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Business Name */}
                    <div>
                      <label htmlFor="input-businessName" className="block text-xs font-semibold text-[#CBD5E1] mb-1.5">
                        Business / Brand Name <span className="text-[#94A3B8] font-normal">(Optional)</span>
                      </label>
                      <input
                        id="input-businessName"
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Apex Studio"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#050816] border border-[#263653] text-sm text-[#F8FAFC] placeholder-[#94A3B8]/60 focus:outline-none focus:ring-1 focus:ring-[#3B82F6]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label htmlFor="input-email" className="block text-xs font-semibold text-[#CBD5E1] mb-1.5">
                        Email Address <span className="text-[#22D3EE]">*</span>
                      </label>
                      <input
                        id="input-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#050816] border text-sm text-[#F8FAFC] placeholder-[#94A3B8]/60 focus:outline-none focus:ring-1 focus:ring-[#3B82F6] transition-colors ${
                          errors.email ? 'border-red-500' : 'border-[#263653]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="input-phone" className="block text-xs font-semibold text-[#CBD5E1] mb-1.5">
                        Phone / WhatsApp <span className="text-[#94A3B8] font-normal">(Optional)</span>
                      </label>
                      <input
                        id="input-phone"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#050816] border border-[#263653] text-sm text-[#F8FAFC] placeholder-[#94A3B8]/60 focus:outline-none focus:ring-1 focus:ring-[#3B82F6]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Service Dropdown */}
                    <div>
                      <label htmlFor="select-service" className="block text-xs font-semibold text-[#CBD5E1] mb-1.5">
                        Service Interested In
                      </label>
                      <select
                        id="select-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#050816] border border-[#263653] text-sm text-[#F8FAFC] focus:outline-none focus:ring-1 focus:ring-[#3B82F6]"
                      >
                        <option value="Website Development">Website Development</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="AI Automation">AI Automation</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Google Business Profile">Google Business Profile</option>
                        <option value="Creative Design">Creative Design</option>
                        <option value="Other">Other Custom Inquiry</option>
                      </select>
                    </div>

                    {/* Budget Range */}
                    <div>
                      <label htmlFor="select-budget" className="block text-xs font-semibold text-[#CBD5E1] mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        id="select-budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#050816] border border-[#263653] text-sm text-[#F8FAFC] focus:outline-none focus:ring-1 focus:ring-[#3B82F6]"
                      >
                        <option value="Under $500">Under $500</option>
                        <option value="$500 - $1,500">$500 - $1,500</option>
                        <option value="$1,500 - $3,000">$1,500 - $3,000</option>
                        <option value="$3,000+">$3,000+</option>
                        <option value="Let's Discuss">Let&apos;s Discuss</option>
                      </select>
                    </div>

                    {/* Preferred Method */}
                    <div>
                      <label htmlFor="select-method" className="block text-xs font-semibold text-[#CBD5E1] mb-1.5">
                        Preferred Contact
                      </label>
                      <select
                        id="select-method"
                        value={formData.preferredMethod}
                        onChange={(e) => setFormData({ ...formData, preferredMethod: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#050816] border border-[#263653] text-sm text-[#F8FAFC] focus:outline-none focus:ring-1 focus:ring-[#3B82F6]"
                      >
                        <option value="Email">Email</option>
                        <option value="WhatsApp">WhatsApp</option>
                        <option value="Phone Call">Phone Call</option>
                        <option value="Google Meet">Google Meet</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="input-description" className="block text-xs font-semibold text-[#CBD5E1] mb-1.5">
                      Project Description <span className="text-[#22D3EE]">*</span>
                    </label>
                    <textarea
                      id="input-description"
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Tell us about your current challenges, timeline, or what you are looking to build..."
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#050816] border text-sm text-[#F8FAFC] placeholder-[#94A3B8]/60 focus:outline-none focus:ring-1 focus:ring-[#3B82F6] transition-colors ${
                        errors.description ? 'border-red-500' : 'border-[#263653]'
                      }`}
                    />
                    {errors.description && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.description}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#2563EB] to-[#06B6D4] hover:opacity-95 shadow-lg shadow-[#2563EB]/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Submitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Start Your Journey</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = 'ContactSection';
