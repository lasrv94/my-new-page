# Guadalajara — Corazón de Jalisco

Portal web interactivo sobre Guadalajara y los principales destinos turísticos de Jalisco (Puerto Vallarta, Tequila, Lago de Chapala & Ajijic, y Mazamitla & Tapalpa).

## Versión 4.0 — Arquitectura Moderna (React 19 + TypeScript + Vite)

El portal ha sido transformado en una aplicación web moderna basada en componentes modulares:

- **Stack Tecnológico**:
  - **React 19** + **TypeScript** con tipado estricto.
  - **Vite 6** con compilación y HMR ultrarrápido.
  - **Lucide React** para iconografía moderna y accesible.
  - **CSS Moderno**: Sistema de diseño con variables CSS, animaciones con observadores de intersección y diseño responsivo adaptado a móvil, tablet y escritorio.
- **Componentes Modulares (`src/components/`)**:
  - `Navbar`: Menú interactivo con soporte para vista móvil desplegable.
  - `ScrollProgress`: Barra superior de progreso de lectura.
  - `Hero`: Portada inmersiva con badge pulsante hacia la Vía Corta a Puerto Vallarta.
  - `MarqueeTicker`: Cintillo infinito animado con identidad jalisciense.
  - `Esencia`: Introducción y tarjetas interactivas de experiencia cultural.
  - `VallartaSpotlight`: Galería interactiva con gestión de estado de React (`useState`) para alternar entre el Malecón, Playa Los Muertos y la Zona Romántica.
  - `Destinations` & `DestinationCard`: Tarjetas de escapadas turísticas con efectos hover y badges temáticos.
  - `Foodie`: Experiencias gastronómicas Michelin y reseñas de Google Maps.
  - `Imperdibles`: Lugares emblemáticos y panel de identidad jalisciense.
  - `BackToTop`: Botón flotante para regresar rápidamente al inicio.
- **Datos Estructurados (`src/data/`)**: Separación clara entre vista y datos de destinos, gastronomía y galerías.
- **Automatización**: Flujo de trabajo en GitHub Actions (`.github/workflows/deploy.yml`) para compilación y despliegue continuo en GitHub Pages.

---

## Desarrollo Local

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. Compilar para producción:
   ```bash
   npm run build
   ```

4. Previsualizar la compilación de producción:
   ```bash
   npm run preview
   ```

---

## Despliegue en GitHub Pages

El proyecto incluye un flujo de trabajo de GitHub Actions (`.github/workflows/deploy.yml`) que compila y publica automáticamente la aplicación a GitHub Pages al enviar cambios a la rama `master`.
