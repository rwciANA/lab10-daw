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
}
