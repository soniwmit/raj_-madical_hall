import React from 'react';
import { SERVICES } from '../data/storeData';
import { 
  FileText, CheckCircle, TrendingUp, Heart, User, Activity, Scissors, 
  BriefcaseMedical, PlusCircle, ShieldAlert, Sparkles, MessageSquare, Phone
} from 'lucide-react';

interface ServicesViewProps {
  onServiceInquiry: (serviceTitle: string) => void;
}

export default function ServicesView({ onServiceInquiry }: ServicesViewProps) {
  // Map icons from lucide
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return <FileText className="h-6 w-6" />;
      case 'CheckCircle': return <CheckCircle className="h-6 w-6" />;
      case 'TrendingUp': return <TrendingUp className="h-6 w-6" />;
      case 'Heart': return <Heart className="h-6 w-6" />;
      case 'User': return <User className="h-6 w-6" />;
      case 'Activity': return <Activity className="h-6 w-6" />;
      case 'Scissors': return <Scissors className="h-6 w-6" />;
      case 'ShieldAlert': return <ShieldAlert className="h-6 w-6" />;
      case 'BriefcaseMedical': return <BriefcaseMedical className="h-6 w-6" />;
      default: return <PlusCircle className="h-6 w-6" />;
    }
  };

  const getBadgeColor = (id: string) => {
    const idx = parseInt(id.replace('s', ''));
    if (idx % 3 === 0) return 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-900/30';
    if (idx % 2 === 0) return 'text-purple-600 bg-purple-50 dark:text-purple-400 dark:bg-purple-950/20 border border-purple-200/50 dark:border-purple-900/30';
    return 'text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-900/30';
  };

  return (
    <div id="services-page-root" className="bg-bg-main dark:bg-slate-950 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Page Title & Intro */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1 bg-secondary/10 text-secondary px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="h-3 w-3" />
            <span>Dedicated Pharmacy Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary dark:text-white tracking-tight">
            Our Healthcare Services
          </h2>
          <p className="text-base md:text-lg text-brand-light dark:text-slate-400 mt-4 leading-relaxed font-light">
            We offer 10 dedicated pharmaceutical and wellness services with complete support, genuine products, and digital tracking.
          </p>
        </div>

        {/* Detailed Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {SERVICES.map((srv) => (
            <div 
              key={srv.id}
              id={`service-detail-card-${srv.id}`}
              className="bg-white dark:bg-slate-900 rounded-lg border border-border-custom dark:border-slate-800 p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between border-l-4 border-l-secondary"
            >
              <div>
                {/* Header of card */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-md ${getBadgeColor(srv.id)}`}>
                    {getIcon(srv.icon)}
                  </div>
                  <span className="text-[10px] font-bold font-mono tracking-widest text-brand-light uppercase">
                    Service #{srv.id.replace('s', '')}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-light dark:text-slate-400 mt-3 leading-relaxed">
                  {srv.description}
                </p>

                {/* Bullets List */}
                <div className="mt-6 pt-6 border-t border-border-custom dark:border-slate-800">
                  <h4 className="text-xs font-bold uppercase text-brand-light tracking-wider mb-3">
                    What we provide:
                  </h4>
                  <ul className="space-y-2.5">
                    {srv.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-600 dark:text-slate-300">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Order Actions */}
              <div className="mt-8 pt-6 border-t border-border-custom dark:border-slate-800/50 flex flex-col sm:flex-row gap-3">
                <button
                  id={`inquire-srv-${srv.id}`}
                  onClick={() => onServiceInquiry(srv.title)}
                  className="flex-1 flex items-center justify-center space-x-2 px-5 py-3 bg-secondary hover:bg-secondary-hover text-white rounded text-xs font-bold shadow-sm transition-all cursor-pointer hover:-translate-y-0.5"
                >
                  <MessageSquare className="h-4 w-4 fill-current" />
                  <span>Inquire via WhatsApp</span>
                </button>
                <a
                  id={`call-srv-${srv.id}`}
                  href="tel:07857896727"
                  className="flex items-center justify-center space-x-2 px-5 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded text-xs font-bold transition-all"
                >
                  <Phone className="h-4 w-4 text-secondary" />
                  <span>Call Store</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Banner Quick Help */}
        <div className="mt-16 bg-white dark:bg-slate-900 border border-border-custom dark:border-slate-800 rounded-lg p-8 max-w-4xl mx-auto text-left">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Don't see your specific medical item or service?
              </h4>
              <p className="text-xs text-brand-light dark:text-slate-400 mt-1 max-w-xl">
                We continuously stock specific rare formulas and local clinical surgical aids on-demand. Let us know what you need and we will source it within 24 hours.
              </p>
            </div>
            <a
              id="services-consultation-btn"
              href="tel:07857896727"
              className="w-full sm:w-auto text-center px-6 py-3 bg-primary hover:bg-primary-hover text-white text-xs font-bold rounded shadow-sm whitespace-nowrap"
            >
              Get Free Consultation
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
