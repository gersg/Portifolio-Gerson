import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Toolbar from '@mui/material/Toolbar';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const drawerWidth = 280;
const navItems = [
  ['Sobre Mim', 'sobremim'],
  ['Habilidades', 'expertise'],
  ['Trajetória', 'history'],
  ['Projetos', 'projects'],
];

interface NavigationProps {
  parentToChild: { mode: string };
  modeChange: () => void;
}

function Navigation({ parentToChild, modeChange }: NavigationProps) {
  const { mode } = parentToChild;
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box className="mobile-drawer-content" sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box>
          <span className="drawer-brand-title">GERSON ESPÍNDOLA</span>
          <span className="drawer-brand-sub">TATUi TECH</span>
        </Box>
        <IconButton onClick={handleDrawerToggle} size="small" aria-label="Fechar menu">
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ mb: 'auto' }}>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              sx={{ borderRadius: '8px', py: 1.2 }}
              onClick={() => scrollToSection(item[1])}
            >
              <ListItemText
                primary={item[0]}
                primaryTypographyProps={{ fontWeight: 600, fontSize: '1rem' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box sx={{ pt: 2, borderTop: '1px solid rgba(150, 150, 150, 0.2)' }}>
        <p className="drawer-social-label">Redes & Contato</p>
        <Box sx={{ display: 'flex', gap: 1.5, mb: 2.5 }}>
          <a href="https://www.linkedin.com/in/gersg/" target="_blank" rel="noreferrer" className="drawer-social-icon" aria-label="LinkedIn">
            <LinkedInIcon fontSize="small" />
          </a>
          <a href="https://www.instagram.com/gersg.dev/" target="_blank" rel="noreferrer" className="drawer-social-icon" aria-label="Instagram Profissional">
            <InstagramIcon fontSize="small" />
          </a>
          <a href="https://github.com/gersg" target="_blank" rel="noreferrer" className="drawer-social-icon" aria-label="GitHub">
            <GitHubIcon fontSize="small" />
          </a>
        </Box>

        <a
          href="https://wa.me/5584988081234?text=Ol%C3%A1%20Gerson,%20vim%20pelo%20seu%20portf%C3%B3lio!"
          target="_blank"
          rel="noreferrer"
          className="drawer-cta-button"
        >
          <WhatsAppIcon fontSize="small" sx={{ mr: 1 }} /> Conversar no WhatsApp
        </a>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        id="navigation"
        elevation={0}
        className={`navbar-fixed-top ${scrolled ? 'scrolled' : ''}`}
      >
        <Toolbar className="navigation-bar" sx={{ maxWidth: '1280px', width: '100%', mx: 'auto', px: { xs: 2, md: 4 } }}>
          {/* Zone 1: Brand Wordmark */}
          <Box
            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="nav-brand-main">GERSON ESPÍNDOLA</span>
            <span className="nav-brand-tag">TATUi TECH</span>
          </Box>

          {/* Zone 2: Navigation Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item[0]}
                onClick={() => scrollToSection(item[1])}
                className="nav-link-btn"
              >
                {item[0]}
              </Button>
            ))}
          </Box>

          {/* Zone 3: Actions (Theme Toggle & Contact CTA) */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <button
              onClick={modeChange}
              className="theme-toggle-btn"
              aria-label="Alternar tema claro e escuro"
              title={mode === 'dark' ? 'Modo Claro' : 'Modo Escuro'}
            >
              {mode === 'dark' ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
            </button>

            <a
              href="https://wa.me/5584988081234?text=Ol%C3%A1%20Gerson,%20vim%20pelo%20seu%20portf%C3%B3lio!"
              target="_blank"
              rel="noreferrer"
              className="nav-contact-cta hidden-sm"
            >
              <WhatsAppIcon fontSize="small" sx={{ mr: 0.8 }} />
              <span>Fale Comigo</span>
            </a>

            <IconButton
              color="inherit"
              aria-label="abrir menu"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, ml: 0.5 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: mode === 'dark' ? '#121820' : '#ffffff',
              color: mode === 'dark' ? '#f0f3f6' : '#1a202c',
              borderLeft: mode === 'dark' ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;
