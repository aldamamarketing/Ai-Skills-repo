# 🧠 AI Skills Repo (Ultra-Optimized & Lazy-Loaded)

Este repositorio es un sistema de "Dirección de Diseño y Arquitectura" para asistentes de IA (Google AI Studio, Antigravity, Cursor, etc.). Su objetivo es producir aplicaciones profesionales, rápidas y ligeras.

## 🏛️ Decisiones Arquitectónicas (Reglas Inmutables)
1. **Economía de Tokens Extrema (Lazy Loading):** La IA NUNCA lee todos los skills de golpe. Lee el `ai_manifest.json` (un índice ultraligero) y decide qué archivos `.md` cargar según el contexto.
2. **Heurísticas vs. Plantillas:** No le damos a la IA código rígido para copiar y pegar. Le damos reglas matemáticas, heurísticas de diseño y antipatrones. La IA razona, no repite.
3. **Separación de Dominios Estricta:** El Frontend, la Arquitectura (Backend/BaaS) y el Diseño están separados. Si usamos Astro, la IA tiene prohibido cargar en memoria reglas de Next.js o Firebase.
4. **Validación Autónoma:** Cada skill obliga a la IA a ejecutar un "Checklist de Auto-Evaluación" mental antes de proponer código o diseño.

## 📂 Estructura del Repositorio
- `/ai_manifest.json` -> El cerebro del enrutamiento. La única pieza que la IA lee por defecto.
- `/skills/01_ideation/` -> Cómo pensar antes de programar (Brainstorming).
- `/skills/02_design_ui/` -> Reglas visuales y accesibilidad (A11y, Bento Grid, etc).
- `/skills/03_frontend_core/` -> Rendimiento en React, Next.js, Astro, PWA.
- `/skills/04_architecture/` -> APIs, Firebase, SEO, bases de datos.

## ⚙️ Cómo instalar y usar este repositorio

### Opción A: En Google AI Studio (Vía API/Function Calling)
1. Ve a "System Instructions" y dile a Gemini: *"Eres un arquitecto de software. Antes de empezar, lee el archivo `ai_manifest.json`. Usa la herramienta `load_skill` para cargar los conocimientos que necesites."*
2. Crea una "Herramienta" (Tool/Function Declaration) llamada `load_skill` que acepte un `skill_id`.
3. Cuando Gemini llame a la función, devuélvele el texto del archivo `.md` correspondiente.

### Opción B: En Entornos de Código (Antigravity / Cursor / Windsurf)
1. Clona este repositorio dentro de tu proyecto o tenlo en una carpeta global accesible por la IA.
2. En las reglas de tu workspace (ej. `.cursorrules` o instrucciones de Antigravity), pega esto:
   *"Al iniciar una tarea, lee silenciosamente `ai_manifest.json`. Busca los IDs relevantes a la tarea y lee exclusivamente esos archivos `.md` en la carpeta `/skills/`. Aplica sus heurísticas y antipatrones de forma estricta."*
