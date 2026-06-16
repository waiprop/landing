/// <reference types="astro/client" />

interface Window {
	dataLayer: unknown[];
	gtag?: (...args: unknown[]) => void;
	fbq?: (...args: unknown[]) => void;
	_fbq?: unknown;
	trackMetaEvent?: (eventName: string, params?: Record<string, unknown>) => void;
	trackMetaCustomEvent?: (eventName: string, params?: Record<string, unknown>) => void;
	trackWhatsAppClick?: (ubicacion: string) => void;
	trackScheduleClick?: (ubicacion: string) => void;
}
