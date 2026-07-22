import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare, Plus, Check, HeartPulse, ShieldAlert, X } from 'lucide-react';

// Reusable Components
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import GalleryView from './components/GalleryView';
import ContactView from './components/ContactView';
import WhatsAppOrderForm from './components/WhatsAppOrderForm';
import { useTracker } from './hooks/useTracker';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [isDark, setIsDark] = useState<boolean>(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);
  const [selectedMedicineForOrder, setSelectedMedicineForOrder] = useState<string>('');

  // Global Website Visitor Tracking
  useTracker(currentTab);

  // 1. Dark Mode System
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  // 2. SEO & Document Tag Configuration
  useEffect(() => {
    let title = 'RAJ MADICAL HALL | Genuine Medicines & Pharmacy in Pai Bigha, Bihar';
    let description = 'RAJ MADICAL HALL at Pai Bigha, Bihar is your certified local medical store for authentic prescription medicines, health supplements, baby care items and daily wellness needs.';

    switch (currentTab) {
      case 'about':
        title = 'About RAJ MADICAL HALL | Trustworthy Local Healthcare History';
        description = 'Discover our history, mission, core pharmacy values, and continuous commitment of RAJ MADICAL HALL to the residents of Pai Bigha, Gaya, Bihar.';
        break;
      case 'services':
        title = 'Pharmaceutical Services | Branded & Generic Medicines';
        description = 'Browse our 10 dedicated pharmacy offerings: prescription drug verification, diabetic kits, general OTC pills, maternal wellness and orthopedic braces.';
        break;
      case 'gallery':
        title = 'RAJ MADICAL HALL Store Photos & Medical Equipment Gallery';
        description = 'Explore digital imagery of our hygienic store interiors, safe cold-chain vaccine storages, and diagnostic equipment selections in Pai Bigha, Bihar.';
        break;
      case 'contact':
        title = 'Contact RAJ MADICAL HALL | Get Directions & Working Hours';
        description = 'Connect with licensed pharmacists at Pai Bigha, Bihar 804424. Active phone numbers, direct maps search integration, and live inquiry structures.';
        break;
    }

    document.title = title;

    // Dynamically set Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Set canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${window.location.origin}/${currentTab}`);
  }, [currentTab]);

  // 3. Inject JSON-LD Schema Markups for Local SEO
  useEffect(() => {
    const existingScript = document.getElementById('jsonld-seo-schemas');
    if (existingScript) {
      existingScript.remove();
    }

    const businessSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        // 1. Pharmacy / Local Business Schema
        {
          '@type': 'Pharmacy',
          '@id': 'https://rajmedicalhall.com/#pharmacy',
          'name': 'RAJ MADICAL HALL',
          'description': 'Your Trusted Medical Store for Genuine Medicines & Healthcare Needs in Pai Bigha, Bihar.',
          'url': window.location.origin,
          'telephone': '+917857896727',
          'logo': 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=200&auto=format&fit=crop',
          'image': 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=800&auto=format&fit=crop',
          'priceRange': '₹₹',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'RAJ MADICAL HALL, Pai Bigha, Bihar 804424',
            'addressLocality': 'Pai Bigha',
            'addressRegion': 'Bihar',
            'postalCode': '804424',
            'addressCountry': 'IN'
          },
          'geo': {
            '@type': 'GeoCoordinates',
            'latitude': '25.0125', // approximate coordinates for Pai Bigha region
            'longitude': '84.9546'
          },
          'openingHoursSpecification': {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday'
            ],
            'opens': '08:00',
            'closes': '21:30'
          },
          'contactPoint': {
            '@type': 'ContactPoint',
            'telephone': '+917857896727',
            'contactType': 'customer support',
            'areaServed': 'IN',
            'availableLanguage': ['English', 'Hindi']
          }
        },
        // 2. Breadcrumb Schema
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://rajmedicalhall.com/#breadcrumbs',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': window.location.origin
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': currentTab.toUpperCase(),
              'item': `${window.location.origin}/${currentTab}`
            }
          ]
        },
        // 3. Contact Schema
        {
          '@type': 'ContactPage',
          '@id': 'https://rajmedicalhall.com/#contact',
          'url': `${window.location.origin}/contact`,
          'name': 'Contact RAJ MADICAL HALL',
          'description': 'Direct telephone connection and Google Map locations for our pharmacy.'
        }
      ]
    };

    const script = document.createElement('script');
    script.id = 'jsonld-seo-schemas';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(businessSchema);
    document.head.appendChild(script);

    return () => {
      const cleanupScript = document.getElementById('jsonld-seo-schemas');
      if (cleanupScript) {
        cleanupScript.remove();
      }
    };
  }, [currentTab]);

  const handleOrderClick = (medicineName = '') => {
    setSelectedMedicineForOrder(medicineName);
    setIsOrderModalOpen(true);
  };

  const handleServiceInquiry = (serviceTitle: string) => {
    setSelectedMedicineForOrder(`Inquiry about Service: ${serviceTitle}`);
    setIsOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 selection:bg-emerald-500 selection:text-white transition-colors duration-300">
      {/* 1. Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        isDark={isDark}
        toggleDarkMode={toggleDarkMode}
        openOrderForm={() => handleOrderClick()}
      />

      {/* 2. Hero Section (Only visible on Home) */}
      {currentTab === 'home' && <Hero openOrderForm={() => handleOrderClick()} />}

      {/* 3. Main content body with smooth AnimatePresence switches */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {currentTab === 'home' && (
              <HomeView
                onOrderClick={handleOrderClick}
                setCurrentTab={setCurrentTab}
              />
            )}
            {currentTab === 'about' && <AboutView />}
            {currentTab === 'services' && (
              <ServicesView onServiceInquiry={handleServiceInquiry} />
            )}
            {currentTab === 'gallery' && <GalleryView />}
            {currentTab === 'contact' && <ContactView />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 4. Footer */}
      <Footer setCurrentTab={setCurrentTab} openOrderForm={() => handleOrderClick()} />

      {/* 5. Floating Interactive Buttons (Right Bottom) */}
      <div id="floating-actions-container" className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
        {/* Floating Call Button */}
        <a
          id="floating-call-btn"
          href="tel:07857896727"
          className="bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white p-4 rounded-full shadow-xl shadow-slate-950/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group relative"
          aria-label="Call RAJ MADICAL HALL directly"
        >
          <Phone className="h-5 w-5 text-emerald-400 group-hover:rotate-12 transition-transform" />
          <span className="absolute right-14 bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow border border-slate-800">
            Call Us Now: 07857896727
          </span>
        </a>

        {/* Floating WhatsApp Button */}
        <button
          id="floating-whatsapp-btn"
          onClick={() => handleOrderClick()}
          className="bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-xl shadow-emerald-600/30 flex items-center justify-center transition-all duration-300 hover:scale-110 group relative cursor-pointer"
          aria-label="Order on WhatsApp"
        >
          <MessageSquare className="h-5 w-5 fill-current text-white group-hover:scale-105" />
          <span className="absolute right-14 bg-emerald-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow">
            Order via WhatsApp
          </span>
        </button>
      </div>

      {/* 6. MODAL OVERLAY: WhatsApp Order Form */}
      {isOrderModalOpen && (
        <div id="whatsapp-order-modal" className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
          <div className="w-full max-w-2xl relative my-8" onClick={(e) => e.stopPropagation()}>
            <WhatsAppOrderForm
              selectedMedicine={selectedMedicineForOrder}
              onClose={() => setIsOrderModalOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
