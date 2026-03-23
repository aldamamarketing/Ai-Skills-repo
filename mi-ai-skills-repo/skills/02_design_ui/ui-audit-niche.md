# SKILL: UI Audit & Niche Adaptation (Service Businesses)

## 1. El Protocolo de Auditoría (Cómo analizar la UI existente)
Cuando el usuario solicite una "UI Audit", la IA DEBE estructurar su respuesta en 3 fases:
1. **Diagnóstico de Fricción (The Bad):** Identificar exactamente qué está fallando (ej. "El header ocupa el 20% del viewport vertical", "El calendario en PC deja 40% de espacio en blanco a los lados").
2. **Principios del Nicho (The Theory):** Explicar qué espera el usuario final de este nicho específico (ej. Barberías/Servicios).
3. **Propuesta de Refactorización (The Fix):** Dar la solución arquitectónica en Tailwind/React.

## 2. Reglas de Nicho: Negocios de Servicios (Barberías, Clínicas, Spas)
- **Panel del Cliente (Emoción + Fricción Cero):** 
  - *Diseño:* Estilo "Editorial" o "Dark Luxury" (colores oscuros, acentos dorados/neón, tipografía sans-serif limpia).
  - *UX:* El selector de horas debe parecerse a la app de Apple Calendar (botones grandes, alto contraste para horas disponibles, opacidad 50% para ocupadas). Las galerías/Instagram feeds deben usar `aspect-square` o masonry grid.
- **Panel del Barbero (Utilidad Táctica):** 
  - *Diseño:* Estilo "Hardware/Specialist Tool" (modo oscuro obligatorio para reducir fatiga visual, alto contraste).
  - *UX:* Necesita ver su "Próxima Cita" en tamaño gigante. Los botones de acción ("Completado", "No Show") deben ser masivos (mínimo `h-14` o `h-16`) para poder tocarlos rápido con las manos ocupadas o sucias.
- **Panel del Administrador (Densidad y Control):** 
  - *Diseño:* Estilo "Technical Dashboard" (fondos claros/grises, tipografía monoespaciada para números/dinero).
  - *UX:* Tablas densas, gráficos de utilización de personal, y un "Master Calendar" que ocupe el 100% del ancho de la pantalla (`w-full`).

## 3. Soluciones a Problemas Comunes de Layout
- **Bloated Headers (Encabezados Gigantes):** 
  - *Solución:* Cambiar `py-10` o `h-32` por un navbar utilitario de `h-14` o `h-16`. Mover la navegación secundaria a un Sidebar colapsable o a un menú contextual.
- **Inefficient Space on PC (Desperdicio en Escritorio):**
  - *Solución:* Implementar el patrón **"Split Layout" o "Master-Detail"**. A la izquierda, la lista densa de citas o el calendario (70% del ancho). A la derecha, un panel lateral fijo (`w-96`) que muestra los detalles de la cita seleccionada, el perfil del cliente y el ticket de cobro. NUNCA centrar un formulario pequeño en una pantalla de 1920px.

## 4. Antipatrones de Auditoría
- ❌ **Auditorías Genéricas:** No respondas "Mejorar los colores y la accesibilidad". Sé quirúrgico: "Cambiar el padding del header de p-8 a p-3 para recuperar 40px de espacio vertical vital".
- ❌ **Ignorar el Contexto del Usuario:** Un barbero trabajando a toda prisa no tiene la misma paciencia que un administrador sentado en una oficina. Sus UIs deben ser radicalmente distintas aunque compartan la misma base de datos.
