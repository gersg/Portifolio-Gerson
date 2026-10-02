import React, { useState } from "react";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LaunchIcon from '@mui/icons-material/Launch';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { allProjects, ProjectDetail } from "../../data/projectsData";
import { lotrAudio } from "../../utils/lotrAudio";
import tatuitechImage from '../../assets/images/tatuilogo.png';

type ArtifactCategory = 'all' | 'tatui' | 'hackathons' | 'flow' | 'academic';

export const LotrArtifacts: React.FC = () => {
  const [activeFaction, setActiveFaction] = useState<ArtifactCategory>('all');
  const [inspectedArtifact, setInspectedArtifact] = useState<ProjectDetail | null>(null);

  const filteredArtifacts = activeFaction === 'all'
    ? allProjects
    : allProjects.filter((p) => p.category === activeFaction);

  const handleFilterClick = (cat: ArtifactCategory) => {
    lotrAudio.playRuneClick();
    setActiveFaction(cat);
  };

  const handleInspect = (artifact: ProjectDetail) => {
    lotrAudio.playRingSwell();
    setInspectedArtifact(artifact);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseInspect = () => {
    lotrAudio.playRuneClick();
    setInspectedArtifact(null);
    document.body.style.overflow = 'auto';
  };

  const getRarityTier = (artifact: ProjectDetail) => {
    if (artifact.id === 'konnekti-saas' || artifact.id === 'nasa-space-apps') {
      return { label: 'ARTEFATO MÍTICO', class: 'mythical', rune: '✦✦✦' };
    }
    if (artifact.category === 'tatui' || artifact.category === 'hackathons') {
      return { label: 'RELÍQUIA LENDÁRIA', class: 'legendary', rune: '✦✦' };
    }
    return { label: 'ITEM ÉPICO', class: 'epic', rune: '✦' };
  };

  return (
    <section className="lotr-section lotr-forge-section" id="artefatos">
      <div className="lotr-inner-container">
        
        {/* Section Header */}
        <div className="lotr-section-title-wrap">
          <span className="lotr-gold-kicker">
            <WhatshotIcon sx={{ fontSize: 16, mr: 0.6 }} /> A Montanha da Perdição · A Forja dos Códigos
          </span>
          <h2 className="lotr-section-heading">Artefatos &amp; Projetos Lendários</h2>
          <p className="lotr-section-lead">
            Inspecione as relíquias de software forjadas no calor das demandas reais de mercado e maratonas mundiais de código.
          </p>
          <div className="lotr-rune-divider">✦ ─── ❖ ─── ✦</div>
        </div>

        {/* Faction Filter Tabs */}
        <div className="lotr-faction-filter-bar">
          <button
            onClick={() => handleFilterClick('all')}
            className={`faction-btn ${activeFaction === 'all' ? 'active' : ''}`}
          >
            Todos os Artefatos ({allProjects.length})
          </button>

          <button
            onClick={() => handleFilterClick('tatui')}
            className={`faction-btn ${activeFaction === 'tatui' ? 'active' : ''}`}
          >
            TATUi TECH &amp; Konnekti
          </button>

          <button
            onClick={() => handleFilterClick('hackathons')}
            className={`faction-btn ${activeFaction === 'hackathons' ? 'active' : ''}`}
          >
            Hackathons de Elite
          </button>

          <button
            onClick={() => handleFilterClick('flow')}
            className={`faction-btn ${activeFaction === 'flow' ? 'active' : ''}`}
          >
            Flow Digital &amp; Automação
          </button>

          <button
            onClick={() => handleFilterClick('academic')}
            className={`faction-btn ${activeFaction === 'academic' ? 'active' : ''}`}
          >
            Tomos Acadêmicos
          </button>
        </div>

        {/* Artifacts RPG Cards Grid */}
        <div className="lotr-artifacts-grid">
          {filteredArtifacts.map((artifact) => {
            const rarity = getRarityTier(artifact);
            return (
              <div
                key={artifact.id}
                className={`lotr-artifact-card ${rarity.class}`}
                onClick={() => handleInspect(artifact)}
              >
                {/* Image Container with Glow */}
                <div className="artifact-image-frame">
                  <img
                    src={artifact.image}
                    alt={artifact.title}
                    className="artifact-thumb"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = tatuitechImage;
                    }}
                  />
                  <div className="artifact-rarity-badge">
                    <span>{rarity.rune} {rarity.label}</span>
                  </div>
                  {artifact.award && (
                    <div className="artifact-award-tag">
                      🏆 {artifact.award}
                    </div>
                  )}
                  <div className="artifact-hover-reveal">
                    <span>Inspecionar Relíquia &rarr;</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="artifact-card-body">
                  <div className="artifact-meta-header">
                    <span className="artifact-realm-tag">{artifact.categoryLabel}</span>
                    <span className="meta-dot">·</span>
                    <span className="artifact-year">{artifact.year}</span>
                  </div>

                  <h3 className="artifact-card-title">{artifact.title}</h3>
                  <p className="artifact-card-desc">{artifact.shortDescription}</p>

                  {/* Quick Metrics / Powers */}
                  <div className="artifact-metrics-row">
                    {artifact.metrics.slice(0, 2).map((m, i) => (
                      <div key={i} className="artifact-mini-metric">
                        <strong>{m.value}</strong>
                        <small>{m.label}</small>
                      </div>
                    ))}
                  </div>

                  {/* Tech Runes */}
                  <div className="artifact-tech-runes">
                    {artifact.techStack.frontend.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="tech-rune-pill">{t}</span>
                    ))}
                  </div>

                  <div className="artifact-card-footer">
                    <span className="artifact-role-lbl">{artifact.role}</span>
                    <button className="inspect-btn" title="Inspecionar este item">
                      <AutoAwesomeIcon sx={{ fontSize: 16 }} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* RPG Item Inspection Modal */}
        {inspectedArtifact && (
          <div className="lotr-modal-backdrop" onClick={handleCloseInspect}>
            <div
              className="lotr-inspect-window"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              <button
                onClick={handleCloseInspect}
                className="lotr-modal-close-btn"
                aria-label="Fechar"
              >
                <CloseIcon />
              </button>

              <div className="inspect-scroll-body">
                {/* Modal Visual Banner */}
                <div className="inspect-banner-frame">
                  <img
                    src={inspectedArtifact.image}
                    alt={inspectedArtifact.title}
                    className="inspect-banner-img"
                  />
                  <div className="inspect-rarity-ribbon">
                    {getRarityTier(inspectedArtifact).label}
                  </div>
                  {inspectedArtifact.award && (
                    <div className="inspect-award-ribbon">
                      🏆 {inspectedArtifact.award}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="inspect-content-box">
                  <div className="inspect-eyebrow-row">
                    <span className="inspect-cat">{inspectedArtifact.categoryLabel}</span>
                    <span className="inspect-client">Contexto: {inspectedArtifact.clientOrContext}</span>
                  </div>

                  <h2 className="inspect-title">{inspectedArtifact.title}</h2>
                  <p className="inspect-subtitle">{inspectedArtifact.subtitle}</p>

                  <div className="inspect-gold-divider"></div>

                  {/* Lore / Story */}
                  <div className="inspect-section">
                    <h4>📜 História &amp; Desafio Enfrentado</h4>
                    <p>{inspectedArtifact.problemStatement}</p>
                  </div>

                  <div className="inspect-section">
                    <h4>⚡ A Solução da Engenharia</h4>
                    <p>{inspectedArtifact.solutionOverview}</p>
                  </div>

                  {/* Metrics Bar */}
                  <div className="inspect-metrics-grid">
                    {inspectedArtifact.metrics.map((m, idx) => (
                      <div key={idx} className="inspect-metric-pill">
                        <strong>{m.value}</strong>
                        <span>{m.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Runes */}
                  <div className="inspect-section">
                    <h4>🛠️ Runas Técnicas Forjadas</h4>
                    <div className="inspect-tags-cloud">
                      {[
                        ...inspectedArtifact.techStack.frontend,
                        ...inspectedArtifact.techStack.backend,
                        ...inspectedArtifact.techStack.databaseAndCloud
                      ].map((t, idx) => (
                        <span key={idx} className="inspect-tag">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="inspect-actions-row">
                    {inspectedArtifact.links.live && (
                      <a
                        href={inspectedArtifact.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inspect-action-btn primary"
                      >
                        <LaunchIcon sx={{ fontSize: 17 }} />
                        <span>Ver Demonstração</span>
                      </a>
                    )}

                    {inspectedArtifact.links.youtube && (
                      <a
                        href={inspectedArtifact.links.youtube}
                        target="_blank"
                        rel="noreferrer"
                        className="inspect-action-btn youtube"
                      >
                        <YouTubeIcon sx={{ fontSize: 17 }} />
                        <span>Vídeo Pitch</span>
                      </a>
                    )}

                    {inspectedArtifact.links.github && (
                      <a
                        href={inspectedArtifact.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inspect-action-btn github"
                      >
                        <GitHubIcon sx={{ fontSize: 17 }} />
                        <span>Código no GitHub</span>
                      </a>
                    )}

                    <a
                      href={`https://wa.me/5584988081234?text=${encodeURIComponent(inspectedArtifact.links.whatsappMessage)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inspect-action-btn whatsapp"
                    >
                      <WhatsAppIcon sx={{ fontSize: 17 }} />
                      <span>Conversar no WhatsApp</span>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
