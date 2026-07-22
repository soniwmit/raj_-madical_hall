import React from 'react';
import { ShieldCheck, Heart, Eye, Target, Sparkles, Star, Milestone, Quote } from 'lucide-react';

export default function AboutView() {
  const values = [
    { title: 'Absolute Integrity', desc: 'Sourcing strictly from brand distributors to prevent counterfeit or expired medications.', icon: ShieldCheck, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/20 dark:text-emerald-400' },
    { title: 'Compassionate Care', desc: 'Our pharmacy advisors listen with patience and provide detailed usage instructions.', icon: Heart, color: 'text-rose-600 bg-rose-50 dark:bg-rose-950/20 dark:text-rose-400' },
    { title: 'Uncompromising Quality', desc: 'Adhering strictly to safe temperature storage standards for all insulins and life-saving drugs.', icon: Star, color: 'text-amber-600 bg-amber-50 dark:bg-amber-950/20 dark:text-amber-400' },
    { title: 'Sincere & Fair Pricing', desc: 'Offering generic options and keeping profit margins low so essential healthcare remains cheap.', icon: Target, color: 'text-blue-600 bg-blue-50 dark:bg-blue-950/20 dark:text-blue-400' }
  ];

  const milestones = [
    { year: 'Inception', title: 'Established Core Facility', desc: 'Founded with a small, dedicated selection of medicines and deep commitment to Pai Bigha families.' },
    { year: 'Expansion', title: 'Life-saving & Cool Storage Units', desc: 'Introduced high-tech refrigeration facilities with continuous power back-ups to store essential vaccines and insulins safely.' },
    { year: 'Modernization', title: 'Digitization & WhatsApp Support', desc: 'Introduced computer billing and a rapid WhatsApp medicine booking framework to ensure quick delivery and verified billing.' },
    { year: 'Ongoing', title: 'Multi-category Healthcare Store', desc: 'Evolved into a complete modern medical store stocking surgicals, medical devices, baby care, and premium cosmetics.' }
  ];

  return (
    <div id="about-page-root" className="bg-bg-main dark:bg-slate-950 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title & Story Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1 bg-secondary/10 text-secondary px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="h-3 w-3" />
            <span>Our Origin Story</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary dark:text-white tracking-tight font-sans">
            About RAJ MADICAL HALL
          </h2>
          <p className="text-base md:text-lg text-brand-light dark:text-slate-400 mt-4 leading-relaxed font-light">
            Providing authentic, life-saving medicines and dedicated healthcare resources directly to the families and clinics of Pai Bigha, Bihar.
          </p>
        </div>

        {/* Business Story and Side Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-bold text-primary dark:text-white tracking-tight font-sans">
              A Legacy of Trust and Sincere Healthcare
            </h3>
            <p className="text-xs sm:text-sm text-brand-light dark:text-slate-300 leading-relaxed">
              Founded on the simple principle of <strong className="font-semibold text-primary">authenticity</strong>, RAJ MADICAL HALL has grown to become the most reliable name in healthcare across Pai Bigha. We understood early on that a medical store is not just a commercial space—it is an essential life-support hub for the community.
            </p>
            <p className="text-xs sm:text-sm text-brand-light dark:text-slate-300 leading-relaxed">
              We source every single strip of medicine, surgical item, and cosmetic lotion strictly from licensed, authorized pharmaceutical distributors. This completely eliminates any risk of counterfeit or sub-standard drugs, allowing local doctors and patients to buy with 100% confidence.
            </p>
            <p className="text-xs sm:text-sm text-brand-light dark:text-slate-300 leading-relaxed">
              Our continuous efforts focus on expanding our inventory, incorporating digital billing, and providing instant chat order options to match modern convenience without losing our traditional compassionate touch.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=800&auto=format&fit=crop"
              alt="RAJ MADICAL HALL store interior"
              className="w-full h-auto rounded-lg shadow-md border border-border-custom dark:border-slate-800"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-4 -left-4 bg-secondary text-white p-5 rounded-lg shadow-md hidden sm:block">
              <p className="text-2xl font-bold">100%</p>
              <p className="text-xs text-emerald-100 font-semibold">Genuine Medicines Guarantee</p>
            </div>
          </div>
        </div>

        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 text-left">
          {/* Mission */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-lg border border-border-custom dark:border-slate-900 shadow-sm flex flex-col justify-between border-l-4 border-l-secondary">
            <div>
              <div className="h-12 w-12 rounded-md bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
                Our Sincere Mission
              </h3>
              <p className="text-xs sm:text-sm text-brand-light dark:text-slate-400 leading-relaxed">
                To guarantee that every resident of Pai Bigha and surrounding rural areas has immediate, seamless access to genuine medicines, critical diagnostic tools, baby hygiene products, and expert drug advisory services. We strive to keep our margins low and our service quality exceptional.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-lg border border-border-custom dark:border-slate-900 shadow-sm flex flex-col justify-between border-l-4 border-l-primary">
            <div>
              <div className="h-12 w-12 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
                Our Future Vision
              </h3>
              <p className="text-xs sm:text-sm text-brand-light dark:text-slate-400 leading-relaxed">
                To evolve into a comprehensive digital-first local healthcare partner. We aim to establish continuous health checks, remote patient assistance kiosks, and immediate rural medical delivery loops, serving as the benchmark of pharmaceutical care in Gaya, Bihar.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary dark:text-white tracking-tight mb-3 font-sans">
            Our Core Values
          </h3>
          <p className="text-xs sm:text-sm text-brand-light dark:text-slate-400 max-w-xl mx-auto mb-10">
            The values that drive every single transaction, consultation, and delivery at RAJ MADICAL HALL.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {values.map((val, idx) => (
              <div key={idx} id={`value-card-${idx}`} className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-border-custom dark:border-slate-900 shadow-sm hover:shadow-md transition-all">
                <div className={`p-3 rounded-md w-max mb-4 ${val.color}`}>
                  <val.icon className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
                  {val.title}
                </h4>
                <p className="text-xs text-brand-light dark:text-slate-400 mt-2 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Store Timeline */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center space-x-1 bg-secondary/10 text-secondary px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider mb-3">
            <Milestone className="h-3 w-3" />
            <span>Chronology</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-primary dark:text-white tracking-tight mb-10 font-sans">
            Our Development Journey
          </h3>

          <div className="max-w-3xl mx-auto text-left relative border-l-2 border-secondary/20 pl-6 sm:pl-10 space-y-8">
            {milestones.map((mile, idx) => (
              <div key={idx} id={`timeline-item-${idx}`} className="relative">
                {/* Node marker */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 h-6 w-6 rounded-full bg-white dark:bg-slate-900 border-4 border-secondary flex items-center justify-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-border-custom dark:border-slate-900 shadow-sm hover:shadow-md transition-all">
                  <span className="text-xs font-bold text-secondary uppercase tracking-widest font-mono">
                    {mile.year}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight mt-1">
                    {mile.title}
                  </h4>
                  <p className="text-xs text-brand-light dark:text-slate-400 mt-2 leading-relaxed">
                    {mile.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Owner Message Quote */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary dark:bg-slate-900 rounded-lg p-8 md:p-12 text-white relative overflow-hidden shadow-lg text-left border border-border-custom dark:border-slate-800">
            {/* Background Graphic */}
            <Quote className="absolute -right-6 -bottom-6 h-48 w-48 text-white/5" />
            
            <div className="relative z-10 space-y-6">
              <span className="inline-flex items-center space-x-1.5 bg-secondary/20 text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
                Proprietor's Sincere Message
              </span>
              
              <blockquote className="text-base sm:text-lg italic font-light leading-relaxed text-blue-50">
                "Our business has never been about mere margins; it is about the safety of our parents, our children, and our neighbors in Pai Bigha. When someone purchases medicines at RAJ MADICAL HALL, they are placing their health in our hands. We pledge to honor that sacred trust by supplying nothing but 100% authentic medications, checked meticulously and handled with care."
              </blockquote>
              
              <div className="pt-4 border-t border-blue-800 flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center font-bold text-lg text-white border border-secondary/20">
                  RM
                </div>
                <div>
                  <h4 className="text-sm font-bold">RAJ MADICAL HALL</h4>
                  <p className="text-xs text-blue-200">Owner & Chief Pharmacist • Pai Bigha, Bihar</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
