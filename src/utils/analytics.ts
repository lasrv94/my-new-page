// Declaraciones de tipos para la API global de Google Analytics (gtag.js)
declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

let isInitialized = false;

/**
 * Inicializa Google Analytics 4 (GA4) cargando dinámicamente el script gtag.js
 * utilizando el ID proporcionado o el configurado en VITE_GA_MEASUREMENT_ID.
 */
export function initGA(customId?: string): boolean {
  if (isInitialized) return true;

  const measurementId =
    customId || (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined);

  if (!measurementId || measurementId.trim() === '' || measurementId.includes('XXXXXXXXXX')) {
    if (import.meta.env.DEV) {
      console.info(
        '[Analytics] GA4 no inicializado: VITE_GA_MEASUREMENT_ID no está configurado en .env'
      );
    }
    return false;
  }

  try {
    // Inicializar dataLayer
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer?.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      send_page_view: true,
    });

    // Inyectar script oficial de Google Analytics en el <head>
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
      measurementId
    )}`;
    document.head.appendChild(script);

    isInitialized = true;
    if (import.meta.env.DEV) {
      console.log(`[Analytics] GA4 inicializado con ID: ${measurementId}`);
    }
    return true;
  } catch (error) {
    console.error('[Analytics] Error al inicializar Google Analytics:', error);
    return false;
  }
}

/**
 * Registra una página vista manualmente en GA4.
 */
export function trackPageView(pageTitle?: string, path?: string): void {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_title: pageTitle || document.title,
      page_location: window.location.href,
      page_path: path || window.location.pathname + window.location.hash,
    });
  }
}

/**
 * Registra un evento de interacción personalizado en GA4.
 *
 * @param eventName Nombre del evento (ej: 'select_vallarta_tab', 'click_maps_restaurant')
 * @param params Parámetros adicionales del evento
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, any>
): void {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params || {});
  } else if (import.meta.env.DEV) {
    console.debug(`[Analytics Debug] Evento registrado: ${eventName}`, params);
  }
}
