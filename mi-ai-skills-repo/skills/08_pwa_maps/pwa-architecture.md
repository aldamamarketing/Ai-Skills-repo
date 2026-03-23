# SKILL: PWA Architecture & Native UX

## 1. Heurísticas de Diseño y Arquitectura PWA
- **Native Feel:** Usa Bottom Navigation en móviles. Desactiva la selección de texto (`select-none`) en elementos de UI. Oculta las scrollbars.
- **Safe Area Insets:** Usa `pt-safe` y `pb-safe` para respetar los notches y barras de gestos de iOS/Android.
- **Configuración Técnica:** Configura `manifest.json` con `display: "standalone"` y los meta tags de Apple (`apple-mobile-web-app-capable`).
- **Offline Persistence:** Habilita la persistencia local de Firestore (`persistentLocalCache()`) para que la app funcione sin internet y sincronice después.

## 2. Antipatrones (QUÉ NO HACER NUNCA)
- ❌ **Alertas del Navegador:** Nunca uses `window.alert()` o `window.confirm()`. Rompen la ilusión de app nativa.
- ❌ **Enlaces target="_blank":** Evita abrir nuevas pestañas para navegación interna, ya que expulsa al usuario de la PWA instalada.
- ❌ **Menú Hamburguesa Superior en Móvil:** Evita la navegación superior en móviles; prefiere la barra inferior por ergonomía.

## 3. Criterios de Auto-Evaluación (Ejecutar mentalmente antes de codificar)
- [ ] ¿La UI respeta las áreas seguras (safe areas) de los dispositivos móviles?
- [ ] ¿Firestore está configurado con persistencia offline?
- [ ] ¿Se ha desactivado la selección de texto en botones y menús?
