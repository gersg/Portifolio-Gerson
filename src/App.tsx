import React, { useState } from "react";
import { LotrHud } from "./components/lotr/LotrHud";
import { LotrHero } from "./components/lotr/LotrHero";
import { LotrWorldMap } from "./components/lotr/LotrWorldMap";
import { LotrSobreMim } from "./components/lotr/LotrSobreMim";
import { LotrSkills } from "./components/lotr/LotrSkills";
import { LotrTimeline } from "./components/lotr/LotrTimeline";
import { LotrArtifacts } from "./components/lotr/LotrArtifacts";
import { LotrDiceGame } from "./components/lotr/LotrDiceGame";
import { LotrFooter } from "./components/lotr/LotrFooter";
import { LotrCharacterSheet } from "./components/lotr/LotrCharacterSheet";
import { lotrAudio } from "./utils/lotrAudio";
import './index.scss';
import './assets/styles/LotrTheme.scss';

function App() {
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [ringPowerActive, setRingPowerActive] = useState<boolean>(false);
  const [characterSheetOpen, setCharacterSheetOpen] = useState<boolean>(false);

  const handleToggleSound = () => {
    const newState = !soundEnabled;
    setSoundEnabled(newState);
    lotrAudio.enabled = newState;
    if (newState) {
      lotrAudio.playRuneClick();
    }
  };

  const handleToggleRingPower = () => {
    setRingPowerActive((prev) => !prev);
  };

  const handleOpenSheet = () => {
    setCharacterSheetOpen(true);
  };

  const handleCloseSheet = () => {
    setCharacterSheetOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className={`lotr-game-root ${ringPowerActive ? 'ring-surge-active' : ''}`}>
      {/* 1. Master Game HUD */}
      <LotrHud
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        ringPowerActive={ringPowerActive}
        onToggleRingPower={handleToggleRingPower}
        onOpenCharacterSheet={handleOpenSheet}
        onNavigateSection={scrollToSection}
      />

      <main>
        {/* 2. The One Ring Hero Presentation */}
        <LotrHero
          ringPowerActive={ringPowerActive}
          onOpenCharacterSheet={handleOpenSheet}
          onScrollToMap={() => scrollToSection("mapa")}
          onScrollToDice={() => scrollToSection("dados")}
        />

        {/* 3. Interactive Middle-earth World Map */}
        <LotrWorldMap onNavigateSection={scrollToSection} />

        {/* 4. O Condado (The Shire / Origens & Sobre Mim & A Tríade Sagrada) */}
        <LotrSobreMim />

        {/* 5. Valfenda (Rivendell / Grimórios de Habilidades) */}
        <LotrSkills />

        {/* 6. Minas Tirith (Crônica das Batalhas & Trajetória) */}
        <LotrTimeline />

        {/* 7. A Montanha da Perdição (Artefatos & Projetos Lendários) */}
        <LotrArtifacts />

        {/* 8. O Oráculo de Gandalf (Minigame com Dado d20) */}
        <LotrDiceGame />
      </main>

      {/* 9. Os Portos Cinzentos (Aliança & Contato) */}
      <LotrFooter />

      {/* RPG Character Sheet Modal */}
      <LotrCharacterSheet
        isOpen={characterSheetOpen}
        onClose={handleCloseSheet}
      />
    </div>
  );
}

export default App;
