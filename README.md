# blackjack-vite
Implementación del clásico juego Blackjack, desarrollada con JavaScript y empaquetada con Vite para un entorno rápido y moderno de desarrollo.

# Blackjack con Vite ♠️♥️♣️♦️

Este proyecto es una implementación del clásico juego **Blackjack**, desarrollada con **JavaScript** y empaquetada con **Vite** para un entorno rápido y moderno de desarrollo.  
El código ha sido **refactorizado** para hacerlo modular y fácil de mantener.

---

## 🚀 Cambios principales en esta versión

### 1. Migración a Vite
- Se reorganizó la estructura para aprovechar el sistema de módulos de Vite.
- Archivos de imágenes (cartas) colocados en la carpeta `public/assets/cartas` para una carga sencilla:
  ```js
  imgCard.src = `/assets/cartas/${card}.png`;
  ```

### 2. Código Modular
Cada funcionalidad principal del juego se movió a su propio archivo dentro de la carpeta `usecases/`:
- `create-deck.js` → Crea y mezcla el mazo.
- `update-deck-counter.js` → Actualiza el contador visual de cartas restantes.
- `take-card.js` → Toma una carta del mazo.
- `accumulate-points.js` → Suma los puntos de un jugador.
- `create-card.js` → Crea y muestra el elemento visual de la carta.
- `computer-turn.js` → Lógica del turno de la computadora.
- `initialize-game.js` → Reinicia y prepara el juego desde cero.

Esto mejora:
- **Mantenibilidad** → Más fácil encontrar y editar funciones específicas.
- **Reutilización** → Funciones reutilizables en otros proyectos o juegos.
- **Legibilidad** → Código más limpio y organizado.

### 3. Mejora en el manejo de rutas
- Las imágenes ahora se cargan desde `public` usando rutas relativas compatibles con Vite.
- Esto evita errores de `404` en producción.

### 4. Interfaz mejorada
- Se agregó un **contador visual** de cartas restantes.
- Se mantienen las referencias a los elementos HTML en un solo lugar.

---

## 📂 Estructura del proyecto

```
📦 blackjack-vite
 ┣ 📂 public
 ┃ ┗ 📂 assets
 ┃   ┗ 📂 cartas
 ┣ 📂 src
 ┃ ┣ 📂 usecases
 ┃ ┃ ┣ create-deck.js
 ┃ ┃ ┣ update-deck-counter.js
 ┃ ┃ ┣ take-card.js
 ┃ ┃ ┣ accumulate-points.js
 ┃ ┃ ┣ create-card.js
 ┃ ┃ ┣ computer-turn.js
 ┃ ┃ ┗ initialize-game.js
 ┃ ┣ main.js
 ┣ index.html
 ┣ style.css
 ┗ vite.config.js
```

---

## 📜 Uso

### Instalación
```bash
npm install
```

### Modo desarrollo
```bash
npm run dev
```

### Compilar para producción
```bash
npm run build
```

### Vista previa de producción
```bash
npm run preview
```

---

## 🎯 Próximas mejoras
- Animaciones para mostrar las cartas.
- Sonidos de reparto y victoria.
- Adaptación a dispositivos móviles.

---

**Autor:** The-Lup (JoPim)  
📅 Refactorización: Agosto 2025
