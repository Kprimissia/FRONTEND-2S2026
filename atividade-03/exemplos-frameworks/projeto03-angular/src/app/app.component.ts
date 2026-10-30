import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display: string = '0';
  prev: number | null = null;
  op: string | null = null;
  overwrite: boolean = true;
  coins: number = 0;

  get coinBadge(): string {
    return String(this.coins).padStart(2, '0');
  }

  inputDigit(d: string): void {
    if (this.overwrite) {
      this.display = d === '.' ? '0.' : d;
      this.overwrite = false;
    } else {
      if (d === '.' && this.display.includes('.')) return;
      if (this.display.length >= 12) return;
      this.display = this.display === '0' && d !== '.' ? d : this.display + d;
    }
  }

  clearAll(): void {
    this.display = '0';
    this.prev = null;
    this.op = null;
    this.overwrite = true;
  }

  private compute(a: number, b: number, operator: string): number {
    switch (operator) {
      case '+': return a + b;
      case '-': return a - b;
      case '×': return a * b;
      case '÷': return b === 0 ? NaN : a / b;
      default: return b;
    }
  }

  chooseOp(nextOp: string): void {
    const current = parseFloat(this.display);
    if (this.prev !== null && this.op && !this.overwrite) {
      const result = this.compute(this.prev, current, this.op);
      if (Number.isNaN(result)) {
        this.display = 'GAME OVER';
        this.prev = null;
        this.op = null;
        this.overwrite = true;
        return;
      }
      this.display = String(Math.round(result * 1e10) / 1e10).slice(0, 12);
      this.prev = result;
    } else {
      this.prev = current;
    }
    this.op = nextOp;
    this.overwrite = true;
  }

  equals(): void {
    if (this.op === null || this.prev === null) return;
    const current = parseFloat(this.display);
    const result = this.compute(this.prev, current, this.op);
    if (Number.isNaN(result) || !isFinite(result)) {
      this.display = 'GAME OVER';
    } else {
      this.display = String(Math.round(result * 1e10) / 1e10).slice(0, 12);
      this.coins += 1;
    }
    this.prev = null;
    this.op = null;
    this.overwrite = true;
  }
}
