import React from "react";
import CodeIcon from '@mui/icons-material/Code';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PsychologyIcon from '@mui/icons-material/Psychology';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const techFullStack = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Express.js",
  "NestJS",
  "PostgreSQL",
  "Prisma ORM",
  "JavaScript",
  "HTML5 / CSS3",
  "SASS",
  "Tailwind CSS",
  "REST APIs",
  "GraphQL",
  "Git & GitHub"
];

const techSalesMarketing = [
  "Funis de Vendas",
  "Automação de CRM",
  "Inbound & Outbound",
  "Estratégia Go-To-Market",
  "Qualificação de Leads (BANT/SPIN)",
  "Copywriting Persuasivo",
  "Métricas (CAC, LTV, ROI)",
  "Negociação B2B",
  "Tráfego Pago & Conversão",
  "Landing Pages de Alta Conversão",
  "Customer Success"
];

const techFlowAI = [
  "Flow Digital & Workflows",
  "n8n & Zapier",
  "Webhooks & Integrações",
  "Google Gemini API",
  "Agentes Inteligentes de IA",
  "Python",
  "Pandas & NumPy",
  "Hugging Face Transformers",
  "Mistral AI",
  "Chatbots Conversacionais",
  "scikit-learn",
  "Arquitetura de Dados"
];

function Expertise() {
  return (
    <section className="expertise-section" id="expertise">
      <div className="expertise-container">
        
        {/* Section Header */}
        <div className="section-title-wrap">
          <span className="section-eyebrow">Domínios de Atuação</span>
          <h2 className="section-main-heading">Habilidades &amp; Competências</h2>
          <p className="section-lead-text">
            A convergência entre técnica, visão comercial e automação inteligente para acelerar o crescimento de produtos digitais.
          </p>
          <div className="section-divider-line"></div>
        </div>

        {/* 3 Main Pillars Grid */}
        <div className="expertise-cards-grid">
          
          {/* Card 1: Full Stack Systems */}
          <div className="expertise-card">
            <div className="expertise-card-header">
              <div className="icon-wrapper tech-color">
                <CodeIcon sx={{ fontSize: 32 }} />
              </div>
              <div>
                <span className="card-kicker">Engenharia de Software</span>
                <h3 className="card-title">Desenvolvimento de Sistemas</h3>
              </div>
            </div>
            
            <p className="card-description">
              Criação de aplicações web modernas, responsivas e escaláveis do zero ao deploy. Domínio completo de front-end dinâmico com React e Next.js, arquitetura de APIs robustas com Node.js e NestJS, além de modelagem relacional segura com PostgreSQL e Prisma. Foco contínuo em boas práticas, tipagem estrita com TypeScript e manutenibilidade de código.
            </p>

            <div className="card-chips-section">
              <span className="chips-label">Tecnologias &amp; Ferramentas:</span>
              <div className="chips-flex">
                {techFullStack.map((tech, idx) => (
                  <Chip key={idx} label={tech} className="skill-chip" size="small" />
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Sales & Marketing */}
          <div className="expertise-card">
            <div className="expertise-card-header">
              <div className="icon-wrapper sales-color">
                <TrendingUpIcon sx={{ fontSize: 32 }} />
              </div>
              <div>
                <span className="card-kicker">Negócios &amp; Crescimento</span>
                <h3 className="card-title">Vendas &amp; Marketing Digital</h3>
              </div>
            </div>
            
            <p className="card-description">
              Estratégias orientadas a geração de receita, tração de mercado e aquisição previsível de clientes. Estruturação de funis de vendas completos, pipelines de CRM, automações de nutrição e processos comerciais consultivos. Habilidade em traduzir requisitos complexos de negócio em soluções de tecnologia que convertem visitantes em clientes pagantes.
            </p>

            <div className="card-chips-section">
              <span className="chips-label">Metodologias &amp; Habilidades:</span>
              <div className="chips-flex">
                {techSalesMarketing.map((tech, idx) => (
                  <Chip key={idx} label={tech} className="skill-chip" size="small" />
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Flow Digital & AI */}
          <div className="expertise-card">
            <div className="expertise-card-header">
              <div className="icon-wrapper ai-color">
                <PsychologyIcon sx={{ fontSize: 32 }} />
              </div>
              <div>
                <span className="card-kicker">Automação &amp; Dados</span>
                <h3 className="card-title">Flow Digital &amp; IA Aplicada</h3>
              </div>
            </div>
            
            <p className="card-description">
              Desenvolvimento de fluxos automatizados inteligentes conectando sistemas, CRMs, canais de atendimento e bases de dados. Aplicação prática de Inteligência Artificial com LLMs (Google Gemini, Mistral) para enriquecimento de dados, suporte automatizado e processamento de linguagem natural. Análise quantitativa com ecossistema Python (Pandas e NumPy).
            </p>

            <div className="card-chips-section">
              <span className="chips-label">Plataformas &amp; Modelos:</span>
              <div className="chips-flex">
                {techFlowAI.map((tech, idx) => (
                  <Chip key={idx} label={tech} className="skill-chip" size="small" />
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Expertise;
