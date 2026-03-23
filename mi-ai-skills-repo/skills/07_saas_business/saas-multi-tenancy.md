# SKILL: SaaS Multi-Tenancy (B2B Isolation)

## 1. Heurísticas de Arquitectura de Base de Datos
- **La Regla de Oro:** TODO documento en la base de datos DEBE tener un campo `tenantId` (el ID de la empresa).
- **Estructura:** Usa colecciones globales (`/users`, `/appointments`) pero con el campo `tenantId` en cada documento.
- **Seguridad (Custom Claims):** Inyecta el `tenantId` en el token de autenticación del usuario mediante una Cloud Function.
- **Firestore Rules:** Bloquea el acceso a nivel de base de datos: `allow read, write: if request.auth.token.tenantId == resource.data.tenantId;`.

## 2. Antipatrones (QUÉ NO HACER NUNCA)
- ❌ **Filtrado solo en Frontend:** Nunca confíes en `where("tenantId", "==", id)` en el frontend como única medida de seguridad.
- ❌ **Colecciones por Tenant:** Nunca crees colecciones raíz dinámicas por empresa (ej. `/barberiaA_users`). Escala mal.
- ❌ **Agentes Cruzados:** Un agente de IA nunca debe consultar la base de datos sin que el backend inyecte forzosamente el `tenantId`.

## 3. Criterios de Auto-Evaluación (Ejecutar mentalmente antes de codificar)
- [ ] ¿Todos los documentos operativos tienen un campo `tenantId`?
- [ ] ¿Las reglas de Firestore validan el `tenantId` contra el token del usuario?
- [ ] ¿El backend inyecta el `tenantId` en las consultas de los agentes de IA?
