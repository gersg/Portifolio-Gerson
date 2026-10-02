import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import logotatuiImage from '../assets/images/tatuilogo.png'; 
import '../assets/styles/Footer.scss'; 

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="main-site-footer">
      <div className="footer-top-accent"></div>
      <div className="footer-inner-container">
        
        <div className="footer-brand-column">
          <div className="footer-logo-wrapper">
            <img src={logotatuiImage} alt="Logo TATUi TECH" className="footer-brand-logo" />
            <div className="footer-brand-text">
              <h3>TATUi TECH</h3>
              <span>Inovação que se adapta · Soluções que transformam</span>
            </div>
          </div>
          <p className="footer-brand-summary">
            Desenvolvido por <strong>Gerson Espíndola</strong> — Desenvolvedor Full Stack, 
            Especialista em Automação de Vendas &amp; Flow Digital. Unindo tecnologia de ponta 
            e estratégias comerciais para construir produtos digitais de alta performance.
          </p>
        </div>

        <div className="footer-links-column">
          <h4 className="footer-col-title">Navegação Rápida</h4>
          <ul className="footer-nav-list">
            <li><a href="#sobremim">Sobre Mim</a></li>
            <li><a href="#expertise">Habilidades &amp; Competências</a></li>
            <li><a href="#history">Trajetória Profissional</a></li>
            <li><a href="#projects">Projetos &amp; Inovações</a></li>
          </ul>
        </div>

        <div className="footer-contact-column">
          <h4 className="footer-col-title">Canais &amp; Conexão</h4>
          <div className="footer-social-links-grid">
            <a
              href="https://www.linkedin.com/in/gersg/"
              target="_blank"
              rel="noreferrer"
              className="footer-social-btn"
              title="LinkedIn de Gerson Espíndola"
            >
              <LinkedInIcon /> <span>LinkedIn</span>
            </a>

            <a
              href="https://www.instagram.com/gersg.dev/"
              target="_blank"
              rel="noreferrer"
              className="footer-social-btn"
              title="Instagram Profissional (@gersg.dev)"
            >
              <InstagramIcon /> <span>@gersg.dev</span>
            </a>

            <a
              href="https://www.instagram.com/tatuitech/"
              target="_blank"
              rel="noreferrer"
              className="footer-social-btn"
              title="Instagram TATUi TECH (@tatuitech)"
            >
              <InstagramIcon /> <span>@tatuitech</span>
            </a>

            <a
              href="https://github.com/gersg"
              target="_blank"
              rel="noreferrer"
              className="footer-social-btn"
              title="GitHub gersg"
            >
              <GitHubIcon /> <span>GitHub</span>
            </a>

            <a
              href="https://wa.me/5584988081234?text=Ol%C3%A1%20Gerson,%20vim%20pelo%20seu%20portf%C3%B3lio!"
              target="_blank"
              rel="noreferrer"
              className="footer-social-btn whatsapp-highlight"
              title="Conversar no WhatsApp"
            >
              <WhatsAppIcon /> <span>WhatsApp Direto</span>
            </a>

            <a
              href="mailto:gersgdev@gmail.com"
              className="footer-social-btn"
              title="Enviar e-mail para gersgdev@gmail.com"
            >
              <EmailIcon /> <span>gersgdev@gmail.com</span>
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom-bar">
        <div className="footer-bottom-inner">
          <p className="copyright-notice">
            © {new Date().getFullYear()} <strong>TATUi TECH</strong> · Gerson Espíndola. Todos os direitos reservados.
          </p>

          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Voltar ao topo da página">
            <span>Voltar ao topo</span>
            <ArrowUpwardIcon sx={{ fontSize: 16 }} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
