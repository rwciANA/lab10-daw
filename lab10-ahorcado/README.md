# Juego del Ahorcado

![Angular](https://img.shields.io/badge/Angular-21.2-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Node](https://img.shields.io/badge/Node-%3E%3D18-339933?logo=node.js&logoColor=white)
![Licencia](https://img.shields.io/badge/licencia-MIT-blue)

Juego interactivo del ahorcado desarrollado en Angular con tematica de tecnologia e ingenieria de sistemas.

---

## Indice

- [Descripcion](#descripcion)
- [Capturas](#capturas)
- [Caracteristicas](#caracteristicas)
- [Tecnologias](#tecnologias)
- [Estructura](#estructura)
- [Requisitos](#requisitos)
- [Instalacion](#instalacion)
- [Ejecucion](#ejecucion)
- [Construccion](#construccion)
- [Como jugar](#como-jugar)
- [Personalizacion](#personalizacion)
- [Licencia](#licencia)

---

## Descripcion

Este proyecto implementa el clasico juego del ahorcado donde el jugador debe adivinar una palabra oculta seleccionando letras. El juego incluye 20 palabras del ambito de tecnologia e ingenieria de sistemas, organizadas por categorias como Programacion, Hardware, Redes, Seguridad, Inteligencia Artificial, Web y mas.

Cada vez que el jugador falla una letra, se dibuja una parte del cuerpo del ahorcado. Si se completa el dibujo antes de adivinar la palabra, el jugador pierde.

---

## Capturas

```
+---+
|   |
O   |
/|\  |
/ \  |
     |
=========
```
```
_ _ _ _ _ _ _ _ _
```
```
Categoria: Programacion
```

---

## Caracteristicas

- [x] 20 palabras tecnologicas con categorias
- [x] Dibujo del ahorcado en ASCII progresivo (7 estados)
- [x] Teclado virtual interactivo
- [x] Soporte para teclado fisico
- [x] Sistema de pistas (revela una letra automaticamente)
- [x] Contador de victorias y derrotas
- [x] Record de victorias consecutivas
- [x] Corazones visuales para las vidas
- [x] Boton de rendirse con confirmacion
- [x] Colores diferenciados para aciertos y fallos
- [x] Diseno responsive (adaptado a moviles)
- [x] Animaciones CSS (fade, pulse, shake)
- [x] Gradiente y sombras en la interfaz
- [x] Palabras no repetidas en partidas consecutivas

---

## Tecnologias

| Tecnologia | Version |
|------------|---------|
| Angular | 21.2 |
| TypeScript | 5.9 |
| Node.js | >= 18 |
| RxJS | 7.8 |
| Vitest | 4.0 |
| Prettier | 3.8 |

---

## Estructura

```
lab10-ahorcado/
├── public/
├── src/
│   ├── app/
│   │   ├── app.ts          -> Logica principal del juego
│   │   ├── app.html        -> Plantilla HTML
│   │   ├── app.css         -> Estilos del juego
│   │   └── app.config.ts   -> Configuracion de Angular
│   ├── index.html          -> Archivo raiz HTML
│   ├── main.ts             -> Punto de entrada
│   └── styles.css          -> Estilos globales
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

---

## Requisitos

- Node.js 18 o superior
- Angular CLI 21 (`npm install -g @angular/cli`)
- Navegador web moderno

---

## Instalacion

```bash
cd lab10-ahorcado
npm install
```

---

## Ejecucion

```bash
ng serve
```

Abrir en el navegador: `http://localhost:4200/`

La aplicacion se recarga automaticamente ante cualquier cambio en los archivos.

---

## Construccion

```bash
ng build
```

Los archivos de produccion se generan en la carpeta `dist/lab10-ahorcado/` listos para desplegar en cualquier servidor web.

---

## Como jugar

1. Al iniciar, se selecciona una palabra aleatoria de la lista.
2. La palabra oculta se muestra con guiones bajos.
3. Selecciona letras usando el teclado virtual en pantalla o presionando teclas en tu teclado fisico.
4. Cada acierto revela la letra en la palabra.
5. Cada fallo dibuja una parte del ahorcado y resta una vida.
6. Si adivinas todas las letras antes de quedarte sin vidas, ganas.
7. Si el ahorcado se completa, pierdes.
8. Usa el boton "Pedir pista" si te quedas atascado.
9. Puedes rendirte en cualquier momento con el boton "Rendirse".

---

## Personalizacion

Para agregar tus propias palabras, edita el arreglo `palabras` en `src/app/app.ts`:

```typescript
readonly palabras = [
  { palabra: 'ANGULAR', categoria: 'Framework' },
  { palabra: 'TYPESCRIPT', categoria: 'Lenguaje' },
  // ...
];
```

Cada palabra debe tener el formato `{ palabra: 'TEXTO', categoria: 'Categoria' }`.

---

## Licencia

Este proyecto fue desarrollado como parte del curso de Desarrollo de Aplicaciones Web 2 - Laboratorio 10.
