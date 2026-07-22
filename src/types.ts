export interface Medicine {
  id: string;
  name: string;
  category: string;
  price: number;
  dosage: string;
  description: string;
  inStock: boolean;
  image: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  category: 'store' | 'medicines' | 'equipment' | 'customers' | 'all';
  title: string;
  description: string;
}

export interface ContactMessage {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface WhatsAppOrder {
  customerName: string;
  mobileNumber: string;
  email: string;
  address: string;
  medicineName: string;
  prescriptionUploaded: boolean;
  prescriptionFile?: File | null;
  message: string;
  preferredDeliveryTime: string;
}
