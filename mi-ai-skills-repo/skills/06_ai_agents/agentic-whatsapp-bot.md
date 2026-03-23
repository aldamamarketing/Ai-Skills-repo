# SKILL: Agentic AI & WhatsApp Integration (Function Calling)

## 1. Heurísticas de Arquitectura del Agente (Function Calling)
- **El Flujo:** Webhook (recibe mensaje) -> Firestore (memoria) -> Gemini API (con tools) -> Cloud Function (ejecuta tool) -> Gemini (respuesta final) -> WhatsApp.
- **Herramientas (Tools) Obligatorias:** Define funciones claras como `checkAvailability(date)`, `getServicesAndPrices()`, y `bookAppointment(data)`.
- **System Prompt Defensivo:** Instruye al agente a NUNCA inventar datos, a usar siempre las herramientas para verificar disponibilidad y a pedir todos los datos necesarios antes de agendar.

## 2. Antipatrones (QUÉ NO HACER NUNCA)
- ❌ **Alucinación de Datos:** Nunca permitas que el agente responda preguntas de disponibilidad basándose en su conocimiento general.
- ❌ **Confirmación Falsa:** Nunca envíes un mensaje de "Cita confirmada" si la herramienta de base de datos falló.
- ❌ **Falta de Idempotencia:** Nunca proceses el mismo ID de mensaje de WhatsApp dos veces (evita citas duplicadas por reintentos de red).

## 3. Criterios de Auto-Evaluación (Ejecutar mentalmente antes de codificar)
- [ ] ¿El agente tiene herramientas (tools) definidas para acceder a la base de datos?
- [ ] ¿El prompt prohíbe explícitamente inventar horarios o precios?
- [ ] ¿El webhook maneja la idempotencia para evitar duplicados?
