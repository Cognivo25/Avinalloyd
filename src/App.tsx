import React, { useState, useEffect } from 'react';
import { PageType, Project } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { ExperienceView } from './components/ExperienceView';
import { PortfolioView } from './components/PortfolioView';
import { ContactView } from './components/ContactView';
import { ProjectDetailView } from './components/ProjectDetailView';
import { BookingModal } from './components/BookingModal';
import { CVModal } from './components/CVModal';
import { PROJECTS } from './data/portfolioData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCVOpen, setIsCVOpen] = useState(false);

  const handleOpenEmail = () => {
    window.location.href =
      'mailto:avina16@gmail.com?subject=Executive%20Advisory%20%26%20Leadership%20Inquiry%20%E2%80%94%20Avina%20Lloyd';
  };

  // Sync hash navigation if user refreshes with #about, #experience, #portfolio, etc.
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('project-')) {
        const projectId = hash.replace('project-', '');
        const found = PROJECTS.find((p) => p.id === projectId);
        if (found) {
          setSelectedProject(found);
          setCurrentPage('project-detail');
          return;
        }
      }

      if (['about', 'experience', 'portfolio'].includes(hash)) {
        setSelectedProject(null);
        setCurrentPage(hash as PageType);
      } else {
        setSelectedProject(null);
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
    setSelectedProject(null);
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentPage('project-detail');
    window.location.hash = `project-${project.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fbf9f6] text-[#141312] flex flex-col font-body selection:bg-[#141312] selection:text-[#fbf9f6]">
      {/* Global Fixed Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenEmail}
      />

      {/* Main Page View Router */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onSelectProject={handleSelectProject}
            onOpenBooking={handleOpenEmail}
          />
        )}

        {currentPage === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenEmail}
            onOpenCV={() => setIsCVOpen(true)}
          />
        )}

        {currentPage === 'experience' && (
          <ExperienceView
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenEmail}
            onOpenCV={() => setIsCVOpen(true)}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioView
            onNavigate={handleNavigate}
            onSelectProject={handleSelectProject}
            onOpenBooking={handleOpenEmail}
          />
        )}

        {currentPage === 'contact' && (
          <ContactView onOpenBooking={handleOpenEmail} />
        )}

        {currentPage === 'project-detail' && selectedProject && (
          <ProjectDetailView
            project={selectedProject}
            onBack={() => handleNavigate('portfolio')}
            onNavigate={handleNavigate}
            onSelectProject={handleSelectProject}
            onOpenBooking={handleOpenEmail}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenEmail}
      />

      {/* Curriculum Vitae Viewer / Downloader */}
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </div>
  );
}
