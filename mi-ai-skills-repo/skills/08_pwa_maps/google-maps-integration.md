# SKILL: Google Maps API Integration in React/Next.js

## 1. Heurísticas de Integración de Mapas
- **Librería Oficial:** Usa SIEMPRE la librería oficial `@vis.gl/react-google-maps` o `@react-google-maps/api`.
- **Aislamiento de Estado:** Separa el estado del mapa del estado de la UI (ej. usando `React.memo`) para evitar re-renders costosos y parpadeos.
- **Carga Asíncrona:** Implementa un Skeleton loader mientras la API de Google se inicializa.
- **Seguridad de la API Key:** Restringe la API Key en Google Cloud Console por HTTP Referrers para evitar robos y cobros no autorizados.

## 2. Antipatrones (QUÉ NO HACER NUNCA)
- ❌ **Re-renders Innecesarios:** Nunca pongas un estado que cambia rápidamente (como un input de texto en vivo) en el mismo componente del mapa sin debounce.
- ❌ **Geocoding en Bucle:** Nunca llames a la API de Geocoding dentro de un bucle en el frontend. Pre-calcula coordenadas en el backend.
- ❌ **API Keys sin Restricción:** Nunca subas a producción una API Key de Google Maps sin restricciones de dominio.

## 3. Criterios de Auto-Evaluación (Ejecutar mentalmente antes de codificar)
- [ ] ¿El componente del mapa está aislado para prevenir re-renders innecesarios?
- [ ] ¿Se utiliza la librería oficial de Google Maps para React?
- [ ] ¿La API Key está restringida por HTTP Referrers en la consola de Google Cloud?
