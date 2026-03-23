# SKILL: Data-Dense Dashboards & Portals

## 1. Heurísticas de Arquitectura y Diseño (Space Utilization)
Los paneles de administración y herramientas de trabajo no son Landing Pages. La densidad de información es la prioridad.
- **Reducción de Headers:** Usa alturas fijas y compactas (`h-14` o `h-16`). El espacio vertical es oro puro.
- **Ancho Completo:** Usa `w-full px-4 sm:px-6 lg:px-8` o `max-w-[1600px]` para aprovechar monitores anchos.
- **Layouts Divididos:** En pantallas grandes, usa el patrón Master-Detail en lugar de modales.
- **Tablas Responsivas:** En PC, usa tablas densas (`px-3 py-2`, `font-mono text-sm`). En móvil, oculta la tabla y renderiza tarjetas apiladas (`grid md:hidden`).
- **Navegación Clara:** Todo botón de navegación principal debe tener una etiqueta de texto clara junto al icono. Prefiere un Sidebar lateral en PC.

## 2. Antipatrones (QUÉ NO HACER NUNCA)
- ❌ **Whitespace Excesivo:** No uses `gap-8` o `p-10` dentro de tarjetas de datos. Usa `gap-4` y `p-4`.
- ❌ **Tipografía Gigante:** No uses `text-2xl` o `text-3xl` para datos de tablas. Reserva esos tamaños solo para el KPI principal.
- ❌ **Scroll Horizontal en Móvil:** Nunca obligues al usuario a hacer scroll horizontal infinito en una tabla en su teléfono.

## 3. Criterios de Auto-Evaluación (Ejecutar mentalmente antes de codificar)
- [ ] ¿El header es lo suficientemente compacto para dejar espacio a los datos?
- [ ] ¿La tabla se transforma en tarjetas apiladas en vista móvil?
- [ ] ¿Los iconos de navegación tienen etiquetas de texto descriptivas?
