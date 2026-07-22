import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/storeData';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function GalleryView() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'store' | 'medicines' | 'equipment' | 'customers'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterTabs: { id: typeof activeFilter; label: string }[] = [
    { id: 'all', label: 'All Photos' },
    { id: 'store', label: 'Store Front & Interior' },
    { id: 'medicines', label: 'Medicine Shelves' },
    { id: 'equipment', label: 'Medical Equipment' },
    { id: 'customers', label: 'Pharmacists & Consultations' },
  ];

  const filteredImages = activeFilter === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeFilter);

  const openLightbox = (imgId: string) => {
    const idx = GALLERY_IMAGES.findIndex(img => img.id === imgId);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % GALLERY_IMAGES.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  return (
    <div id="gallery-page-root" className="bg-bg-main dark:bg-slate-950 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1 bg-secondary/10 text-secondary px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="h-3 w-3" />
            <span>Visual Tour</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary dark:text-white tracking-tight font-sans">
            Store Gallery
          </h2>
          <p className="text-base text-brand-light dark:text-slate-400 mt-3 font-light leading-relaxed">
            Take a virtual tour of RAJ MADICAL HALL. Observe our organized inventory, clinical-grade medical setups, and sanitary medicine shelves.
          </p>
        </div>

        {/* Categories / Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              id={`filter-tab-${tab.id}`}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2 rounded-md text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-secondary text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-border-custom dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modern Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              id={`gallery-item-${img.id}`}
              onClick={() => openLightbox(img.id)}
              className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden border border-border-custom dark:border-slate-900 group shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Image Frame */}
              <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 bg-white/20 backdrop-blur rounded-full text-white shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 className="h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* Text Area */}
              <div className="p-5">
                <span className="text-[9px] font-bold uppercase tracking-widest text-secondary font-mono">
                  {img.category}
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate mt-1">
                  {img.title}
                </h4>
                <p className="text-xs text-brand-light dark:text-slate-500 mt-1 line-clamp-2 leading-normal">
                  {img.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div
            id="gallery-lightbox"
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-slate-950/98 backdrop-blur-sm flex flex-col justify-between p-4 md:p-8 animate-fade-in text-white"
          >
            {/* Top controls */}
            <div className="flex justify-between items-center w-full z-10">
              <div>
                <p className="text-xs uppercase tracking-widest font-mono text-secondary font-bold">
                  Image {lightboxIndex + 1} of {GALLERY_IMAGES.length}
                </p>
                <h3 className="text-sm sm:text-base font-bold truncate max-w-[250px] sm:max-w-md text-white mt-1">
                  {GALLERY_IMAGES[lightboxIndex].title}
                </h3>
              </div>
              <button
                id="close-lightbox-btn"
                onClick={closeLightbox}
                className="p-2.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Middle Main Slider */}
            <div className="flex items-center justify-between w-full relative flex-1 max-h-[70vh]">
              {/* Prev Button */}
              <button
                id="prev-image-btn"
                onClick={prevImage}
                className="absolute left-0 z-10 p-3 bg-white/10 hover:bg-white/25 rounded-full transition-colors cursor-pointer"
                aria-label="Previous Image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Main Image */}
              <div className="mx-auto h-full max-w-4xl flex items-center justify-center p-4">
                <img
                  src={GALLERY_IMAGES[lightboxIndex].url}
                  alt={GALLERY_IMAGES[lightboxIndex].title}
                  className="max-h-full max-w-full object-contain rounded-lg shadow-2xl transition-all duration-300 transform scale-100 hover:scale-[1.02] cursor-zoom-in"
                  referrerPolicy="no-referrer"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>

              {/* Next Button */}
              <button
                id="next-image-btn"
                onClick={nextImage}
                className="absolute right-0 z-10 p-3 bg-white/10 hover:bg-white/25 rounded-full transition-colors cursor-pointer"
                aria-label="Next Image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Bottom Info Bar */}
            <div className="w-full text-center max-w-2xl mx-auto z-10">
              <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                {GALLERY_IMAGES[lightboxIndex].description}
              </p>
              <div className="flex justify-center space-x-2">
                <span className="text-[10px] font-bold font-mono tracking-widest bg-secondary/20 text-secondary px-3 py-1 rounded border border-secondary/20 uppercase">
                  Category: {GALLERY_IMAGES[lightboxIndex].category}
                </span>
                <span className="text-[10px] font-bold font-mono tracking-widest bg-slate-800 text-slate-300 px-3 py-1 rounded border border-slate-700">
                  RAJ MADICAL HALL
                </span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
