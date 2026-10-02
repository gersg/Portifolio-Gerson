import React from 'react';
import SpaIcon from '@mui/icons-material/Spa';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import tatuilogo from '../../assets/images/tatuilogo.png';

export const LotrSobreMim: React.FC = () => {
  return (
    <section className="lotr-section lotr-shire-section" id="condado">
      <div className="lotr-inner-container">
        
        {/* Section Header */}
        <div className="lotr-section-title-wrap">
          <span className="lotr-gold-kicker">
            <SpaIcon sx={{ fontSize: 16, mr: 0.6 }} /> O Condado · As Origens &amp; O Chamado da Aventura
          </span>
          <h2 className="lotr-section-heading">Sobre Mim &amp; A Sabedoria dos 38 Anos</h2>
          <p className="lotr-section-lead">
            Da liderança sociocultural de grandes massas à maestria da engenharia de software e da estratégia de negócios.
          </p>
          <div className="lotr-rune-divider">✦ ─── ❖ ─── ✦</div>
        </div>

        {/* Narrative Grid */}
        <div className="lotr-shire-grid">
          
          {/* Main Story Parchment */}
          <div className="lotr-parchment-scroll">
            <div className="scroll-ornament-top"></div>
            
            <h3 className="scroll-heading">
              A Jornada do Herói: Da Liderança Humana à Forja Digital
            </h3>

            <p className="scroll-paragraph">
              Assim como os grandes viajantes de Tolkien que deixaram a tranquilidade do Condado diante de uma missão maior, 
              aos 38 anos canalizei duas décadas de bagagem em gestão e liderança para o epicentro da tecnologia. 
              Não foi um mero desvio de rota, mas o encontro inevitável entre <strong>visão holística de negócios</strong>, 
              <strong>inteligência emocional</strong> e a <strong>Engenharia de Software</strong>.
            </p>

            <p className="scroll-paragraph">
              Minha trajetória anterior forjou meu caráter: liderei e co-fundei projetos de enorme impacto sociocultural no Brasil 
              (como o <em>Projeto EcoPraça</em> e o <em>Instituto Ancestral</em>), gerenciando orçamentos expressivos, 
              negociando parcerias com o setor público e privado e guiando centenas de pessoas. 
              Posteriormente, na Nova Zelândia, enfrentei desafios em ambiente multicultural de padrão rigoroso, 
              adquirindo uma resiliência inabalável diante de qualquer adversidade.
            </p>

            {/* The Sacred Triad (Vendas, Marketing e Sistemas) */}
            <div className="lotr-triad-box">
              <div className="triad-glow-title">
                <span>⚡ A Tríade da Terra-média</span>
                <h4>Por que Unir Vendas, Marketing e Desenvolvimento de Sistemas?</h4>
              </div>
              <p className="triad-intro">
                "Nas batalhas do mercado moderno, um código sem estratégia comercial é uma espada sem guerreiro; 
                e uma equipe de vendas sem sistemas eficientes é um exército desarmado."
              </p>

              <div className="triad-cards-row">
                <div className="triad-pillar-card">
                  <div className="pillar-header">
                    <TrendingUpIcon className="pillar-icon gold" />
                    <strong>Vendas B2B &amp; Consultivas</strong>
                  </div>
                  <p>Mapeamento cirúrgico das dores do cliente, precificação de alto valor, negociação estratégica e compromisso inegociável com o ROI.</p>
                </div>

                <div className="triad-pillar-card">
                  <div className="pillar-header">
                    <PsychologyIcon className="pillar-icon mithril" />
                    <strong>Marketing &amp; Funis Digitais</strong>
                  </div>
                  <p>Construção de jornadas de atração irresistíveis, copywriting persuasivo, nutrição automatizada e alta taxa de conversão.</p>
                </div>

                <div className="triad-pillar-card">
                  <div className="pillar-header">
                    <CodeIcon className="pillar-icon emerald" />
                    <strong>Engenharia de Sistemas</strong>
                  </div>
                  <p>Aplicações modernas em React e Next.js, APIs robustas com Node.js/NestJS, modelagem blindada em PostgreSQL e inteligência artificial.</p>
                </div>
              </div>
            </div>

            {/* TATUi TECH & Konnekti Spotlight */}
            <div className="lotr-citadel-card">
              <div className="citadel-header">
                <img src={tatuilogo} alt="TATUi TECH" className="citadel-crest" />
                <div>
                  <span className="citadel-sub">A CIDADELA &amp; O ARTEFATO MESTRE</span>
                  <h4 className="citadel-name">TATUi TECH &amp; Plataforma Konnekti</h4>
                </div>
              </div>
              <p className="citadel-desc">
                Inspirada na carapaça impenetrável e na adaptabilidade biológica do tatu, a <strong>TATUi TECH</strong> é a 
                software house e estúdio de inovação fundado por Gerson Espíndola. Sua principal relíquia é o <strong>Konnekti</strong>: 
                uma plataforma SaaS inteligente que unifica canais de atração, automações no WhatsApp, CRM e esteiras de vendas em um fluxo harmonioso, 
                eliminando gargalos e multiplicando a receita de empresas parceiras.
              </p>
            </div>

          </div>

          {/* Side Attributes & Milestones */}
          <div className="lotr-shire-sidebar">
            <div className="shire-stat-box">
              <div className="stat-glow-number">38 Anos</div>
              <div className="stat-title">Maturidade &amp; Sabedoria</div>
              <p>Capacidade inata de decifrar problemas complexos, mediar conflitos e tomar decisões sob fogo cruzado.</p>
            </div>

            <div className="shire-stat-box">
              <div className="stat-glow-number">1º Lugar</div>
              <div className="stat-title">NASA Space Apps 2024</div>
              <p>Vencedor regional e indicado à avaliação global da maior maratona de exploração científica do planeta.</p>
            </div>

            <div className="shire-stat-box">
              <div className="stat-glow-number">2º Lugar</div>
              <div className="stat-title">Hackathon INEP (Zonia)</div>
              <p>Criação do sistema IoT de sensores infravermelhos para proteção das florestas contra desmatamento.</p>
            </div>

            <div className="shire-stat-box">
              <div className="stat-glow-number">Global</div>
              <div className="stat-title">Vivência Internacional</div>
              <p>Anos de experiência na Nova Zelândia, refinando resiliência, rigor de qualidade e comunicação fluida.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
