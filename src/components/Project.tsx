import React, { useState } from "react";
import LaunchIcon from '@mui/icons-material/Launch';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import tatuitechImage from '../assets/images/tatuilogo.png';
import { allProjects, ProjectDetail } from '../data/projectsData';
import '../assets/styles/Project.scss';

type CategoryFilter = 'all' | 'tatui' | 'hackathons' | 'flow' | 'academic';

interface ProjectProps {
  onOpenProjectLanding?: (projectId: string) => void;
}

function Project({ onOpenProjectLanding }: ProjectProps) {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? allProjects
    : allProjects.filter((p) => p.category === activeFilter);

  const openProjectModal = (proj: ProjectDetail) => {
    setSelectedProject(proj);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const handleOpenLanding = (e: React.MouseEvent, projId: string) => {
    e.stopPropagation();
    if (selectedProject) {
      closeProjectModal();
    }
    if (onOpenProjectLanding) {
      onOpenProjectLanding(projId);
    } else {
      window.location.hash = `#/projeto/${projId}`;
    }
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container-custom">
        
        {/* Section Header */}
        <div className="section-title-wrap">
          <span className="section-eyebrow">Portfólio de Engenharia &amp; Negócios</span>
          <h2 className="section-main-heading">Projetos &amp; Inovação</h2>
          <p className="section-lead-text">
            Soluções reais que unem código de alta qualidade, estratégia de vendas, automação de processos e impacto premiado. Clique em qualquer projeto para abrir sua <strong>Landing Page dedicada</strong>.
          </p>
          <div className="section-divider-line"></div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="project-filters-bar">
          <button
            onClick={() => setActiveFilter('all')}
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          >
            Todos ({allProjects.length})
          </button>

          <button
            onClick={() => setActiveFilter('tatui')}
            className={`filter-btn ${activeFilter === 'tatui' ? 'active' : ''}`}
          >
            TATUi TECH &amp; Konnekti
          </button>

          <button
            onClick={() => setActiveFilter('hackathons')}
            className={`filter-btn ${activeFilter === 'hackathons' ? 'active' : ''}`}
          >
            Hackathons
          </button>

          <button
            onClick={() => setActiveFilter('flow')}
            className={`filter-btn ${activeFilter === 'flow' ? 'active' : ''}`}
          >
            Flow Digital &amp; Automação
          </button>

          <button
            onClick={() => setActiveFilter('academic')}
            className={`filter-btn ${activeFilter === 'academic' ? 'active' : ''}`}
          >
            Projetos Acadêmicos
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid-modern">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => openProjectModal(project)}
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-cover-img"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = tatuitechImage;
                  }}
                />
                <div className="project-overlay-hover">
                  <span className="view-detail-label">
                    Ver Projeto &amp; Landing Page <ArrowForwardIcon sx={{ fontSize: 16, ml: 0.5 }} />
                  </span>
                </div>
                {project.award && (
                  <span className="award-ribbon-tag">{project.award}</span>
                )}
              </div>

              <div className="project-card-body">
                {/* Metadata Row */}
                <div className="project-metadata-row">
                  <span className="project-category-tag">{project.categoryLabel}</span>
                  <span className="meta-bullet">·</span>
                  <span className="project-badge-highlight">{project.badges[0]}</span>
                </div>

                <h3 className="project-title-link">{project.title}</h3>
                
                <p className="project-short-summary">{project.shortDescription}</p>

                {/* Tech Tags */}
                <div className="project-tags-list">
                  {project.techStack.frontend.slice(0, 3).map((tech, i) => (
                    <span key={i} className="meta-tech-item">{tech}</span>
                  ))}
                  {project.techStack.frontend.length > 3 && (
                    <span className="meta-tech-more">+{project.techStack.frontend.length - 3}</span>
                  )}
                </div>

                <div className="project-card-footer">
                  <button
                    onClick={(e) => handleOpenLanding(e, project.id)}
                    className="card-landing-cta-btn"
                    title="Abrir Landing Page Completa deste projeto"
                  >
                    <span>Landing Page</span>
                    <OpenInNewIcon sx={{ fontSize: 15 }} />
                  </button>

                  <button className="card-open-arrow-btn" aria-label="Abrir detalhes">
                    &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal / Quick View */}
        {selectedProject && (
          <div className="project-modal-backdrop" onClick={closeProjectModal}>
            <div
              className="project-modal-window"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              <button
                onClick={closeProjectModal}
                className="modal-close-btn"
                aria-label="Fechar janela"
              >
                <CloseIcon />
              </button>

              <div className="modal-scroll-body">
                <div className="modal-cover-frame">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="modal-img-banner"
                  />
                  {selectedProject.award && (
                    <div className="modal-award-banner">
                      🏆 {selectedProject.award}
                    </div>
                  )}
                </div>

                <div className="modal-content-details">
                  <div className="modal-category-header">
                    <span className="modal-category-badge">{selectedProject.categoryLabel}</span>
                    <span className="modal-role-pill">Atuação: {selectedProject.role}</span>
                  </div>

                  <h2 className="modal-title">{selectedProject.title}</h2>
                  <p className="modal-subtitle">{selectedProject.subtitle}</p>

                  {/* Primary CTA: Open full Landing Page */}
                  <div className="modal-landing-callout">
                    <div>
                      <strong>Landing Page Dedicada Disponível</strong>
                      <p>Acesse a página completa deste projeto com métricas detalhadas, arquitetura técnica e modelo de solução.</p>
                    </div>
                    <button
                      onClick={(e) => handleOpenLanding(e, selectedProject.id)}
                      className="modal-btn-landing-page"
                    >
                      <span>Abrir Landing Page Completa</span>
                      <OpenInNewIcon sx={{ fontSize: 16 }} />
                    </button>
                  </div>

                  <div className="modal-divider"></div>

                  <div className="modal-section-block">
                    <h4>Visão Geral &amp; Solução</h4>
                    <p>{selectedProject.solutionOverview}</p>
                  </div>

                  <div className="modal-section-block">
                    <h4>Tecnologias &amp; Competências</h4>
                    <div className="modal-tech-chips">
                      {[
                        ...selectedProject.techStack.frontend,
                        ...selectedProject.techStack.backend,
                        ...selectedProject.techStack.databaseAndCloud
                      ].slice(0, 8).map((t, idx) => (
                        <span key={idx} className="modal-tech-tag">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Actions & External Links */}
                  <div className="modal-actions-footer">
                    {selectedProject.links.live && (
                      <a
                        href={selectedProject.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="modal-btn primary"
                      >
                        <LaunchIcon sx={{ fontSize: 18, mr: 0.8 }} />
                        Acessar Demo
                      </a>
                    )}

                    {selectedProject.links.youtube && (
                      <a
                        href={selectedProject.links.youtube}
                        target="_blank"
                        rel="noreferrer"
                        className="modal-btn youtube"
                      >
                        <YouTubeIcon sx={{ fontSize: 18, mr: 0.8 }} />
                        Pitch no YouTube
                      </a>
                    )}

                    {selectedProject.links.github && (
                      <a
                        href={selectedProject.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="modal-btn github"
                      >
                        <GitHubIcon sx={{ fontSize: 18, mr: 0.8 }} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default Project;
