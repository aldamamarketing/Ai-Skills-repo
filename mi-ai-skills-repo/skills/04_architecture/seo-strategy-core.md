# SKILL: SEO Strategy Core (Framework Agnostic)

## 1. Heurísticas de Estrategia SEO (Leyes Universales)
- **Jerarquía Semántica Estricta:** Toda página debe tener exactamente un `<h1>` que describa el tema principal. Los subtítulos deben seguir un orden lógico (`<h2>`, luego `<h3>`). Nunca saltes niveles (ej. de `<h1>` a `<h3>` directamente).
- **Core Web Vitals como Prioridad:** El SEO moderno no es solo texto, es rendimiento. El LCP (Largest Contentful Paint) debe ocurrir en menos de 2.5s. El CLS (Cumulative Layout Shift) debe ser casi cero (reserva espacio para imágenes y anuncios antes de que carguen).
- **Indexabilidad y Rastreo:** Si el contenido principal depende de una petición AJAX del lado del cliente (`useEffect` o `fetch` en el navegador) para renderizarse, los motores de búsqueda podrían no verlo. El contenido crítico DEBE estar en el HTML inicial (SSR o SSG).
- **Metadatos Ricos (OpenGraph & Twitter Cards):** Todo enlace compartido en redes sociales debe verse profesional. Requiere `og:title`, `og:description`, `og:image` (idealmente 1200x630px) y `og:url` canónica.

## 2. Antipatrones (QUÉ NO HACER NUNCA)
- ❌ **Ocultar Texto Crítico:** No uses acordeones, pestañas o modales para esconder el texto principal por el que quieres posicionar. Google da menos peso al texto oculto por defecto.
- ❌ **Canibalización de Palabras Clave:** No crees múltiples páginas compitiendo por la misma intención de búsqueda exacta sin usar etiquetas `rel="canonical"` para indicar cuál es la principal.
- ❌ **Imágenes sin Contexto:** Nunca subas una imagen sin el atributo `alt`. El `alt` no es para decir "imagen de un coche", sino para describir la función o el contenido específico ("Coche deportivo rojo modelo 2024 en la nieve").
- ❌ **URLs Opacas:** Evita URLs con parámetros incomprensibles (`/p?id=123&cat=4`). Usa URLs semánticas y legibles (`/coches/deportivos/rojo-2024`).

## 3. Criterios de Auto-Evaluación (Ejecutar mentalmente antes de codificar)
- [ ] ¿La página tiene un único `<h1>` y una jerarquía de encabezados lógica?
- [ ] ¿El contenido principal es visible en el código fuente de la página sin ejecutar JavaScript?
- [ ] ¿Las imágenes más grandes (Hero images) tienen prioridad de carga (preload/fetchpriority="high") para mejorar el LCP?
- [ ] ¿Se han definido las etiquetas OpenGraph para asegurar que la página se vea bien al compartirse?
