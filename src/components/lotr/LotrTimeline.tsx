import React from "react";
import ShieldIcon from '@mui/icons-material/Shield';
import CastleIcon from '@mui/icons-material/Castle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PublicIcon from '@mui/icons-material/Public';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import GrassIcon from '@mui/icons-material/Grass';
import {
  VerticalTimeline as _VerticalTimeline,
  VerticalTimelineElement as _VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const VerticalTimeline = _VerticalTimeline as unknown as React.ComponentType<any>;
const VerticalTimelineElement = _VerticalTimelineElement as unknown as React.ComponentType<any>;

export const LotrTimeline: React.FC = () => {
  return (
    <section className="lotr-section lotr-minas-tirith-section" id="batalhas">
      <div className="lotr-inner-container">
        
        {/* Section Header */}
        <div className="lotr-section-title-wrap">
          <span className="lotr-gold-kicker">
            <CastleIcon sx={{ fontSize: 16, mr: 0.6 }} /> Minas Tirith &amp; Rohan · A Crônica dos Feitos
          </span>
          <h2 className="lotr-section-heading">O Livro das Batalhas &amp; Campanhas</h2>
          <p className="lotr-section-lead">
            Os marcos de uma carreira construída com liderança estratégica, empreendedorismo e vitórias tecnológicas.
          </p>
          <div className="lotr-rune-divider">✦ ─── ❖ ─── ✦</div>
        </div>

        <VerticalTimeline animate={true} className="lotr-medieval-timeline">

          {/* 1. TATUi TECH & Konnekti */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#121824', color: '#fff', borderRadius: '14px', border: '1px solid rgba(212, 175, 55, 0.35)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
            contentArrowStyle={{ borderRight: '8px solid #121824' }}
            date="2024 - Presente · A Era da Forja"
            iconStyle={{ background: '#d4af37', color: '#000', boxShadow: '0 0 0 4px rgba(212, 175, 55, 0.4)' }}
            icon={<ShieldIcon />}
          >
            <div className="lotr-timeline-seal seal-gold">CIDADELA FUNDADA</div>
            <h3 className="vertical-timeline-element-title">Fundador &amp; Full Stack Lead · TATUi TECH &amp; Konnekti</h3>
            <h4 className="vertical-timeline-element-subtitle">Natal, RN, Brasil · Domínio Híbrido</h4>
            <p>
              Fundação da <strong>TATUi TECH</strong> (empresa de tecnologia e software sob medida) e criação do produto proprietário <strong>Konnekti</strong> (SaaS de automação de vendas e CRM unificado). Liderança integral: da arquitetura em React/Next.js/PostgreSQL ao fechamento de contratos comerciais de alto valor.
            </p>
          </VerticalTimelineElement>

          {/* 2. Hackathons */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#121824', color: '#fff', borderRadius: '14px', border: '1px solid rgba(212, 175, 55, 0.35)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
            contentArrowStyle={{ borderRight: '8px solid #121824' }}
            date="2024 - 2025 · O Torneio dos Campeões"
            iconStyle={{ background: '#f59e0b', color: '#000', boxShadow: '0 0 0 4px rgba(245, 158, 11, 0.4)' }}
            icon={<EmojiEventsIcon />}
          >
            <div className="lotr-timeline-seal seal-gold">HONRA DE GUERRA</div>
            <h3 className="vertical-timeline-element-title">Destaque em Hackathons Nacionais &amp; Mundiais</h3>
            <h4 className="vertical-timeline-element-subtitle">NASA Space Apps Challenge · INEP · Campus Party Goiás</h4>
            <p>
              • <strong>1º Lugar Local e Indicado à Etapa Mundial</strong> no <em>NASA Space Apps Challenge 2024</em> (NASA Parts).<br/>
              • <strong>2º Lugar</strong> no <em>Hackathon Impulso Regional INEP 2024</em> (Zonia: IoT contra queimadas).<br/>
              • Prototipagem ultra-rápida de 48 horas sob estresse extremo e vitórias consagradas em bancas avaliadoras rigorosas.
            </p>
          </VerticalTimelineElement>

          {/* 3. Instituto Ancestral */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#121824', color: '#fff', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 10px 30px rgba(0,0,0,0.4)' }}
            contentArrowStyle={{ borderRight: '8px solid #121824' }}
            date="2022 - 2024 · Gestão e Alianças"
            iconStyle={{ background: '#3b82f6', color: '#fff', boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.4)' }}
            icon={<CastleIcon />}
          >
            <div className="lotr-timeline-seal seal-blue">GRANDE ALIANÇA</div>
            <h3 className="vertical-timeline-element-title">Co-fundador &amp; Diretor de Projetos · Instituto Ancestral</h3>
            <h4 className="vertical-timeline-element-subtitle">Natal, RN, Brasil</h4>
            <p>
              Articulação institucional, gestão orçamentária e liderança de projetos de grande escala socioambiental e cultural. Negociação com órgãos governamentais e corporações privadas.
            </p>
          </VerticalTimelineElement>

          {/* 4. Nova Zelândia */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#121824', color: '#fff', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 10px 30px rgba(0,0,0,0.4)' }}
            contentArrowStyle={{ borderRight: '8px solid #121824' }}
            date="2019 - 2022 · Além dos Mares"
            iconStyle={{ background: '#10b981', color: '#fff', boxShadow: '0 0 0 4px rgba(16, 185, 129, 0.4)' }}
            icon={<PublicIcon />}
          >
            <div className="lotr-timeline-seal seal-green">VIVÊNCIA INTERNACIONAL</div>
            <h3 className="vertical-timeline-element-title">A Jornada nas Terras Austrais da Nova Zelândia</h3>
            <h4 className="vertical-timeline-element-subtitle">Queenstown, Otago, Nova Zelândia</h4>
            <p>
              Anos de atuação em ambiente multicultural neozelandês com padrões internacionais de excelência, liderança operacional de equipes e resiliência sob condições desafiadoras.
            </p>
          </VerticalTimelineElement>

          {/* 5. Fooderoza */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#121824', color: '#fff', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 10px 30px rgba(0,0,0,0.4)' }}
            contentArrowStyle={{ borderRight: '8px solid #121824' }}
            date="2018 - 2019 · O Feudo Comercial"
            iconStyle={{ background: '#f97316', color: '#fff', boxShadow: '0 0 0 4px rgba(249, 115, 22, 0.4)' }}
            icon={<LocalDiningIcon />}
          >
            <div className="lotr-timeline-seal seal-orange">COMÉRCIO &amp; VENDAS</div>
            <h3 className="vertical-timeline-element-title">Proprietário &amp; Gestor Comercial · Pizzaria Fooderoza</h3>
            <h4 className="vertical-timeline-element-subtitle">Natal, RN, Brasil</h4>
            <p>
              Operação completa de negócio gastronômico: atração de clientes, marketing local, controle financeiro rigoroso, precificação de produtos e negociação com fornecedores.
            </p>
          </VerticalTimelineElement>

          {/* 6. EcoPraça */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#121824', color: '#fff', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 10px 30px rgba(0,0,0,0.4)' }}
            contentArrowStyle={{ borderRight: '8px solid #121824' }}
            date="2013 - 2018 · A Chama da Mobilização"
            iconStyle={{ background: '#14b8a6', color: '#fff', boxShadow: '0 0 0 4px rgba(20, 184, 166, 0.4)' }}
            icon={<GrassIcon />}
          >
            <div className="lotr-timeline-seal seal-teal">IMPACTO COLETIVO</div>
            <h3 className="vertical-timeline-element-title">Coordenador de Produção &amp; Parcerias · EcoPraça</h3>
            <h4 className="vertical-timeline-element-subtitle">Natal, RN, Brasil</h4>
            <p>
              Produção de grandes eventos sustentáveis que reuniram dezenas de milhares de pessoas, articulação comunitária e captação de patrocínios em larga escala.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </section>
  );
};
