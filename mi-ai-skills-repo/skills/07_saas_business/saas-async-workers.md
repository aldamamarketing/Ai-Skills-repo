# SKILL: SaaS Async Workers & Background Jobs

## 1. Heurísticas de Arquitectura de Colas
- **Encolado Rápido:** El backend recibe la petición, crea un documento en Firestore (`status: PENDING`), lo envía a Cloud Tasks/PubSub y responde al instante con el `jobId`.
- **Procesamiento en Segundo Plano:** Un Worker (Cloud Function con timeout largo) procesa la tarea pesada de IA.
- **Actualización de Estado:** El Worker actualiza el progreso en Firestore (`PROCESSING`, `COMPLETED`, `FAILED`).
- **UX en Tiempo Real:** El frontend escucha el documento en Firestore (`onSnapshot`) y actualiza la UI sin bloquear al usuario.

## 2. Antipatrones (QUÉ NO HACER NUNCA)
- ❌ **Bloquear la UI:** Nunca hagas que el usuario espere una respuesta HTTP de 5 minutos para un proceso de IA.
- ❌ **Reintentos Infinitos:** Configura Cloud Tasks con un límite de reintentos y *Exponential Backoff* para evitar bucles de error costosos.
- ❌ **Falta de Feedback:** Nunca dejes al usuario sin saber el estado de su tarea en segundo plano.

## 3. Criterios de Auto-Evaluación (Ejecutar mentalmente antes de codificar)
- [ ] ¿El endpoint HTTP responde inmediatamente con un `jobId` en lugar de esperar a la IA?
- [ ] ¿El frontend usa un listener en tiempo real para mostrar el progreso?
- [ ] ¿El Worker actualiza el estado a `FAILED` si ocurre un error irrecuperable?
