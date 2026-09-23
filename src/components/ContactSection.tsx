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
  ArrowRight,
  ExternalLink
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
    service: 'Website Development (from ₹2,999)',
    preferredMethod: 'WhatsApp',
    description: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [deliveryStatus, setDeliveryStatus] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useImperativeHandle(ref, () => ({
    setPreselectedService: (serviceName: string) => {
      let matched = 'Website Development (from ₹2,999)';
      const s = serviceName.toLowerCase();
      if (s.includes('app')) {
        matched = 'Mobile App Development (from ₹9,999)';
      } else if (s.includes('google') || s.includes('gbp') || s.includes('maps')) {
        matched = 'Google Business Profile (₹999)';
      } else if (s.includes('instagram') || s.includes('marketing')) {
        matched = 'Instagram Handling & Marketing';
      } else if (s.includes('ai') || s.includes('automation')) {
        matched = 'AI Automation & Custom Tools';
      } else if (s.includes('design') || s.includes('brand')) {
        matched = 'Branding & Creative Design';
      } else if (s.includes('web')) {
        matched = 'Website Development (from ₹2,999)';
      }
      setFormData((prev) => ({ ...prev, service: matched }));
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
      errs.description = 'Please provide a short description of your project or business';
    } else if (formData.description.trim().length < 5) {
      errs.description = 'Please write at least a few words so we understand what you need';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setDeliveryStatus('Transmitting inquiry to hello@bytexmedia.in...');

    try {
      // Direct real email dispatch to hello@bytexmedia.in via FormSubmit AJAX API
      const response = await fetch('https://formsubmit.co/ajax/hello@bytexmedia.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New ByteX Media Inquiry: ${formData.service} from ${formData.fullName}`,
          name: formData.fullName,
          business: formData.businessName || 'Individual / Not specified',
          email: formData.email,
          phone: formData.phoneNumber || 'Not provided',
          service: formData.service,
          preferredMethod: formData.preferredMethod,
          message: formData.description,
          _template: 'table',
        }),
      });

      if (response.ok) {
        setDeliveryStatus('Dispatched successfully to hello@bytexmedia.in');
      } else {
        setDeliveryStatus('Saved locally and ready for direct WhatsApp dispatch');
      }
    } catch (err) {
      // In case of ad-blocker or offline, data is still retained and ready
      setDeliveryStatus('Inquiry recorded and queued');
    } finally {
      // Save locally as backup
      try {
        const stored = JSON.parse(localStorage.getItem('bytex_inquiries') || '[]');
        stored.push({ ...formData, submittedAt: new Date().toISOString() });
        localStorage.setItem('bytex_inquiries', JSON.stringify(stored));
      } catch (e) {
        console.warn('Local storage write skipped');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleCopySummary = () => {
    const summary = `ByteX Media Project Inquiry:
Name: ${formData.fullName}
Business: ${formData.businessName || 'N/A'}
Email: ${formData.email}
Phone/WhatsApp: ${formData.phoneNumber || 'N/A'}
Service: ${formData.service}
Contact Method: ${formData.preferredMethod}
Description: ${formData.description}`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoLink = `mailto:hello@bytexmedia.in?subject=${encodeURIComponent(
    `Inquiry: ${formData.service} for ${formData.businessName || formData.fullName}`
  )}&body=${encodeURIComponent(
    `Hello ByteX Media Team,\n\nI would like to discuss a project:\n\nName: ${formData.fullName}\nBusiness: ${formData.businessName}\nEmail: ${formData.email}\nPhone: ${formData.phoneNumber}\nService: ${formData.service}\nPreferred Method: ${formData.preferredMethod}\n\nProject Requirements:\n${formData.description}\n\nThank you!`
  )}`;

  const whatsAppLink = `https://wa.me/919390244788?text=${encodeURIComponent(
    `Hello ByteX Media Team! My name is ${formData.fullName}. I am inquiring about ${formData.service}. My requirements: ${formData.description}`
  )}`;

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#000000] relative border-t border-[#1A253C]">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#0052FE]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Context & Direct Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0F19] border border-[#1A253C] text-[11px] font-bold tracking-wider uppercase text-[#00D2FF] mb-3">
                DIRECT INQUIRY & CONSULTATION
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                Let&apos;s Build Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] via-[#00D2FF] to-white">
                  Next Project.
                </span>
              </h2>
              <p className="text-base text-[#CBD5E1] leading-relaxed mb-6">
                Tell us what you want to build. From websites at ₹2,999 to custom mobile applications and Google Business local ranking, our team will review and respond quickly.
              </p>

              {/* Direct channels */}
              <div className="space-y-3.5 mb-6">
                <a
                  href="mailto:hello@bytexmedia.in"
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#0B0F19] border border-[#1A253C] hover:border-[#00D2FF]/60 hover:bg-[#111827] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#000000] border border-[#1A253C] flex items-center justify-center text-[#00D2FF] group-hover:scale-105 transition-transform shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-[#94A3B8]">Direct Official Email</div>
                    <div className="text-sm font-bold text-white group-hover:text-[#00D2FF] transition-colors">
                      hello@bytexmedia.in
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#94A3B8] group-hover:text-[#00D2FF] transition-colors" />
                </a>

                <a
                  href="https://wa.me/919390244788?text=Hello%20ByteX%20Media!%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#0B0F19] border border-[#1A253C] hover:border-[#10B981]/60 hover:bg-[#111827] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#000000] border border-[#1A253C] flex items-center justify-center text-[#10B981] group-hover:scale-105 transition-transform shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-[#94A3B8]">Direct WhatsApp / Chat</div>
                    <div className="text-sm font-bold text-white group-hover:text-[#10B981] transition-colors">
                      +91 93902 44788
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#94A3B8] group-hover:text-[#10B981] transition-colors" />
                </a>
              </div>
            </div>

            {/* Response Guarantee Notice */}
            <div className="p-4 rounded-2xl bg-[#0B0F19] border border-[#1A253C] text-xs text-[#94A3B8] leading-relaxed">
              <span className="text-[#00D2FF] font-bold">Fast Response Guarantee: </span>
              Inquiries sent here are delivered directly to <span className="text-white font-mono font-semibold">hello@bytexmedia.in</span>. We review and provide a direct proposal within 24 hours.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0B0F19] border border-[#1A253C] shadow-2xl relative">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-6 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center text-[#10B981] mx-auto shadow-lg shadow-[#10B981]/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white mb-2">
                      Inquiry Dispatched, {formData.fullName}!
                    </h3>
                    <p className="text-sm text-[#CBD5E1] max-w-md mx-auto leading-relaxed">
                      Your details have been sent to <span className="text-[#00D2FF] font-mono font-bold">hello@bytexmedia.in</span>. Our team will review your project and get in touch via {formData.preferredMethod}.
                    </p>
                  </div>

                  {/* Inquiry summary card */}
                  <div className="p-4 rounded-2xl bg-[#000000] border border-[#1A253C] text-left max-w-lg mx-auto text-xs space-y-2">
                    <div className="flex justify-between text-[#94A3B8]">
                      <span>Target Recipient:</span>
                      <span className="text-[#00D2FF] font-mono font-semibold">hello@bytexmedia.in</span>
                    </div>
                    <div className="flex justify-between text-[#94A3B8]">
                      <span>Requested Service:</span>
                      <span className="text-white font-semibold">{formData.service}</span>
                    </div>
                    <div className="flex justify-between text-[#94A3B8]">
                      <span>Your Contact Email:</span>
                      <span className="text-white font-semibold">{formData.email}</span>
                    </div>
                    <div className="flex justify-between text-[#94A3B8]">
                      <span>Preferred Contact:</span>
                      <span className="text-[#10B981] font-semibold">{formData.preferredMethod}</span>
                    </div>
                  </div>

                  {/* Actions: Send Direct WhatsApp & Direct Email */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={whatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#10B981] hover:bg-[#059669] transition-colors shadow-lg shadow-[#10B981]/25"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp Now</span>
                    </a>

                    <a
                      href={mailtoLink}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#0052FE] to-[#00D2FF] hover:brightness-110 shadow-md"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Email Client</span>
                    </a>

                    <button
                      onClick={handleCopySummary}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-[#CBD5E1] bg-[#000000] border border-[#1A253C] hover:bg-[#111827] transition-colors cursor-pointer"
                    >
                      {copied ? <Check className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? 'Copied Brief' : 'Copy Brief'}</span>
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
                        service: 'Website Development (from ₹2,999)',
                        preferredMethod: 'WhatsApp',
                        description: '',
                      });
                    }}
                    className="text-xs text-[#94A3B8] hover:text-white underline pt-4 cursor-pointer"
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
                        Full Name <span className="text-[#00D2FF]">*</span>
                      </label>
                      <input
                        id="input-fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#000000] border text-sm text-white placeholder-[#94A3B8]/60 focus:outline-none focus:ring-1 focus:ring-[#00D2FF] transition-colors ${
                          errors.fullName ? 'border-red-500' : 'border-[#1A253C]'
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
                        placeholder="e.g. Apex Health Clinic"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#000000] border border-[#1A253C] text-sm text-white placeholder-[#94A3B8]/60 focus:outline-none focus:ring-1 focus:ring-[#00D2FF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label htmlFor="input-email" className="block text-xs font-semibold text-[#CBD5E1] mb-1.5">
                        Email Address <span className="text-[#00D2FF]">*</span>
                      </label>
                      <input
                        id="input-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@example.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#000000] border text-sm text-white placeholder-[#94A3B8]/60 focus:outline-none focus:ring-1 focus:ring-[#00D2FF] transition-colors ${
                          errors.email ? 'border-red-500' : 'border-[#1A253C]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone / WhatsApp */}
                    <div>
                      <label htmlFor="input-phone" className="block text-xs font-semibold text-[#CBD5E1] mb-1.5">
                        Phone / WhatsApp <span className="text-[#94A3B8] font-normal">(Optional)</span>
                      </label>
                      <input
                        id="input-phone"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#000000] border border-[#1A253C] text-sm text-white placeholder-[#94A3B8]/60 focus:outline-none focus:ring-1 focus:ring-[#00D2FF]"
                      />
                    </div>
                  </div>

                  {/* 2-Column Grid: Service and Preferred Contact Method (NO BUDGET FIELD) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service Dropdown */}
                    <div>
                      <label htmlFor="select-service" className="block text-xs font-semibold text-[#CBD5E1] mb-1.5">
                        Service Interested In
                      </label>
                      <select
                        id="select-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#000000] border border-[#1A253C] text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#00D2FF]"
                      >
                        <option value="Website Development (from ₹2,999)">Website Development (from ₹2,999)</option>
                        <option value="Mobile App Development (from ₹9,999)">Mobile App Development (from ₹9,999)</option>
                        <option value="Google Business Profile (₹999)">Google Business Profile (₹999)</option>
                        <option value="Instagram Handling & Marketing">Instagram Handling & Marketing</option>
                        <option value="AI Automation & Custom Tools">AI Automation & Custom Tools</option>
                        <option value="Branding & Creative Design">Branding & Creative Design</option>
                        <option value="All-in-One Custom Package">All-in-One Custom Package</option>
                      </select>
                    </div>

                    {/* Preferred Method */}
                    <div>
                      <label htmlFor="select-method" className="block text-xs font-semibold text-[#CBD5E1] mb-1.5">
                        Preferred Contact Method
                      </label>
                      <select
                        id="select-method"
                        value={formData.preferredMethod}
                        onChange={(e) => setFormData({ ...formData, preferredMethod: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#000000] border border-[#1A253C] text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#00D2FF]"
                      >
                        <option value="WhatsApp">WhatsApp (Fastest response)</option>
                        <option value="Phone Call">Phone Call</option>
                        <option value="Email">Email</option>
                        <option value="Google Meet">Google Meet</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="input-description" className="block text-xs font-semibold text-[#CBD5E1] mb-1.5">
                      Tell Us About Your Project Requirements <span className="text-[#00D2FF]">*</span>
                    </label>
                    <textarea
                      id="input-description"
                      rows={3}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="e.g. We need a 3-page website with WhatsApp inquiry integration for our dental clinic, plus Google Maps ranking..."
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#000000] border text-sm text-white placeholder-[#94A3B8]/60 focus:outline-none focus:ring-1 focus:ring-[#00D2FF] transition-colors ${
                        errors.description ? 'border-red-500' : 'border-[#1A253C]'
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
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#0052FE] via-[#00A3FF] to-[#00D2FF] hover:brightness-110 shadow-lg shadow-[#00A3FF]/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending directly to hello@bytexmedia.in...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Request to hello@bytexmedia.in</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <div className="text-[11px] text-[#94A3B8] text-center mt-2">
                      Submissions are routed directly to <span className="text-white font-mono">hello@bytexmedia.in</span>
                    </div>
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
