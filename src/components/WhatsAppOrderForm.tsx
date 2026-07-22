import React, { useState, useRef } from 'react';
import { Send, Phone, Upload, Check, AlertCircle, X, FileText, Clock } from 'lucide-react';
import { WhatsAppOrder } from '../types';

interface WhatsAppOrderFormProps {
  onClose?: () => void;
  selectedMedicine?: string;
}

export default function WhatsAppOrderForm({ onClose, selectedMedicine = '' }: WhatsAppOrderFormProps) {
  const [formData, setFormData] = useState<WhatsAppOrder>({
    customerName: '',
    mobileNumber: '',
    email: '',
    address: '',
    medicineName: selectedMedicine,
    prescriptionUploaded: false,
    message: '',
    preferredDeliveryTime: 'Anytime (08:00 AM - 09:30 PM)',
  });

  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (file: File | null) => {
    if (file) {
      setPrescriptionFile(file);
      setFormData((prev) => ({ ...prev, prescriptionUploaded: true }));
    } else {
      setPrescriptionFile(null);
      setFormData((prev) => ({ ...prev, prescriptionUploaded: false }));
    }
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleSendOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.customerName || !formData.mobileNumber || !formData.medicineName) {
      alert('Please fill out the required fields: Name, Phone, and Medicines Required.');
      return;
    }

    // Format the WhatsApp message exactly as specified by the user
    const pharmacyName = 'RAJ MADICAL HALL';
    const prescriptionText = formData.prescriptionUploaded 
      ? `Yes (Prescription uploaded: ${prescriptionFile?.name || 'Attached'}. I will share the photo in this WhatsApp chat)` 
      : 'No';

    const rawMessage = `Hello,
*${pharmacyName}*

*Customer Name:* ${formData.customerName}
*Phone:* ${formData.mobileNumber}
*Email:* ${formData.email || 'N/A'}
*Address:* ${formData.address || 'N/A'}
*Medicine Required:* ${formData.medicineName}
*Prescription:* ${prescriptionText}
*Preferred Delivery Time:* ${formData.preferredDeliveryTime}
*Message:* ${formData.message || 'N/A'}`;

    const encodedMessage = encodeURIComponent(rawMessage);
    const whatsappNumber = '917857896727'; // 07857896727 with country code
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Mark as submitted to show helper message
    setIsSubmitted(true);
    
    // Open in new tab securely
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="whatsapp-order-form-container" className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-slate-800 transition-all">
      <div className="bg-emerald-600 dark:bg-emerald-700 p-6 text-white flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold font-sans tracking-tight">Order via WhatsApp</h3>
          <p className="text-xs text-emerald-100 mt-1">
            Fill your details below to prepare your order instantly.
          </p>
        </div>
        {onClose && (
          <button
            id="close-order-form-btn"
            onClick={onClose}
            className="p-2 hover:bg-emerald-700 dark:hover:bg-emerald-800 rounded-full transition-colors cursor-pointer"
            aria-label="Close Order Form"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      <div className="p-6">
        {isSubmitted && (
          <div id="order-success-banner" className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 rounded-2xl flex items-start space-x-3">
            <Check className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-sm">
              <h4 className="font-semibold text-emerald-800 dark:text-emerald-300">WhatsApp Opened!</h4>
              <p className="text-emerald-700 dark:text-emerald-400 mt-1">
                Your order was formatted and sent to WhatsApp. If you uploaded a prescription (<strong>{prescriptionFile?.name}</strong>), please send the image file directly in the chat window that opened.
              </p>
              <button
                id="reset-form-btn"
                onClick={() => setIsSubmitted(false)}
                className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 underline mt-2 hover:text-emerald-700 cursor-pointer"
              >
                Order Another Medicine
              </button>
            </div>
          </div>
        )}

        <form id="whatsapp-form" onSubmit={handleSendOrder} className="space-y-5">
          {/* Grid fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="customerName" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                Customer Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="customerName"
                name="customerName"
                type="text"
                required
                placeholder="Enter your full name"
                value={formData.customerName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
              />
            </div>

            <div>
              <label htmlFor="mobileNumber" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                Mobile Number <span className="text-rose-500">*</span>
              </label>
              <input
                id="mobileNumber"
                name="mobileNumber"
                type="tel"
                required
                placeholder="e.g. 07857896727"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                Email Address (Optional)
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
              />
            </div>

            <div>
              <label htmlFor="preferredDeliveryTime" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                Preferred Delivery/Pickup Time
              </label>
              <select
                id="preferredDeliveryTime"
                name="preferredDeliveryTime"
                value={formData.preferredDeliveryTime}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all cursor-pointer"
              >
                <option value="Anytime (08:00 AM - 09:30 PM)">Anytime (08:00 AM - 09:30 PM)</option>
                <option value="Morning (08:00 AM - 12:00 PM)">Morning (08:00 AM - 12:00 PM)</option>
                <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM - 04:00 PM)</option>
                <option value="Evening (04:00 PM - 09:30 PM)">Evening (04:00 PM - 09:30 PM)</option>
                <option value="Urgent Delivery Requested">Urgent Delivery Requested</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="address" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
              Full Delivery Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              placeholder="House details, Landmark, Pai Bigha, Bihar"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
            />
          </div>

          <div>
            <label htmlFor="medicineName" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
              Medicines Required <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="medicineName"
              name="medicineName"
              rows={3}
              required
              placeholder="List down the medicine names with dosage/quantity. E.g.
1. Paracetamol 650mg - 2 Strips
2. Cough Syrup - 1 Bottle"
              value={formData.medicineName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
            />
          </div>

          {/* Upload Prescription */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
              Upload Doctor Prescription (Optional)
            </label>
            <div
              id="drag-drop-zone"
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
              className={`border-2 border-dashed rounded-2xl p-5 text-center transition-all ${
                dragActive
                  ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20'
                  : prescriptionFile
                  ? 'border-emerald-500/60 bg-slate-50 dark:bg-slate-950'
                  : 'border-gray-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 hover:border-emerald-500/40'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*,.pdf"
                onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
                className="hidden"
              />
              {prescriptionFile ? (
                <div className="flex items-center justify-between bg-white dark:bg-slate-900 p-3 rounded-xl border border-emerald-100 dark:border-emerald-950">
                  <div className="flex items-center space-x-2 text-left">
                    <FileText className="h-5 w-5 text-emerald-500" />
                    <div>
                      <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate max-w-[200px]">
                        {prescriptionFile.name}
                      </p>
                      <p className="text-[10px] text-slate-400">
                        {(prescriptionFile.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                  </div>
                  <button
                    id="remove-file-btn"
                    type="button"
                    onClick={() => handleFileChange(null)}
                    className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 rounded-full cursor-pointer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center space-y-1.5 cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                  <Upload className="h-7 w-7 text-slate-400 dark:text-slate-500" />
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Drag and drop or <span className="text-emerald-600 dark:text-emerald-400 underline">click to upload</span>
                  </p>
                  <p className="text-[10px] text-slate-400">
                    Supports JPG, PNG, PDF (Max 5MB)
                  </p>
                </div>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
              Special Message or Instructions (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={2}
              placeholder="Any specific directions, brand preferences, or questions."
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              id="submit-whatsapp-order-btn"
              type="submit"
              className="flex-1 flex items-center justify-center space-x-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold shadow-md shadow-emerald-600/10 transition-all cursor-pointer hover:-translate-y-0.5"
            >
              <Send className="h-4 w-4" />
              <span>Send via WhatsApp</span>
            </button>
            <a
              id="whatsapp-form-call-btn"
              href="tel:07857896727"
              className="flex items-center justify-center space-x-2 px-6 py-3.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-sm font-bold transition-all"
            >
              <Phone className="h-4 w-4 text-emerald-500" />
              <span>Call Store Directly</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
