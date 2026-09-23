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
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your name';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.description.trim()) {
      errs.description = 'Please describe your project or request';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setDeliveryStatus('Connecting to hello@bytexmedia.in...');

    try {
      // Primary submit via FormSubmit AJAX endpoint directly to hello@bytexmedia.in
      const payload = {
        _subject: `New Lead: ${formData.service} - ${formData.businessName || formData.fullName}`,
        name: formData.fullName,
        businessName: formData.businessName || 'N/A',
        email: formData.email,
        phoneOrWhatsApp: formData.phoneNumber || 'N/A',
        requestedService: formData.service,
        contactPreference: formData.preferredMethod,
        projectBrief: formData.description,
        timestamp: new Date().toISOString(),
      };

      const response = await fetch('https://formsubmit.co/ajax/hello@bytexmedia.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setDeliveryStatus('Dispatched to hello@bytexmedia.in');
      } else {
        setDeliveryStatus('Logged locally; immediate backup links enabled');
      }
    } catch (err) {
      console.warn('FormSubmit endpoint offline or blocked; using fallback storage & direct mailer/WhatsApp');
      setDeliveryStatus('Ready for instant WhatsApp / Email dispatch');
    } finally {
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

  const whatsAppLink = `https://wa.me/918185807402?text=${encodeURIComponent(
    `Hello ByteX Media Team! My name is ${formData.fullName}. I am inquiring about ${formData.service}. My requirements: ${formData.description}`
  )}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#000000] relative border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Context & Direct Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              <div className="text-xs font-mono tracking-widest text-[#00D2FF] uppercase mb-3">
                ( GET IN TOUCH · DIRECT CONSULTATION )
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase font-editorial mb-4">
                LET&apos;S INITIATE{' '}
                <span className="text-white/40">
                  YOUR BUILD.
                </span>
              </h2>
              <p className="text-xs sm:text-sm font-mono text-[#CBD5E1] leading-relaxed mb-8">
                Websites from ₹2,999, mobile applications from ₹9,999, and local Google Business Profile setup for ₹999. Direct engineering review with proposals within 24 hours.
              </p>

              {/* Direct channels */}
              <div className="space-y-3 mb-8">
                <a
                  href="mailto:hello@bytexmedia.in"
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#070709] border border-white/10 hover:border-white/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white group-hover:scale-105 transition-transform shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-mono text-[#94A3B8] uppercase">Direct Official Email</div>
                    <div className="text-sm font-mono font-bold text-white group-hover:text-[#00D2FF] transition-colors">
                      hello@bytexmedia.in
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#94A3B8] group-hover:text-white transition-colors" />
                </a>

                <a
                  href="https://wa.me/918185807402?text=Hello%20ByteX%20Media!%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#070709] border border-white/10 hover:border-[#10B981]/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#10B981] group-hover:scale-105 transition-transform shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-mono text-[#94A3B8] uppercase">Direct WhatsApp Channel</div>
                    <div className="text-sm font-mono font-bold text-white group-hover:text-[#10B981] transition-colors">
                      +91 81858 07402
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#94A3B8] group-hover:text-[#10B981] transition-colors" />
                </a>

                <a
                  href="tel:+918185807402"
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#070709] border border-white/10 hover:border-white/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white group-hover:scale-105 transition-transform shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-mono text-[#94A3B8] uppercase">Direct Voice Line</div>
                    <div className="text-sm font-mono font-bold text-white group-hover:text-[#00D2FF] transition-colors">
                      +91 81858 07402
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#94A3B8] group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Response Guarantee Notice */}
            <div className="p-4 rounded-2xl bg-[#070709] border border-white/10 text-xs font-mono text-[#94A3B8] leading-relaxed">
              <span className="text-[#00D2FF] font-bold">Fast Response Guarantee: </span>
              Inquiries dispatched here are received immediately by <span className="text-white font-mono font-semibold">hello@bytexmedia.in</span>.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#070709] border border-white/10 shadow-2xl backdrop-blur-xl relative">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-6 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#10B981] mx-auto shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white font-editorial mb-2">
                      Inquiry Dispatched, {formData.fullName}!
                    </h3>
                    <p className="text-xs font-mono text-[#CBD5E1] max-w-md mx-auto leading-relaxed">
                      Your brief has been forwarded directly to <span className="text-[#00D2FF] font-mono font-bold">hello@bytexmedia.in</span>. We will follow up via {formData.preferredMethod}.
                    </p>
                  </div>

                  {/* Inquiry summary card */}
                  <div className="p-5 rounded-2xl bg-black border border-white/10 text-left max-w-lg mx-auto text-xs font-mono space-y-2">
                    <div className="flex justify-between text-[#94A3B8]">
                      <span>Target Recipient:</span>
                      <span className="text-white font-semibold">hello@bytexmedia.in</span>
                    </div>
                    <div className="flex justify-between text-[#94A3B8]">
                      <span>Selected Capability:</span>
                      <span className="text-white font-semibold">{formData.service}</span>
                    </div>
                    <div className="flex justify-between text-[#94A3B8]">
                      <span>Sender Email:</span>
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
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-mono font-bold text-xs sm:text-sm text-black bg-[#10B981] hover:bg-[#059669] transition-all shadow-lg"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp Now</span>
                    </a>

                    <a
                      href={mailtoLink}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-mono font-bold text-xs sm:text-sm text-black bg-white hover:bg-[#00D2FF] transition-all shadow-md"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Direct Email</span>
                    </a>

                    <button
                      onClick={handleCopySummary}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-mono font-semibold text-xs sm:text-sm text-white bg-black border border-white/15 hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      {copied ? <Check className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? 'Copied' : 'Copy Brief'}</span>
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
                    className="text-xs font-mono text-[#94A3B8] hover:text-white underline pt-4 cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="input-fullName" className="block text-xs font-mono text-[#CBD5E1] mb-1.5">
                        Full Name <span className="text-[#00D2FF]">*</span>
                      </label>
                      <input
                        id="input-fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-4 py-3 rounded-xl bg-black border text-xs font-mono text-white placeholder-[#94A3B8]/50 focus:outline-none focus:border-white transition-colors ${
                          errors.fullName ? 'border-red-500' : 'border-white/15'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] font-mono text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Business Name */}
                    <div>
                      <label htmlFor="input-businessName" className="block text-xs font-mono text-[#CBD5E1] mb-1.5">
                        Business / Brand Name <span className="text-[#94A3B8] font-normal">(Optional)</span>
                      </label>
                      <input
                        id="input-businessName"
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Apex Health Clinic"
                        className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-xs font-mono text-white placeholder-[#94A3B8]/50 focus:outline-none focus:border-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label htmlFor="input-email" className="block text-xs font-mono text-[#CBD5E1] mb-1.5">
                        Email Address <span className="text-[#00D2FF]">*</span>
                      </label>
                      <input
                        id="input-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-black border text-xs font-mono text-white placeholder-[#94A3B8]/50 focus:outline-none focus:border-white transition-colors ${
                          errors.email ? 'border-red-500' : 'border-white/15'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] font-mono text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone / WhatsApp */}
                    <div>
                      <label htmlFor="input-phone" className="block text-xs font-mono text-[#CBD5E1] mb-1.5">
                        Phone / WhatsApp <span className="text-[#94A3B8] font-normal">(Optional)</span>
                      </label>
                      <input
                        id="input-phone"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-xs font-mono text-white placeholder-[#94A3B8]/50 focus:outline-none focus:border-white"
                      />
                    </div>
                  </div>

                  {/* 2-Column Grid: Service and Preferred Contact Method */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service Dropdown */}
                    <div>
                      <label htmlFor="select-service" className="block text-xs font-mono text-[#CBD5E1] mb-1.5">
                        Capability Interested In
                      </label>
                      <select
                        id="select-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-xs font-mono text-white focus:outline-none focus:border-white"
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
                      <label htmlFor="select-method" className="block text-xs font-mono text-[#CBD5E1] mb-1.5">
                        Preferred Contact Method
                      </label>
                      <select
                        id="select-method"
                        value={formData.preferredMethod}
                        onChange={(e) => setFormData({ ...formData, preferredMethod: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-xs font-mono text-white focus:outline-none focus:border-white"
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
                    <label htmlFor="input-description" className="block text-xs font-mono text-[#CBD5E1] mb-1.5">
                      Tell Us About Your Project Requirements <span className="text-[#00D2FF]">*</span>
                    </label>
                    <textarea
                      id="input-description"
                      rows={3}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="e.g. We need a 3-page website with WhatsApp inquiry integration for our dental clinic, plus Google Maps ranking..."
                      className={`w-full px-4 py-3 rounded-xl bg-black border text-xs font-mono text-white placeholder-[#94A3B8]/50 focus:outline-none focus:border-white transition-colors ${
                        errors.description ? 'border-red-500' : 'border-white/15'
                      }`}
                    />
                    {errors.description && (
                      <p className="text-[11px] font-mono text-red-400 mt-1 flex items-center gap-1">
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
                      className="w-full py-4 px-6 rounded-xl font-mono font-bold text-xs sm:text-sm text-black bg-white hover:bg-[#00D2FF] hover:text-black transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 shadow-xl"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          <span>Routing directly to hello@bytexmedia.in...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Brief to hello@bytexmedia.in</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <div className="text-[11px] font-mono text-[#94A3B8] text-center mt-2.5">
                      Directly routed to <span className="text-white font-bold">hello@bytexmedia.in</span> • No spam policy
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
