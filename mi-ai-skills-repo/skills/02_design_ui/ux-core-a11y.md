# SKILL: UX Core & Accessibility (A11y)

## 1. Heurísticas de Accesibilidad (Leyes Universales)
- **Contraste Matemático (WCAG AA):** El texto normal debe tener un ratio de contraste de al menos 4.5:1 respecto a su fondo. El texto grande (18pt+) o componentes de UI (bordes de inputs) deben tener al menos 3:1. Usa colores como `text-slate-900` sobre `bg-white` o `text-slate-100` sobre `bg-slate-900`.
- **Semántica Estricta:** Usa el elemento HTML correcto para el trabajo. Si tiene una acción, es un `<button>`. Si navega a otra URL, es un `<a>`. Nunca uses un `<div onClick={...}>` a menos que estés construyendo un componente interactivo complejo (y en ese caso, necesita roles ARIA y manejo de teclado).
- **Indicadores de Foco Visibles:** Todo elemento interactivo debe tener un estado de foco claro para la navegación por teclado. Usa `focus-visible:ring-2 focus-visible:ring-offset-2` en Tailwind.
- **Iconos con Contexto:** Si un botón solo tiene un ícono (ej. un botón de "X" para cerrar), DEBE tener un `aria-label="Cerrar"` o un texto oculto para lectores de pantalla (`sr-only`).

## 2. Antipatrones (QUÉ NO HACER NUNCA)
- ❌ **Eliminar el Outline sin Reemplazo:** Nunca uses `outline-none` sin emparejarlo con un estado de foco alternativo (ej. `focus:ring`).
- ❌ **Color como Único Indicador:** No uses solo el color rojo para indicar un error. Acompáñalo con un ícono (⚠️) o texto descriptivo. El daltonismo afecta al 8% de los hombres.
- ❌ **Inputs sin Labels:** Nunca crees un `<input>` sin un `<label>` asociado (ya sea visual o mediante `aria-label`). El atributo `placeholder` NO sustituye a un label.
- ❌ **Animaciones Incontrolables:** No uses animaciones de parpadeo rápido o movimiento excesivo sin respetar la preferencia del sistema `prefers-reduced-motion`.

## 3. Criterios de Auto-Evaluación (Ejecutar mentalmente antes de codificar)
- [ ] ¿Puedo navegar por toda esta interfaz usando solo la tecla `Tab` y `Enter`?
- [ ] ¿Los colores elegidos pasan la prueba de contraste 4.5:1?
- [ ] ¿He utilizado etiquetas semánticas (`<nav>`, `<main>`, `<article>`, `<button>`) en lugar de una "sopa de divs"?
- [ ] ¿Los elementos interactivos sin texto visible tienen atributos `aria-label`?
