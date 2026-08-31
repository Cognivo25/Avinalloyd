import React, { useState } from 'react';
import { CONTACT_BANNER_BG } from '../data/portfolioData';

interface ContactViewProps {
  onOpenBooking: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onOpenBooking }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Executive COO Advisory',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        service: 'Executive COO Advisory',
        message: '',
      });
    }, 1200);
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('avina.lloyd@fidelituscorp.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-36 animate-fadeIn">
      <main className="max-w-[1280px] mx-auto px-5 md:px-12 lg:px-20 mb-28 md:mb-36">
        {/* 1. Header Section */}
        <section className="max-w-2xl mb-14 md:mb-20">
          <h1 className="font-display text-[40px] sm:text-[48px] md:text-[56px] leading-[1.08] text-[#1a1c1c] font-medium tracking-tight mb-6">
            Initiate Executive Dialogue.
          </h1>
          <p className="font-body text-[17px] md:text-[18px] text-[#5d5f5f] leading-relaxed">
            Open to executive advisory, board consultation, healthcare streamlining, and high-impact operational leadership mandates. Connect directly using the form below or reach out via email.
          </p>
        </section>

        {/* 2. Form & Contact Info Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact Form Left */}
          <section className="lg:col-span-8 bg-white p-8 sm:p-10 md:p-14 rounded-2xl border border-[#cfc4c5]/30 shadow-sm">
            {status === 'success' ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto text-[#1a1c1c]">
                  <span className="material-symbols-outlined text-[32px]">check_circle</span>
                </div>
                <h3 className="font-display text-[26px] font-medium text-[#1a1c1c]">
                  Executive Inquiry Sent Successfully!
                </h3>
                <p className="font-body text-[15px] text-[#5d5f5f] max-w-md mx-auto">
                  Thank you for reaching out. Inquiries are reviewed with priority.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-6 py-2.5 font-mono-code text-[12px] bg-[#1a1c1c] text-white rounded-lg hover:opacity-85 transition-opacity"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                {/* Name */}
                <div className="flex flex-col gap-2 relative group">
                  <label
                    htmlFor="name"
                    className="font-mono-code text-[12px] text-[#5d5f5f] uppercase tracking-widest transition-colors group-focus-within:text-[#1a1c1c]"
                  >
                    Name & Organization
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins (CEO, Apex Health)"
                    className="w-full bg-transparent border-0 border-b border-[#cfc4c5] focus:border-[#1a1c1c] focus:ring-0 px-0 py-3 font-body text-[16px] text-[#1a1c1c] placeholder-[#cfc4c5] transition-colors outline-none"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2 relative group">
                  <label
                    htmlFor="email"
                    className="font-mono-code text-[12px] text-[#5d5f5f] uppercase tracking-widest transition-colors group-focus-within:text-[#1a1c1c]"
                  >
                    Corporate Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="s.jenkins@apexhealth.com"
                    className="w-full bg-transparent border-0 border-b border-[#cfc4c5] focus:border-[#1a1c1c] focus:ring-0 px-0 py-3 font-body text-[16px] text-[#1a1c1c] placeholder-[#cfc4c5] transition-colors outline-none"
                  />
                </div>

                {/* Project Focus */}
                <div className="flex flex-col gap-2 relative group">
                  <label
                    htmlFor="service"
                    className="font-mono-code text-[12px] text-[#5d5f5f] uppercase tracking-widest transition-colors group-focus-within:text-[#1a1c1c]"
                  >
                    Mandate Focus Area
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-[#cfc4c5] focus:border-[#1a1c1c] focus:ring-0 px-0 py-3 font-body text-[16px] text-[#1a1c1c] transition-colors outline-none cursor-pointer"
                  >
                    <option value="Executive COO Advisory">Executive COO Advisory</option>
                    <option value="Operational Transformation & Six Sigma">Operational Transformation & Six Sigma</option>
                    <option value="Healthcare Administration & NABH">Healthcare Administration & NABH</option>
                    <option value="Global Expansion & Middle East Strategy">Global Expansion & Middle East Strategy</option>
                    <option value="CSR & Philanthropic Program Leadership">CSR & Philanthropic Program Leadership</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2 relative group">
                  <label
                    htmlFor="message"
                    className="font-mono-code text-[12px] text-[#5d5f5f] uppercase tracking-widest transition-colors group-focus-within:text-[#1a1c1c]"
                  >
                    Message / Context
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide overview of your organizational objectives, current bottlenecks, or advisory scope..."
                    className="w-full bg-transparent border-0 border-b border-[#cfc4c5] focus:border-[#1a1c1c] focus:ring-0 px-0 py-3 font-body text-[16px] text-[#1a1c1c] placeholder-[#cfc4c5] transition-colors resize-none outline-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full md:w-auto font-mono-code text-[12px] text-white bg-[#1a1c1c] px-9 py-4 rounded-lg hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 group cursor-pointer shadow-sm disabled:opacity-50"
                  >
                    <span>{status === 'submitting' ? 'Submitting Inquiry...' : 'Submit Executive Inquiry'}</span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </form>
            )}
          </section>

          {/* Contact Details Right */}
          <aside className="lg:col-span-4 flex flex-col justify-between gap-10">
            <div>
              <h3 className="font-mono-code text-[12px] text-[#5d5f5f] uppercase tracking-widest mb-3">
                Direct Email
              </h3>
              <button
                onClick={handleCopyEmail}
                className="font-display text-[22px] md:text-[24px] font-medium text-[#1a1c1c] hover:opacity-75 transition-opacity underline decoration-1 underline-offset-4 text-left flex items-center gap-2 group cursor-pointer break-all"
                title="Click to copy"
              >
                <span>avina.lloyd@fidelituscorp.com</span>
                <span className="material-symbols-outlined text-[18px] text-[#5d5f5f] group-hover:text-[#1a1c1c] shrink-0">
                  {copiedEmail ? 'check' : 'content_copy'}
                </span>
              </button>

              {copiedEmail && (
                <p className="font-mono-code text-[11px] text-emerald-700 mt-2">
                  Email copied to clipboard!
                </p>
              )}
            </div>

            <div>
              <h3 className="font-mono-code text-[12px] text-[#5d5f5f] uppercase tracking-widest mb-4">
                Professional Networks
              </h3>
              <ul className="flex flex-col gap-3.5">
                <li>
                  <a
                    href="https://www.linkedin.com/in/avina-lloyd/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-body text-[17px] text-[#1a1c1c] hover:text-[#5d5f5f] transition-colors flex items-center gap-2 group w-max"
                  >
                    <span>LinkedIn Profile</span>
                    <span className="material-symbols-outlined text-[16px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                      call_made
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://fidelituscorp.com"
                    target="_blank"
                    rel="noreferrer"
                    className="font-body text-[17px] text-[#1a1c1c] hover:text-[#5d5f5f] transition-colors flex items-center gap-2 group w-max"
                  >
                    <span>Fidelitus Corp</span>
                    <span className="material-symbols-outlined text-[16px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                      call_made
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Availability Widget */}
            <div className="bg-[#f3f3f4] p-6 rounded-xl border border-[#cfc4c5]/40 flex items-start gap-4 shadow-2xs">
              <span className="material-symbols-outlined text-[#1a1c1c] text-[22px] mt-0.5">
                schedule
              </span>
              <div>
                <h4 className="font-mono-code text-[12px] font-semibold text-[#1a1c1c] uppercase tracking-wider mb-1">
                  Advisory Availability
                </h4>
                <p className="font-body text-[14px] text-[#5d5f5f]">
                  Open for board advisory, COO executive search, and institutional transformation mandates.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* 3. Executive Advisory Banner */}
      <section className="w-full relative py-24 md:py-32 overflow-hidden flex flex-col items-center justify-center text-center px-5 shadow-2xl">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${CONTACT_BANNER_BG}')` }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 z-10 bg-[#1a1c1c]/85 backdrop-blur-xs" />

        <div className="relative z-20 max-w-3xl flex flex-col items-center gap-6">
          <span className="font-mono-code text-[12px] text-white tracking-widest uppercase bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
            STRATEGIC ADVISORY
          </span>

          <h2 className="font-display text-[32px] sm:text-[44px] md:text-[54px] leading-tight text-white font-medium tracking-tight">
            Elevate Organizational Capability & Efficiency
          </h2>

          <p className="font-body text-[16px] md:text-[18px] text-white/85 max-w-xl mx-auto leading-relaxed">
            Schedule a confidential 30-minute executive session to review operational roadmaps and organizational optimization goals.
          </p>

          <button
            onClick={onOpenBooking}
            className="font-mono-code text-[12px] text-[#1a1c1c] bg-white px-8 py-4 rounded-lg hover:bg-neutral-100 transition-colors flex items-center gap-2 group cursor-pointer shadow-lg mt-2"
          >
            <span>Schedule Confidential Discussion</span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
              arrow_outward
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};
