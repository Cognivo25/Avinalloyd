import React, { useState, useEffect } from 'react';
import { PageType, Project } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { PortfolioView } from './components/PortfolioView';
import { ServicesView } from './components/ServicesView';
import { ContactView } from './components/ContactView';
import { ProjectModal } from './components/ProjectModal';
import { BookingModal } from './components/BookingModal';
import { CVModal } from './components/CVModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isCVOpen, setIsCVOpen] = useState(false);

  // Sync hash navigation if user refreshes with #about or #portfolio
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['about', 'portfolio', 'services', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageType);
      } else {
        setCurrentPage('home');
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1a1c1c] flex flex-col font-body selection:bg-[#1a1c1c] selection:text-white">
      {/* Global Fixed Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Main Page View Router */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onSelectProject={(project) => setSelectedProject(project)}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
            onOpenCV={() => setIsCVOpen(true)}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioView
            onNavigate={handleNavigate}
            onSelectProject={(project) => setSelectedProject(project)}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesView onOpenBooking={() => setIsBookingOpen(true)} />
        )}

        {currentPage === 'contact' && (
          <ContactView onOpenBooking={() => setIsBookingOpen(true)} />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Case Study Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenBooking={() => {
          setSelectedProject(null);
          setIsBookingOpen(true);
        }}
      />

      {/* Book A Call / Consultation Scheduler */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Curriculum Vitae Viewer / Downloader */}
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </div>
  );
}
