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
- **Google Analytics 4 (GA4)**: Módulo nativo con soporte para variable de entorno `VITE_GA_MEASUREMENT_ID` y seguimiento de eventos clave (galerías, mapas, enlaces).

---

## Configuración de Google Analytics (GA4)

1. Crea o edita el archivo `.env` en la raíz del proyecto (toma como referencia `.env.example`):
   ```env
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
   *(Reemplaza `G-XXXXXXXXXX` con tu ID de medición obtenido en Google Analytics > Administrador > Flujos de datos).*

2. Para que las métricas funcionen en GitHub Pages:
   - Ve a tu repositorio en GitHub > **Settings** > **Secrets and variables** > **Actions** > **Variables**.
   - Agrega una nueva variable llamada `VITE_GA_MEASUREMENT_ID` con el valor de tu ID (`G-XXXXXXXXXX`).
   - El flujo de GitHub Actions la tomará automáticamente durante la compilación.

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
