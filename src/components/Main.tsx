import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CodeIcon from '@mui/icons-material/Code';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import '../assets/styles/Main.scss';

function Main() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById("sobremim");
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-backdrop-glow"></div>
      <div className="hero-content-wrapper">
        <div className="hero-grid">
          {/* Left Column: Core Positioning & Bio */}
          <div className="hero-text-block">
            <div className="hero-kicker-row">
              <span className="hero-kicker-badge">
                <RocketLaunchIcon sx={{ fontSize: 16, mr: 0.8 }} /> TATUi TECH · Inovação Adaptativa
              </span>
            </div>

            <h1 className="hero-name-heading">Gerson Espíndola</h1>
            
            <p className="hero-role-title">
              Desenvolvedor Full Stack <span>&amp;</span> Estrategista de Vendas e Marketing Digital
            </p>

            <p className="hero-mission-paragraph">
              Unindo <strong>engenharia de sistemas</strong>, <strong>funis de marketing</strong> e <strong>estratégias consultivas de vendas</strong>. 
              Fundador da <strong>TATUi TECH</strong> e criador do <strong>Konnekti</strong>, desenvolvo aplicações web completas, 
              automações de fluxo (Flow Digital) e arquiteturas escaláveis que geram resultados reais de receita.
            </p>

            {/* Core Pillars Mini-Bar */}
            <div className="hero-pillars-grid">
              <div className="pillar-item">
                <CodeIcon className="pillar-icon" />
                <div>
                  <h4>Sistemas Robustos</h4>
                  <p>React, Next.js, Node.js &amp; PostgreSQL</p>
                </div>
              </div>
              <div className="pillar-item">
                <TrendingUpIcon className="pillar-icon" />
                <div>
                  <h4>Vendas &amp; Marketing</h4>
                  <p>Funis, CRM &amp; Geração de Receita</p>
                </div>
              </div>
              <div className="pillar-item">
                <RocketLaunchIcon className="pillar-icon" />
                <div>
                  <h4>Flow Digital &amp; IA</h4>
                  <p>Automações de Processos &amp; Agentes</p>
                </div>
              </div>
            </div>

            {/* Actions & CTAs */}
            <div className="hero-actions-group">
              <button onClick={scrollToProjects} className="btn-primary-action">
                Ver Projetos Selecionados
                <ArrowDownwardIcon sx={{ fontSize: 18, ml: 1 }} />
              </button>

              <a
                href="https://wa.me/5584988081234?text=Ol%C3%A1%20Gerson,%20gostaria%20de%20conversar%20sobre%20um%20projeto!"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary-action"
              >
                <WhatsAppIcon sx={{ fontSize: 18, mr: 0.8 }} />
                Iniciar Conversa
              </a>
            </div>

            {/* Social Network Bar */}
            <div className="hero-social-block">
              <span className="social-block-label">Canais Oficiais:</span>
              <div className="social-links-list">
                <a
                  href="https://www.linkedin.com/in/gersg/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill-link"
                  title="LinkedIn Profissional"
                >
                  <LinkedInIcon sx={{ fontSize: 19 }} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://www.instagram.com/gersg.dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill-link"
                  title="Instagram Profissional (@gersg.dev)"
                >
                  <InstagramIcon sx={{ fontSize: 19 }} />
                  <span>@gersg.dev</span>
                </a>

                <a
                  href="https://www.instagram.com/tatuitech/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill-link"
                  title="Instagram TATUi TECH (@tatuitech)"
                >
                  <InstagramIcon sx={{ fontSize: 19 }} />
                  <span>@tatuitech</span>
                </a>

                <a
                  href="https://github.com/gersg"
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill-link"
                  title="GitHub"
                >
                  <GitHubIcon sx={{ fontSize: 19 }} />
                  <span>GitHub</span>
                </a>

                <a
                  href="mailto:gersgdev@gmail.com"
                  className="social-pill-link"
                  title="Enviar Email"
                >
                  <EmailIcon sx={{ fontSize: 19 }} />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Presentation & Highlights */}
          <div className="hero-visual-card">
            <div className="hero-avatar-frame">
              <img
                src="https://github.com/gersg.png"
                alt="Gerson Espíndola - Desenvolvedor Full Stack e Fundador TATUi TECH"
                className="hero-avatar-img"
              />
              <div className="avatar-status-indicator" title="Disponível para novos projetos e consultorias">
                <span className="status-dot"></span> Disponível para Projetos
              </div>
            </div>

            {/* Achievements & Credibility Highlights */}
            <div className="hero-achievements-box">
              <div className="achievement-row">
                <span className="achievement-badge gold">1º LUGAR</span>
                <div className="achievement-text">
                  <strong>NASA Space Apps Challenge 2024</strong>
                  <p>Vencedor da etapa local e indicado à etapa mundial com ferramenta de bio-pesquisa espacial.</p>
                </div>
              </div>

              <div className="achievement-row">
                <span className="achievement-badge silver">2º LUGAR</span>
                <div className="achievement-text">
                  <strong>Hackathon INEP 2024 (Zonia)</strong>
                  <p>Solução IoT de detecção antecipada de focos de queimadas via sensores de temperatura infravermelhos.</p>
                </div>
              </div>

              <div className="achievement-row">
                <span className="achievement-badge purple">PRODUTO</span>
                <div className="achievement-text">
                  <strong>Konnekti · TATUi TECH</strong>
                  <p>Plataforma para conectar campanhas de marketing, automação de CRM e esteiras de vendas digitais.</p>
                </div>
              </div>
            </div>

            <button onClick={scrollToAbout} className="hero-quick-about-btn">
              Ler Biografia Completa &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
