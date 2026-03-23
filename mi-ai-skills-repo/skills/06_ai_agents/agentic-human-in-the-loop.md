# SKILL: Agentic AI - Human-in-the-Loop (HITL) & Telegram

## 1. Heurísticas de Arquitectura Asíncrona (State Machine)
- **Máquina de Estados en Firestore:** Divide el agente en eventos. Ingesta -> Estado `PENDING_APPROVAL` -> Notificación Telegram -> Webhook Telegram -> Estado `PUBLISHED`.
- **Notificación Proactiva:** Usa la API de Telegram Bot con `InlineKeyboardMarkup` (botones integrados) para enviar opciones al humano. La Cloud Function debe morir inmediatamente tras enviar el mensaje.
- **Herramientas del Agente:** Provee herramientas como `saveDraftAndRequestApproval()` y `publishArticle()` que manipulen el estado en Firestore.

## 2. Antipatrones (QUÉ NO HACER NUNCA)
- ❌ **El Bucle de Espera (Sleep/Wait):** NUNCA hagas que una Cloud Function espere (`await`) la respuesta del humano. Causará un Timeout.
- ❌ **Pérdida de Contexto:** Nunca asumas el contexto. Guarda el `chat_id` y el ID del documento en el `callback_data` del botón de Telegram.
- ❌ **Publicación Directa:** Nunca permitas que el agente salte el estado de aprobación si el flujo exige supervisión humana.

## 3. Criterios de Auto-Evaluación (Ejecutar mentalmente antes de codificar)
- [ ] ¿La arquitectura es asíncrona y basada en eventos (sin esperas bloqueantes)?
- [ ] ¿Los botones de Telegram usan `callback_data` con el ID del documento?
- [ ] ¿El estado del flujo se guarda de forma persistente en Firestore?
