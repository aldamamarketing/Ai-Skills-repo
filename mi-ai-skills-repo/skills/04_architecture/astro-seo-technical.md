# SKILL: Astro Technical SEO

## 1. Heurísticas de Implementación (Arquitectura de Islas)
- **Zero-JS por Defecto:** Aprovecha la mayor ventaja de Astro para el SEO: enviar 0kb de JavaScript al cliente. A menos que un componente necesite interactividad estricta, no uses directivas como `client:load` o `client:visible`.
- **Componente `<SEO>` Centralizado:** Crea un componente `SEO.astro` reutilizable que acepte props (`title`, `description`, `image`, `canonicalURL`) y colócalo en el `<head>` de tu layout principal.
- **Generación de Sitemaps:** Usa la integración oficial `@astrojs/sitemap`. Configúrala en `astro.config.mjs` para que genere automáticamente el `sitemap.xml` basándose en tus rutas estáticas y dinámicas durante el build.
- **URLs Canónicas Absolutas:** Astro proporciona `Astro.url` y `Astro.site`. Úsalos para construir URLs canónicas dinámicas y absolutas en tu componente SEO (`<link rel="canonical" href={new URL(Astro.url.pathname, Astro.site)} />`).

## 2. Antipatrones (QUÉ NO HACER NUNCA)
- ❌ **Hidratación Innecesaria:** Nunca uses `client:load` en componentes que solo renderizan texto o imágenes estáticas (ej. el contenido de un post de blog). Esto arruina el TTI (Time to Interactive) y penaliza el SEO.
- ❌ **Inconsistencia de Trailing Slashes:** No mezcles URLs con y sin barra final (`/about` vs `/about/`). Configura `trailingSlash: 'always'` o `'never'` en `astro.config.mjs` para evitar contenido duplicado en los motores de búsqueda.
- ❌ **Olvidar el `site` en la Configuración:** Si no defines la propiedad `site: 'https://tudominio.com'` en `astro.config.mjs`, las integraciones de sitemap y las URLs canónicas relativas fallarán o se generarán incorrectamente.

## 3. Criterios de Auto-Evaluación (Ejecutar mentalmente antes de codificar)
- [ ] ¿He creado un componente `<SEO>` reutilizable y lo he inyectado en el `<head>` del layout base?
- [ ] ¿La página final envía 0kb de JavaScript al navegador (excepto en las islas interactivas estrictamente necesarias)?
- [ ] ¿He configurado la propiedad `site` en `astro.config.mjs` para habilitar la generación correcta de sitemaps y URLs absolutas?
- [ ] ¿Las islas interactivas pesadas (ej. un reproductor de video) usan `client:visible` o `client:idle` en lugar de `client:load` para no bloquear el renderizado inicial?
