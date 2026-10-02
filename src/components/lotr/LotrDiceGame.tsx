import React, { useState } from "react";
import CasinoIcon from '@mui/icons-material/Casino';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { lotrAudio } from "../../utils/lotrAudio";

interface OracleResult {
  score: number;
  title: string;
  speaker: string;
  quote: string;
  bonus: string;
  tone: 'critical' | 'great' | 'good' | 'trial';
}

export const LotrDiceGame: React.FC = () => {
  const [diceValue, setDiceValue] = useState<number>(20);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [result, setResult] = useState<OracleResult>({
    score: 20,
    title: "Sucesso Crítico Mítico!",
    speaker: "Gandalf, o Branco",
    quote: "Até a menor das pessoas pode mudar o rumo da história. Quando unimos vendas afiadas, automação inteligente e código robusto, nenhum obstáculo na Terra-média pode resistir.",
    bonus: "+100 XP · Aliança Real Desbloqueada com a TATUi TECH",
    tone: "critical"
  });

  const getOracleData = (roll: number): OracleResult => {
    if (roll === 20) {
      return {
        score: 20,
        title: "Sucesso Crítico Lendário (Nat 20)!",
        speaker: "Gandalf, o Branco",
        quote: "Até a menor das pessoas pode mudar o rumo da história. Quando unimos vendas afiadas, automação inteligente e código robusto, nenhum obstáculo na Terra-média pode resistir.",
        bonus: "+100 XP · Aliança Real Desbloqueada com a TATUi TECH",
        tone: "critical"
      };
    }
    if (roll >= 15) {
      return {
        score: roll,
        title: "Triunfo Estratégico!",
        speaker: "Lorde Elrond de Valfenda",
        quote: "A sabedoria ensina que sistemas modernos não sobrevivem sem um funil comercial ativo. A união de Vendas, Marketing e Full-Stack é o pacto supremo para a vitória.",
        bonus: "+80 XP · Conexão Comercial Otimizada",
        tone: "great"
      };
    }
    if (roll >= 10) {
      return {
        score: roll,
        title: "Avanço Seguro pela Terra-média!",
        speaker: "Aragorn, Herdeiro de Isildur",
        quote: "Pode haver um dia em que a coragem falhe, mas não é hoje! Com TypeScript afiado e arquitetura escalável, a TATUi TECH está pronta para defender o seu projeto.",
        bonus: "+50 XP · Robustez de Arquitetura",
        tone: "good"
      };
    }
    return {
      score: roll,
      title: "Desafio Superado com Resiliência!",
      speaker: "Gimli, Filho de Glóin & Legolas",
      quote: "Sistemas legados e processos manuais são como orcs nas minas de Moria. Mas com o Konnekti e o Flow Digital, seus processos se tornam automáticos e precisos!",
      bonus: "+30 XP · Automação de Processos",
      tone: "trial"
    };
  };

  const handleRollDice = () => {
    if (isRolling) return;
    setIsRolling(true);
    lotrAudio.playDiceRoll();

    let rollCount = 0;
    const interval = setInterval(() => {
      setDiceValue(Math.floor(Math.random() * 20) + 1);
      rollCount++;
      if (rollCount >= 10) {
        clearInterval(interval);
        const finalRoll = Math.floor(Math.random() * 20) + 1;
        setDiceValue(finalRoll);
        setResult(getOracleData(finalRoll));
        setIsRolling(false);
        if (finalRoll >= 15) {
          lotrAudio.playVictoryFanfare();
        }
      }
    }, 45);
  };

  return (
    <section className="lotr-section lotr-dice-section" id="dados">
      <div className="lotr-inner-container">
        
        {/* Section Header */}
        <div className="lotr-section-title-wrap">
          <span className="lotr-gold-kicker">
            <CasinoIcon sx={{ fontSize: 16, mr: 0.6 }} /> Minigame Interativo · O Oráculo de Gandalf
          </span>
          <h2 className="lotr-section-heading">Rolar o Dado d20 da Aliança</h2>
          <p className="lotr-section-lead">
            Teste sua sorte e receba uma profecia estratégica sobre como tecnologia e negócios se unem na TATUi TECH.
          </p>
          <div className="lotr-rune-divider">✦ ─── ❖ ─── ✦</div>
        </div>

        {/* Dice Arena */}
        <div className="lotr-dice-arena">
          
          {/* Interactive Die Visual */}
          <div className="dice-display-column">
            <div
              className={`lotr-d20-visual ${isRolling ? 'rolling' : ''} ${result.tone}`}
              onClick={handleRollDice}
              title="Clique para Rolar o d20"
            >
              <div className="d20-inner-hexagon">
                <span className="d20-number">{diceValue}</span>
                <span className="d20-label">d20</span>
              </div>
            </div>

            <button
              onClick={handleRollDice}
              disabled={isRolling}
              className="lotr-roll-btn"
            >
              <CasinoIcon sx={{ fontSize: 20, mr: 0.8 }} />
              <span>{isRolling ? 'Rolando os Destinos...' : 'Rolar Dado da Terra-média'}</span>
            </button>
          </div>

          {/* Oracle Prediction Box */}
          <div className={`oracle-parchment-box ${result.tone}`}>
            <div className="oracle-header">
              <span className="oracle-badge">
                <AutoAwesomeIcon sx={{ fontSize: 16, mr: 0.6 }} />
                {result.title} (Tirou {result.score})
              </span>
              <span className="oracle-speaker">Voz: <strong>{result.speaker}</strong></span>
            </div>

            <blockquote className="oracle-quote">
              "{result.quote}"
            </blockquote>

            <div className="oracle-bonus-row">
              <span className="bonus-tag">⚡ Bônus: {result.bonus}</span>
              
              <a
                href="https://wa.me/5584988081234?text=Ol%C3%A1%20Gerson!%20Rolei%20o%20d20%20no%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20alian%C3%A7a!"
                target="_blank"
                rel="noreferrer"
                className="oracle-action-cta"
              >
                <WhatsAppIcon sx={{ fontSize: 17, mr: 0.6 }} />
                <span>Conversar com Gerson</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
