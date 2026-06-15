import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
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

  constructor() {
    this.iniciarJuego();
  }

  iniciarJuego() {
    const indice = Math.floor(Math.random() * this.palabras.length);
    this.palabraSecreta = this.palabras[indice];
    this.letrasAdivinadas = [];
    this.letrasIncorrectas = [];
    this.vidasRestantes = 6;
    this.juegoTerminado = false;
    this.gano = false;
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
