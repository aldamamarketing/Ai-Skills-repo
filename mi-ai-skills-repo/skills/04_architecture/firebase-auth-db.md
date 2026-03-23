# SKILL: Firebase Auth & Database Architecture

## 1. Heurísticas de Arquitectura Core (Seguridad y Rendimiento)
- **Seguridad por Defecto (Deny All):** Las reglas de Firestore deben empezar siempre bloqueando todo. Solo abre acceso explícito basado en validaciones estrictas.
- **Validación de Esquema en Reglas:** Firestore es NoSQL, pero debes forzar un esquema en las reglas de seguridad. Valida tipos de datos, campos requeridos y longitudes máximas de strings en cada `allow create` y `allow update`.
- **Aislamiento de PII (Datos Personales):** Nunca mezcles datos públicos (ej. nombre de usuario, avatar) con datos privados (ej. email, teléfono, configuración de pagos) en el mismo documento. Crea colecciones separadas (ej. `users_public` y `users_private`).
- **Timestamps del Servidor:** Nunca confíes en la hora del cliente. Usa siempre `serverTimestamp()` al escribir datos y valida en las reglas que `request.resource.data.createdAt == request.time`.

## 2. Antipatrones (QUÉ NO HACER NUNCA)
- ❌ **El Anti-patrón "Test Mode":** NUNCA generes reglas como `allow read, write: if true;` o `allow read, write: if request.auth != null;` a nivel global. Es una vulnerabilidad crítica.
- ❌ **Actualizaciones Basadas Solo en Propiedad:** No uses `allow update: if isOwner(userId);` sin validar también los datos. Un usuario podría borrar campos requeridos o inyectar un string de 1MB en su propio perfil, rompiendo la app.
- ❌ **Consultas sin Límites:** Nunca hagas un `getDocs` o `onSnapshot` a una colección entera sin un `.limit()`. Esto agota la cuota de lectura y destruye el rendimiento.
- ❌ **Escalada de Privilegios:** Nunca permitas que un usuario escriba su propio campo `role` o `isAdmin`. Estos campos deben ser inmutables por el cliente y solo modificables por un Admin SDK o Cloud Function.

## 3. Criterios de Auto-Evaluación (Ejecutar mentalmente antes de codificar)
- [ ] ¿He separado los datos sensibles de los datos que necesitan ser leídos públicamente?
- [ ] ¿Las reglas de Firestore validan que no se puedan inyectar campos no deseados o strings masivos?
- [ ] ¿Las consultas (`queries`) incluyen paginación o límites estrictos (`limit(20)`)?
- [ ] ¿El código maneja correctamente los errores de "Permisos Insuficientes" (Missing or insufficient permissions) mostrando un mensaje útil?
