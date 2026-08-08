import React from 'react';
import { HeartPulse, MapPin, Phone, MessageSquare, Clock, ArrowUp, ShieldCheck, Mail } from 'lucide-react';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
  openOrderForm: () => void;
}

export default function Footer({ setCurrentTab, openOrderForm }: FooterProps) {
  const currentYear = 2026; // Set to 2026 as per our local systems date configuration
  const mapSearchUrl = 'https://www.google.com/maps/search/?api=1&query=RAJ+MADICAL+HALL+Pai+Bigha+Bihar+804424';

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const servicesList = [
    'Prescription Medicines',
    'General OTC Medicines',
    'Health Supplements',
    'Baby Care Range',
    'Personal Hygiene',
    'Diabetic & BP Care',
    'Surgical Supplies'
  ];

  return (
    <footer id="main-footer" className="bg-[#111827] text-slate-300 pt-16 pb-8 border-t border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Business Details */}
          <div className="lg:col-span-4 space-y-5">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-3 text-left focus:outline-none cursor-pointer"
            >
              <div className="bg-secondary p-2 rounded-md text-white">
                <HeartPulse className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight font-sans">RAJ MADICAL HALL</h3>
                <p className="text-[10px] font-mono uppercase tracking-widest text-secondary font-semibold">
                  Your Trusted Pharmacy
                </p>
              </div>
            </button>

            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Your Trusted Medical Store for Genuine Medicines & Healthcare Needs. We prioritize authenticity, reasonable pricing, and compassionate local care.
            </p>

            <div className="space-y-3 pt-2">
              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-2.5 text-xs text-slate-400 hover:text-white transition-colors"
              >
                <MapPin className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                <span>RAJ MADICAL HALL, Pai Bigha, Bihar 804424</span>
              </a>

              <a
                href="tel:07857896727"
                className="flex items-center space-x-2.5 text-xs text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-secondary shrink-0" />
                <span>+91 78578 96727</span>
              </a>

              <a
                href="mailto:support.rajmedical@gmail.com"
                className="flex items-center space-x-2.5 text-xs text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-secondary shrink-0" />
                <span>support.rajmedical@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-sans">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-secondary transition-colors cursor-pointer text-slate-400">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-secondary transition-colors cursor-pointer text-slate-400">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-secondary transition-colors cursor-pointer text-slate-400">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('gallery')} className="hover:text-secondary transition-colors cursor-pointer text-slate-400">
                  Store Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-secondary transition-colors cursor-pointer text-slate-400">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={openOrderForm} className="hover:text-secondary transition-colors cursor-pointer text-slate-400">
                  WhatsApp Order Form
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services list */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-sans">Our Range</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {servicesList.map((item, idx) => (
                <li key={idx} className="flex items-center space-x-1.5">
                  <span className="h-1 w-1 bg-secondary rounded-full"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Working Hours & Easy Buttons */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2 font-sans">
              <Clock className="h-4 w-4 text-secondary" />
              <span>Working Hours</span>
            </h4>
            
            <div className="bg-[#1f2937] p-4 rounded-lg border border-slate-800 space-y-2 text-xs">
              <div className="flex justify-between border-b border-slate-800 pb-1.5">
                <span className="text-slate-400">Mon - Sun:</span>
                <span className="text-secondary font-bold">08:00 AM - 09:30 PM</span>
              </div>
              <p className="text-[10px] text-slate-500 leading-normal">
                Open 7 days a week including public holidays. Please call in advance for rare surgical items.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <button
                id="footer-order-btn"
                onClick={openOrderForm}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 bg-secondary hover:bg-secondary-hover text-white rounded text-xs font-bold transition-all shadow-sm cursor-pointer"
              >
                <MessageSquare className="h-3.5 w-3.5 fill-current" />
                <span>WhatsApp Order Form</span>
              </button>
              <a
                href="tel:07857896727"
                className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded text-xs font-bold transition-all border border-slate-700"
              >
                <Phone className="h-3.5 w-3.5 text-secondary" />
                <span>Call Store Now</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom section (Legals, Copyright, Back to top) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="space-y-1 text-center sm:text-left">
            <p>
              © {currentYear} <strong>RAJ MADICAL HALL</strong>. All Rights Reserved. |{' '}
               <a href="#" className="wmit-popup-trigger hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer">Developed by WMIT</a>
            </p>
            <p className="text-[10px] text-slate-600">
              Disclaimer: Please consult a qualified healthcare physician before administering medications. Self-treatment of medications is not advised.
            </p>
          </div>

          {/* Legal Pages links & Back To Top */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => { alert('RAJ MADICAL HALL respects patient privacy. All prescriptions shared via WhatsApp are confidential and never shared with third parties.'); }}
              className="hover:text-secondary transition-colors text-[11px] cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={() => { alert('Terms of Service: Cash payment on store counter or advance digital UPI transfer. Returns require seals intact alongside the physical bill.'); }}
              className="hover:text-secondary transition-colors text-[11px] cursor-pointer"
            >
              Terms & Conditions
            </button>
            
            {/* Back To Top Button */}
            <button
              id="back-to-top-btn"
              onClick={handleBackToTop}
              className="p-2.5 bg-slate-800 hover:bg-slate-700 text-secondary rounded transition-all cursor-pointer shadow-md hover:-translate-y-0.5 focus:outline-none"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
