import React, { useState } from "react";
import ExploreIcon from '@mui/icons-material/Explore';
import CastleIcon from '@mui/icons-material/Castle';
import SpaIcon from '@mui/icons-material/Spa';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SailingIcon from '@mui/icons-material/Sailing';
import ShieldIcon from '@mui/icons-material/Shield';
import { lotrAudio } from "../../utils/lotrAudio";

interface RealmNode {
  id: string;
  sectionId: string;
  name: string;
  title: string;
  lore: string;
  icon: React.ReactNode;
  coords: { x: number; y: number };
  status: 'Concluído' | 'Ativo' | 'Desbravado';
}

const realms: RealmNode[] = [
  {
    id: "condado",
    sectionId: "condado",
    name: "O Condado (The Shire)",
    title: "Origens & A Sabedoria dos 38 Anos",
    lore: "Onde tudo começou. A serenidade e resiliência acumuladas ao longo de 38 anos, unindo liderança de projetos, vivência humana e o chamado para a jornada do software.",
    icon: <SpaIcon />,
    coords: { x: 12, y: 35 },
    status: "Concluído"
  },
  {
    id: "valfenda",
    sectionId: "valfenda",
    name: "Valfenda (Rivendell)",
    title: "O Conselho das 3 Disciplinas",
    lore: "O refúgio dos sábios onde as armas do código são forjadas. O domínio simultâneo de Engenharia de Sistemas, Estratégia de Vendas e Feitiços de Flow Digital.",
    icon: <CastleIcon />,
    coords: { x: 34, y: 22 },
    status: "Ativo"
  },
  {
    id: "batalhas",
    sectionId: "batalhas",
    name: "Minas Tirith & Rohan",
    title: "A Crônica das Grandes Campanhas",
    lore: "A fortaleza das batalhas reais: liderança do EcoPraça, a travessia dos mares até a Nova Zelândia, a fundação da TATUi TECH e as glórias nos Hackathons.",
    icon: <ShieldIcon />,
    coords: { x: 56, y: 62 },
    status: "Concluído"
  },
  {
    id: "artefatos",
    sectionId: "artefatos",
    name: "A Montanha da Perdição",
    title: "A Forja dos Artefatos Lendários",
    lore: "As profundezas ardentes onde os códigos mais poderosos foram forjados: o Anel Mestre Konnekti, a bio-pesquisa espacial da NASA e o guardião IoT Zonia.",
    icon: <WhatshotIcon />,
    coords: { x: 78, y: 48 },
    status: "Ativo"
  },
  {
    id: "alianca",
    sectionId: "alianca",
    name: "Os Portos Cinzentos",
    title: "A Aliança & O Mensageiro Real",
    lore: "As margens onde grandes pactos são selados. Conecte-se com Gerson Espíndola para construir novos reinos digitais com código robusto e alta conversão.",
    icon: <SailingIcon />,
    coords: { x: 92, y: 26 },
    status: "Desbravado"
  }
];

interface LotrWorldMapProps {
  onNavigateSection: (sectionId: string) => void;
}

export const LotrWorldMap: React.FC<LotrWorldMapProps> = ({ onNavigateSection }) => {
  const [selectedRealm, setSelectedRealm] = useState<RealmNode>(realms[1]);

  const handleRealmClick = (realm: RealmNode) => {
    lotrAudio.playTravelHorn();
    setSelectedRealm(realm);
    onNavigateSection(realm.sectionId);
  };

  return (
    <section className="lotr-world-map-section" id="mapa">
      <div className="lotr-map-container">
        
        {/* Map Header */}
        <div className="lotr-section-title-wrap">
          <span className="lotr-gold-kicker">
            <ExploreIcon sx={{ fontSize: 16, mr: 0.6 }} /> Cartografia Élfica da Terra-média
          </span>
          <h2 className="lotr-section-heading">O Mapa da Jornada</h2>
          <p className="lotr-section-lead">
            Clique nos reinos para viajar pelos domínios da carreira, habilidades e artefatos de Gerson Espíndola.
          </p>
          <div className="lotr-rune-divider">✦ ─── ❖ ─── ✦</div>
        </div>

        {/* Interactive Parchment Map Box */}
        <div className="lotr-parchment-canvas">
          <div className="map-texture-overlay"></div>
          
          {/* Connecting Map Path Line */}
          <svg className="map-path-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M 12 35 Q 24 15, 34 22 T 56 62 T 78 48 T 92 26"
              fill="none"
              stroke="rgba(212, 175, 55, 0.45)"
              strokeWidth="1.2"
              strokeDasharray="2, 2"
              className="map-path-dash"
            />
          </svg>

          {/* Realm Nodes */}
          {realms.map((realm, index) => {
            const isSelected = selectedRealm.id === realm.id;
            return (
              <div
                key={realm.id}
                className={`map-realm-node ${isSelected ? 'selected' : ''}`}
                style={{ left: `${realm.coords.x}%`, top: `${realm.coords.y}%` }}
                onClick={() => handleRealmClick(realm)}
                title={`Viajar para ${realm.name}`}
              >
                <div className="node-marker-pulse"></div>
                <div className="node-icon-frame">
                  {realm.icon}
                </div>
                <div className="node-label-plate">
                  <span className="node-step-num">0{index + 1}</span>
                  <span className="node-name">{realm.name}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Realm Lore Card (Inspection Box) */}
        <div className="lotr-realm-lore-banner">
          <div className="lore-icon-box">
            {selectedRealm.icon}
          </div>
          <div className="lore-content-box">
            <div className="lore-realm-badge">REINO SELECIONADO · {selectedRealm.status}</div>
            <h3 className="lore-realm-title">{selectedRealm.name} — {selectedRealm.title}</h3>
            <p className="lore-realm-text">{selectedRealm.lore}</p>
          </div>
          <button
            onClick={() => onNavigateSection(selectedRealm.sectionId)}
            className="lore-travel-btn"
          >
            <span>Desbravar Reino</span> &rarr;
          </button>
        </div>

      </div>
    </section>
  );
};
