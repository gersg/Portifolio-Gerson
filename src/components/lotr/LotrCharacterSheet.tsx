import React, { useEffect } from "react";
import CloseIcon from '@mui/icons-material/Close';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ShieldIcon from '@mui/icons-material/Shield';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import FlareIcon from '@mui/icons-material/Flare';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { lotrAudio } from "../../utils/lotrAudio";

interface LotrCharacterSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LotrCharacterSheet: React.FC<LotrCharacterSheetProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleClose = () => {
    lotrAudio.playRuneClick();
    onClose();
  };

  return (
    <div className="lotr-modal-backdrop" onClick={handleClose}>
      <div className="lotr-sheet-window" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button onClick={handleClose} className="lotr-sheet-close-btn" aria-label="Fechar Ficha">
          <CloseIcon />
        </button>

        <div className="lotr-sheet-scrollable">
          
          {/* Header */}
          <div className="lotr-sheet-header">
            <div className="lotr-sheet-badge">FICHA OFICIAL DE PERSONAGEM · TERRA-MÉDIA</div>
            <h2 className="lotr-sheet-title">Gerson Espíndola</h2>
            <p className="lotr-sheet-class">
              Nível 38 · Mago Full Stack &amp; Artífice de Vendas B2B
            </p>
            <div className="lotr-sheet-guild">
              <span>🏰 Guilda: TATUi TECH</span>
              <span>·</span>
              <span>💍 Relíquia: Anel Konnekti</span>
              <span>·</span>
              <span>🌿 Origem: Natal, RN</span>
            </div>
          </div>

          <div className="lotr-sheet-divider">❖ ──────── ❖ ──────── ❖</div>

          {/* Stats & Attributes Grid */}
          <div className="lotr-attributes-section">
            <h3 className="section-label">Atributos &amp; Poderes Principais</h3>
            
            <div className="attributes-grid">
              <div className="attribute-card">
                <div className="attribute-top">
                  <span className="attr-name">STR · Arquitetura de Sistemas</span>
                  <span className="attr-score">98 / 100</span>
                </div>
                <div className="attr-bar">
                  <div className="attr-bar-fill" style={{ width: '98%' }}></div>
                </div>
                <p className="attr-desc">Domínio em React, Next.js, Node.js, NestJS e modelagem com PostgreSQL.</p>
              </div>

              <div className="attribute-card">
                <div className="attribute-top">
                  <span className="attr-name">DEX · Flow Digital &amp; Automação</span>
                  <span className="attr-score">95 / 100</span>
                </div>
                <div className="attr-bar">
                  <div className="attr-bar-fill" style={{ width: '95%' }}></div>
                </div>
                <p className="attr-desc">Construção de esteiras no n8n, webhooks seguros e agentes com Google Gemini.</p>
              </div>

              <div className="attribute-card">
                <div className="attribute-top">
                  <span className="attr-name">WIS · Sabedoria &amp; Liderança</span>
                  <span className="attr-score">97 / 100</span>
                </div>
                <div className="attr-bar">
                  <div className="attr-bar-fill" style={{ width: '97%' }}></div>
                </div>
                <p className="attr-desc">38 anos de maturidade, coordenação do EcoPraça e Instituto Ancestral.</p>
              </div>

              <div className="attribute-card">
                <div className="attribute-top">
                  <span className="attr-name">CHA · Vendas B2B &amp; Persuasão</span>
                  <span className="attr-score">94 / 100</span>
                </div>
                <div className="attr-bar">
                  <div className="attr-bar-fill" style={{ width: '94%' }}></div>
                </div>
                <p className="attr-desc">Funis de conversão, negociação de alto padrão e orientação rigorosa a ROI.</p>
              </div>
            </div>
          </div>

          <div className="lotr-sheet-divider">❖ ──────── ❖ ──────── ❖</div>

          {/* Equipped Inventory / Relics */}
          <div className="lotr-relics-section">
            <h3 className="section-label">Inventário Épico &amp; Relíquias Forjadas</h3>

            <div className="relics-list">
              <div className="relic-item mythical">
                <div className="relic-icon">💍</div>
                <div className="relic-info">
                  <h4>O Anel Konnekti (Artefato Mítico)</h4>
                  <p>Ecossistema SaaS da TATUi TECH que unifica campanhas de atração, CRM inteligente e esteiras de conversão no WhatsApp.</p>
                  <span className="relic-stat">+60% Velocidade de Fechamento de Vendas</span>
                </div>
              </div>

              <div className="relic-item legendary">
                <div className="relic-icon">🗡️</div>
                <div className="relic-info">
                  <h4>Lâmina Élfica de TypeScript &amp; React</h4>
                  <p>Código estritamente tipado, modular e livre de bugs para interfaces rápidas e responsivas.</p>
                  <span className="relic-stat">+100% Imunidade a Erros de Runtime</span>
                </div>
              </div>

              <div className="relic-item legendary">
                <div className="relic-icon">🪄</div>
                <div className="relic-info">
                  <h4>Cajado de Node.js &amp; NestJS</h4>
                  <p>Estrutura de microsserviços, WebSocket em tempo real e rotas seguras com JWT e criptografia.</p>
                  <span className="relic-stat">+99.9% Disponibilidade de Backend</span>
                </div>
              </div>

              <div className="relic-item epic">
                <div className="relic-icon">🛡️</div>
                <div className="relic-info">
                  <h4>Escudo de PostgreSQL &amp; Prisma</h4>
                  <p>Modelagem relacional blindada contra inconsistências de dados e consultas lentas.</p>
                  <span className="relic-stat">+50% Otimização de Consultas SQL</span>
                </div>
              </div>

              <div className="relic-item epic">
                <div className="relic-icon">🌀</div>
                <div className="relic-info">
                  <h4>Pergaminho de Flow Digital &amp; Google Gemini</h4>
                  <p>Automações de fluxos complexos e agentes inteligentes que respondem e qualificam leads 24/7.</p>
                  <span className="relic-stat">Economia de 75% em Tarefas Manuais</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lotr-sheet-divider">❖ ──────── ❖ ──────── ❖</div>

          {/* Hall of Achievements */}
          <div className="lotr-achievements-section">
            <h3 className="section-label">Títulos Honoríficos &amp; Feitos Históricos</h3>

            <div className="achievements-badges-grid">
              <div className="feat-card">
                <WorkspacePremiumIcon sx={{ color: '#facc15', fontSize: 26 }} />
                <div>
                  <strong>1º Lugar NASA Space Apps 2024</strong>
                  <span>Vencedor Regional e indicado à etapa mundial com ferramenta de bio-pesquisa espacial.</span>
                </div>
              </div>

              <div className="feat-card">
                <WorkspacePremiumIcon sx={{ color: '#cbd5e1', fontSize: 26 }} />
                <div>
                  <strong>2º Lugar Hackathon INEP 2024</strong>
                  <span>Projeto Zonia: IoT e sensores térmicos contra queimadas e desmatamento.</span>
                </div>
              </div>

              <div className="feat-card">
                <FlareIcon sx={{ color: '#818cf8', fontSize: 26 }} />
                <div>
                  <strong>Lorde Fundador da TATUi TECH</strong>
                  <span>Criação da software house e lançamento do produto SaaS Konnekti.</span>
                </div>
              </div>

              <div className="feat-card">
                <ShieldIcon sx={{ color: '#34d399', fontSize: 26 }} />
                <div>
                  <strong>Travessia Internacional (Nova Zelândia)</strong>
                  <span>3 anos de vivência em Queenstown com liderança operacional de alto padrão.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
