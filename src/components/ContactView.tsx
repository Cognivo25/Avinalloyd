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
    navigator.clipboard.writeText('avina16@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-36 animate-fadeIn">
      <main className="max-w-[1280px] mx-auto px-5 md:px-12 lg:px-20 mb-28 md:mb-36">
        {/* 1. Header Section */}
        <section className="max-w-2xl mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#b3884d]"></span>
            <span className="font-mono-code text-[12px] text-[#b3884d] uppercase tracking-[0.25em] font-semibold">
              Executive Engagement
            </span>
          </div>
          <h1 className="font-serif-luxury text-[40px] sm:text-[48px] md:text-[56px] leading-[1.08] text-[#141312] font-normal tracking-tight mb-6">
            Initiate Executive Dialogue.
          </h1>
          <p className="font-body text-[17px] md:text-[18px] text-[#55524e] leading-relaxed">
            Open to executive advisory, board consultation, healthcare streamlining, and high-impact operational leadership mandates. Connect directly using the form below or reach out via email.
          </p>
        </section>

        {/* 2. Form & Contact Info Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact Form Left */}
          <section className="lg:col-span-8 bg-white p-8 sm:p-10 md:p-14 rounded-2xl border border-[#cfc4c5]/40 shadow-xs">
            {status === 'success' ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-12 h-12 bg-[#141312] text-[#c5a059] rounded-full flex items-center justify-center mx-auto font-mono-code text-[18px]">
                  ✓
                </div>
                <h3 className="font-serif-luxury text-[26px] font-normal text-[#141312]">
                  Executive Inquiry Sent Successfully
                </h3>
                <p className="font-body text-[15px] text-[#55524e] max-w-md mx-auto">
                  Thank you for reaching out. Inquiries are reviewed with executive confidentiality and priority.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-6 py-2.5 font-mono-code text-[11px] uppercase tracking-widest bg-[#141312] text-[#c5a059] rounded-sm hover:bg-[#22211e] transition-colors"
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
                    className="font-mono-code text-[11px] text-[#78746d] uppercase tracking-widest transition-colors group-focus-within:text-[#141312] font-semibold"
                  >
                    Name &amp; Organization
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins (CEO, Apex Health)"
                    className="w-full bg-transparent border-0 border-b border-[#cfc4c5] focus:border-[#141312] focus:ring-0 px-0 py-3 font-body text-[16px] text-[#141312] placeholder-[#cfc4c5] transition-colors outline-none"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2 relative group">
                  <label
                    htmlFor="email"
                    className="font-mono-code text-[11px] text-[#78746d] uppercase tracking-widest transition-colors group-focus-within:text-[#141312] font-semibold"
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
                    className="w-full bg-transparent border-0 border-b border-[#cfc4c5] focus:border-[#141312] focus:ring-0 px-0 py-3 font-body text-[16px] text-[#141312] placeholder-[#cfc4c5] transition-colors outline-none"
                  />
                </div>

                {/* Project Focus */}
                <div className="flex flex-col gap-2 relative group">
                  <label
                    htmlFor="service"
                    className="font-mono-code text-[11px] text-[#78746d] uppercase tracking-widest transition-colors group-focus-within:text-[#141312] font-semibold"
                  >
                    Mandate Focus Area
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-[#cfc4c5] focus:border-[#141312] focus:ring-0 px-0 py-3 font-body text-[16px] text-[#141312] transition-colors outline-none cursor-pointer"
                  >
                    <option value="Executive COO Advisory">Executive COO Advisory</option>
                    <option value="Operational Transformation & Six Sigma">Operational Transformation &amp; Six Sigma</option>
                    <option value="Healthcare Administration & NABH">Healthcare Administration &amp; NABH</option>
                    <option value="Global Expansion & Middle East Strategy">Global Expansion &amp; Middle East Strategy</option>
                    <option value="CSR & Philanthropic Program Leadership">CSR &amp; Philanthropic Program Leadership</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2 relative group">
                  <label
                    htmlFor="message"
                    className="font-mono-code text-[11px] text-[#78746d] uppercase tracking-widest transition-colors group-focus-within:text-[#141312] font-semibold"
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
                    className="w-full bg-transparent border-0 border-b border-[#cfc4c5] focus:border-[#141312] focus:ring-0 px-0 py-3 font-body text-[16px] text-[#141312] placeholder-[#cfc4c5] transition-colors resize-none outline-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full md:w-auto font-mono-code text-[11px] uppercase tracking-widest text-[#c5a059] bg-[#141312] px-9 py-4 rounded-sm hover:bg-[#22211e] transition-colors flex items-center justify-center gap-2 group cursor-pointer shadow-xs disabled:opacity-50 font-semibold border border-[#2a2825]"
                  >
                    <span>{status === 'submitting' ? 'Submitting Inquiry...' : 'Submit Executive Inquiry'}</span>
                    <span>↗</span>
                  </button>
                </div>
              </form>
            )}
          </section>

          {/* Contact Details Right */}
          <aside className="lg:col-span-4 flex flex-col justify-between gap-10">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b3884d]"></span>
                <h3 className="font-mono-code text-[11px] text-[#78746d] uppercase tracking-widest font-semibold">
                  Direct Email
                </h3>
              </div>
              <button
                onClick={handleCopyEmail}
                className="font-serif-luxury text-[22px] md:text-[24px] font-normal text-[#141312] hover:text-[#b3884d] transition-colors text-left flex items-center gap-2 group cursor-pointer break-all"
                title="Click to copy"
              >
                <span>avina16@gmail.com</span>
                <span className="font-mono-code text-[11px] text-[#78746d] border border-[#cfc4c5]/60 px-2 py-0.5 rounded-sm uppercase">
                  {copiedEmail ? 'Copied' : 'Copy'}
                </span>
              </button>

              {copiedEmail && (
                <p className="font-mono-code text-[11px] text-[#b3884d] mt-2 flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#b3884d]"></span>
                  Email copied to clipboard
                </p>
              )}
            </div>

            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b3884d]"></span>
                <h3 className="font-mono-code text-[11px] text-[#78746d] uppercase tracking-widest font-semibold">
                  Professional Networks
                </h3>
              </div>
              <ul className="flex flex-col gap-3.5">
                <li>
                  <a
                    href="https://www.linkedin.com/in/avina-lloyd/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-body text-[16px] text-[#141312] hover:text-[#b3884d] transition-colors flex items-center gap-2 group w-max"
                  >
                    <span>LinkedIn Profile</span>
                    <span className="text-[12px]">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://fidelituscorp.com"
                    target="_blank"
                    rel="noreferrer"
                    className="font-body text-[16px] text-[#141312] hover:text-[#b3884d] transition-colors flex items-center gap-2 group w-max"
                  >
                    <span>Fidelitus Corp</span>
                    <span className="text-[12px]">↗</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Availability Widget */}
            <div className="bg-[#f4f0ea]/70 p-6 rounded-xl border border-[#cfc4c5]/40 flex items-start gap-4 shadow-2xs">
              <span className="font-mono-code text-[#b3884d] text-[16px] mt-0.5 font-bold">
                ◆
              </span>
              <div>
                <h4 className="font-mono-code text-[11px] font-semibold text-[#141312] uppercase tracking-wider mb-1">
                  Advisory Availability
                </h4>
                <p className="font-body text-[13px] text-[#55524e] leading-relaxed">
                  Open for board advisory, COO executive search, and institutional transformation mandates.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* 3. Executive Advisory Banner */}
      <section className="w-full relative py-24 md:py-32 overflow-hidden flex flex-col items-center justify-center text-center px-5 shadow-2xl">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${CONTACT_BANNER_BG}')` }}
        />
        <div className="absolute inset-0 z-10 bg-[#141312]/85 backdrop-blur-xs" />

        <div className="relative z-20 max-w-3xl flex flex-col items-center gap-6">
          <span className="font-mono-code text-[11px] text-[#c5a059] tracking-[0.25em] uppercase font-semibold">
            STRATEGIC ADVISORY
          </span>

          <h2 className="font-serif-luxury text-[32px] sm:text-[44px] md:text-[54px] leading-tight text-white font-normal tracking-tight">
            Elevate Organizational Capability &amp; Efficiency
          </h2>

          <p className="font-body text-[16px] md:text-[18px] text-white/85 max-w-xl mx-auto leading-relaxed">
            Schedule a confidential 30-minute executive session to review operational roadmaps and organizational optimization goals.
          </p>

          <button
            onClick={onOpenBooking}
            className="font-mono-code text-[11px] uppercase tracking-widest text-[#141312] bg-[#c5a059] hover:bg-[#d6b26a] px-8 py-4 rounded-sm transition-colors flex items-center gap-2 cursor-pointer shadow-lg mt-2 font-semibold"
          >
            <span>Email Avina Lloyd</span>
            <span>↗</span>
          </button>
        </div>
      </section>
    </div>
  );
};
