import React, { useState, useRef } from "react";

// ---- Mario-themed calculator ----------------------------------------
// Palette: Mario red #E52521, sky #5C94FC, brick #B85C1E, coin gold #FBD000,
// pipe green #00A651, ink #1D1D1D, block cream #FCE9C7

export default function App() {
  const [display, setDisplay] = useState("0");
  const [prev, setPrev] = useState(null);
  const [op, setOp] = useState(null);
  const [overwrite, setOverwrite] = useState(true);
  const [coins, setCoins] = useState(0);
  const [popups, setPopups] = useState([]);
  const [shake, setShake] = useState(false);
  const popupId = useRef(0);

  const spawnCoin = () => {
    setCoins((c) => c + 1);
    const id = popupId.current++;
    setPopups((p) => [...p, id]);
    setTimeout(() => {
      setPopups((p) => p.filter((x) => x !== id));
    }, 700);
  };

  const inputDigit = (d) => {
    if (overwrite) {
      setDisplay(d === "." ? "0." : d);
      setOverwrite(false);
    } else {
      if (d === "." && display.includes(".")) return;
      if (display.length >= 12) return;
      setDisplay(display === "0" && d !== "." ? d : display + d);
    }
  };

  const clearAll = () => {
    setDisplay("0");
    setPrev(null);
    setOp(null);
    setOverwrite(true);
  };

  const compute = (a, b, operator) => {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "×":
        return a * b;
      case "÷":
        return b === 0 ? NaN : a / b;
      default:
        return b;
    }
  };

  const chooseOp = (nextOp) => {
    const current = parseFloat(display);
    if (prev !== null && op && !overwrite) {
      const result = compute(prev, current, op);
      if (Number.isNaN(result)) {
        setDisplay("GAME OVER");
        setPrev(null);
        setOp(null);
        setOverwrite(true);
        setShake(true);
        setTimeout(() => setShake(false), 500);
        return;
      }
      setDisplay(trim(result));
      setPrev(result);
    } else {
      setPrev(current);
    }
    setOp(nextOp);
    setOverwrite(true);
  };

  const trim = (n) => {
    if (!isFinite(n)) return "GAME OVER";
    const s = Math.round(n * 1e10) / 1e10;
    return s.toString().slice(0, 12);
  };

  const equals = () => {
    if (op === null || prev === null) return;
    const current = parseFloat(display);
    const result = compute(prev, current, op);
    if (Number.isNaN(result) || !isFinite(result)) {
      setDisplay("GAME OVER");
      setShake(true);
      setTimeout(() => setShake(false), 500);
    } else {
      setDisplay(trim(result));
      spawnCoin();
    }
    setPrev(null);
    setOp(null);
    setOverwrite(true);
  };

  const toggleSign = () => {
    if (display === "0" || display === "GAME OVER") return;
    setDisplay(display.startsWith("-") ? display.slice(1) : "-" + display);
  };

  const percent = () => {
    const current = parseFloat(display);
    if (Number.isNaN(current)) return;
    setDisplay(trim(current / 100));
  };

  const backspace = () => {
    if (overwrite) return;
    if (display.length <= 1 || (display.length === 2 && display.startsWith("-"))) {
      setDisplay("0");
      setOverwrite(true);
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  return (
    <div style={styles.wrapper}>
      <style>{fontImport}</style>

      <div style={styles.skyDecor} aria-hidden="true">
        <Cloud style={{ top: 18, left: 14, transform: "scale(0.8)" }} />
        <Cloud style={{ top: 10, right: 20, transform: "scale(1.05)" }} />
      </div>

      <div style={{ ...styles.machine, animation: shake ? "mc-shake 0.4s" : "none" }}>
        {/* Brick header */}
        <div style={styles.header}>
          <div style={styles.headerRow}>
            <span style={styles.title}>★ SUPER CALC ★</span>
            <div style={styles.coinBox}>
              <Coin />
              <span style={styles.coinCount}>×{String(coins).padStart(2, "0")}</span>
            </div>
          </div>
        </div>

        {/* Screen (question block styled) */}
        <div style={styles.screenFrame}>
          <div style={styles.screenBolts}>
            <span style={styles.bolt} />
            <span style={styles.bolt} />
          </div>
          <div style={styles.screen}>
            <div style={styles.screenSubtext}>
              {prev !== null && op ? `${trim(prev)} ${op}` : "\u00A0"}
            </div>
            <div style={styles.screenMain}>{display}</div>
            {popups.map((id) => (
              <span key={id} style={styles.coinPopup}>
                +1 <Coin small />
              </span>
            ))}
          </div>
        </div>

        {/* Keypad */}
        <div style={styles.pad}>
          <Key label="AC" variant="pipe" onClick={clearAll} />
          <Key label="±" variant="pipe" onClick={toggleSign} />
          <Key label="%" variant="pipe" onClick={percent} />
          <Key label="÷" variant="fire" onClick={() => chooseOp("÷")} active={op === "÷"} />

          <Key label="7" variant="block" onClick={() => inputDigit("7")} />
          <Key label="8" variant="block" onClick={() => inputDigit("8")} />
          <Key label="9" variant="block" onClick={() => inputDigit("9")} />
          <Key label="×" variant="fire" onClick={() => chooseOp("×")} active={op === "×"} />

          <Key label="4" variant="block" onClick={() => inputDigit("4")} />
          <Key label="5" variant="block" onClick={() => inputDigit("5")} />
          <Key label="6" variant="block" onClick={() => inputDigit("6")} />
          <Key label="−" variant="fire" onClick={() => chooseOp("-")} active={op === "-"} />

          <Key label="1" variant="block" onClick={() => inputDigit("1")} />
          <Key label="2" variant="block" onClick={() => inputDigit("2")} />
          <Key label="3" variant="block" onClick={() => inputDigit("3")} />
          <Key label="+" variant="fire" onClick={() => chooseOp("+")} active={op === "+"} />

          <Key label="⌫" variant="pipe" onClick={backspace} />
          <Key label="0" variant="block" onClick={() => inputDigit("0")} />
          <Key label="." variant="block" onClick={() => inputDigit(".")} />
          <Key label="=" variant="star" onClick={equals} />
        </div>

        <div style={styles.groundStrip} aria-hidden="true" />
      </div>
    </div>
  );
}

function Key({ label, onClick, variant, active }) {
  const base = { ...styles.key, ...variantStyles[variant] };
  const applied = active ? { ...base, ...styles.keyActive } : base;
  return (
    <button
      onClick={onClick}
      style={applied}
      onMouseDown={(e) => (e.currentTarget.style.transform = "translateY(3px)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
    >
      {label}
    </button>
  );
}

function Coin({ small }) {
  const size = small ? 14 : 18;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: "inline-block", verticalAlign: "middle" }}>
      <circle cx="12" cy="12" r="10" fill="#FBD000" stroke="#8A5A00" strokeWidth="2" />
      <circle cx="12" cy="12" r="6" fill="#FFE767" />
      <rect x="10.4" y="6" width="3.2" height="12" fill="#8A5A00" />
    </svg>
  );
}

