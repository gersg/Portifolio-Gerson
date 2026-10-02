import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faTrophy, faBuilding, faGlobe, faUtensils, faLeaf } from '@fortawesome/free-solid-svg-icons'; 
import {
  VerticalTimeline as _VerticalTimeline,
  VerticalTimelineElement as _VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

const VerticalTimeline = _VerticalTimeline as unknown as React.ComponentType<any>;
const VerticalTimelineElement = _VerticalTimelineElement as unknown as React.ComponentType<any>;

function Timeline() {
  return (
    <section className="timeline-section" id="history">
      <div className="timeline-container">
        
        {/* Section Header */}
        <div className="section-title-wrap">
          <span className="section-eyebrow">Histórico &amp; Marcos</span>
          <h2 className="section-main-heading">Minha Trajetória Profissional</h2>
          <p className="section-lead-text">
            Uma carreira construída com liderança de projetos, empreendedorismo, vivência internacional e foco em tecnologia de alto impacto.
          </p>
          <div className="section-divider-line"></div>
        </div>

        <VerticalTimeline animate={true}>

          {/* 1. TATUi TECH & Konnekti */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#1c2331', color: '#fff', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}
            contentArrowStyle={{ borderRight: '7px solid #1c2331' }}
            date="2024 - Presente"
            iconStyle={{ background: '#6366f1', color: '#fff', boxShadow: '0 0 0 4px rgba(99, 102, 241, 0.25)' }}
            icon={<FontAwesomeIcon icon={faRocket} />}
          >
            <div className="timeline-badge-tag highlight-badge">EMPRESA &amp; TECNOLOGIA</div>
            <h3 className="vertical-timeline-element-title">Fundador &amp; Full Stack Lead · TATUi TECH &amp; Konnekti</h3>
            <h4 className="vertical-timeline-element-subtitle">Natal, RN, Brasil · Híbrido</h4>
            <p>
              Fundação da <strong>TATUi TECH</strong> (empresa de tecnologia e soluções sob medida) e idealização do ecossistema <strong>Konnekti</strong> (SaaS integrando vendas, automações e CRM). Condução de ponta a ponta: desde arquitetura e desenvolvimento de software até prospecção comercial, negociação com clientes e estruturação de funis digitais.
            </p>
          </VerticalTimelineElement>

          {/* 2. Hackathons de Elite & Premiações */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#1c2331', color: '#fff', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}
            contentArrowStyle={{ borderRight: '7px solid #1c2331' }}
            date="2024 - 2025"
            iconStyle={{ background: '#eab308', color: '#000', boxShadow: '0 0 0 4px rgba(234, 179, 8, 0.25)' }}
            icon={<FontAwesomeIcon icon={faTrophy} />}
          >
            <div className="timeline-badge-tag award-badge">PREMIAÇÕES &amp; RECONHECIMENTO</div>
            <h3 className="vertical-timeline-element-title">Destaque em Hackathons Nacionais e Globais</h3>
            <h4 className="vertical-timeline-element-subtitle">NASA Space Apps · Hackathon INEP · Campus Party Goiás</h4>
            <p>
              • <strong>1º Lugar Local e Global Nominee</strong> no <em>NASA Space Apps Challenge 2024</em> com a ferramenta de bio-pesquisa espacial NASA Parts.<br/>
              • <strong>2º Lugar</strong> no <em>Hackathon Impulso Regional INEP 2024</em> criando o sistema Zonia (hardware IoT + alertas em tempo real).<br/>
              • Desenvolvimento sob intensa pressão, prototipagem ágil em tempo recorde e pitchs de alto poder de persuasão.
            </p>
          </VerticalTimelineElement>

          {/* 3. Instituto Ancestral */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#1c2331', color: '#fff', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}
            contentArrowStyle={{ borderRight: '7px solid #1c2331' }}
            date="abr de 2022 - jan de 2024 · 1 ano 10 meses"
            iconStyle={{ background: '#3b82f6', color: '#fff', boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.25)' }}
            icon={<FontAwesomeIcon icon={faBuilding} />}
          >
            <div className="timeline-badge-tag neutral-badge">GESTÃO ESTRATÉGICA</div>
            <h3 className="vertical-timeline-element-title">Co-fundador &amp; Gestor · Instituto Ancestral</h3>
            <h4 className="vertical-timeline-element-subtitle">Natal, RN, Brasil</h4>
            <p>
              Planejamento e execução de projetos de grande escala socioambiental e cultural. Construção de alianças institucionais com poder público e empresas privadas, gestão de recursos financeiros e liderança de equipes multidisciplinares.
            </p>
          </VerticalTimelineElement>

          {/* 4. Experiência Internacional na Nova Zelândia */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#1c2331', color: '#fff', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}
            contentArrowStyle={{ borderRight: '7px solid #1c2331' }}
            date="2019 - 2022 · 3 anos"
            iconStyle={{ background: '#10b981', color: '#fff', boxShadow: '0 0 0 4px rgba(16, 185, 129, 0.25)' }}
            icon={<FontAwesomeIcon icon={faGlobe} />}
          >
            <div className="timeline-badge-tag neutral-badge">VIVÊNCIA INTERNACIONAL</div>
            <h3 className="vertical-timeline-element-title">Carreira Internacional &amp; Resiliência Operacional</h3>
            <h4 className="vertical-timeline-element-subtitle">Queenstown, Otago, Nova Zelândia</h4>
            <p>
              Atuação em funções de alta exigência física, liderança de equipes operacionais e gastronomia de alto padrão. Imersão em ambiente multicultural de padrão neozelandês, fortalecendo fluência de comunicação, resiliência extrema e rigor em controle de processos e qualidade.
            </p>
          </VerticalTimelineElement>

          {/* 5. Fooderoza */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#1c2331', color: '#fff', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}
            contentArrowStyle={{ borderRight: '7px solid #1c2331' }}
            date="abr de 2018 - fev de 2019"
            iconStyle={{ background: '#f97316', color: '#fff', boxShadow: '0 0 0 4px rgba(249, 115, 22, 0.25)' }}
            icon={<FontAwesomeIcon icon={faUtensils} />}
          >
            <div className="timeline-badge-tag neutral-badge">EMPREENDEDORISMO &amp; VENDAS</div>
            <h3 className="vertical-timeline-element-title">Proprietário &amp; Gestor Comercial · Pizzaria Fooderoza</h3>
            <h4 className="vertical-timeline-element-subtitle">Natal, RN, Brasil</h4>
            <p>
              Gestão de ponta a ponta do negócio gastronômico: atração de clientes, marketing local, controle de fluxo de caixa, precificação de produtos e negociação com fornecedores.
            </p>
          </VerticalTimelineElement>

          {/* 6. EcoPraça */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#1c2331', color: '#fff', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}
            contentArrowStyle={{ borderRight: '7px solid #1c2331' }}
            date="fev de 2013 - jun de 2018 · 5 anos"
            iconStyle={{ background: '#14b8a6', color: '#fff', boxShadow: '0 0 0 4px rgba(20, 184, 166, 0.25)' }}
            icon={<FontAwesomeIcon icon={faLeaf} />}
          >
            <div className="timeline-badge-tag neutral-badge">IMPACTO &amp; ARTICULAÇÃO</div>
            <h3 className="vertical-timeline-element-title">Coordenador de Produção &amp; Parcerias · EcoPraça</h3>
            <h4 className="vertical-timeline-element-subtitle">Natal, RN, Brasil</h4>
            <p>
              Coordenação de eventos sustentáveis com público de milhares de pessoas, articulação comunitária, captação de patrocínios e projeção do projeto como referência nacional em responsabilidade socioambiental.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Timeline;
