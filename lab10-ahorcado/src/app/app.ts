import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    this.manejarTeclado(event);
  }
  readonly palabras = [
    'ALGORITMO', 'COMPILADOR', 'PROCESADOR',
    'VARIABLE', 'SERVIDOR', 'REPOSITORIO',
    'ENCRIPTACION', 'CIBERSEGURIDAD', 'NAVEGADOR',
    'ARQUITECTURA', 'INTERFAZ', 'PROTOCOLO',
    'MEMORIA', 'PROGRAMACION', 'LENGUAJE',
    'INTELIGENCIA', 'SISTEMA', 'APLICACION',
    'TECNOLOGIA', 'INFORMATICA'
  ];

  palabraSecreta = '';
  letrasAdivinadas: string[] = [];
  letrasIncorrectas: string[] = [];
  vidasRestantes = 6;
  juegoTerminado = false;
  gano = false;
  victorias = 0;
  derrotas = 0;
  pistaUsada = false;

  constructor() {
    this.iniciarJuego();
  }

  manejarTeclado(event: KeyboardEvent) {
    const letra = event.key.toUpperCase();
    if (letra.length === 1 && letra >= 'A' && letra <= 'Z') {
      this.adivinarLetra(letra);
    }
  }

  get pista(): string {
    if (!this.pistaUsada) return '';
    const letrasOcultas = this.palabraSecreta
      .split('')
      .filter(l => !this.letrasAdivinadas.includes(l));
    if (letrasOcultas.length === 0) return 'No hay más pistas';
    return `Pista: la palabra tiene ${this.palabraSecreta.length} letras`;
  }

  pedirPista() {
    if (this.pistaUsada || this.juegoTerminado) return;
    const letrasOcultas = this.palabraSecreta
      .split('')
      .filter(l => !this.letrasAdivinadas.includes(l));
    if (letrasOcultas.length > 0) {
      this.adivinarLetra(letrasOcultas[0]);
      this.pistaUsada = true;
    }
  }

  iniciarJuego() {
    const indice = Math.floor(Math.random() * this.palabras.length);
    this.palabraSecreta = this.palabras[indice];
    this.letrasAdivinadas = [];
    this.letrasIncorrectas = [];
    this.vidasRestantes = 6;
    this.juegoTerminado = false;
    this.gano = false;
    this.pistaUsada = false;
  }

  reiniciarJuego() {
    if (this.gano) this.victorias++;
    else if (this.juegoTerminado) this.derrotas++;
    this.iniciarJuego();
  }

  get dibujoAhorcado(): string {
    const partes = [
      '  +---+\n  |   |\n      |\n      |\n      |\n      |\n=========',
      '  +---+\n  |   |\n  O   |\n      |\n      |\n      |\n=========',
      '  +---+\n  |   |\n  O   |\n  |   |\n      |\n      |\n=========',
      '  +---+\n  |   |\n  O   |\n /|   |\n      |\n      |\n=========',
      '  +---+\n  |   |\n  O   |\n /|\\  |\n      |\n      |\n=========',
      '  +---+\n  |   |\n  O   |\n /|\\  |\n /    |\n      |\n=========',
      '  +---+\n  |   |\n  O   |\n /|\\  |\n / \\  |\n      |\n========='
    ];
    return partes[6 - this.vidasRestantes];
  }

  get palabraOculta(): string {
    return this.palabraSecreta
      .split('')
      .map(letra => this.letrasAdivinadas.includes(letra) ? letra : '_')
      .join(' ');
  }

  adivinarLetra(letra: string) {
    if (this.juegoTerminado) return;
    if (this.letrasAdivinadas.includes(letra)) return;
    if (this.letrasIncorrectas.includes(letra)) return;

    if (this.palabraSecreta.includes(letra)) {
      this.letrasAdivinadas.push(letra);
      this.gano = this.palabraSecreta
        .split('')
        .every(l => this.letrasAdivinadas.includes(l));
      if (this.gano) this.juegoTerminado = true;
    } else {
      this.letrasIncorrectas.push(letra);
      this.vidasRestantes--;
      if (this.vidasRestantes === 0) this.juegoTerminado = true;
    }
  }
}
