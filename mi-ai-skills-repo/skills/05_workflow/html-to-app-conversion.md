# SKILL: HTML Prototypes to Functional App Conversion

## 1. Heurísticas de Consolidación (El Protocolo de 4 Fases)
- **Fase 1: Extracción del Sistema de Diseño:** Escanea todos los HTMLs y extrae la "Verdad Absoluta" (Colores, Tipografía). Unifica en `globals.css` o `tailwind.config.ts`.
- **Fase 2: Cosecha de Componentes:** Identifica patrones visuales repetidos y crea componentes atómicos en `/components/ui/` usando variables globales.
- **Fase 3: Arquitectura de Layouts:** Extrae la navegación a un `layout.tsx` global o anidado.
- **Fase 4: Traducción Funcional:** Reemplaza el HTML estático por JSX/Tailwind y los datos falsos por estado de React o props.

## 2. Antipatrones (QUÉ NO HACER NUNCA)
- ❌ **Traducción 1:1 Ciega:** Nunca pegues un HTML entero dentro de un `page.tsx` sin extraer sus componentes reutilizables.
- ❌ **Colores Hardcodeados:** Nunca dejes clases como `text-[#ff5733]` esparcidas. Conviértelas a tokens semánticos (ej. `text-primary`).
- ❌ **Ignorar Inconsistencias:** Nunca consolides estilos contradictorios sin unificar (ej. bordes redondos vs cuadrados).

## 3. Criterios de Auto-Evaluación (Ejecutar mentalmente antes de codificar)
- [ ] ¿He extraído y unificado la paleta de colores antes de crear componentes?
- [ ] ¿He creado componentes reutilizables para elementos repetidos (botones, tarjetas)?
- [ ] ¿He separado el layout global (nav/sidebar) de las páginas individuales?
