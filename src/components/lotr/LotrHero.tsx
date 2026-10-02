import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CasinoIcon from '@mui/icons-material/Casino';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { lotrAudio } from "../../utils/lotrAudio";

interface LotrHeroProps {
  ringPowerActive: boolean;
  onOpenCharacterSheet: () => void;
  onScrollToMap: () => void;
  onScrollToDice: () => void;
}

export const LotrHero: React.FC<LotrHeroProps> = ({
  ringPowerActive,
  onOpenCharacterSheet,
  onScrollToMap,
  onScrollToDice,
}) => {
  const handleStartJourney = () => {
    lotrAudio.playTravelHorn();
    onScrollToMap();
  };

  const handleOpenSheet = () => {
    lotrAudio.playRuneClick();
    onOpenCharacterSheet();
  };

  const handleDiceScroll = () => {
    lotrAudio.playDiceRoll();
    onScrollToDice();
  };

  return (
    <section className={`lotr-hero-section ${ringPowerActive ? 'ring-surge-active' : ''}`} id="hero">
      
      {/* Background mystical fog and golden rune ring */}
      <div className="lotr-mist-overlay"></div>
      
      <div className="lotr-hero-content-wrap">
        
        {/* Animated One Ring Visual with glowing Tengwar Inscription */}
        <div className="lotr-ring-wrapper">
          <div className="lotr-ring-inscription-circle">
            <svg viewBox="0 0 320 320" className="lotr-ring-svg">
              <path
                id="ringTextPath"
                d="M 160, 160 m -125, 0 a 125,125 0 1,1 250,0 a 125,125 0 1,1 -250,0"
                fill="none"
              />
              <text className="tengwar-inscription-text">
                <textPath href="#ringTextPath" startOffset="0%">
                  ⚡ UM CÓDIGO PARA A TODOS GOVERNAR · UMA ARQUITETURA PARA ENCONTRÁ-LOS · UM FLOW PARA UNIR ⚡
                </textPath>
              </text>
            </svg>
          </div>

          <div className="lotr-hero-avatar-frame" onClick={handleOpenSheet} title="Ver Ficha de RPG do Herói">
            <img
              src="https://github.com/gersg.png"
              alt="Gerson Espíndola"
              className="lotr-hero-avatar-img"
            />
            <div className="lotr-ring-glow-halo"></div>
            <div className="lotr-avatar-badge">
              <span>🛡️ Guardião da TATUi</span>
            </div>
          </div>
        </div>

        {/* Hero Narrative Block */}
        <div className="lotr-hero-text-block">
          <div className="lotr-hero-eyebrow">
            <span className="lotr-fellowship-kicker">
              ⚔️ A Sociedade do Código · A Crônica da Terra-média
            </span>
          </div>

          <h1 className="lotr-hero-title">Gerson Espíndola</h1>
          
          <h2 className="lotr-hero-subtitle">
            Mago Full-Stack <span>&amp;</span> Artífice de Vendas B2B · Fundador da TATUi TECH
          </h2>

          <p className="lotr-hero-lore">
            "Não são as ferramentas que escolhem o guerreiro, mas a determinação de forjar o próprio destino." 
            Em um mundo onde sistemas e negócios frequentemente batalham separados, domino a <strong>Engenharia Full Stack</strong>, 
            os <strong>Feitiços de Automação (Flow Digital)</strong> e as <strong>Estratégias Comerciais B2B</strong>. 
            Criador do <strong>Konnekti</strong> e guardião da <strong>TATUi TECH</strong>, construo arquiteturas digitais preparadas para qualquer batalha.
          </p>

          {/* Quick Attributes Badges */}
          <div className="lotr-stat-pills">
            <div className="lotr-pill gold">
              <span className="pill-rune">👑</span>
              <div>
                <strong>Lorde Fundador</strong>
                <small>TATUi TECH &amp; Konnekti</small>
              </div>
            </div>

            <div className="lotr-pill mithril">
              <span className="pill-rune">🏆</span>
              <div>
                <strong>1º Lugar NASA</strong>
                <small>Space Apps Challenge 2024</small>
              </div>
            </div>

            <div className="lotr-pill emerald">
              <span className="pill-rune">🥈</span>
              <div>
                <strong>2º Lugar INEP</strong>
                <small>Zonia IoT Ambiental</small>
              </div>
            </div>
          </div>

          {/* Interactive Game Action Buttons */}
          <div className="lotr-hero-actions">
            <button onClick={handleStartJourney} className="lotr-btn-primary">
              <span>Percorrer a Terra-média</span>
              <ArrowDownwardIcon sx={{ fontSize: 18, ml: 0.8 }} />
            </button>

            <button onClick={handleOpenSheet} className="lotr-btn-secondary">
              <AutoFixHighIcon sx={{ fontSize: 18, mr: 0.8 }} />
              <span>Inspecionar Ficha RPG</span>
            </button>

            <button onClick={handleDiceScroll} className="lotr-btn-dice">
              <CasinoIcon sx={{ fontSize: 18, mr: 0.8 }} />
              <span>Rolar o Dado d20</span>
            </button>
          </div>

          {/* Fellowship Runes / Social Network Links */}
          <div className="lotr-social-runes">
            <span className="runes-label">Mensageiros do Reino:</span>
            <div className="runes-links-row">
              <a
                href="https://www.linkedin.com/in/gersg/"
                target="_blank"
                rel="noreferrer"
                className="rune-link"
                title="Pergaminho no LinkedIn"
              >
                <LinkedInIcon sx={{ fontSize: 18 }} />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://www.instagram.com/gersg.dev/"
                target="_blank"
                rel="noreferrer"
                className="rune-link"
                title="Diário Élfico no Instagram (@gersg.dev)"
              >
                <InstagramIcon sx={{ fontSize: 18 }} />
                <span>@gersg.dev</span>
              </a>

              <a
                href="https://www.instagram.com/tatuitech/"
                target="_blank"
                rel="noreferrer"
                className="rune-link"
                title="Cidadela TATUi TECH (@tatuitech)"
              >
                <InstagramIcon sx={{ fontSize: 18 }} />
                <span>@tatuitech</span>
              </a>

              <a
                href="https://github.com/gersg"
                target="_blank"
                rel="noreferrer"
                className="rune-link"
                title="Grimório no GitHub"
              >
                <GitHubIcon sx={{ fontSize: 18 }} />
                <span>GitHub</span>
              </a>

              <a
                href="https://wa.me/5584988081234?text=Ol%C3%A1%20Gerson!%20Desejo%20forjar%20uma%20alian%C3%A7a%20com%20voc%C3%AA%20e%20a%20TATUi%20TECH!"
                target="_blank"
                rel="noreferrer"
                className="rune-link whatsapp"
                title="Mensageiro Rápido no WhatsApp"
              >
                <WhatsAppIcon sx={{ fontSize: 18 }} />
                <span>WhatsApp</span>
              </a>

              <a
                href="mailto:gersgdev@gmail.com"
                className="rune-link"
                title="Corvo Mensageiro / Email"
              >
                <EmailIcon sx={{ fontSize: 18 }} />
                <span>Email</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
