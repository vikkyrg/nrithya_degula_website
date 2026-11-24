import { useState } from 'react';
import { useReveal } from '../utils/useReveal';
import { siteData } from '../data/siteData';
import { Phone, Mail, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import api from '../services/api';

export default function Contact() {
  const addToRefs = useReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    branch: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errors.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required.';
    } else {
      const cleanPhone = formData.phone.trim().replace(/[\s\-()]/g, '');
      if (cleanPhone.length < 7 || cleanPhone.length > 15) {
        errors.phone = 'Please enter a valid phone number (7-15 digits).';
      }
    }

    if (formData.age) {
      const ageNum = Number(formData.age);
      if (isNaN(ageNum) || ageNum < 1 || ageNum > 120) {
        errors.age = 'Please enter a valid age.';
      }
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setErrorMessage('');
    const errors = validate();
    setValidationErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setLoading(true);

    try {
      const payload = {
        fullName: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        studentAge: formData.age ? Number(formData.age) : null,
        preferredBranch: formData.branch ? formData.branch.trim() : '',
        message: formData.message ? formData.message.trim() : '',
      };

      const res = await api.post('/enquiries/submit', payload);

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', age: '', branch: '', message: '' });
      setValidationErrors({});

      setTimeout(() => {
        setIsSubmitted(false);
      }, 7000);
    } catch (err) {
      console.error('Error submitting enquiry:', err);
      const serverMsg = err.response?.data?.message || err.message;
      setErrorMessage(serverMsg || 'Unable to submit enquiry. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (validationErrors[e.target.name]) {
      setValidationErrors((prev) => {
        const copy = { ...prev };
        delete copy[e.target.name];
        return copy;
      });
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32 bg-[#FAF8F5] relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#C59A4E]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADING */}
        <div className="text-center mb-16 lg:mb-20">
          <div ref={addToRefs} className="reveal">
            <span className="text-[#C59A4E] font-serif uppercase tracking-[0.25em] text-[10px] font-bold block mb-4">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#3B2818] mb-6">
              Contact Us
            </h2>
            <div className="flex justify-center">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[#C59A4E]/40" />
                <div className="w-1.5 h-1.5 rotate-45 border border-[#C59A4E]/60" />
                <div className="h-[1px] w-12 bg-[#C59A4E]/40" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* =========================================
              LEFT COLUMN: CONTACT INFORMATION
              ========================================= */}
          <div ref={addToRefs} className="flex flex-col gap-10 reveal" style={{ transitionDelay: '100ms' }}>
            <p className="text-[#3B2818]/80 text-lg leading-relaxed font-serif max-w-lg text-center lg:text-left mx-auto lg:mx-0">
              Start your journey with Nrityadegula School of Dance. Reach out to us for admissions, performance enquiries, or any other information.
            </p>

            <div className="flex flex-col gap-6 w-full max-w-md mx-auto lg:mx-0">
              {/* Phone */}
              <div className="flex gap-6 items-center p-6 bg-[#FFFFFF] border border-[#C59A4E]/20 shadow-sm group">
                <div className="w-12 h-12 bg-[#C59A4E] rounded-full flex items-center justify-center text-[#1A0E09] shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[#C59A4E] text-[10px] uppercase tracking-[0.2em] font-bold block mb-1">
                    Phone
                  </span>
                  <a href={`tel:${siteData.contact.phone.replace(/\s+/g, '')}`} className="text-[#3B2818] font-serif font-bold text-lg hover:text-[#8C6208] transition-colors">
                    {siteData.contact.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-6 items-center p-6 bg-[#FFFFFF] border border-[#C59A4E]/20 shadow-sm group">
                <div className="w-12 h-12 bg-[#C59A4E] rounded-full flex items-center justify-center text-[#1A0E09] shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[#C59A4E] text-[10px] uppercase tracking-[0.2em] font-bold block mb-1">
                    Email
                  </span>
                  <a href={`mailto:${siteData.contact.email}`} className="text-[#3B2818] font-serif font-bold text-base sm:text-lg hover:text-[#8C6208] transition-colors break-words">
                    {siteData.contact.email}
                  </a>
                </div>
              </div>

              {/* Socials */}
              <div className="flex flex-col sm:flex-row gap-6 items-center justify-center p-6 bg-[#FFFFFF] border border-[#C59A4E]/20 shadow-sm w-full">
                <a href={`https://instagram.com/${siteData.contact.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-[#C59A4E] rounded-full flex items-center justify-center text-[#1A0E09] shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                  </div>
                  <span className="text-[#3B2818]/80 text-sm font-serif font-bold group-hover:text-[#8C6208] transition-colors">
                    {siteData.contact.instagram}
                  </span>
                </a>

                <div className="hidden sm:block w-px h-6 bg-[#C59A4E]/20" />

                <a href={`https://facebook.com/${siteData.contact.facebook}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-[#C59A4E] rounded-full flex items-center justify-center text-[#1A0E09] shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                  </div>
                  <span className="text-[#3B2818]/80 text-sm font-serif font-bold group-hover:text-[#8C6208] transition-colors">
                    {siteData.contact.facebook}
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN: ENQUIRY FORM
              ========================================= */}
          <div ref={addToRefs} className="w-full max-w-lg mx-auto lg:mx-0 lg:max-w-none bg-[#FFFFFF] p-8 sm:p-10 border border-[#C59A4E]/20 shadow-xl reveal relative" style={{ transitionDelay: '300ms' }}>
            {/* Form decorative corner */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#C59A4E] -translate-x-2 translate-y-2 opacity-50 pointer-events-none" />

            <h3 className="text-2xl font-serif font-bold text-[#3B2818] mb-8">Enquire Now</h3>

            {isSubmitted ? (
              <div className="bg-[#FAF8F5] border border-[#C59A4E]/40 text-[#3B2818] p-8 text-center flex flex-col items-center gap-4 transition-all animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-[#C59A4E]/20 text-[#8C6208] flex items-center justify-center">
                  <CheckCircle2 size={26} strokeWidth={2} />
                </div>
                <p className="font-serif font-bold text-xl">Thank you!</p>
                <p className="text-sm text-[#3B2818]/80 leading-relaxed max-w-sm">
                  Your enquiry has been submitted successfully. We will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-2 text-xs uppercase tracking-widest text-[#8C6208] font-bold hover:underline"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                {errorMessage && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3 rounded-sm">
                    <AlertCircle size={18} className="shrink-0 text-red-600 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest font-bold text-[#3B2818]/70">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Priyadarshini"
                      className={`w-full px-4 py-3 bg-[#FAF8F5] border ${
                        validationErrors.name ? 'border-red-400' : 'border-[#C59A4E]/30'
                      } focus:outline-none focus:border-[#C59A4E] focus:bg-[#FFFFFF] transition-colors text-[#3B2818]`}
                    />
                    {validationErrors.name && (
                      <span className="text-xs text-red-600">{validationErrors.name}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-widest font-bold text-[#3B2818]/70">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. name@example.com"
                      className={`w-full px-4 py-3 bg-[#FAF8F5] border ${
                        validationErrors.email ? 'border-red-400' : 'border-[#C59A4E]/30'
                      } focus:outline-none focus:border-[#C59A4E] focus:bg-[#FFFFFF] transition-colors text-[#3B2818]`}
                    />
                    {validationErrors.email && (
                      <span className="text-xs text-red-600">{validationErrors.email}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs uppercase tracking-widest font-bold text-[#3B2818]/70">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full px-4 py-3 bg-[#FAF8F5] border ${
                        validationErrors.phone ? 'border-red-400' : 'border-[#C59A4E]/30'
                      } focus:outline-none focus:border-[#C59A4E] focus:bg-[#FFFFFF] transition-colors text-[#3B2818]`}
                    />
                    {validationErrors.phone && (
                      <span className="text-xs text-red-600">{validationErrors.phone}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="age" className="text-xs uppercase tracking-widest font-bold text-[#3B2818]/70">
                      Student Age
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      min="3"
                      max="100"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="e.g. 10"
                      className={`w-full px-4 py-3 bg-[#FAF8F5] border ${
                        validationErrors.age ? 'border-red-400' : 'border-[#C59A4E]/30'
                      } focus:outline-none focus:border-[#C59A4E] focus:bg-[#FFFFFF] transition-colors text-[#3B2818]`}
                    />
                    {validationErrors.age && (
                      <span className="text-xs text-red-600">{validationErrors.age}</span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="branch" className="text-xs uppercase tracking-widest font-bold text-[#3B2818]/70">
                    Preferred Branch
                  </label>
                  <select
                    id="branch"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#C59A4E]/30 focus:outline-none focus:border-[#C59A4E] focus:bg-[#FFFFFF] transition-colors text-[#3B2818] appearance-none rounded-none"
                  >
                    <option value="">Select a branch...</option>
                    {siteData.branches.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest font-bold text-[#3B2818]/70">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about previous dance experience or questions..."
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#C59A4E]/30 focus:outline-none focus:border-[#C59A4E] focus:bg-[#FFFFFF] transition-colors text-[#3B2818] resize-y"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 py-4 bg-[#C59A4E] text-[#160B07] font-serif uppercase tracking-[0.2em] text-xs font-bold hover:bg-[#8C6208] hover:text-[#FFFFFF] transition-colors duration-300 shadow-[0_4px_15px_rgba(197,154,78,0.2)] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Submitting Enquiry...</span>
                    </>
                  ) : (
                    <span>Submit Enquiry</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
