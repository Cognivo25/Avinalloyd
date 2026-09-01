import React, { useEffect } from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenBooking,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-70 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white text-[#1a1c1c] w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl relative my-auto border border-[#cfc4c5]/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project view"
          className="absolute top-5 right-5 z-20 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#1a1c1c] hover:bg-neutral-200 transition-colors shadow-md cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Hero Media (Video or Image) */}
        {project.youtubeId ? (
          <div className="relative aspect-video w-full bg-black overflow-hidden">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}?rel=0`}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        ) : (
          <div className="relative aspect-[16/9] w-full bg-[#f3f3f4] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-5 left-5">
              <span className="px-3.5 py-1.5 bg-white/90 backdrop-blur-md rounded-full font-mono-code text-[11px] font-semibold text-[#1a1c1c] shadow-xs">
                {project.category}
              </span>
            </div>
          </div>
        )}

        {/* Content Body */}
        <div className="p-8 sm:p-10 md:p-12 space-y-8 max-h-[60vh] overflow-y-auto">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
              <h2 className="font-display text-[28px] sm:text-[36px] font-medium text-[#1a1c1c]">
                {project.title}
              </h2>
              {project.year && (
                <span className="font-mono-code text-[12px] text-[#5d5f5f]">
                  Year: {project.year}
                </span>
              )}
            </div>
            <p className="font-mono-code text-[12px] text-[#5d5f5f] uppercase tracking-wider mb-4">
              Client: {project.client}
            </p>
            <p className="font-body text-[16px] md:text-[18px] text-[#4c4546] leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#eeeeee] font-mono-code text-[11px] text-[#1a1c1c] rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Case Study Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#cfc4c5]/30">
            {project.challenge && (
              <div className="bg-[#f9f9f9] p-6 rounded-xl border border-[#cfc4c5]/20">
                <h4 className="font-mono-code text-[12px] uppercase text-[#1a1c1c] tracking-wider mb-2 font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#ba1a1a] rounded-full"></span>
                  Challenge
                </h4>
                <p className="font-body text-[14px] text-[#5d5f5f] leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            )}

            {project.solution && (
              <div className="bg-[#f9f9f9] p-6 rounded-xl border border-[#cfc4c5]/20">
                <h4 className="font-mono-code text-[12px] uppercase text-[#1a1c1c] tracking-wider mb-2 font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
                  Solution
                </h4>
                <p className="font-body text-[14px] text-[#5d5f5f] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}
          </div>

          {/* Results list */}
          {project.results && project.results.length > 0 && (
            <div className="pt-2">
              <h4 className="font-mono-code text-[12px] uppercase text-[#5d5f5f] tracking-widest mb-3">
                Key Outcomes & Metrics
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.results.map((res, i) => (
                  <div
                    key={i}
                    className="p-4 bg-[#f3f3f4] rounded-lg border border-[#cfc4c5]/20 font-body text-[13px] text-[#1a1c1c] font-medium"
                  >
                    ✓ {res}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-6 border-t border-[#cfc4c5]/30 flex flex-wrap justify-between items-center gap-4">
            <button
              onClick={onClose}
              className="font-mono-code text-[12px] text-[#5d5f5f] hover:text-[#1a1c1c] cursor-pointer"
            >
              ← Back to gallery
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="font-mono-code text-[11px] uppercase tracking-wider px-6 py-3 bg-[#141312] text-[#c5a059] rounded-sm hover:bg-[#22211e] transition-colors flex items-center gap-2 cursor-pointer border border-[#2a2825] font-semibold"
            >
              <span>Email Avina Lloyd</span>
              <span className="text-[12px]">↗</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
