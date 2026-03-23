# SKILL: Next.js Technical SEO (App Router)

## 1. Heurísticas de Implementación (APIs Nativas)
- **Metadata API Estática:** Usa `export const metadata: Metadata = { ... }` en `layout.tsx` o `page.tsx` para definir títulos, descripciones y OpenGraph. Next.js fusionará automáticamente la metadata de los layouts padres con las páginas hijas.
- **Metadata Dinámica:** Para páginas generadas dinámicamente (ej. `/blog/[slug]`), usa la función `export async function generateMetadata({ params }): Promise<Metadata>`. Haz el fetch de los datos aquí; Next.js memoizará la petición si usas `fetch` nativo, por lo que no harás doble consulta en el componente de la página.
- **Sitemaps y Robots Nativos:** Crea archivos `sitemap.ts` y `robots.ts` en la raíz de `app/`. Next.js los compilará dinámicamente. Usa esto para generar sitemaps masivos conectándote a tu base de datos.
- **Optimización de Imágenes (LCP):** Usa siempre el componente `<Image>` de `next/image`. Para la imagen principal de la página (Hero), añade la propiedad `priority` para precargarla y mejorar el LCP.

## 2. Antipatrones (QUÉ NO HACER NUNCA)
- ❌ **Uso del antiguo `<Head>`:** Nunca uses `import Head from 'next/head'` en el App Router. Esa API está deprecada. Usa exclusivamente la Metadata API.
- ❌ **Metadata en Client Components:** No puedes exportar `metadata` o `generateMetadata` desde un archivo que tenga la directiva `"use client"`. El SEO debe manejarse estrictamente en Server Components.
- ❌ **Hardcodear URLs Canónicas:** No escribas a mano la URL canónica en cada página. Usa la propiedad `metadataBase: new URL('https://tudominio.com')` en el layout raíz, y Next.js resolverá las URLs relativas automáticamente.

## 3. Criterios de Auto-Evaluación (Ejecutar mentalmente antes de codificar)
- [ ] ¿He utilizado `generateMetadata` para inyectar el título y descripción correctos en rutas dinámicas?
- [ ] ¿El layout raíz define un `metadataBase` y plantillas de título (`title: { template: '%s | Mi App', default: 'Mi App' }`)?
- [ ] ¿La imagen más grande del viewport inicial (LCP) tiene la propiedad `priority={true}`?
- [ ] ¿He verificado que ningún componente marcado con `"use client"` intente exportar metadatos?
