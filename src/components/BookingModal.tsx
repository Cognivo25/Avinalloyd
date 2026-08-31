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
          className="absolute top-5 right-5 w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center text-[#141312] hover:bg-neutral-200 transition-colors cursor-pointer font-mono-code text-[14px]"
        >
          ✕
        </button>

        {isSubmitted ? (
          <div className="text-center py-10 space-y-5 animate-fadeIn">
            <div className="w-14 h-14 bg-[#141312] text-[#c5a059] rounded-full flex items-center justify-center mx-auto font-mono-code text-[20px]">
              ✓
            </div>
            <h2 className="font-serif-luxury text-[28px] sm:text-[32px] font-normal text-[#141312]">
              Executive Advisory Session Scheduled
            </h2>
            <p className="font-body text-[15px] text-[#55524e] max-w-md mx-auto leading-relaxed">
              We've reserved <strong>{formData.timeSlot}</strong> on{' '}
              <strong>{formData.preferredDate}</strong> for <strong>{formData.name}</strong>. A calendar invitation and video conference link have been prepared for{' '}
              <strong>{formData.email}</strong>.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-8 py-3 bg-[#141312] text-[#c5a059] font-mono-code text-[11px] uppercase tracking-widest rounded-sm hover:bg-[#22211e] transition-colors cursor-pointer border border-[#2a2825] font-semibold"
              >
                Close &amp; Return
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <span className="font-mono-code text-[11px] text-[#b3884d] uppercase tracking-[0.25em] block mb-1 font-semibold">
                EXECUTIVE ADVISORY SESSION (30 MIN)
              </span>
              <h2 className="font-serif-luxury text-[26px] sm:text-[32px] font-normal text-[#141312] tracking-tight">
                Schedule Strategic Consultation
              </h2>
              <p className="font-body text-[14px] text-[#78746d] mt-1">
                Discuss executive mandates, operational diagnostics, healthcare workflows, or international expansion.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-mono-code text-[11px] text-[#78746d] uppercase tracking-wider mb-2 font-semibold">
                    Your Name &amp; Title
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Richard Vance, Managing Director"
                    className="w-full bg-[#fbf9f6] border border-[#cfc4c5]/50 focus:border-[#141312] rounded-sm px-4 py-2.5 font-body text-[15px] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono-code text-[11px] text-[#78746d] uppercase tracking-wider mb-2 font-semibold">
                    Corporate Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="r.vance@enterprise.com"
                    className="w-full bg-[#fbf9f6] border border-[#cfc4c5]/50 focus:border-[#141312] rounded-sm px-4 py-2.5 font-body text-[15px] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-mono-code text-[11px] text-[#78746d] uppercase tracking-wider mb-2 font-semibold">
                    Advisory Focus
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-[#fbf9f6] border border-[#cfc4c5]/50 focus:border-[#141312] rounded-sm px-4 py-2.5 font-body text-[15px] outline-none transition-colors cursor-pointer"
                  >
                    <option value="Executive COO Advisory">Executive COO Advisory</option>
                    <option value="Operational Transformation & Six Sigma">Operational Transformation &amp; Six Sigma</option>
                    <option value="Healthcare Operations & NABH">Healthcare Operations &amp; NABH</option>
                    <option value="Global Middle East / UAE Expansion">Global Middle East / UAE Expansion</option>
                    <option value="CSR & Philanthropic Governance">CSR &amp; Philanthropic Governance</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono-code text-[11px] text-[#78746d] uppercase tracking-wider mb-2 font-semibold">
                    Engagement Scope
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full bg-[#fbf9f6] border border-[#cfc4c5]/50 focus:border-[#141312] rounded-sm px-4 py-2.5 font-body text-[15px] outline-none transition-colors cursor-pointer"
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
                  <label className="block font-mono-code text-[11px] text-[#78746d] uppercase tracking-wider mb-2 font-semibold">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-[#fbf9f6] border border-[#cfc4c5]/50 focus:border-[#141312] rounded-sm px-4 py-2.5 font-body text-[15px] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono-code text-[11px] text-[#78746d] uppercase tracking-wider mb-2 font-semibold">
                    Select Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full bg-[#fbf9f6] border border-[#cfc4c5]/50 focus:border-[#141312] rounded-sm px-4 py-2.5 font-body text-[15px] outline-none transition-colors cursor-pointer"
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
                <label className="block font-mono-code text-[11px] text-[#78746d] uppercase tracking-wider mb-2 font-semibold">
                  Session Outline / Key Objectives
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share a brief overview of current operational bottlenecks or strategic growth goals..."
                  className="w-full bg-[#fbf9f6] border border-[#cfc4c5]/50 focus:border-[#141312] rounded-sm px-4 py-2.5 font-body text-[15px] outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full font-mono-code text-[11px] uppercase tracking-widest text-[#141312] bg-[#c5a059] hover:bg-[#d6b26a] py-4 rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50 font-semibold"
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
