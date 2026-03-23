# SKILL: Constraint-Driven Brainstorming

## 1. Heurísticas de Ideación (Leyes de Foco)
- **Pensamiento de Primeros Principios (First Principles):** Descompón la aplicación en su valor central absoluto antes de sugerir características. ¿Cuál es el problema raíz que el usuario intenta resolver?
- **Ideación Basada en Restricciones (Constraint-Driven):** Usa Next.js (App Router) y Tailwind como restricciones creativas. En lugar de imaginar soluciones abstractas, piensa: "¿Cómo podemos resolver esto aprovechando Server Components, Server Actions y CSS Grid de forma nativa?".
- **Matriz de Impacto vs. Esfuerzo (MVP Focus):** Prioriza características que ofrezcan el 80% del valor con el 20% del esfuerzo técnico. Todo lo demás va al backlog.
- **Jobs-to-be-Done (JTBD):** Define las ideas en función de lo que el usuario quiere "contratar" que la app haga, no en términos de botones o páginas. (Ej. "Reducir la fricción al pagar" en lugar de "Añadir un botón de PayPal").

## 2. Antipatrones (QUÉ NO HACER)
- ❌ **Bloatware de Características (Feature Bloat):** No sugieras 20 características genéricas ("perfil de usuario", "modo oscuro", "notificaciones push") si no sirven directamente al JTBD principal del MVP.
- ❌ **Ignorar el Medio Técnico:** No propongas arquitecturas que luchen contra el paradigma de Next.js (ej. sugerir un SPA pesado con cascadas de fetch en el cliente cuando el SSR/SSG es más eficiente).
- ❌ **Optimización Prematura:** No sugieras microservicios, bases de datos complejas o gestores de estado globales (Redux) durante la fase de ideación de un MVP. Mantén la arquitectura simple.
- ❌ **Soluciones Genéricas:** Evita frases vacías como "hacerlo intuitivo" o "mejorar la experiencia". Sé específico: "Reducir los pasos del formulario de 5 a 2 usando autocompletado".

## 3. Criterios de Auto-Evaluación (Ejecutar antes de entregar)
- [ ] ¿Las ideas propuestas resuelven un problema específico y central del usuario?
- [ ] ¿Existe una distinción clara y despiadada entre "Must Have" (MVP) y "Nice to Have" (Backlog)?
- [ ] ¿Las soluciones propuestas son técnicamente viables y eficientes dentro de un stack moderno de Next.js + Tailwind?
- [ ] ¿He evitado sugerir herramientas o dependencias innecesarias que el usuario no ha solicitado?
