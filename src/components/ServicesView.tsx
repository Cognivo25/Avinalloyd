import React from 'react';
import { SERVICES_DATA } from '../data/portfolioData';

interface ServicesViewProps {
  onOpenBooking: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-36 animate-fadeIn">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 lg:px-20 mb-28 md:mb-36">
        {/* Header */}
        <section className="max-w-2xl mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1a1c1c]" />
            <span className="font-mono-code text-[12px] uppercase tracking-widest text-[#5d5f5f]">
              Executive Advisory & Capabilities
            </span>
          </div>

          <h1 className="font-display text-[40px] sm:text-[48px] md:text-[56px] font-medium text-[#1a1c1c] leading-[1.1] tracking-tight mb-6">
            Driving organizational scale through operational rigor.
          </h1>

          <p className="font-body text-[17px] md:text-[18px] text-[#5d5f5f] leading-relaxed">
            Partnering with enterprise boards, prop-tech ventures, healthcare institutions, and expanding multinationals to optimize operations, enhance margins, and install Six Sigma quality frameworks.
          </p>
        </section>

        {/* Services List */}
        <div className="space-y-8">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="bg-white border border-[#cfc4c5]/35 rounded-2xl p-8 sm:p-10 md:p-12 transition-all duration-300 hover:shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono-code text-[12px] text-[#5d5f5f]">
                      0{index + 1}
                    </span>
                    <span className="w-8 h-[1px] bg-[#cfc4c5]" />
                    <span className="font-mono-code text-[12px] text-[#1a1c1c] uppercase tracking-wider">
                      {service.timeline}
                    </span>
                  </div>

                  <h2 className="font-display text-[26px] md:text-[32px] font-medium text-[#1a1c1c] mb-3">
                    {service.title}
                  </h2>

                  <p className="font-body text-[15px] text-[#5d5f5f] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="lg:col-span-7 lg:pl-10 lg:border-l border-[#cfc4c5]/30">
                  <h3 className="font-mono-code text-[12px] text-[#5d5f5f] uppercase tracking-widest mb-4">
                    Key Deliverables
                  </h3>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 font-body text-[14px] text-[#1a1c1c]">
                        <span className="material-symbols-outlined text-[16px] text-[#1a1c1c] mt-0.5 shrink-0">
                          check_circle
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={onOpenBooking}
                    className="font-mono-code text-[12px] inline-flex items-center gap-2 px-6 py-3 bg-[#1a1c1c] text-white rounded-lg hover:opacity-85 transition-opacity cursor-pointer"
                  >
                    <span>Inquire About This Service</span>
                    <span className="material-symbols-outlined text-[15px]">arrow_outward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
