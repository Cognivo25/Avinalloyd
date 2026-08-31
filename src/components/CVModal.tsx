import React from 'react';
import { TIMELINE_EXPERIENCES, EDUCATION_DATA, AWARDS_DATA } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const textContent = `AVINA LLOYD — CHIEF EXECUTIVE OFFICER (CEO)
Business Operations & CSR Initiatives
avina16@gmail.com | Bengaluru, Karnataka, India
LinkedIn: https://www.linkedin.com/in/avina-lloyd/

EXECUTIVE SUMMARY:
CEO at Triune Business Ventures. I build businesses, forge strategic partnerships, and turn relationships and opportunities into measurable value. My focus is on creating strong networks, developing commercial opportunities, and helping businesses expand across India and into global markets. I believe in purposeful leadership, meaningful collaboration, and creating opportunities for others—especially women in business.

TOP SKILLS & CORE COMPETENCIES:
• Health Insurance & Third Party Administration (TPA)
• Quality Management & Six Sigma Frameworks
• Business Growth & Strategic Partnerships
• Multi-Vertical Operations & P&L Leadership
• Healthcare Administration & Regulatory Compliance
• Corporate Governance & CSR Initiatives

PROFESSIONAL EXPERIENCE:
${TIMELINE_EXPERIENCES.map(
  (t) => `\n• ${t.role} | ${t.company}, ${t.location} (${t.period})\n  Impact: ${t.description}\n  Key Focus: ${t.tags.join(', ')}`
).join('\n')}

EDUCATION & CREDENTIALS:
${EDUCATION_DATA.map((e) => `• ${e.degree} - ${e.institution} (${e.year || ''}) - ${e.details || ''}`).join('\n')}

HONORS & AWARDS:
${AWARDS_DATA.map((a) => `• ${a.title} - ${a.organization}: ${a.description}`).join('\n')}
`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Avina_Lloyd_Executive_CV.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-80 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/65 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white text-[#1a1c1c] w-full max-w-3xl rounded-2xl p-6 sm:p-10 md:p-12 shadow-2xl relative my-auto border border-[#cfc4c5]/40 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close CV modal"
          className="absolute top-5 right-5 w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center text-[#141312] hover:bg-neutral-200 transition-colors cursor-pointer font-mono-code text-[14px]"
        >
          ✕
        </button>

        {/* CV Header */}
        <div className="border-b border-[#cfc4c5]/40 pb-6 mb-8">
          <div className="flex flex-wrap justify-between items-start gap-4">
            <div>
              <span className="font-mono-code text-[11px] text-[#b3884d] uppercase tracking-[0.25em] block mb-1 font-semibold">
                EXECUTIVE CURRICULUM VITAE
              </span>
              <h2 className="font-serif-luxury text-[32px] sm:text-[38px] font-normal text-[#141312] tracking-tight">
                Avina Lloyd
              </h2>
              <p className="font-body text-[15px] sm:text-[16px] text-[#55524e] font-medium">
                CEO, Triune Business Ventures • CFO, TechNeat Info Solutions
              </p>
              <p className="font-mono-code text-[11px] text-[#78746d] mt-1">
                Bengaluru, Karnataka, India • avina16@gmail.com • www.linkedin.com/in/avina-lloyd
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleDownloadText}
                className="px-4 py-2 font-mono-code text-[11px] uppercase tracking-wider bg-[#141312] text-[#c5a059] rounded-sm hover:bg-[#22211e] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs border border-[#2a2825] font-semibold"
              >
                <span>Download CV</span>
                <span>↓</span>
              </button>

              <button
                onClick={handlePrint}
                className="px-4 py-2 font-mono-code text-[11px] uppercase tracking-wider border border-[#cfc4c5] text-[#141312] rounded-sm hover:bg-[#f3f3f4] transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Print</span>
                <span>↗</span>
              </button>
            </div>
          </div>
        </div>

        {/* Profile Summary */}
        <div className="space-y-8 font-body">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b3884d]"></span>
              <h3 className="font-mono-code text-[11px] uppercase text-[#78746d] tracking-widest font-semibold">
                Executive Summary
              </h3>
            </div>
            <p className="text-[15px] text-[#403d39] leading-relaxed">
              I build businesses, forge strategic partnerships, and turn relationships and opportunities into measurable value. My focus is on creating strong networks, developing commercial opportunities, and helping businesses expand across India and into global markets. I believe in purposeful leadership, meaningful collaboration, and creating opportunities for others—especially women in business. Building businesses that move markets. Creating partnerships that matter. Opening opportunities that last.
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b3884d]"></span>
              <h3 className="font-mono-code text-[11px] uppercase text-[#78746d] tracking-widest font-semibold">
                Career Trajectory &amp; Positions
              </h3>
            </div>

            <div className="space-y-4">
              {TIMELINE_EXPERIENCES.map((exp) => (
                <div
                  key={exp.id}
                  className="p-5 rounded-xl bg-[#fbf9f6] border border-[#cfc4c5]/40"
                >
                  <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                    <h4 className="font-serif-luxury text-[17px] sm:text-[18px] font-normal text-[#141312]">
                      {exp.role} — {exp.company}
                    </h4>
                    <span className="font-mono-code text-[11px] text-[#b3884d] font-semibold">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[11px] font-mono-code text-[#78746d] mb-2">
                    {exp.location}
                  </p>
                  <p className="text-[13px] sm:text-[14px] text-[#55524e] mb-3 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 bg-[#edeae4] font-mono-code text-[10px] text-[#141312] rounded-sm font-medium uppercase tracking-wider"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b3884d]"></span>
                <h3 className="font-mono-code text-[11px] uppercase text-[#78746d] tracking-widest font-semibold">
                  Education &amp; Credentials
                </h3>
              </div>
              <div className="space-y-3">
                {EDUCATION_DATA.map((e, i) => (
                  <div key={i} className="text-[13px]">
                    <div className="font-semibold text-[#141312]">{e.degree}</div>
                    <div className="text-[#b3884d] font-mono-code text-[11px]">{e.institution}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b3884d]"></span>
                <h3 className="font-mono-code text-[11px] uppercase text-[#78746d] tracking-widest font-semibold">
                  Key Honors &amp; Certifications
                </h3>
              </div>
              <div className="space-y-3">
                {AWARDS_DATA.map((a, i) => (
                  <div key={i} className="text-[13px]">
                    <div className="font-semibold text-[#141312]">{a.title}</div>
                    <div className="text-[#b3884d] font-mono-code text-[11px]">{a.organization}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Competencies */}
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b3884d]"></span>
              <h3 className="font-mono-code text-[11px] uppercase text-[#78746d] tracking-widest font-semibold">
                Executive Competencies &amp; Frameworks
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                'Health Insurance & TPA Claims',
                'Quality Management Systems (QMS)',
                'Six Sigma DMAIC & Quality Audits',
                'Business Growth & Strategic Partnerships',
                'Multi-Vertical Operations & P&L Management',
                'Healthcare Administration & NABH',
                'PropTech Strategy & Real Estate Ops',
                'Cross-Border HR & UAE Compliance',
                'Corporate Governance & CSR Leadership',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#f4f0ea] border border-[#cfc4c5]/40 font-mono-code text-[10px] text-[#141312] rounded-sm uppercase tracking-wider"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

