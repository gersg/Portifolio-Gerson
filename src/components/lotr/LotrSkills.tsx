import React from "react";
import CastleIcon from '@mui/icons-material/Castle';
import CodeIcon from '@mui/icons-material/Code';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PsychologyIcon from '@mui/icons-material/Psychology';

const systemsSkills = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Express.js",
  "NestJS",
  "PostgreSQL",
  "Prisma ORM",
  "JavaScript ES6+",
  "HTML5 & CSS3",
  "SASS / SCSS",
  "Tailwind CSS",
  "RESTful APIs",
  "GraphQL",
  "Git & GitHub"
];

const salesSkills = [
  "Funis de Vendas",
  "Automação de CRM",
  "Inbound & Outbound",
  "Estratégia Go-To-Market",
  "Qualificação de Leads",
  "Copywriting Persuasivo",
  "Métricas (CAC, LTV, ROI)",
  "Negociação B2B",
  "Landing Pages de Conversão",
  "Fechamento Consultivo"
];

const flowSkills = [
  "Flow Digital & Workflows",
  "n8n & Zapier",
  "Webhooks & Integrações",
  "Google Gemini API",
  "Agentes Autônomos de IA",
  "Python",
  "Pandas & NumPy",
  "Hugging Face",
  "Mistral AI",
  "Chatbots Inteligentes"
];

export const LotrSkills: React.FC = () => {
  return (
    <section className="lotr-section lotr-rivendell-section" id="valfenda">
      <div className="lotr-inner-container">
        
        {/* Section Header */}
        <div className="lotr-section-title-wrap">
          <span className="lotr-gold-kicker">
            <CastleIcon sx={{ fontSize: 16, mr: 0.6 }} /> Valfenda · O Conselho de Elrond
          </span>
          <h2 className="lotr-section-heading">Grimórios &amp; Habilidades Lendárias</h2>
          <p className="lotr-section-lead">
            As três artes que sustentam a Sociedade do Código: arquitetura de software, liderança de vendas e automações inteligentes.
          </p>
          <div className="lotr-rune-divider">✦ ─── ❖ ─── ✦</div>
        </div>

        {/* 3 Grimoire Spell Cards */}
        <div className="lotr-grimoire-grid">
          
          {/* Card 1: Systems Engineering */}
          <div className="lotr-grimoire-card elven-spell">
            <div className="grimoire-header">
              <div className="grimoire-icon-circle blue">
                <CodeIcon sx={{ fontSize: 32 }} />
              </div>
              <div>
                <span className="grimoire-discipline">DISCIPLINA I · ENGENHARIA</span>
                <h3 className="grimoire-title">Desenvolvimento de Sistemas</h3>
              </div>
            </div>

            <p className="grimoire-lore">
              Forjando aplicações web modernas, responsivas e inquebráveis. Domínio completo de interfaces dinâmicas com React e Next.js, 
              arquitetura de microsserviços seguros com Node.js e NestJS, além de modelagem relacional blindada com PostgreSQL e Prisma.
            </p>

            <div className="grimoire-spells-list">
              <span className="spells-subheading">Feitiços &amp; Ferramentas Técnicas:</span>
              <div className="runic-tags-cloud">
                {systemsSkills.map((skill, idx) => (
                  <span key={idx} className="rune-pill blue">{skill}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Sales & Strategy */}
          <div className="lotr-grimoire-card royal-spell">
            <div className="grimoire-header">
              <div className="grimoire-icon-circle gold">
                <TrendingUpIcon sx={{ fontSize: 32 }} />
              </div>
              <div>
                <span className="grimoire-discipline">DISCIPLINA II · DIPLOMACIA &amp; NEGÓCIOS</span>
                <h3 className="grimoire-title">Vendas &amp; Marketing Digital</h3>
              </div>
            </div>

            <p className="grimoire-lore">
              A maestria de transformar visitantes em aliados pagantes. Estruturação de funis de alta conversão, automações de CRM, 
              estratégias Go-to-Market e negociações de contratos corporativos orientadas ao retorno sobre investimento (ROI).
            </p>

            <div className="grimoire-spells-list">
              <span className="spells-subheading">Estratégias &amp; Conquistas Comerciais:</span>
              <div className="runic-tags-cloud">
                {salesSkills.map((skill, idx) => (
                  <span key={idx} className="rune-pill gold">{skill}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Flow Digital & AI */}
          <div className="lotr-grimoire-card mystic-spell">
            <div className="grimoire-header">
              <div className="grimoire-icon-circle purple">
                <PsychologyIcon sx={{ fontSize: 32 }} />
              </div>
              <div>
                <span className="grimoire-discipline">DISCIPLINA III · ALQUIMIA &amp; DADOS</span>
                <h3 className="grimoire-title">Flow Digital &amp; IA Aplicada</h3>
              </div>
            </div>

            <p className="grimoire-lore">
              Conectando reinos digitais sem atrito. Criação de esteiras no n8n e webhooks que orquestram tráfego, 
              atendimento automatizado no WhatsApp e agentes autônomos com a API do Google Gemini para triagem de leads 24/7.
            </p>

            <div className="grimoire-spells-list">
              <span className="spells-subheading">Modelos &amp; Automações Conectadas:</span>
              <div className="runic-tags-cloud">
                {flowSkills.map((skill, idx) => (
                  <span key={idx} className="rune-pill purple">{skill}</span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
