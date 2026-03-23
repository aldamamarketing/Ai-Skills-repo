# SKILL: Date, Time & Scheduling Architecture

## 1. Heurísticas de Arquitectura Core (La Ley del Tiempo)
- **Almacenamiento Absoluto (UTC Siempre):** TODA fecha y hora debe guardarse en la base de datos en formato UTC (preferiblemente ISO 8601: `2026-03-22T14:00:00.000Z`) o como un Timestamp nativo de la base de datos. Nunca guardes "14:00" como un string sin contexto de zona horaria.
- **Visualización Relativa (Local Time):** La conversión a la zona horaria del usuario SOLO debe ocurrir en la capa de la Interfaz de Usuario (Frontend) en el momento de renderizar. Usa `Intl.DateTimeFormat` o librerías ligeras como `date-fns` o `dayjs`.
- **Agendamiento Consciente de Zonas Horarias:** En una app de agendamiento, si el Usuario A (México) agenda una reunión con el Usuario B (España), la UI debe permitir seleccionar la hora en la zona del Usuario A, el sistema la convierte a UTC para guardarla, y cuando el Usuario B la ve, el sistema convierte ese UTC a la hora de España.
- **Validación de Superposición (Overlaps):** La lógica para evitar reuniones duplicadas debe hacerse en el backend consultando rangos de Timestamps (ej. `startTime < nueva_reunion.end && endTime > nueva_reunion.start`).

## 2. Antipatrones (QUÉ NO HACER NUNCA)
- ❌ **Manipulación con `new Date()` Nativo:** Evita hacer matemáticas de fechas a mano (ej. `fecha.getTime() + 24 * 60 * 60 * 1000`). No tiene en cuenta los años bisiestos ni los cambios de horario de verano (DST). Usa librerías especializadas.
- ❌ **Confiar en el Reloj del Cliente para Lógica Crítica:** Nunca uses la hora del navegador del usuario para validar si un evento ya pasó o para registrar cuándo se creó un documento. Usa siempre la hora del servidor (`serverTimestamp`).
- ❌ **Guardar Zonas Horarias como Strings Simples:** No guardes "EST" o "PST". Esas abreviaturas son ambiguas. Usa identificadores de la base de datos IANA (ej. `America/Mexico_City`, `Europe/Madrid`).

## 3. Criterios de Auto-Evaluación (Ejecutar mentalmente antes de codificar)
- [ ] ¿El payload que se envía a la API/Base de datos está estrictamente en UTC (ISO 8601)?
- [ ] ¿He evitado hacer cálculos de fechas manuales y he delegado esa responsabilidad a una librería robusta o a la API `Intl`?
- [ ] ¿La interfaz muestra claramente en qué zona horaria está viendo la información el usuario (ej. "14:00 (Hora local)")?
