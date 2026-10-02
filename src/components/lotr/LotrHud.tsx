import React from "react";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import FlareIcon from '@mui/icons-material/Flare';
import ShieldIcon from '@mui/icons-material/Shield';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { lotrAudio } from "../../utils/lotrAudio";

interface LotrHudProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
  ringPowerActive: boolean;
  onToggleRingPower: () => void;
  onOpenCharacterSheet: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const LotrHud: React.FC<LotrHudProps> = ({
  soundEnabled,
  onToggleSound,
  ringPowerActive,
  onToggleRingPower,
  onOpenCharacterSheet,
  onNavigateSection,
}) => {
  const handleNav = (sectionId: string) => {
    lotrAudio.playTravelHorn();
    onNavigateSection(sectionId);
  };

  const handleRingToggle = () => {
    lotrAudio.playRingSwell();
    onToggleRingPower();
  };

  return (
    <header className="lotr-hud-header">
      <div className="lotr-hud-container">
        
        {/* Left: Player Identity & Level */}
        <div className="lotr-player-status" onClick={onOpenCharacterSheet} title="Clique para abrir a Ficha do Herói">
          <div className="lotr-player-avatar-ring">
            <img src="https://github.com/gersg.png" alt="Gerson Espíndola" />
            <span className="lotr-level-tag">NV 38</span>
          </div>
          <div className="lotr-player-meta">
            <div className="lotr-player-title-row">
              <span className="lotr-player-name">Gerson Espíndola</span>
              <span className="lotr-class-tag">Mago Full-Stack</span>
            </div>
            <div className="lotr-bars-row">
              <div className="lotr-bar hp-bar" title="Vida / Resiliência: 100%">
                <div className="bar-fill" style={{ width: '100%' }}></div>
                <span className="bar-label">HP 100/100</span>
              </div>
              <div className="lotr-bar mp-bar" title="Mana / Capacidade Técnica: 100%">
                <div className="bar-fill" style={{ width: '100%' }}></div>
                <span className="bar-label">MP Full Stack</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center: Realm Fast Links */}
        <nav className="lotr-realm-nav">
          <button onClick={() => handleNav("condado")} className="realm-nav-btn">
            <span className="rune-char">🍃</span> O Condado
          </button>
          <button onClick={() => handleNav("valfenda")} className="realm-nav-btn">
            <span className="rune-char">🏛️</span> Valfenda
          </button>
          <button onClick={() => handleNav("batalhas")} className="realm-nav-btn">
            <span className="rune-char">⚔️</span> Campanhas
          </button>
          <button onClick={() => handleNav("artefatos")} className="realm-nav-btn">
            <span className="rune-char">🌋</span> Artefatos
          </button>
          <button onClick={() => handleNav("alianca")} className="realm-nav-btn">
            <span className="rune-char">⛵</span> Aliança
          </button>
        </nav>

        {/* Right: Controls & CTAs */}
        <div className="lotr-hud-controls">
          <button
            onClick={onOpenCharacterSheet}
            className="hud-control-btn sheet-btn"
            title="Abrir Ficha de RPG & Inventário de Relíquias"
          >
            <ShieldIcon sx={{ fontSize: 17 }} />
            <span className="btn-txt">Ficha RPG</span>
          </button>

          <button
            onClick={handleRingToggle}
            className={`hud-control-btn ring-btn ${ringPowerActive ? 'active' : ''}`}
            title="Ativar Poder do Um Anel (Visão Rúnica Élfica)"
          >
            <FlareIcon sx={{ fontSize: 17 }} />
            <span className="btn-txt">{ringPowerActive ? 'Anel Ativo' : 'O Um Anel'}</span>
          </button>

          <button
            onClick={onToggleSound}
            className="hud-control-btn sound-btn"
            title={soundEnabled ? 'Silenciar Áudio' : 'Ativar Efeitos Sonoros'}
          >
            {soundEnabled ? <VolumeUpIcon sx={{ fontSize: 18 }} /> : <VolumeOffIcon sx={{ fontSize: 18 }} />}
          </button>

          <a
            href="https://wa.me/5584988081234?text=Ol%C3%A1%20Gerson!%20Encontrei%20sua%20jornada%20pela%20Terra-m%C3%A9dia%20e%20quero%20forjar%20uma%20alian%C3%A7a!"
            target="_blank"
            rel="noreferrer"
            className="hud-cta-alliance"
            title="Selar Aliança no WhatsApp"
          >
            <WhatsAppIcon sx={{ fontSize: 18, mr: 0.6 }} />
            <span>Selar Aliança</span>
          </a>
        </div>

      </div>
    </header>
  );
};
