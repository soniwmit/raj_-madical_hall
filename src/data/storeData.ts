import { Medicine, ServiceItem, Testimonial, FAQItem, GalleryImage } from '../types';

export const MEDICINES: Medicine[] = [
  {
    id: 'm1',
    name: 'Paracetamol 650mg',
    category: 'Tablets',
    price: 32,
    dosage: '1 tablet twice a day or as prescribed',
    description: 'Effective for fast relief of fever, headache, body ache and mild to moderate pain.',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'm2',
    name: 'Amoxicillin 500mg',
    category: 'Capsules',
    price: 110,
    dosage: 'As directed by your physician (Prescription required)',
    description: 'Broad-spectrum penicillin antibiotic used to treat a wide variety of bacterial infections.',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'm3',
    name: 'Cough & Cold Relief Syrup',
    category: 'Syrups',
    price: 85,
    dosage: '10ml thrice daily or as recommended',
    description: 'Soothing formula for dry cough, throat irritation, nasal congestion and seasonal allergies.',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'm4',
    name: 'Vitamin D3 60K Chewable',
    category: 'Tablets',
    price: 120,
    dosage: 'Once a week or as advised by doctor',
    description: 'Supports bone, teeth and immune system health by assisting calcium absorption.',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1616671276441-2f2c277b8bf4?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'm5',
    name: 'Digital Blood Pressure Monitor',
    category: 'Medical Equipment',
    price: 1850,
    dosage: 'User guide included',
    description: 'Fully automatic upper arm blood pressure monitor with large LCD screen and pulse indicator.',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'm6',
    name: 'Multivitamin Gold Capsules',
    category: 'Vitamins',
    price: 240,
    dosage: '1 capsule daily with breakfast',
    description: 'Rich blend of essential minerals, antioxidants, and daily vitamins for vitality and immunity.',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'm7',
    name: 'High Protein Whey Isolate',
    category: 'Protein Supplements',
    price: 3400,
    dosage: '1 scoop with milk/water post-workout',
    description: 'Premium quality whey protein to aid in muscle recovery, tissue repair, and health maintenance.',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'm8',
    name: 'Moisturizing Skin Repair Cream',
    category: 'Skin Care',
    price: 195,
    dosage: 'Apply to dry areas twice daily',
    description: 'Dermatologist-tested cream to restore skin barrier, relieve dryness, and keep skin soft.',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'm9',
    name: 'Soft Care Baby Diapers (M Size)',
    category: 'Baby Products',
    price: 450,
    dosage: 'Single-use only',
    description: 'Highly absorbent, ultra-soft diapers keeping your baby dry and rash-free for up to 12 hours.',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'm10',
    name: 'Glucometer Test Strips (50 Pack)',
    category: 'Diabetic Care',
    price: 890,
    dosage: 'For in vitro diagnostic use',
    description: 'High-precision blood sugar testing strips compatible with leading digital glucometers.',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'm11',
    name: 'Orthopedic Knee Support Sleeve',
    category: 'Orthopedic Support',
    price: 380,
    dosage: 'Wear during activity or rest as needed',
    description: 'Provides uniform compression and joint stabilization to relieve pain, swelling and stiffness.',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'm12',
    name: 'Herbal Immune Booster Syrup',
    category: 'Syrups',
    price: 115,
    dosage: '5-10ml twice daily with lukewarm water',
    description: 'Natural Ayurvedic formulation featuring Giloy, Tulsi, and Neem to reinforce natural defenses.',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?q=80&w=600&auto=format&fit=crop'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: 'Prescription Medicines',
    description: 'Stocking a full array of authentic chronic and acute medicines with strict batch tracing.',
    icon: 'FileText',
    details: [
      '100% genuine products sourced from approved pharma distributors.',
      'Rigorous temperature-controlled storage for life-saving drugs.',
      'Professional guidance and verification by certified pharmacy team.'
    ]
  },
  {
    id: 's2',
    title: 'General Medicines (OTC)',
    description: 'Over-the-counter essentials for pain relief, cold, allergies, and digestive health.',
    icon: 'CheckCircle',
    details: [
      'Accessible daily healthcare supplies.',
      'Reliable advice on dosage and side-effects.',
      'Wide brand choices matching all budgets.'
    ]
  },
  {
    id: 's3',
    title: 'Health Supplements',
    description: 'Vitamins, minerals, herbal formulations, and premium protein powders for standard wellness.',
    icon: 'TrendingUp',
    details: [
      'Certified dietary supplements.',
      'Aide for athletic recovery and nutritional gaps.',
      'Specialized options for cardiac, diabetic, and geriatric health.'
    ]
  },
  {
    id: 's4',
    title: 'Baby Care Products',
    description: 'Complete range of baby food, diapers, gentle skin care, and infant wellness essentials.',
    icon: 'Heart',
    details: [
      'Hypoallergenic baby soaps, oils, and powders.',
      'Major trusted international and local brands.',
      'Baby feeding accessories and hygiene supplies.'
    ]
  },
  {
    id: 's5',
    title: 'Personal Care Products',
    description: 'Premium personal hygiene, skin care, oral health, and organic hair care supplies.',
    icon: 'User',
    details: [
      'Dermatological formulations for skin conditions.',
      'Daily personal hygiene kits.',
      'Eco-friendly and organic personal wellness items.'
    ]
  },
  {
    id: 's6',
    title: 'Medical Equipment & Devices',
    description: 'Critical diagnostic devices like BP monitors, glucometers, nebulizers, and digital thermometers.',
    icon: 'Activity',
    details: [
      'Certified home-use medical instrumentation.',
      'On-site demo and user operational guidance.',
      'Manufacturer warranty backing on all devices.'
    ]
  },
  {
    id: 's7',
    title: 'Surgical Supplies',
    description: 'Hospital grade surgical disposables, gloves, syringes, catheters, and professional dressings.',
    icon: 'Scissors',
    details: [
      'Sterilized disposable surgical packs.',
      'Premium elasticated and adhesive bandages.',
      'Bulk medical inventory support for local clinics.'
    ]
  },
  {
    id: 's8',
    title: 'First Aid Products',
    description: 'Comprehensive solutions for family, travel, and corporate emergency first aid readiness.',
    icon: 'ShieldAlert',
    details: [
      'Pre-assembled home and transit first-aid kits.',
      'Quality antiseptic solutions, cottons, and wound tapes.',
      'Refill packs and critical trauma supplies.'
    ]
  },
  {
    id: 's9',
    title: 'Diabetic Care Solutions',
    description: 'Specialized low glycemic foods, sugar-free syrups, insulin accessories, and testing strips.',
    icon: 'Activity',
    details: [
      'Insulin storage cases and cooling pouches.',
      'Sugar-free health drinks and food substitutes.',
      'High-precision continuous blood-sugar testing strips.'
    ]
  },
  {
    id: 's10',
    title: 'Healthcare Essentials',
    description: 'Daily sanitizers, mask arrays, orthopedic lumbar support belts, and pain-relief patches.',
    icon: 'PlusCircle',
    details: [
      'N95 masks and premium safety items.',
      'Ergonomic backrests, braces, and neck collars.',
      'Fast-acting medicated muscle rub patches.'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Dr. Alok Kumar',
    location: 'Pai Bigha, Bihar',
    rating: 5,
    comment: 'RAJ MADICAL HALL is exceptionally reliable. I always recommend my patients to purchase medicines here because they maintain genuine inventory and store them in temperature-controlled conditions. Their staff is extremely courteous.',
    date: '10 days ago',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't2',
    name: 'Sanjeev Sharma',
    location: 'Pai Bigha Bazar',
    rating: 5,
    comment: 'The easiest way to get medicines in Pai Bigha. I simply photograph my prescription and send it to their WhatsApp. Within minutes, they confirm the price, package it, and have it ready for rapid pickup. Exceptional service!',
    date: '2 weeks ago',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't3',
    name: 'Pooja Kumari',
    location: 'Gaya, Bihar',
    rating: 5,
    comment: 'They stock premium brands for baby food and healthcare items which are usually hard to find in smaller towns. The pricing is very reasonable and they always provide genuine computer bills. Highly trustworthy.',
    date: '1 month ago',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't4',
    name: 'Rajesh Yadav',
    location: 'Pai Bigha Rural',
    rating: 5,
    comment: 'Very professional. My parents require chronic diabetic and blood pressure medication monthly. RAJ MADICAL HALL always has these medicines in stock. They even offer special senior discounts which helps our monthly budget.',
    date: '3 weeks ago',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't5',
    name: 'Amit Gupta',
    location: 'Jehanabad, Bihar',
    rating: 5,
    comment: 'When my father needed a digital BP monitor and orthopedic backrest urgently, the owner personally explained how to operate the machine and wear the support. True medical advisors, not just shopkeepers!',
    date: '1 month ago',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't6',
    name: 'Sunita Devi',
    location: 'Pai Bigha Town',
    rating: 5,
    comment: 'Excellent and honest billing. They double check expiry dates of every strip before handing them over. The location is very convenient right in Pai Bigha. Best pharmacy in our area!',
    date: '2 months ago',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'q1',
    question: 'How can I order medicines online through WhatsApp?',
    answer: 'It is simple! Use our WhatsApp Order Form on this website, fill in your details, type your medicine list or upload a photo of your prescription, and click "Send via WhatsApp". It will instantly format a message and open WhatsApp, ready to send directly to our team.'
  },
  {
    id: 'q2',
    question: 'Are all medicines sold at RAJ MADICAL HALL 100% genuine?',
    answer: 'Absolutely. We only procure medicines directly from authorized pharmaceutical companies and government-licensed distributors. Every medicine undergoes batch-verification and strict quality checks, guaranteeing 100% authenticity.'
  },
  {
    id: 'q3',
    question: 'Do you require a doctor prescription for purchasing medicines?',
    answer: 'For Schedule H, Schedule H1, and other controlled prescription drugs, a valid doctor prescription is legally required. For general OTC (Over-The-Counter) products, health supplements, baby care, and personal care items, no prescription is needed.'
  },
  {
    id: 'q4',
    question: 'What are your store operational hours?',
    answer: 'RAJ MADICAL HALL is open 7 days a week. Our working hours are Monday to Sunday: 08:00 AM to 09:30 PM. For emergency needs outside these hours, you can reach out via our emergency contact numbers.'
  },
  {
    id: 'q5',
    question: 'Do you offer home delivery in Pai Bigha?',
    answer: 'Yes, we provide home delivery within Pai Bigha and nearby surrounding villages for orders containing essential medications. You can order via WhatsApp or phone, and our delivery executive will bring it to your doorstep.'
  },
  {
    id: 'q6',
    question: 'Can I return or exchange purchased medicines?',
    answer: 'Medicines can be returned or exchanged within 7 days of purchase, provided they are in their original packaging, unopened, have undamaged seals, and are accompanied by the original store cash memo. Refrigerated medicines cannot be returned due to temperature safety control.'
  },
  {
    id: 'q7',
    question: 'Do you accept digital payments like UPI, cards, and wallets?',
    answer: 'Yes! We support all digital modes of payment including Google Pay, PhonePe, Paytm, BHIM UPI, Debit/Credit Cards, and net banking, alongside cash payments.'
  },
  {
    id: 'q8',
    question: 'How do you ensure proper storage of sensitive drugs like Insulin?',
    answer: 'We have advanced refrigeration facilities backed by power-backup systems to ensure critical temperature-sensitive medicines (like insulin, vaccines, and eye drops) are continuously stored between 2°C and 8°C as mandated.'
  },
  {
    id: 'q9',
    question: 'Do you offer generic alternatives to branded medicines?',
    answer: 'Yes, we stock high-quality, government-approved generic medicines from trusted manufacturers. Our trained pharmacy staff can suggest equivalent generic formulations to help reduce your healthcare bills while maintaining identical efficacy.'
  },
  {
    id: 'q10',
    question: 'Do you provide diagnostic equipment demos at the store?',
    answer: 'Yes, we offer live, hands-on demonstrations for digital blood pressure monitors, glucometers, nebulizers, and pulse oximeters so that you and your family can operate them correctly and measure vitals accurately at home.'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'g1',
    url: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=800&auto=format&fit=crop',
    category: 'store',
    title: 'Modern Store Counter',
    description: 'Our clean, organized, and welcoming medicine collection and assistance counter.'
  },
  {
    id: 'g2',
    url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop',
    category: 'medicines',
    title: 'Genuine Branded Medicines',
    description: 'Strictly cataloged tablets, capsules, and therapeutic medicines from top manufacturers.'
  },
  {
    id: 'g3',
    url: 'https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?q=80&w=800&auto=format&fit=crop',
    category: 'equipment',
    title: 'Healthcare & Diagnostic Devices',
    description: 'Vitals tracking machinery including glucometers, thermometers, and nebulizers.'
  },
  {
    id: 'g4',
    url: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=800&auto=format&fit=crop',
    category: 'medicines',
    title: 'Vitamins & Dietary Supplements',
    description: 'Wellness section containing premium proteins, calcium chewables, and daily vitality capsules.'
  },
  {
    id: 'g5',
    url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop',
    category: 'store',
    title: 'Baby & Maternal Hygiene Products',
    description: 'Wide section dedicated to mild baby skin care, foods, and infant protective supplies.'
  },
  {
    id: 'g6',
    url: 'https://images.unsplash.com/photo-1607619056574-7b8f30413b46?q=80&w=800&auto=format&fit=crop',
    category: 'equipment',
    title: 'Sterilized First Aid Kits',
    description: 'First aid materials, antiseptics, gauges, and surgical disposable stocks.'
  },
  {
    id: 'g7',
    url: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop',
    category: 'customers',
    title: 'Qualified Pharmacist Consultation',
    description: 'Our experienced team assisting customers with correct dosage and usage advice.'
  },
  {
    id: 'g8',
    url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop',
    category: 'store',
    title: 'Dermatology & Skin Care Range',
    description: 'Premium personal hygiene and hypoallergenic skincare ointments and lotions.'
  }
];
