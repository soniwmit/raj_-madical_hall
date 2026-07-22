import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Phone, MessageSquare, HeartPulse } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  isDark: boolean;
  toggleDarkMode: () => void;
  openOrderForm: () => void;
}

export default function Header({
  currentTab,
  setCurrentTab,
  isDark,
  toggleDarkMode,
  openOrderForm,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Our Services' },
    { id: 'gallery', label: 'Store Gallery' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Upper-most Header top-bar for Professional Polish Theme */}
      <div className="bg-primary text-white py-2 px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center text-xs font-semibold tracking-wide border-b border-primary-hover gap-1 sm:gap-0">
        <span>📍 Location: Pai Bigha, Bihar 804424</span>
        <span>📞 Support: +91 78578 96727 | ⏰ Open Daily: 8:00 AM - 10:00 PM</span>
      </div>

      <header
        id="main-header"
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md py-2.5'
            : 'bg-white dark:bg-slate-950 py-3.5 border-b border-border-custom dark:border-slate-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Business Name */}
            <button
              id="logo-btn"
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-3 group text-left cursor-pointer focus:outline-none"
            >
              <div className="bg-secondary p-2.5 rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-300 flex items-center justify-center font-bold text-white text-xl w-10 h-10">
                <span>+</span>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold font-sans tracking-tight text-primary dark:text-white flex flex-col leading-none">
                  <span>RAJ MADICAL HALL</span>
                  <span className="text-[9px] uppercase tracking-wider text-brand-light dark:text-slate-400 font-semibold mt-0.5">
                    GENUINE MEDICINES & HEALTHCARE
                  </span>
                </h1>
              </div>
            </button>

            {/* Desktop Navigation Menu */}
            <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    currentTab === item.id
                      ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-white'
                      : 'text-brand-dark dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-primary dark:hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Actions: Dark mode, Call, WhatsApp, Hamburger */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Dark Mode Toggle */}
              <button
                id="theme-toggle"
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun className="h-5 w-5 text-amber-500" /> : <Moon className="h-5 w-5 text-slate-700" />}
              </button>

              {/* Call Now Button (Desktop & Mobile Quick Action) */}
              <a
                id="header-call-btn"
                href="tel:07857896727"
                className="hidden sm:flex items-center space-x-1.5 px-4 py-2 rounded-md bg-primary hover:bg-primary-hover text-white text-sm font-semibold transition-all duration-200 shadow-sm"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>

              {/* WhatsApp Order Button */}
              <button
                id="header-whatsapp-btn"
                onClick={openOrderForm}
                className="flex items-center space-x-1.5 px-4 py-2 rounded-md bg-secondary hover:bg-secondary-hover text-white text-sm font-semibold shadow-sm transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
              >
                <MessageSquare className="h-4 w-4 fill-current" />
                <span className="hidden md:inline">WhatsApp Order</span>
                <span className="md:hidden">Order</span>
              </button>

              {/* Mobile Hamburger Button */}
              <button
                id="mobile-menu-toggle"
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors duration-200 cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isOpen && (
          <div id="mobile-menu-drawer" className="lg:hidden fixed inset-0 top-[110px] sm:top-[90px] z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md transition-all duration-300 border-t border-border-custom dark:border-slate-900">
            <div className="px-4 py-6 space-y-3 max-w-md mx-auto">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-5 py-3 rounded-lg text-base font-semibold transition-all duration-200 flex items-center justify-between ${
                    currentTab === item.id
                      ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-white'
                      : 'text-brand-dark dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className={`h-2 w-2 rounded-full bg-primary transition-opacity ${currentTab === item.id ? 'opacity-100' : 'opacity-0'}`}></span>
                </button>
              ))}

              <div className="pt-6 border-t border-border-custom dark:border-slate-900 flex flex-col space-y-3">
                <a
                  id="mobile-drawer-call"
                  href="tel:07857896727"
                  className="flex items-center justify-center space-x-2 px-5 py-3.5 rounded-lg bg-primary hover:bg-primary-hover text-white font-bold text-center transition-all duration-200"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Us: +91 78578 96727</span>
                </a>
                <button
                  id="mobile-drawer-whatsapp"
                  onClick={() => {
                    setIsOpen(false);
                    openOrderForm();
                  }}
                  className="flex items-center justify-center space-x-2 px-5 py-3.5 rounded-lg bg-secondary hover:bg-secondary-hover text-white font-bold text-center shadow-md transition-all duration-200 cursor-pointer"
                >
                  <MessageSquare className="h-5 w-5 fill-current" />
                  <span>WhatsApp Order</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
