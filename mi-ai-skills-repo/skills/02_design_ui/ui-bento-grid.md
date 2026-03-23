# SKILL: Bento Grid Architecture

## 1. Heurísticas de Diseño (Leyes Matemáticas)
- **Espaciado Relacional:** El 'gap' entre tarjetas debe ser exactamente igual al 'padding' interno de las tarjetas (ej. gap-4 y p-4). Esto crea una cuadrícula matemáticamente perfecta.
- **Jerarquía Asimétrica:** Nunca hagas todas las tarjetas del mismo tamaño. Usa el patrón de proporciones (2x2 para el héroe, 1x2 para métricas, 1x1 para acciones secundarias).
- **Radios (Border Radius):** El radio exterior del contenedor padre debe ser matemáticamente proporcional al radio interior de los elementos secundarios para evitar tensión visual (Formula: `OuterRadius = InnerRadius + Padding`).

## 2. Antipatrones (QUÉ NO HACER)
- ❌ **No usar sombras difusas pesadas** (ej. drop-shadow-xl). El Bento Grid moderno utiliza bordes sutiles (border-1, color neutral-200 o neutral-800) y fondos ligeramente contrastantes.
- ❌ **No sobrecargar con texto.** Si una tarjeta es 1x1, máximo debe tener un ícono/métrica y 2 palabras.
- ❌ **No usar líneas de separación internas (dividers).** El espacio negativo (gap) es el único divisor que debes usar.

## 3. Criterios de Auto-Evaluación (Ejecutar antes de entregar)
- [ ] ¿El contraste del texto sobre el fondo de cada tarjeta cumple con 4.5:1?
- [ ] ¿Los paddings internos y los gaps externos tienen el mismo valor en el sistema de diseño (ej. `rem` o `px`)?
- [ ] ¿El diseño es responsive? (Debe colapsar a 1 columna en mobile sin romper la jerarquía).
