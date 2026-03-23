# SKILL: Slot Booking Math & Calendar Logic

## 1. Heurísticas de Arquitectura Core (Cálculo de Huecos)
- **Generación de la Línea de Tiempo Maestra (Master Timeline):** El primer paso siempre es generar un array con todos los bloques posibles del día según el intervalo base (ej. bloques de 15 min desde las 09:00 hasta las 18:00).
- **Filtrado Consciente de la Duración (Duration-Aware Filtering):** Para saber si un hueco está disponible, NO basta con comprobar si ese bloque específico está libre. Debes comprobar si existen `N` bloques consecutivos libres. 
  - *Fórmula:* Si el servicio dura 45 min y los bloques son de 15 min, necesitas 3 bloques. Si el usuario selecciona las 09:15, el algoritmo DEBE verificar que `[09:15, 09:30, 09:45]` estén libres. Si las 09:45 está ocupado, las 09:15 NO es un inicio válido.
- **Integración con Calendar API (Free/Busy):** Al consultar Google Calendar, obtendrás un array de eventos ocupados (`busy`). Debes iterar sobre tu Master Timeline y marcar como "ocupado" cualquier bloque de 15 minutos cuyo inicio o fin se superponga (overlap) con los rangos de Google Calendar.
- **Buffer Times (Tiempo de Limpieza):** Si el servicio requiere limpieza, suma el `bufferTime` a la duración del servicio ANTES de calcular los bloques necesarios. (Ej. Servicio 30m + Limpieza 15m = Bloquear 45m).

## 2. Antipatrones (QUÉ NO HACER NUNCA)
- ❌ **Validación de un Solo Bloque:** Nunca permitas agendar un servicio de 1 hora en un hueco libre de 15 minutos solo porque el bloque de inicio estaba vacío.
- ❌ **Cálculos de Tiempo con Strings:** Nunca hagas lógica de superposición comparando strings como `"09:15" < "09:30"`. Convierte todas las horas a minutos desde la medianoche (ej. 09:15 = `9 * 60 + 15 = 555`) o usa Timestamps (Epoch) para hacer matemáticas seguras.
- ❌ **Ignorar el Tiempo Pasado:** Nunca muestres como disponibles los bloques de tiempo que ya pasaron en el día actual. Filtra el Master Timeline contra `Date.now()`.

## 3. Criterios de Auto-Evaluación (Ejecutar mentalmente antes de codificar)
- [ ] ¿El algoritmo verifica la disponibilidad de bloques consecutivos basándose en la duración total del servicio?
- [ ] ¿Se están convirtiendo las respuestas de la API del Calendario (Free/Busy) a la misma unidad de medida (ej. minutos desde medianoche) que los bloques de la UI?
- [ ] ¿El código previene que un servicio se extienda más allá del horario de cierre (ej. agendar un servicio de 1 hora a las 17:45 si cierran a las 18:00)?
