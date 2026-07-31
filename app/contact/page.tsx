'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Send,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Users,
  MessageSquare,
} from 'lucide-react';
import { siteConfig } from '@/config/site';
import { cottagesData } from '@/config/cottages';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    arrivalDate: '',
    departureDate: '',
    guests: '2',
    cottage: 'cottage-one',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Client-side validation: Date check
    if (formData.arrivalDate && formData.departureDate) {
      if (new Date(formData.departureDate) <= new Date(formData.arrivalDate)) {
        setStatus('error');
        setErrorMessage('Departure date must be after your arrival date.');
        return;
      }
    }

    // Basic field presence check
    if (!formData.name || !formData.email || !formData.phone) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email, and phone number.');
      return;
    }

    // TODO: Connect this form handler to official backend API endpoint or direct WhatsApp redirect flow.
    // Example: window.location.href = `https://wa.me/...`
    setTimeout(() => {
      setStatus('success');
    }, 1000);
  };

  return (
    <div className="pt-24 min-h-screen bg-pine-950 text-cream">
      
      {/* Header */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pine-900 border border-amber/30 text-[11px] font-sans tracking-widest text-amber uppercase">
          <span>Reservations & Inquiries</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl font-light">
          Book Your <span className="italic font-normal text-amber">Mountain Stay</span>
        </h1>

        <p className="font-sans text-base md:text-lg text-mist font-light max-w-2xl mx-auto leading-relaxed">
          Send us a booking inquiry for seasonal availability, cottage reservations, or special arrangements at Secret Garden Kalam.
        </p>
      </section>

      {/* Main Content Grid */}
      <section className="pb-32 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Inquiry Form Column */}
          <div className="lg:col-span-7 p-8 md:p-12 rounded-3xl bg-pine-900/50 border border-amber/20 shadow-2xl space-y-8">
            <div className="border-b border-amber/10 pb-6">
              <h2 className="font-serif text-2xl md:text-3xl text-cream font-medium">
                Send Booking Inquiry
              </h2>
              <p className="font-sans text-xs text-mist font-light mt-1">
                Please complete the details below. We will review availability and respond promptly.
              </p>
            </div>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-pine-800/80 border border-amber/40 text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-amber/20 border border-amber/40 flex items-center justify-center text-amber mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-cream font-medium">
                  Inquiry Received
                </h3>
                <p className="font-sans text-sm text-mist font-light max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-amber">{formData.name}</strong>. Your inquiry for{' '}
                  <span className="text-cream">{formData.guests} guest(s)</span> has been sent. Our team will contact you shortly via phone or email.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-6 py-2.5 rounded-full bg-amber text-pine-950 font-sans text-xs tracking-wider uppercase font-bold"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs font-sans flex items-center gap-3">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-sans uppercase tracking-widest text-amber font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Aamir Khan"
                      className="w-full px-4 py-3 rounded-xl bg-pine-950/80 border border-amber/20 text-cream placeholder-stone text-sm focus:outline-none focus:border-amber transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-sans uppercase tracking-widest text-amber font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. aamir@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-pine-950/80 border border-amber/20 text-cream placeholder-stone text-sm focus:outline-none focus:border-amber transition-colors"
                    />
                  </div>
                </div>

                {/* Phone & Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-xs font-sans uppercase tracking-widest text-amber font-medium">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+92 300 1234567"
                      className="w-full px-4 py-3 rounded-xl bg-pine-950/80 border border-amber/20 text-cream placeholder-stone text-sm focus:outline-none focus:border-amber transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="guests" className="block text-xs font-sans uppercase tracking-widest text-amber font-medium">
                      Number of Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-pine-950/80 border border-amber/20 text-cream text-sm focus:outline-none focus:border-amber transition-colors"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5+">5+ Guests (Family Group)</option>
                    </select>
                  </div>
                </div>

                {/* Arrival & Departure Dates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="arrivalDate" className="block text-xs font-sans uppercase tracking-widest text-amber font-medium">
                      Arrival Date
                    </label>
                    <input
                      type="date"
                      id="arrivalDate"
                      name="arrivalDate"
                      value={formData.arrivalDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-pine-950/80 border border-amber/20 text-cream text-sm focus:outline-none focus:border-amber transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="departureDate" className="block text-xs font-sans uppercase tracking-widest text-amber font-medium">
                      Departure Date
                    </label>
                    <input
                      type="date"
                      id="departureDate"
                      name="departureDate"
                      value={formData.departureDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-pine-950/80 border border-amber/20 text-cream text-sm focus:outline-none focus:border-amber transition-colors"
                    />
                  </div>
                </div>

                {/* Cottage Selection */}
                <div className="space-y-2">
                  <label htmlFor="cottage" className="block text-xs font-sans uppercase tracking-widest text-amber font-medium">
                    Preferred Cottage
                  </label>
                  <select
                    id="cottage"
                    name="cottage"
                    value={formData.cottage}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-pine-950/80 border border-amber/20 text-cream text-sm focus:outline-none focus:border-amber transition-colors"
                  >
                    {cottagesData.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name} — {c.subtitle}
                      </option>
                    ))}
                    <option value="no-preference">No Preference / Any Cottage</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-sans uppercase tracking-widest text-amber font-medium">
                    Special Requests / Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Let us know any special arrangements, arrival timings, or questions..."
                    className="w-full px-4 py-3 rounded-xl bg-pine-950/80 border border-amber/20 text-cream placeholder-stone text-sm focus:outline-none focus:border-amber transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 rounded-xl bg-amber hover:bg-amber-light text-pine-950 font-sans text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-warm-glow flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    <span>Processing Inquiry...</span>
                  ) : (
                    <>
                      <span>Send Booking Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Details & Map Card Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-pine-900/50 border border-amber/20 shadow-xl space-y-6">
              <h3 className="font-serif text-2xl text-cream font-medium border-b border-amber/10 pb-4">
                Direct Contact Information
              </h3>

              <div className="space-y-5 text-sm font-sans">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-pine-950 border border-amber/30 text-amber">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-amber font-medium block">
                      Phone & WhatsApp
                    </span>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-cream hover:text-amber transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-pine-950 border border-amber/30 text-amber">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-amber font-medium block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-cream hover:text-amber transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-pine-950 border border-amber/30 text-amber">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-amber font-medium block">
                      Instagram
                    </span>
                    <a
                      href={siteConfig.contact.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream hover:text-amber transition-colors"
                    >
                      {siteConfig.contact.instagram}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-pine-950 border border-amber/30 text-amber">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-amber font-medium block">
                      Retreat Address
                    </span>
                    <p className="text-mist font-light leading-relaxed">
                      {siteConfig.contact.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-amber/10">
                <a
                  href={siteConfig.contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-pine-950 border border-amber/30 text-amber hover:text-cream hover:bg-pine-800 font-sans text-xs tracking-wider uppercase font-semibold transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
