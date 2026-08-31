import React, { useState } from 'react';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    serviceType: 'Executive COO Advisory',
    budgetRange: 'Enterprise Mandate',
    preferredDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    timeSlot: '03:00 PM IST',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const timeSlots = [
    '10:30 AM IST (09:00 AM GST)',
    '02:00 PM IST (12:30 PM GST)',
    '04:00 PM IST (02:30 PM GST)',
    '06:00 PM IST (04:30 PM GST)',
  ];

  return (
    <div
      className="fixed inset-0 z-80 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/65 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white text-[#1a1c1c] w-full max-w-2xl rounded-2xl p-6 sm:p-10 md:p-12 shadow-2xl relative my-auto border border-[#cfc4c5]/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close booking modal"
          className="absolute top-5 right-5 w-9 h-9 bg-neutral-100 rounded-full flex items-center justify-center text-[#1a1c1c] hover:bg-neutral-200 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {isSubmitted ? (
          <div className="text-center py-10 space-y-5 animate-fadeIn">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-[36px]">event_available</span>
            </div>
            <h2 className="font-display text-[30px] font-medium text-[#1a1c1c]">
              Executive Advisory Session Scheduled
            </h2>
            <p className="font-body text-[15px] text-[#5d5f5f] max-w-md mx-auto leading-relaxed">
              We've reserved <strong>{formData.timeSlot}</strong> on{' '}
              <strong>{formData.preferredDate}</strong> for <strong>{formData.name}</strong>. A calendar invitation and Google Meet link have been prepared for{' '}
              <strong>{formData.email}</strong>.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-8 py-3 bg-[#1a1c1c] text-white font-mono-code text-[12px] rounded-full hover:opacity-90 transition-opacity cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <span className="font-mono-code text-[11px] text-[#5d5f5f] uppercase tracking-widest block mb-1">
                EXECUTIVE ADVISORY SESSION (30 MIN)
              </span>
              <h2 className="font-display text-[28px] sm:text-[34px] font-medium text-[#1a1c1c] tracking-tight">
                Schedule Strategic Consultation
              </h2>
              <p className="font-body text-[15px] text-[#5d5f5f] mt-1">
                Discuss COO mandates, operational audits, healthcare workflows, or international expansion.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-mono-code text-[11px] text-[#5d5f5f] uppercase tracking-wider mb-2">
                    Your Name & Title
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Richard Vance, Managing Director"
                    className="w-full bg-[#f9f9f9] border border-[#cfc4c5]/50 focus:border-[#1a1c1c] rounded-lg px-4 py-2.5 font-body text-[15px] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono-code text-[11px] text-[#5d5f5f] uppercase tracking-wider mb-2">
                    Corporate Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="r.vance@enterprise.com"
                    className="w-full bg-[#f9f9f9] border border-[#cfc4c5]/50 focus:border-[#1a1c1c] rounded-lg px-4 py-2.5 font-body text-[15px] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-mono-code text-[11px] text-[#5d5f5f] uppercase tracking-wider mb-2">
                    Advisory Focus
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-[#f9f9f9] border border-[#cfc4c5]/50 focus:border-[#1a1c1c] rounded-lg px-4 py-2.5 font-body text-[15px] outline-none transition-colors"
                  >
                    <option value="Executive COO Advisory">Executive COO Advisory</option>
                    <option value="Operational Transformation & Six Sigma">Operational Transformation & Six Sigma</option>
                    <option value="Healthcare Operations & NABH">Healthcare Operations & NABH</option>
                    <option value="Global Middle East / UAE Expansion">Global Middle East / UAE Expansion</option>
                    <option value="CSR & Philanthropic Governance">CSR & Philanthropic Governance</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono-code text-[11px] text-[#5d5f5f] uppercase tracking-wider mb-2">
                    Engagement Scope
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full bg-[#f9f9f9] border border-[#cfc4c5]/50 focus:border-[#1a1c1c] rounded-lg px-4 py-2.5 font-body text-[15px] outline-none transition-colors"
                  >
                    <option value="Advisory / Board Seat">Advisory / Board Seat</option>
                    <option value="Full-Time Executive Mandate">Full-Time Executive Mandate</option>
                    <option value="Project-Based Transformation">Project-Based Transformation</option>
                    <option value="Confidential Briefing">Confidential Briefing</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-mono-code text-[11px] text-[#5d5f5f] uppercase tracking-wider mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-[#f9f9f9] border border-[#cfc4c5]/50 focus:border-[#1a1c1c] rounded-lg px-4 py-2.5 font-body text-[15px] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono-code text-[11px] text-[#5d5f5f] uppercase tracking-wider mb-2">
                    Select Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full bg-[#f9f9f9] border border-[#cfc4c5]/50 focus:border-[#1a1c1c] rounded-lg px-4 py-2.5 font-body text-[15px] outline-none transition-colors"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono-code text-[11px] text-[#5d5f5f] uppercase tracking-wider mb-2">
                  Session Outline / Key Objectives
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share a brief overview of current operational bottlenecks or strategic growth goals..."
                  className="w-full bg-[#f9f9f9] border border-[#cfc4c5]/50 focus:border-[#1a1c1c] rounded-lg px-4 py-2.5 font-body text-[15px] outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full font-mono-code text-[12px] text-white bg-[#1a1c1c] py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Scheduling Session...' : 'Confirm Advisory Session ↗'}</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
