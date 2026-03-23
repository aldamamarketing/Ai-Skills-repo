# SKILL: UI Microinteractions & Animations

## 1. Heurísticas de Animación (Leyes de la Física Digital)
- **Propósito Funcional:** La animación debe guiar la atención o confirmar una acción (feedback), nunca ser puramente decorativa. Si quitas la animación y la interfaz deja de entenderse, el diseño base es defectuoso.
- **Rendimiento Estricto (GPU Only):** Anima ÚNICAMENTE las propiedades `transform` (translate, scale, rotate) y `opacity`. Estas propiedades son aceleradas por hardware y no causan recálculos de layout (Reflow).
- **Tiempos y Curvas (Timing & Easing):** Las microinteracciones deben ser rápidas (150ms - 300ms). Usa curvas de aceleración naturales (ej. `ease-out` para elementos que entran a la pantalla, `ease-in` para los que salen).
- **Accesibilidad (A11y):** Respeta SIEMPRE la preferencia del usuario. Envuelve animaciones complejas en verificaciones de `prefers-reduced-motion` (en Tailwind: `motion-safe:animate-fade-in`).

## 2. Antipatrones (QUÉ NO HACER NUNCA)
- ❌ **Animar Propiedades de Layout:** NUNCA animes `width`, `height`, `margin`, `padding`, `top` o `left`. Esto destruye los 60 FPS porque obliga al navegador a recalcular la posición de todos los elementos adyacentes. Usa `transform: scale()` o `transform: translate()` en su lugar.
- ❌ **Efecto "Montaña Rusa" (Staggering Excesivo):** No hagas que una lista de 20 elementos entre uno por uno con un retraso de 200ms cada uno. El usuario no debe esperar 4 segundos para poder interactuar con el contenido.
- ❌ **Animaciones Infinitas Distractoras:** Evita elementos que pulsan o rebotan infinitamente (`animate-bounce`, `animate-pulse`) a menos que sea un estado de carga crítico o una alerta de emergencia.

## 3. Criterios de Auto-Evaluación (Ejecutar mentalmente antes de codificar)
- [ ] ¿Las animaciones utilizan exclusivamente `opacity` o `transform`?
- [ ] ¿La interfaz sigue siendo 100% usable si el usuario tiene activado `prefers-reduced-motion`?
- [ ] ¿La duración de la animación de feedback (ej. hover en un botón) es inferior a 200ms?
