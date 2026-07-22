import React, { useState } from 'react';
import { MEDICINES, SERVICES, TESTIMONIALS, FAQS } from '../data/storeData';
import { 
  ShieldCheck, Award, Tag, Zap, FileText, ShoppingBag, MapPin, MessageSquare, 
  Search, ArrowRight, Check, Heart, HelpCircle, Eye, AlertCircle, Phone, 
  ChevronDown, ChevronUp, Star, Sparkles, Building, Smile, CheckCircle, Activity,
  Baby, UserCheck, Shield, Thermometer, BriefcaseMedical
} from 'lucide-react';

interface HomeViewProps {
  onOrderClick: (medicineName?: string) => void;
  setCurrentTab: (tab: string) => void;
}

export default function HomeView({ onOrderClick, setCurrentTab }: HomeViewProps) {
  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const categories = [
    'All', 'Tablets', 'Capsules', 'Syrups', 'Medical Equipment', 
    'Protein Supplements', 'Vitamins', 'Skin Care', 'Baby Products', 'Diabetic Care', 'Orthopedic Support'
  ];

  // Filter medicines
  const filteredMedicines = MEDICINES.filter((med) => {
    const matchesSearch = med.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          med.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          med.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || med.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (id: string) => {
    if (openFaq === id) {
      setOpenFaq(null);
    } else {
      setOpenFaq(id);
    }
  };

  const whyChooseUsData = [
    { title: '100% Genuine Medicines', desc: 'Direct supply chain from reputable pharmaceutical brands with no intermediaries.', icon: ShieldCheck, color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30' },
    { title: 'Experienced Staff', desc: 'Experienced and friendly pharmacy advisors helping with dosage guidance.', icon: Award, color: 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30' },
    { title: 'Affordable Prices', desc: 'Sincere local margins ensuring daily healthcare products remain cheap for everyone.', icon: Tag, color: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30' },
    { title: 'Fast Service', desc: 'Pre-packaged medication queues and quick home delivery for surrounding suburbs.', icon: Zap, color: 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/30' },
    { title: 'Prescription Verification', desc: 'Strict verification of prescribed medicines ensuring chemical accuracy and patient safety.', icon: FileText, color: 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/30' },
    { title: 'Healthcare Range', desc: 'One-stop shop stocking diabetic supplies, diagnostic devices, first-aid, and surgical items.', icon: ShoppingBag, color: 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/30' },
    { title: 'Trusted Local Pharmacy', desc: 'Sincere reputation built over years of trusted healthcare support in Pai Bigha.', icon: MapPin, color: 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/30' },
    { title: 'Easy WhatsApp Support', desc: 'Send a prescription photo and get quick order placement with instant WhatsApp dispatch.', icon: MessageSquare, color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30' }
  ];

  const trustFactors = [
    { title: 'Experienced Pharmacy', desc: 'Led by professional healthcare advisors who prioritize your wellness above all else.', icon: UserCheck },
    { title: 'Quality Medicines', desc: 'Strict batch control, non-expired medication guarantees, and certified cool chain facility.', icon: Shield },
    { title: 'Quick Service', desc: 'Fast turnaround times on prescriptions, order packaging, and customized inquiries.', icon: Zap },
    { title: 'Friendly Staff', desc: 'Warm customer relationships, detailed guidance, and patient care focus.', icon: Smile },
    { title: 'Reasonable Pricing', desc: 'Honest billing practices with flat rates, genuine receipts, and senior citizen aid.', icon: Tag },
    { title: 'Convenient Location', desc: 'Located centrally in Pai Bigha bazar, easily accessible for footfall and vehicle pickups.', icon: MapPin }
  ];

  const steps = [
    { num: '01', title: 'Visit Store / Connect', desc: 'Come down to RAJ MADICAL HALL in Pai Bigha or use our easy interactive digital store.' },
    { num: '02', title: 'Share Prescription', desc: 'Show your prescription to our counter staff or upload a quick photo on our WhatsApp Order Form.' },
    { num: '03', title: 'Get Medicines', desc: 'Our certified crew double-checks the medication, packs your items, and prints your cash memo.' },
    { num: '04', title: 'Easy Payment', desc: 'Pay instantly via cash or seamless digital modes like UPI, Google Pay, PhonePe, or cards.' }
  ];

  return (
    <div id="homepage-root">
      {/* 1. WHY CHOOSE US */}
      <section id="why-choose-us" className="py-16 md:py-20 bg-bg-main dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-1 bg-secondary/10 text-secondary dark:text-emerald-400 px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="h-3 w-3" />
            <span>Why RAJ MADICAL HALL?</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-primary dark:text-white tracking-tight font-sans">
            Guarantees of Sincere Healthcare
          </h3>
          <p className="text-sm md:text-base text-brand-light dark:text-slate-400 mt-3 max-w-2xl mx-auto">
            We are dedicated to safeguarding your health. Discover why local families trust us as their go-to pharmacy in Pai Bigha, Bihar.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 text-left">
            {whyChooseUsData.map((item, idx) => (
              <div 
                key={idx}
                id={`choose-card-${idx}`}
                className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-border-custom dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`p-3 rounded-md w-max transition-all duration-300 ${item.color} group-hover:scale-110`}>
                  <item.icon className="h-5 w-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight mt-4">
                  {item.title}
                </h4>
                <p className="text-xs text-brand-light dark:text-slate-400 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE MEDICINE SEARCH CATALOG */}
      <section id="medicine-search" className="py-16 md:py-20 bg-white dark:bg-slate-900 border-y border-border-custom dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-1 bg-primary/10 text-primary px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-3">
              <Thermometer className="h-3 w-3" />
              <span>Interactive Medicine Catalog</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-primary dark:text-white tracking-tight">
              Search Genuine Products Instantly
            </h3>
            <p className="text-sm md:text-base text-brand-light dark:text-slate-400 mt-3">
              Browse our medicine list, check availability, and directly add items to your customized WhatsApp order.
            </p>
          </div>

          {/* Search Box Controls */}
          <div className="mt-10 max-w-4xl mx-auto bg-bg-main dark:bg-slate-950 p-4 sm:p-5 rounded-lg border border-border-custom dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-4 items-center">
            {/* Search Input */}
            <div className="relative w-full md:flex-1">
              <Search className="absolute left-4 top-3.5 h-4 w-4 text-brand-light" />
              <input
                id="catalog-search-input"
                type="text"
                placeholder="Search by medicine name, symptoms (fever, dry cough, vitamins)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-border-custom dark:border-slate-800 rounded-md text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
              />
            </div>
            {/* Category Select */}
            <div className="w-full md:w-64">
              <select
                id="catalog-category-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-border-custom dark:border-slate-800 rounded-md text-slate-900 dark:text-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMedicines.length > 0 ? (
              filteredMedicines.map((med) => (
                <div 
                  key={med.id} 
                  id={`med-card-${med.id}`}
                  className="bg-bg-main dark:bg-slate-950 rounded-lg overflow-hidden border border-border-custom dark:border-slate-850 hover:border-primary/20 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative aspect-video bg-slate-100 dark:bg-slate-900 overflow-hidden">
                    <img 
                      src={med.image} 
                      alt={med.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur px-2.5 py-1 rounded text-[10px] font-bold text-secondary shadow-sm border border-border-custom dark:border-slate-800">
                      {med.category}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">
                          {med.name}
                        </h4>
                        <span className="text-xs font-bold text-secondary whitespace-nowrap ml-2">
                          ₹{med.price}
                        </span>
                      </div>
                      <p className="text-[11px] text-brand-light dark:text-slate-500 mt-1 italic leading-tight">
                        Dosage: {med.dosage}
                      </p>
                      <p className="text-xs text-brand-light dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                        {med.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-border-custom dark:border-slate-800/80 flex items-center justify-between">
                      <span className="flex items-center text-[10px] font-semibold text-secondary bg-secondary/10 px-2 py-0.5 rounded">
                        <Check className="h-3 w-3 mr-1" />
                        In Stock
                      </span>

                      <button
                        id={`order-med-${med.id}`}
                        onClick={() => onOrderClick(`${med.name} - ₹${med.price}`)}
                        className="flex items-center space-x-1 px-3 py-1.5 bg-secondary hover:bg-secondary-hover text-white rounded text-xs font-bold transition-all shadow-sm cursor-pointer"
                      >
                        <MessageSquare className="h-3 w-3 fill-current" />
                        <span>Order Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div id="no-results-box" className="col-span-full py-12 text-center bg-bg-main dark:bg-slate-950 rounded-lg border border-border-custom dark:border-slate-800">
                <AlertCircle className="h-10 w-10 text-brand-light mx-auto mb-3" />
                <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">No Medicines Found</h4>
                <p className="text-xs text-brand-light dark:text-slate-400 mt-1 px-4">
                  We might still have it in our store. Submit a custom inquiry on our WhatsApp Order Form and we will verify!
                </p>
                <button
                  id="reset-catalog-filters"
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                  className="mt-4 px-4 py-2 bg-secondary hover:bg-secondary-hover text-white text-xs font-bold rounded shadow cursor-pointer"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION BRIEF */}
      <section id="services-brief" className="py-16 md:py-20 bg-bg-main dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-1 bg-secondary/10 text-secondary px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider mb-3">
            <Activity className="h-3 w-3" />
            <span>Comprehensive Healthcare Services</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-primary dark:text-white tracking-tight">
            Our Pharmaceutical Care Offerings
          </h3>
          <p className="text-sm md:text-base text-brand-light dark:text-slate-400 mt-3 max-w-2xl mx-auto">
            From basic pain-relievers to intricate diabetic setups, we stock a wide range of specialized medical goods.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 text-left">
            {SERVICES.slice(0, 6).map((srv) => (
              <div 
                key={srv.id}
                id={`srv-brief-card-${srv.id}`}
                className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-border-custom dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-l-secondary"
              >
                <div className="h-10 w-10 rounded-md bg-secondary/10 flex items-center justify-center text-secondary font-bold">
                  <Check className="h-5 w-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight mt-4">
                  {srv.title}
                </h4>
                <p className="text-xs text-brand-light dark:text-slate-400 mt-2 leading-relaxed">
                  {srv.description}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {srv.details.slice(0, 2).map((det, dIdx) => (
                    <li key={dIdx} className="flex items-center space-x-1.5 text-[11px] text-brand-light dark:text-slate-400">
                      <span className="h-1 w-1 rounded-full bg-secondary"></span>
                      <span>{det}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <button
              id="view-all-services-btn"
              onClick={() => setCurrentTab('services')}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded text-xs font-bold shadow-sm transition-all hover:scale-105 cursor-pointer"
            >
              <span>View All 10 Healthcare Services</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. WHY CUSTOMERS TRUST US */}
      <section id="customer-trust" className="py-16 md:py-20 bg-white dark:bg-slate-900 border-b border-border-custom dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-1 bg-secondary/10 text-secondary px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-3">
                <CheckCircle className="h-3 w-3" />
                <span>Our Trust Commitment</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary dark:text-white tracking-tight">
                Why Local Customers Trust Us
              </h3>
              <p className="text-sm md:text-base text-brand-light dark:text-slate-400 mt-3 leading-relaxed">
                We are not just a business; we are an essential healthcare partner for the families of Pai Bigha. We ensure safe, authenticated medical services with complete compliance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {trustFactors.map((item, idx) => (
                  <div key={idx} id={`trust-factor-${idx}`} className="flex space-x-3">
                    <div className="p-2.5 h-max rounded-md bg-secondary/10 text-secondary shrink-0">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs text-brand-light dark:text-slate-400 mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl rotate-2 opacity-5 blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop"
                alt="Pharmacist counseling"
                className="w-full h-auto rounded-lg shadow-md border border-border-custom dark:border-slate-800 relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-900 p-4 rounded-lg shadow-md border border-border-custom dark:border-slate-800 hidden sm:block z-20">
                <div className="flex items-center space-x-3">
                  <Star className="h-8 w-8 text-amber-500 fill-current" />
                  <div>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">4.9/5.0</p>
                    <p className="text-[10px] text-brand-light dark:text-slate-400 font-semibold uppercase">Google Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WORKING PROCESS */}
      <section id="working-process" className="py-16 md:py-20 bg-bg-main dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-1 bg-secondary/10 text-secondary px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider mb-3">
            <Building className="h-3 w-3" />
            <span>Store Operations</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-primary dark:text-white tracking-tight">
            Our Simple Four-Step Process
          </h3>
          <p className="text-sm md:text-base text-brand-light dark:text-slate-400 mt-3 max-w-2xl mx-auto">
            Whether you walk in or use our simple WhatsApp tool, we make purchasing genuine medicines completely effortless.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 text-left relative">
            {/* Connection lines for desktop */}
            <div className="hidden lg:block absolute top-[60px] left-[15%] right-[15%] h-0.5 bg-secondary/20 -z-0"></div>

            {steps.map((step, idx) => (
              <div key={idx} id={`step-card-${idx}`} className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-border-custom dark:border-slate-800 shadow-sm relative z-10 hover:shadow-md transition-all duration-300">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-extrabold font-mono text-secondary bg-secondary/10 px-3 py-1 rounded">
                    Step {step.num}
                  </span>
                  <span className="text-2xl font-bold font-mono text-slate-200 dark:text-slate-800">
                    {step.num}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight mt-4">
                  {step.title}
                </h4>
                <p className="text-xs text-brand-light dark:text-slate-400 mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-16 md:py-20 bg-white dark:bg-slate-900 border-y border-border-custom dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-1 bg-secondary/10 text-secondary px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider mb-3">
            <Smile className="h-3 w-3" />
            <span>Customer Testimonials</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-primary dark:text-white tracking-tight">
            What Our Customers Say
          </h3>
          <p className="text-sm md:text-base text-brand-light dark:text-slate-400 mt-3 max-w-2xl mx-auto">
            Honest feedback from actual residents and doctors who procure their essential medicines from us regularly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 text-left">
            {TESTIMONIALS.map((item) => (
              <div 
                key={item.id}
                id={`testimonial-card-${item.id}`}
                className="bg-bg-main dark:bg-slate-950 p-6 rounded-lg border border-border-custom dark:border-slate-800 hover:border-primary/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 mt-4 italic leading-relaxed">
                    "{item.comment}"
                  </p>
                </div>

                <div className="flex items-center space-x-3 mt-6 pt-4 border-t border-border-custom dark:border-slate-800/60">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-10 w-10 rounded-full object-cover border border-secondary/10"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white">
                      {item.name}
                    </h5>
                    <p className="text-[10px] text-brand-light dark:text-slate-500">
                      {item.location} • {item.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section id="faq-section" className="py-16 md:py-20 bg-bg-main dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-1 bg-secondary/10 text-secondary px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="h-3 w-3" />
              <span>Frequently Asked Questions</span>
            </div>
            <h3 className="text-3xl font-bold text-primary dark:text-white tracking-tight">
              Common Pharmacy Questions
            </h3>
            <p className="text-sm text-brand-light dark:text-slate-400 mt-2">
              Everything you need to know about our services, verification process, and policies.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="bg-white dark:bg-slate-900 rounded-lg border border-border-custom dark:border-slate-800 overflow-hidden shadow-sm transition-all"
              >
                <button
                  id={`faq-toggle-btn-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-slate-800 dark:text-white font-bold text-sm sm:text-base focus:outline-none transition-colors cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-950"
                >
                  <span>{faq.question}</span>
                  {openFaq === faq.id ? (
                    <ChevronUp className="h-4 w-4 text-secondary" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-brand-light" />
                  )}
                </button>
                {openFaq === faq.id && (
                  <div id={`faq-answer-content-${faq.id}`} className="px-6 pb-5 pt-1 text-xs sm:text-sm text-brand-light dark:text-slate-400 leading-relaxed border-t border-border-custom dark:border-slate-800/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. GOOGLE MAP SECTION */}
      <section id="google-map" className="relative py-16 md:py-20 bg-white dark:bg-slate-900 border-t border-border-custom dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-1 bg-secondary/10 text-secondary px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="h-3 w-3" />
            <span>Store Location</span>
          </div>
          <h3 className="text-3xl font-bold text-primary dark:text-white tracking-tight">
            Find Us in Pai Bigha
          </h3>
          <p className="text-sm text-brand-light dark:text-slate-400 mt-2 mb-10 max-w-xl mx-auto">
            Central central marketplace location at <strong>Pai Bigha, Bihar 804424</strong>. Come buy medicine or consult our pharmacy advisors.
          </p>

          <div className="rounded-lg overflow-hidden shadow-md border border-border-custom dark:border-slate-800 h-[380px] md:h-[450px] w-full relative">
            <iframe
              id="google-maps-iframe"
              src="https://maps.google.com/maps?q=Pai%20Bigha,%20Bihar%20804424+(RAJ%20MADICAL%20HALL)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RAJ MADICAL HALL Google Map Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 9. CONTACT CTA SECTION */}
      <section id="contact-cta" className="py-16 md:py-20 bg-primary dark:bg-slate-900 relative overflow-hidden border-t border-border-custom dark:border-slate-800">
        {/* Abstract background graphics with professional color representation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-4 border-white"></div>
          <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full border-8 border-white"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-6">
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Need Authentic Medicines Instantly?
          </h3>
          <p className="text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Get your prescription verified, purchase premium OTC cosmetics, or order baby essentials. Reach out through WhatsApp or make a quick telephone call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <a
              id="cta-call-btn"
              href="tel:07857896727"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3.5 bg-white text-primary hover:bg-slate-100 font-bold rounded shadow-md transition-transform hover:-translate-y-0.5"
            >
              <Phone className="h-5 w-5 text-primary" />
              <span>Call Us Now</span>
            </a>
            <button
              id="cta-whatsapp-btn"
              onClick={() => onOrderClick()}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3.5 bg-secondary hover:bg-secondary-hover text-white font-bold rounded shadow-md transition-transform hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageSquare className="h-5 w-5 fill-current" />
              <span>WhatsApp Order</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
