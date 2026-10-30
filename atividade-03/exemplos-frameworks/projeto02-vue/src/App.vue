<script setup>
import { ref, computed } from 'vue';
import CalcKey from './components/CalcKey.vue';

const display = ref('0');
const prev = ref(null);
const op = ref(null);
const overwrite = ref(true);
const coins = ref(0);

const subtext = computed(() => {
  return prev.value !== null && op.value ? `${prev.value} ${op.value}` : '\u00A0';
});

function inputDigit(d) {
  if (overwrite.value) {
    display.value = d === '.' ? '0.' : d;
    overwrite.value = false;
  } else {
    if (d === '.' && display.value.includes('.')) return;
    if (display.value.length >= 12) return;
    display.value = display.value === '0' && d !== '.' ? d : display.value + d;
  }
}

function clearAll() {
  display.value = '0';
  prev.value = null;
  op.value = null;
  overwrite.value = true;
}

function compute(a, b, operator) {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '×': return a * b;
    case '÷': return b === 0 ? NaN : a / b;
    default: return b;
  }
}

function chooseOp(nextOp) {
  const current = parseFloat(display.value);
  if (prev.value !== null && op.value && !overwrite.value) {
    const result = compute(prev.value, current, op.value);
    if (Number.isNaN(result)) {
      display.value = 'GAME OVER';
      prev.value = null;
      op.value = null;
      overwrite.value = true;
      return;
    }
    display.value = String(Math.round(result * 1e10) / 1e10).slice(0, 12);
    prev.value = result;
  } else {
    prev.value = current;
  }
  op.value = nextOp;
  overwrite.value = true;
}

function equals() {
  if (op.value === null || prev.value === null) return;
  const current = parseFloat(display.value);
  const result = compute(prev.value, current, op.value);
  if (Number.isNaN(result) || !isFinite(result)) {
    display.value = 'GAME OVER';
  } else {
    display.value = String(Math.round(result * 1e10) / 1e10).slice(0, 12);
    coins.value += 1;
  }
  prev.value = null;
  op.value = null;
  overwrite.value = true;
}
</script>

<template>
  <main class="wrapper">
    <section class="machine" aria-label="Calculadora Super Calc em Vue.js">
      <header class="header">
        <span class="title">★ VUE SUPER CALC ★</span>
        <span class="coins">🪙 ×{{ String(coins).padStart(2, '0') }}</span>
      </header>

      <div class="screen">
        <div class="subtext">{{ subtext }}</div>
        <div class="main-display">{{ display }}</div>
      </div>

      <div class="pad">
        <CalcKey label="AC" variant="pipe" @press="clearAll" />
        <CalcKey label="7" variant="block" @press="inputDigit('7')" />
        <CalcKey label="8" variant="block" @press="inputDigit('8')" />
        <CalcKey label="÷" variant="fire" @press="chooseOp('÷')" />

        <CalcKey label="4" variant="block" @press="inputDigit('4')" />
        <CalcKey label="5" variant="block" @press="inputDigit('5')" />
        <CalcKey label="6" variant="block" @press="inputDigit('6')" />
        <CalcKey label="×" variant="fire" @press="chooseOp('×')" />

        <CalcKey label="1" variant="block" @press="inputDigit('1')" />
        <CalcKey label="2" variant="block" @press="inputDigit('2')" />
        <CalcKey label="3" variant="block" @press="inputDigit('3')" />
        <CalcKey label="-" variant="fire" @press="chooseOp('-')" />

        <CalcKey label="0" variant="block" @press="inputDigit('0')" />
        <CalcKey label="." variant="block" @press="inputDigit('.')" />
        <CalcKey label="=" variant="star" @press="equals" />
        <CalcKey label="+" variant="fire" @press="chooseOp('+')" />
      </div>
    </section>
  </main>
</template>

<style scoped>
.wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #5c94fc 0%, #9bc4ff 100%);
  padding: 20px;
}
.machine {
  width: 100%;
  max-width: 320px;
  background: #b85c1e;
  border: 4px solid #1d1d1d;
  border-radius: 14px;
  padding: 12px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #42b883;
  color: #1d1d1d;
  padding: 8px 10px;
  border-radius: 8px;
  border: 3px solid #1d1d1d;
  font-weight: 800;
  margin-bottom: 10px;
}
.screen {
  background: #fce9c7;
  border: 3px solid #1d1d1d;
  border-radius: 8px;
  padding: 10px 12px;
  text-align: right;
  margin-bottom: 12px;
}
.subtext {
  font-size: 12px;
  color: #b85c1e;
}
.main-display {
  font-size: 26px;
  font-weight: 900;
  color: #1d1d1d;
}
.pad {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}
</style>

