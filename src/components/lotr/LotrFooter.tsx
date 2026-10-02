import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import SailingIcon from '@mui/icons-material/Sailing';
import tatuilogo from '../../assets/images/tatuilogo.png';
import { lotrAudio } from "../../utils/lotrAudio";

export const LotrFooter: React.FC = () => {
  const scrollToTop = () => {
    lotrAudio.playRuneClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="lotr-footer-section" id="alianca">
      <div className="lotr-footer-glow-bar"></div>
      
      <div className="lotr-footer-container">
        
        {/* Brand & Lore Column */}
        <div className="lotr-footer-brand-col">
          <div className="footer-citadel-lockup">
            <img src={tatuilogo} alt="TATUi TECH" className="footer-citadel-logo" />
            <div>
              <span className="footer-kicker">CIDADELA DIGITAL</span>
              <h3 className="footer-brand-title">TATUi TECH</h3>
              <p className="footer-motto">Inovação que se adapta · Soluções que transformam</p>
            </div>
          </div>
          
          <p className="footer-lore-summary">
            Desenvolvido por <strong>Gerson Espíndola</strong> — Mago Full Stack, 
            Especialista em Automação Comercial &amp; Flow Digital. Unindo o rigor da engenharia 
            de software e a diplomacia das vendas corporativas para erguer fortalezas digitais inabaláveis.
          </p>
        </div>

        {/* Quick Travel Nav */}
        <div className="lotr-footer-nav-col">
          <h4 className="footer-section-title">
            <SailingIcon sx={{ fontSize: 18, mr: 0.6 }} /> Reinos da Terra-média
          </h4>
          <ul className="footer-reigns-list">
            <li><a href="#hero">O Um Anel &amp; Início</a></li>
            <li><a href="#condado">O Condado (Sobre Mim)</a></li>
            <li><a href="#valfenda">Valfenda (Grimórios &amp; Skills)</a></li>
            <li><a href="#batalhas">Minas Tirith (Trajetória &amp; Batalhas)</a></li>
            <li><a href="#artefatos">A Montanha da Perdição (Artefatos)</a></li>
            <li><a href="#dados">O Oráculo de Gandalf (d20)</a></li>
          </ul>
        </div>

        {/* Mensageiros Reais / Socials */}
        <div className="lotr-footer-social-col">
          <h4 className="footer-section-title">Mensageiros do Reino</h4>
          <div className="footer-runes-grid">
            <a
              href="https://www.linkedin.com/in/gersg/"
              target="_blank"
              rel="noreferrer"
              className="footer-rune-box"
              title="LinkedIn"
            >
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://www.instagram.com/gersg.dev/"
              target="_blank"
              rel="noreferrer"
              className="footer-rune-box"
              title="Instagram Profissional"
            >
              <InstagramIcon />
              <span>@gersg.dev</span>
            </a>

            <a
              href="https://www.instagram.com/tatuitech/"
              target="_blank"
              rel="noreferrer"
              className="footer-rune-box"
              title="Instagram da TATUi TECH"
            >
              <InstagramIcon />
              <span>@tatuitech</span>
            </a>

            <a
              href="https://github.com/gersg"
              target="_blank"
              rel="noreferrer"
              className="footer-rune-box"
              title="GitHub"
            >
              <GitHubIcon />
              <span>GitHub</span>
            </a>

            <a
              href="https://wa.me/5584988081234?text=Ol%C3%A1%20Gerson!%20Vim%20pelo%20seu%20portf%C3%B3lio%20gamificado%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
              target="_blank"
              rel="noreferrer"
              className="footer-rune-box whatsapp-gold"
              title="WhatsApp Direto"
            >
              <WhatsAppIcon />
              <span>WhatsApp Direto</span>
            </a>

            <a
              href="mailto:gersgdev@gmail.com"
              className="footer-rune-box"
              title="E-mail"
            >
              <EmailIcon />
              <span>gersgdev@gmail.com</span>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="lotr-footer-bottom-bar">
        <div className="footer-bottom-inner">
          <p className="copyright-inscription">
            © {new Date().getFullYear()} <strong>TATUi TECH</strong> · Gerson Espíndola. 
            Forjado com honra sob as bênçãos dos Valar e o poder do código livre.
          </p>

          <button onClick={scrollToTop} className="lotr-ascend-btn" title="Voltar ao início da jornada">
            <span>Ascender ao Início</span>
            <ArrowUpwardIcon sx={{ fontSize: 16 }} />
          </button>
        </div>
      </div>
    </footer>
  );
};
