import React from 'react';
import { Phone, MessageSquare, MapPin, ShieldCheck, Clock, Users } from 'lucide-react';

interface HeroProps {
  openOrderForm: () => void;
}

export default function Hero({ openOrderForm }: HeroProps) {
  const mapSearchUrl = 'https://www.google.com/maps/search/?api=1&query=RAJ+MADICAL+HALL+Pai+Bigha+Bihar+804424';

  return (
    <section id="hero-section" className="relative bg-white dark:bg-slate-950 overflow-hidden border-b border-border-custom dark:border-slate-900 min-h-[480px] flex items-center">
      {/* Decorative Subtle Grid Background representing Professional Medical design */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0056b3 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 via-secondary/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-slate-900 dark:text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/20 px-3 py-1 rounded-md">
              <span className="h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-xs font-bold text-secondary tracking-wider uppercase">
                Serving Paibigha Community
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-primary dark:text-white">
              Your Trusted Neighborhood Pharmacy
              <span className="block mt-2 text-secondary text-2xl sm:text-3xl md:text-4xl font-bold">
                Genuine Medicines & Trusted Care
              </span>
            </h2>

            <p className="text-sm sm:text-base text-brand-light dark:text-slate-300 max-w-xl leading-relaxed">
              Providing genuine medicines, baby care, surgical supplies, dietary supplements, and daily health essentials at honest, affordable pricing since inception. Verified safety protocols and licensed pharmacist assistance.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              {/* WhatsApp Order */}
              <button
                id="hero-whatsapp-btn"
                onClick={openOrderForm}
                className="flex items-center justify-center space-x-2 px-6 py-3 rounded-md bg-secondary hover:bg-secondary-hover text-white font-semibold transition-all shadow-sm cursor-pointer"
              >
                <MessageSquare className="h-4 w-4 fill-current" />
                <span>WhatsApp Order</span>
              </button>

              {/* Call Now */}
              <a
                id="hero-call-btn"
                href="tel:07857896727"
                className="flex items-center justify-center space-x-2 px-6 py-3 rounded-md bg-primary hover:bg-primary-hover text-white font-semibold transition-all shadow-sm text-center"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>

              {/* Get Directions */}
              <a
                id="hero-directions-btn"
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-6 py-3 rounded-md bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 border border-border-custom dark:border-slate-800 text-brand-dark dark:text-slate-200 font-semibold transition-all text-center"
              >
                <MapPin className="h-4 w-4 text-primary" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Quick trust factors */}
            <div className="pt-6 border-t border-border-custom dark:border-slate-800 grid grid-cols-3 gap-3">
              <div className="flex items-start space-x-2">
                <ShieldCheck className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">100% Genuine</p>
                  <p className="text-[10px] text-brand-light dark:text-slate-400">Certified Quality</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">Open Daily</p>
                  <p className="text-[10px] text-brand-light dark:text-slate-400">8 AM - 10 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Users className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">Local Trust</p>
                  <p className="text-[10px] text-brand-light dark:text-slate-400">Pai Bigha, Bihar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Banner Visual Side with Professional Polish layout */}
          <div className="lg:col-span-5 hidden lg:block relative">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-2xl -rotate-2"></div>
              
              {/* Content Panel */}
              <div className="bg-white dark:bg-slate-900 border border-border-custom dark:border-slate-800 p-6 rounded-xl shadow-md relative z-10 space-y-4">
                <div className="bg-primary text-white text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded w-max">
                  Store Profile
                </div>
                <div className="space-y-2.5 font-sans">
                  <div className="flex justify-between border-b border-border-custom dark:border-slate-800 pb-1.5">
                    <span className="text-brand-light dark:text-slate-400 text-xs">Establishment:</span>
                    <span className="font-semibold text-xs text-slate-900 dark:text-white">RAJ MADICAL HALL</span>
                  </div>
                  <div className="flex justify-between border-b border-border-custom dark:border-slate-800 pb-1.5">
                    <span className="text-brand-light dark:text-slate-400 text-xs">Direct Support:</span>
                    <span className="font-semibold text-xs text-secondary">07857896727</span>
                  </div>
                  <div className="flex justify-between border-b border-border-custom dark:border-slate-800 pb-1.5">
                    <span className="text-brand-light dark:text-slate-400 text-xs">Pai Bigha Pin:</span>
                    <span className="font-semibold text-xs text-slate-900 dark:text-white">804424 (Gaya, Bihar)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-light dark:text-slate-400 text-xs">Pharmacy Status:</span>
                    <span className="font-semibold text-xs text-secondary">Active & Fully Stocked</span>
                  </div>
                </div>
                
                <div className="pt-3 bg-bg-main dark:bg-slate-950 p-4 rounded-lg border border-border-custom dark:border-slate-800">
                  <p className="text-xs text-brand-light dark:text-slate-300 text-center italic leading-relaxed">
                    "Quick prescription verification and premium-quality baby care products directly in our community."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
