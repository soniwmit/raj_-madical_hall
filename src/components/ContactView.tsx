import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';
import { ContactMessage } from '../types';

export default function ContactView() {
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSent, setIsSent] = useState(false);
  const mapSearchUrl = 'https://www.google.com/maps/search/?api=1&query=RAJ+MADICAL+HALL+Pai+Bigha+Bihar+804424';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert('Please fill out the required fields: Name, Phone, and Message.');
      return;
    }

    // Format query for informational submit
    setIsSent(true);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const contactDetails = [
    {
      title: 'Store Address',
      desc: 'RAJ MADICAL HALL, Pai Bigha, Gaya, Bihar 804424',
      icon: MapPin,
      actionText: 'Get Directions',
      actionUrl: mapSearchUrl,
      isLink: true
    },
    {
      title: 'Phone Number',
      desc: '+91 78578 96727',
      icon: Phone,
      actionText: 'Call Store',
      actionUrl: 'tel:07857896727',
      isLink: true
    },
    {
      title: 'Email Address',
      desc: 'support.rajmedical@gmail.com',
      icon: Mail,
      actionText: 'Send Email',
      actionUrl: 'mailto:support.rajmedical@gmail.com',
      isLink: true
    },
    {
      title: 'Working Hours',
      desc: 'Monday to Sunday: 08:00 AM - 09:30 PM',
      icon: Clock,
      actionText: '7 Days Open',
      actionUrl: '#',
      isLink: false
    }
  ];

  return (
    <div id="contact-page-root" className="bg-bg-main dark:bg-slate-950 py-12 md:py-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title & Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center space-x-1 bg-secondary/10 text-secondary px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider mb-3 animate-pulse">
            <span>Direct Support</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary dark:text-white tracking-tight font-sans">
            Contact Us
          </h2>
          <p className="text-base text-brand-light dark:text-slate-400 mt-3 font-light leading-relaxed">
            Get in touch directly with our pharmacists. Ask for medicine stock availability, submit pricing queries, or arrange local deliveries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact details card deck */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-primary dark:text-white tracking-tight font-sans">
              Business Information
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {contactDetails.map((item, idx) => (
                <div key={idx} id={`contact-item-${idx}`} className="bg-white dark:bg-slate-900 p-5 rounded-lg border border-border-custom dark:border-slate-900 shadow-sm flex items-start space-x-4">
                  <div className="p-3 rounded-md bg-secondary/10 text-secondary shrink-0">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-brand-light dark:text-slate-400 leading-relaxed break-words">
                      {item.desc}
                    </p>
                    {item.isLink ? (
                      <a
                        id={`contact-action-link-${idx}`}
                        href={item.actionUrl}
                        target={item.actionUrl.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-xs font-semibold text-secondary hover:text-secondary-hover hover:underline"
                      >
                        <span>{item.actionText}</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <span className="inline-block text-[10px] font-bold font-mono text-secondary uppercase bg-secondary/10 px-2.5 py-0.5 rounded-md">
                        {item.actionText}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency note */}
            <div className="bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-950 rounded-lg p-5">
              <div className="flex space-x-3">
                <AlertCircle className="h-5 w-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-rose-900 dark:text-rose-300">
                    Emergency Contact Needs?
                  </h4>
                  <p className="text-xs text-rose-700 dark:text-rose-400 mt-1 leading-relaxed">
                    If you require urgent life-saving medications or need to reach our pharmacist immediately outside standard business hours, please call +91 78578 96727 directly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 md:p-8 rounded-lg border border-border-custom dark:border-slate-900 shadow-sm">
            <h3 className="text-xl font-bold text-primary dark:text-white tracking-tight mb-1 font-sans">
              Send a Quick Inquiry
            </h3>
            <p className="text-xs text-brand-light mb-6">
              Fill in the form below and we will get back to you with price confirmations and stock status.
            </p>

            {isSent && (
              <div id="contact-success-banner" className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 rounded-md flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <h4 className="font-semibold text-emerald-800 dark:text-emerald-300">Inquiry Received Successfully!</h4>
                  <p className="text-emerald-700 dark:text-emerald-400 mt-1">
                    Thank you for reaching out to RAJ MADICAL HALL. Our team has received your message and will contact you back shortly on your provided phone number.
                  </p>
                  <button
                    id="dismiss-contact-banner-btn"
                    onClick={() => setIsSent(false)}
                    className="text-xs font-bold text-emerald-600 dark:text-emerald-400 underline mt-2 hover:text-emerald-700 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            )}

            <form id="contact-form" onSubmit={handleSubmitMessage} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                  Your Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded border border-border-custom bg-bg-main dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="e.g. 07857896727"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded border border-border-custom bg-bg-main dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded border border-border-custom bg-bg-main dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                  Your Message / Inquiry Details <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Type your medicine names, healthcare requests, or questions here..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded border border-border-custom bg-bg-main dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                />
              </div>

              <button
                id="submit-contact-inquiry-btn"
                type="submit"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3 bg-secondary hover:bg-secondary-hover text-white rounded text-sm font-bold shadow-sm transition-all cursor-pointer hover:-translate-y-0.5"
              >
                <Send className="h-4 w-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          </div>
        </div>

        {/* Big Embedded Google Map inside Contact page too */}
        <div className="mt-16 text-center">
          <h4 className="text-lg font-bold text-primary dark:text-white mb-4 font-sans">
            Interactive Directional Map
          </h4>
          <div className="rounded-lg overflow-hidden shadow-sm border border-border-custom dark:border-slate-850 h-[350px] relative">
            <iframe
              id="contact-map-iframe"
              src="https://maps.google.com/maps?q=Pai%20Bigha,%20Bihar%20804424+(RAJ%20MADICAL%20HALL)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RAJ MADICAL HALL Google Map Location Contact Page"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}
