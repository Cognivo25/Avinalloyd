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
    const textContent = `AVINA LLOYD — CHIEF OPERATIONS OFFICER (COO)
avina.lloyd@fidelituscorp.com | Bengaluru, Karnataka, India
LinkedIn: https://www.linkedin.com/in/avina-lloyd/

EXECUTIVE SUMMARY:
Accomplished Chief Operations Officer with 20+ years of cross-industry leadership driving multi-million dollar operational turnarounds, Six Sigma quality standards, healthcare administration, and international expansion across India and the Middle East.

CORE COMPETENCIES:
• Strategic Operations & Multi-Site P&L Management
• Six Sigma Quality Frameworks & Continuous Process Improvement
• Healthcare Operations & NABH Accreditation Standards
• PropTech & Corporate Real Estate Infrastructure
• Cross-Border Business Expansion & UAE Legal/HR Compliance
• ESG, Philanthropic Governance & CSR Strategy

PROFESSIONAL EXPERIENCE:
${TIMELINE_EXPERIENCES.map(
  (t) => `\n• ${t.role} | ${t.company}, ${t.location} (${t.period})\n  Impact: ${t.description}\n  Key Focus: ${t.tags.join(', ')}`
).join('\n')}

EDUCATION & CREDENTIALS:
${EDUCATION_DATA.map((e) => `• ${e.degree} - ${e.institution} (${e.details || ''})`).join('\n')}

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
          className="absolute top-5 right-5 w-9 h-9 bg-neutral-100 rounded-full flex items-center justify-center text-[#1a1c1c] hover:bg-neutral-200 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* CV Header */}
        <div className="border-b border-[#cfc4c5]/40 pb-6 mb-8">
          <div className="flex flex-wrap justify-between items-start gap-4">
            <div>
              <span className="font-mono-code text-[12px] text-[#5d5f5f] uppercase tracking-widest block mb-1">
                EXECUTIVE CURRICULUM VITAE
              </span>
              <h2 className="font-display text-[32px] sm:text-[38px] font-medium text-[#1a1c1c] tracking-tight">
                Avina Lloyd
              </h2>
              <p className="font-body text-[16px] text-[#5d5f5f]">
                Chief Operations Officer • Strategic Scaling & Six Sigma Quality
              </p>
              <p className="font-mono-code text-[12px] text-[#7e7576] mt-1">
                Bengaluru, Karnataka, India • avina.lloyd@fidelituscorp.com
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleDownloadText}
                className="px-4 py-2 font-mono-code text-[12px] bg-[#1a1c1c] text-white rounded-lg hover:opacity-85 transition-opacity flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span className="material-symbols-outlined text-[16px]">download</span>
                <span>Download CV</span>
              </button>

              <button
                onClick={handlePrint}
                className="px-4 py-2 font-mono-code text-[12px] border border-[#cfc4c5] text-[#1a1c1c] rounded-lg hover:bg-[#f3f3f4] transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">print</span>
                <span>Print</span>
              </button>
            </div>
          </div>
        </div>

        {/* Profile Summary */}
        <div className="space-y-8 font-body">
          <div>
            <h3 className="font-mono-code text-[12px] uppercase text-[#1a1c1c] tracking-widest font-semibold mb-2">
              Executive Summary
            </h3>
            <p className="text-[15px] text-[#4c4546] leading-relaxed">
              Results-driven Chief Operations Officer with 20+ years of extensive leadership steering operations across PropTech, healthcare, international corporate services, and enterprise quality assurance. Certified Six Sigma practitioner with a proven track record of scaling operating margins, achieving NABH and quality standards, and leading cross-functional teams across India and the UAE.
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="font-mono-code text-[12px] uppercase text-[#1a1c1c] tracking-widest font-semibold mb-4">
              Career Trajectory & Key Positions
            </h3>

            <div className="space-y-5">
              {TIMELINE_EXPERIENCES.map((exp) => (
                <div
                  key={exp.id}
                  className="p-4 rounded-xl bg-[#f9f9f9] border border-[#cfc4c5]/25"
                >
                  <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                    <h4 className="font-display text-[18px] font-medium text-[#1a1c1c]">
                      {exp.role} — {exp.company}
                    </h4>
                    <span className="font-mono-code text-[12px] text-[#5d5f5f]">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[12px] font-mono-code text-[#5d5f5f] mb-2">
                    {exp.location}
                  </p>
                  <p className="text-[14px] text-[#4c4546] mb-3 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 bg-[#eeeeee] font-mono-code text-[10px] text-[#1a1c1c] rounded-md font-medium"
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
              <h3 className="font-mono-code text-[12px] uppercase text-[#1a1c1c] tracking-widest font-semibold mb-3">
                Education & Credentials
              </h3>
              <div className="space-y-3">
                {EDUCATION_DATA.map((e, i) => (
                  <div key={i} className="text-[13px]">
                    <div className="font-semibold text-[#1a1c1c]">{e.degree}</div>
                    <div className="text-[#5d5f5f] font-mono-code text-[11px]">{e.institution}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-mono-code text-[12px] uppercase text-[#1a1c1c] tracking-widest font-semibold mb-3">
                Key Honors & Certifications
              </h3>
              <div className="space-y-3">
                {AWARDS_DATA.map((a, i) => (
                  <div key={i} className="text-[13px]">
                    <div className="font-semibold text-[#1a1c1c]">{a.title}</div>
                    <div className="text-[#5d5f5f] font-mono-code text-[11px]">{a.organization}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Competencies */}
          <div>
            <h3 className="font-mono-code text-[12px] uppercase text-[#1a1c1c] tracking-widest font-semibold mb-3">
              Executive Competencies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Six Sigma DMAIC & Quality Audits',
                'Multi-Site P&L Management',
                'Healthcare Administration & NABH',
                'PropTech Strategy & Real Estate Ops',
                'UAE / Middle East Business Setup',
                'Cross-Border HR & Governance',
                'Philanthropic Program & CSR Leadership',
                'ERP / HIS Process Integration',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#f3f3f4] border border-[#cfc4c5]/40 font-mono-code text-[11px] text-[#1a1c1c] rounded-full"
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