function Cloud({ style }) {
  return (
    <svg width="72" height="40" viewBox="0 0 72 40" style={{ position: "absolute", ...style }}>
      <ellipse cx="20" cy="26" rx="16" ry="12" fill="#FFFFFF" />
      <ellipse cx="38" cy="18" rx="18" ry="16" fill="#FFFFFF" />
      <ellipse cx="55" cy="27" rx="14" ry="11" fill="#FFFFFF" />
      <ellipse cx="36" cy="34" rx="30" ry="8" fill="#FFFFFF" />
    </svg>
  );
}

const fontImport = `
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Nunito:wght@700;900&display=swap');
@keyframes mc-shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-6px); }
  40% { transform: translateX(6px); }
  60% { transform: translateX(-4px); }
  80% { transform: translateX(4px); }
}
@keyframes mc-coin-pop {
  0% { opacity: 0; transform: translate(-50%, 0) scale(0.6); }
  20% { opacity: 1; transform: translate(-50%, -8px) scale(1); }
  100% { opacity: 0; transform: translate(-50%, -38px) scale(1); }
}
`;

const styles = {
  wrapper: {
    minHeight: "560px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(180deg, #5C94FC 0%, #7EB2FF 60%, #9BC4FF 100%)",
    fontFamily: "'Nunito', sans-serif",
    padding: "28px 12px",
    position: "relative",
    overflow: "hidden",
    boxSizing: "border-box",
  },
  skyDecor: { position: "absolute", inset: 0, pointerEvents: "none" },
  machine: {
    position: "relative",
    width: "320px",
    background: "#B85C1E",
    borderRadius: "14px",
    padding: "10px",
    boxShadow: "0 14px 0 #7A3B10, 0 20px 24px rgba(0,0,0,0.35)",
    backgroundImage:
      "linear-gradient(#C96E29 2px, transparent 2px), linear-gradient(90deg, #C96E29 2px, transparent 2px)",
    backgroundSize: "20px 20px",
    backgroundPosition: "0 0, 0 0",
    border: "4px solid #1D1D1D",
  },
  header: {
    background: "#E52521",
    border: "3px solid #1D1D1D",
    borderRadius: "8px",
    padding: "8px 10px",
    marginBottom: "10px",
  },
  headerRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "'Press Start 2P', monospace",
    fontSize: "10px",
    color: "#FCE9C7",
    letterSpacing: "0.5px",
    textShadow: "2px 2px 0 #1D1D1D",
  },
  coinBox: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    background: "#1D1D1D",
    borderRadius: "6px",
    padding: "3px 6px",
  },
  coinCount: {
    fontFamily: "'Press Start 2P', monospace",
    fontSize: "9px",
    color: "#FBD000",
  },
  screenFrame: {
    background: "#FBD000",
    border: "3px solid #1D1D1D",
    borderRadius: "8px",
    padding: "10px",
    marginBottom: "12px",
    position: "relative",
    boxShadow: "inset 0 0 0 3px #C99A00",
  },
  screenBolts: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "4px",
    padding: "0 2px",
  },
  bolt: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    background: "#8A5A00",
    display: "inline-block",
  },
  screen: {
    background: "#FCE9C7",
    border: "2px solid #1D1D1D",
    borderRadius: "6px",
    minHeight: "84px",
    padding: "10px 12px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  screenSubtext: {
    fontFamily: "'Press Start 2P', monospace",
    fontSize: "10px",
    color: "#B85C1E",
    minHeight: "12px",
  },
  screenMain: {
    fontFamily: "'Press Start 2P', monospace",
    fontSize: "26px",
    color: "#1D1D1D",
    textAlign: "right",
    whiteSpace: "nowrap",
    overflowX: "auto",
  },
  coinPopup: {
    position: "absolute",
    left: "50%",
    top: "6px",
    fontFamily: "'Press Start 2P', monospace",
    fontSize: "11px",
    color: "#B85C1E",
    display: "flex",
    alignItems: "center",
    gap: "3px",
    animation: "mc-coin-pop 0.7s ease-out forwards",
  },
  pad: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "8px",
  },
  key: {
    fontFamily: "'Press Start 2P', monospace",
    fontSize: "13px",
    height: "46px",
    borderRadius: "8px",
    border: "3px solid #1D1D1D",
    cursor: "pointer",
    color: "#1D1D1D",
    transition: "transform 0.05s ease",
    userSelect: "none",
  },
  keyActive: {
    outline: "3px solid #FCE9C7",
    outlineOffset: "-6px",
  },
  groundStrip: {
    marginTop: "12px",
    height: "10px",
    borderRadius: "4px",
    background:
      "repeating-linear-gradient(90deg, #FBD000 0 10px, #C99A00 10px 12px)",
    border: "2px solid #1D1D1D",
  },
};

const variantStyles = {
  block: {
    background: "#FCE9C7",
    boxShadow: "0 4px 0 #B0895A",
  },
  pipe: {
    background: "#00A651",
    color: "#FCE9C7",
    boxShadow: "0 4px 0 #00612F",
  },
  fire: {
    background: "#E52521",
    color: "#FCE9C7",
    boxShadow: "0 4px 0 #8C1512",
  },
  star: {
    background: "#5C94FC",
    color: "#FFFFFF",
    boxShadow: "0 4px 0 #2C5FBF",
    gridRow: "span 1",
  },
};