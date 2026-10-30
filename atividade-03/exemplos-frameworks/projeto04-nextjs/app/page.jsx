"use client";

import { useState } from "react";

export default function SuperCalcNextPage() {
  const [display, setDisplay] = useState("0");
  const [prev, setPrev] = useState(null);
  const [op, setOp] = useState(null);
  const [overwrite, setOverwrite] = useState(true);
  const [coins, setCoins] = useState(0);

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
      case "+": return a + b;
      case "-": return a - b;
      case "×": return a * b;
      case "÷": return b === 0 ? NaN : a / b;
      default: return b;
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
        return;
      }
      setDisplay(String(Math.round(result * 1e10) / 1e10).slice(0, 12));
      setPrev(result);
    } else {
      setPrev(current);
    }
    setOp(nextOp);
    setOverwrite(true);
  };

  const equals = () => {
    if (op === null || prev === null) return;
    const current = parseFloat(display);
    const result = compute(prev, current, op);
    if (Number.isNaN(result) || !isFinite(result)) {
      setDisplay("GAME OVER");
    } else {
      setDisplay(String(Math.round(result * 1e10) / 1e10).slice(0, 12));
      setCoins((c) => c + 1);
    }
    setPrev(null);
    setOp(null);
    setOverwrite(true);
  };

  const keys = [
    { label: "AC", action: clearAll, variant: "#00A651" },
    { label: "7", action: () => inputDigit("7"), variant: "#FCE9C7" },
    { label: "8", action: () => inputDigit("8"), variant: "#FCE9C7" },
    { label: "÷", action: () => chooseOp("÷"), variant: "#E52521" },
    { label: "4", action: () => inputDigit("4"), variant: "#FCE9C7" },
    { label: "5", action: () => inputDigit("5"), variant: "#FCE9C7" },
    { label: "6", action: () => inputDigit("6"), variant: "#FCE9C7" },
    { label: "×", action: () => chooseOp("×"), variant: "#E52521" },
    { label: "1", action: () => inputDigit("1"), variant: "#FCE9C7" },
    { label: "2", action: () => inputDigit("2"), variant: "#FCE9C7" },
    { label: "3", action: () => inputDigit("3"), variant: "#FCE9C7" },
    { label: "-", action: () => chooseOp("-"), variant: "#E52521" },
    { label: "0", action: () => inputDigit("0"), variant: "#FCE9C7" },
    { label: ".", action: () => inputDigit("."), variant: "#FCE9C7" },
    { label: "=", action: equals, variant: "#5C94FC" },
    { label: "+", action: () => chooseOp("+"), variant: "#E52521" },
  ];

  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#5C94FC", padding: 20 }}>
      <section style={{ width: "100%", maxWidth: 320, background: "#B85C1E", border: "4px solid #1D1D1D", borderRadius: 14, padding: 12 }}>
        <header style={{ display: "flex", justifyContent: "space-between", background: "#1D1D1D", color: "#FFFFFF", padding: "8px 10px", borderRadius: 8, marginBottom: 10, fontWeight: 800 }}>
          <span>▲ NEXT.JS SUPER CALC</span>
          <span>🪙 ×{String(coins).padStart(2, "0")}</span>
        </header>
        <div style={{ background: "#FCE9C7", border: "3px solid #1D1D1D", borderRadius: 8, padding: "10px 12px", textAlign: "right", marginBottom: 12 }}>
          <div style={{ fontSize: 12, color: "#B85C1E" }}>{prev !== null && op ? `${prev} ${op}` : "\u00A0"}</div>
          <div style={{ fontSize: 26, fontWeight: 900, color: "#1D1D1D" }}>{display}</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
          {keys.map((k) => (
            <button
              key={k.label}
              onClick={k.action}
              style={{
                height: 46,
                borderRadius: 8,
                border: "3px solid #1D1D1D",
                background: k.variant,
                color: k.variant === "#FCE9C7" ? "#1D1D1D" : "#FFFFFF",
                fontWeight: 800,
                fontSize: 15,
                cursor: "pointer",
              }}
            >
              {k.label}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
