import React from 'react';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CodeIcon from '@mui/icons-material/Code';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PublicIcon from '@mui/icons-material/Public';
import tatuilogo from '../assets/images/tatuilogo.png';
import '../assets/styles/Sobremim.scss';

function SobreMim() {
  return (
    <section className="about-me-section" id="sobremim">
      <div className="about-me-container">
        
        {/* Section Header */}
        <div className="section-title-wrap">
          <span className="section-eyebrow">Trajetória, Negócios &amp; Engenharia</span>
          <h2 className="section-main-heading">Sobre Mim</h2>
          <div className="section-divider-line"></div>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="about-narrative-grid">
          {/* Main Story Column */}
          <div className="about-story-col">
            <h3 className="story-subtitle">
              Minha Jornada na Tecnologia: Da Liderança Estratégica à Inovação Digital
            </h3>

            <p>
              Aos 38 anos, decidi canalizar minha bagagem de liderança e visão estratégica para o universo da tecnologia. 
              Não foi uma mudança repentina, mas a evolução natural de uma trajetória que une <strong>visão de negócios</strong>, 
              <strong>gestão de pessoas</strong> e agora <strong>Engenharia de Software</strong> para conceber e executar projetos com real impacto econômico e social.
            </p>

            <p>
              Minha experiência anterior inclui a fundação e coordenação de grandes iniciativas socioculturais e ambientais no Brasil 
              (como o <em>Projeto EcoPraça</em> e o <em>Instituto Ancestral</em>), com gestão de orçamentos, negociações com patrocinadores 
              e liderança de times multidisciplinares. Complementei essa vivência com anos de experiência internacional na Nova Zelândia, 
              o que consolidou minha resiliência, capacidade de rápida adaptação e padrão de excelência sob pressão.
            </p>

            {/* The Unified Triad: Sales + Marketing + Systems */}
            <div className="triad-highlight-box">
              <h4 className="triad-title">
                <LightbulbIcon sx={{ color: '#818cf8', mr: 1, verticalAlign: 'middle' }} />
                O Diferencial: A União de Vendas, Marketing e Desenvolvimento
              </h4>
              <p>
                Raramente um projeto de software falha por limitações puramente técnicas; a maioria fracassa por desalinhamento com o mercado, 
                ausência de funis eficazes de aquisição ou dificuldade de comunicação entre tecnologia e vendas.
              </p>
              <div className="triad-pillars">
                <div className="triad-card">
                  <div className="triad-card-header">
                    <TrendingUpIcon className="triad-icon" />
                    <strong>Vendas B2B &amp; Consultivas</strong>
                  </div>
                  <p>Mapeamento de dores do cliente, precificação orientada a valor, negociação estratégica e foco no retorno sobre o investimento (ROI).</p>
                </div>

                <div className="triad-card">
                  <div className="triad-card-header">
                    <PsychologyIcon className="triad-icon" />
                    <strong>Marketing &amp; Funis Digitais</strong>
                  </div>
                  <p>Estruturação de jornadas de compra, captação qualificada, automações de lead nurturing e copywriting de alta conversão.</p>
                </div>

                <div className="triad-card">
                  <div className="triad-card-header">
                    <CodeIcon className="triad-icon" />
                    <strong>Engenharia de Sistemas</strong>
                  </div>
                  <p>Desenvolvimento full stack (React, Node.js, Next.js, PostgreSQL), APIs seguras, automações em nuvem e inteligência artificial aplicada.</p>
                </div>
              </div>
            </div>

            {/* Company & Product Section */}
            <div className="tatui-konnekti-spotlight">
              <div className="spotlight-badge">EMPREENDIMENTO EM TECNOLOGIA</div>
              <div className="spotlight-content">
                <div className="spotlight-brand">
                  <img src={tatuilogo} alt="Logo TATUi TECH" className="tatui-logo-small" />
                  <div>
                    <h4>TATUi TECH &amp; Plataforma Konnekti</h4>
                    <span>Inovação que se adapta · Soluções que transformam</span>
                  </div>
                </div>
                <p>
                  A <strong>TATUi TECH</strong> é a software house e estúdio de inovação que fundei para criar produtos sob medida e escaláveis. 
                  Inspirada na adaptabilidade e resistência natural do tatu, a empresa tem como principal produto o <strong>Konnekti</strong>: 
                  uma plataforma SaaS desenvolvida para integrar marketing, fluxos de atendimento inteligente, automações de vendas e CRM unificado, 
                  eliminando gargalos operacionais e acelerando o faturamento de negócios modernos.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Metrics & Pillars Sidebar */}
          <div className="about-stats-col">
            <div className="stats-card">
              <div className="stat-number">38+</div>
              <div className="stat-label">Anos de Vida &amp; Maturidade Profissional</div>
              <p className="stat-desc">Resolução de problemas complexos com calma, inteligência emocional e visão holística.</p>
            </div>

            <div className="stats-card">
              <div className="stat-number">1º Lugar</div>
              <div className="stat-label">NASA Space Apps 2024</div>
              <p className="stat-desc">Destaque na maior maratona de inovação do mundo com solução para bio-experimentos espaciais.</p>
            </div>

            <div className="stats-card">
              <div className="stat-number">2º Lugar</div>
              <div className="stat-label">Hackathon INEP 2024</div>
              <p className="stat-desc">Criação do projeto Zonia: hardware IoT e alertas em tempo real contra desmatamento.</p>
            </div>

            <div className="stats-card">
              <div className="stat-number">Global</div>
              <div className="stat-label">Visão Internacional</div>
              <p className="stat-desc">Anos de atuação no exterior (Nova Zelândia), vivência intercultural e comunicação fluida.</p>
            </div>

            <div className="about-principles-box">
              <h4>Pilares de Atuação</h4>
              <ul className="principles-list">
                <li>
                  <Diversity3Icon className="principle-icon" />
                  <div>
                    <strong>Foco no Cliente</strong>
                    <span>Tecnologia desenhada para servir ao usuário final e à sustentabilidade do negócio.</span>
                  </div>
                </li>
                <li>
                  <BusinessCenterIcon className="principle-icon" />
                  <div>
                    <strong>Entrega Orientada a Resultados</strong>
                    <span>Menos vaidade de código, mais eficiência, velocidade e métricas mensuráveis.</span>
                  </div>
                </li>
                <li>
                  <PublicIcon className="principle-icon" />
                  <div>
                    <strong>Ética &amp; Responsabilidade</strong>
                    <span>Compromisso socioambiental e transparência radical em cada linha de código.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default SobreMim;
