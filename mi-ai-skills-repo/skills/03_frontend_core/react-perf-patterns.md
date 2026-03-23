# SKILL: React & Next.js Performance Architecture

## 1. Heurísticas de Arquitectura Core (El Estándar)
- **Aislamiento del Cliente (Client Boundaries):** Por defecto, TODO en Next.js App Router es un Server Component. Solo usa `"use client"` en la hoja más profunda del árbol de componentes (ej: el botón de 'like', no la tarjeta completa). Si un componente no tiene interactividad (onClick, useState), DEBE ser de servidor.
- **Composición vs. Prop Drilling:** Si necesitas pasar un componente de servidor dentro de un componente de cliente, pásalo como un `children` prop. NUNCA cambies un componente a `"use client"` solo para anidar cosas dentro de él.
- **Data Fetching Nativo:** No uses `useEffect` para obtener datos iniciales. Usa funciones asíncronas directamente en los Server Components y aprovecha `Suspense` para estados de carga granulares.
- **Manejo de Estado Mínimo:** Antes de usar `useState` o un contexto global, evalúa si ese estado puede vivir en la URL (Search Params). La URL es el mejor gestor de estado para filtros, paginaciones y modales en Next.js.

## 2. Antipatrones (QUÉ NO HACER NUNCA)
- ❌ **El Anti-patrón "Use Client" Global:** Nunca coloques `"use client"` en layouts principales (`layout.tsx`) o páginas contenedoras. Esto destruye el SEO y envía kilobytes de JS inútil al navegador.
- ❌ **Abuso de `useMemo` / `useCallback`:** No memoices todo prematuramente. Solo úsalos si un componente hijo está envuelto en `memo()` o si estás pasando un objeto/función como dependencia a un `useEffect`.
- ❌ **Bloqueo en Cascada (Waterfall Loading):** No uses múltiples `await` seguidos en un Server Component a menos que un dato dependa estrictamente del anterior. Usa `Promise.all()` para peticiones paralelas.

## 3. Criterios de Auto-Evaluación (Ejecutar mentalmente antes de codificar)
- [ ] ¿He colocado la directiva `"use client"` en el componente más pequeño y profundo posible?
- [ ] ¿Estoy utilizando la URL para manejar el estado de los filtros o modales en lugar de `useState`?
- [ ] ¿El componente renderiza contenido de forma instantánea usando `Suspense` y `loading.tsx` mientras los datos asíncronos cargan?
- [ ] ¿El código entregado minimiza el peso del JavaScript enviado al navegador?
