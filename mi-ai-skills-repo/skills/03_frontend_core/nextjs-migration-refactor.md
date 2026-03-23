# SKILL: Next.js Legacy Audit & Migration

## 1. Heurísticas de Refactorización (Pages a App Router)
- **Identificación del Paradigma:** Antes de sugerir código, identifica si el archivo está en `pages/` o en `app/`. Las reglas son mutuamente excluyentes.
- **Migración Incremental:** No intentes reescribir toda la app de golpe. Sugiere mover rutas hoja por hoja (ej. empezar por `/about` antes de tocar `/dashboard`).
- **De `getServerSideProps` a Server Components:** En el App Router, elimina `getServerSideProps`. Convierte el componente de la página en una función `async` y haz el `fetch` directamente dentro del componente.
- **Aislamiento de Estado (El Patrón "Hoja"):** Al migrar a App Router, extrae cualquier interactividad (`useState`, `onClick`) a componentes hijos pequeños marcados con `"use client"`. Deja la página principal como Server Component.

## 2. Antipatrones (QUÉ NO HACER NUNCA)
- ❌ **Mezclar Paradigmas:** NUNCA sugieras usar `export const metadata` dentro de la carpeta `pages/` (allí se usa `<Head>`). NUNCA sugieras `getServerSideProps` dentro de la carpeta `app/`.
- ❌ **Migración de Fuerza Bruta:** No envuelvas páginas enteras migradas al App Router con `"use client"` solo para que "vuelvan a funcionar" rápido. Esto destruye el propósito de la migración (rendimiento y SEO).
- ❌ **Uso de `next/router` en App Router:** El hook `useRouter` de `next/router` está deprecado en App Router. Debes usar `next/navigation`.

## 3. Criterios de Auto-Evaluación (Ejecutar mentalmente antes de codificar)
- [ ] ¿He verificado en qué directorio (`pages/` o `app/`) reside el archivo que el usuario quiere actualizar?
- [ ] ¿El código sugerido respeta estrictamente las APIs de la versión correspondiente de Next.js?
- [ ] ¿He propuesto aislar el estado del cliente en componentes pequeños en lugar de hacer toda la página `"use client"`?
