# SKILL: SaaS Monetization & Tokenomics (Stripe + AI Credits)

## 1. Heurísticas de Arquitectura de Créditos
- **El Banco de Créditos:** Mantén un campo `availableCredits` en el documento del Tenant (`/tenants/{tenantId}`).
- **El Peaje (Middleware):** ANTES de llamar a Gemini, el backend debe verificar que `availableCredits > 0`.
- **El Cobro:** DESPUÉS de usar la IA, descuenta los créditos usando `FieldValue.increment(-cost)`.
- **Stripe Webhooks:** Escucha eventos como `invoice.payment_succeeded` para recargar los créditos del tenant automáticamente.

## 2. Antipatrones (QUÉ NO HACER NUNCA)
- ❌ **Descontar Créditos en el Frontend:** NUNCA restes créditos desde el código de React. Un usuario malicioso puede bloquear la petición.
- ❌ **Llamadas a la API sin Límite:** Nunca expongas un endpoint de IA sin Rate Limit y verificación de saldo.
- ❌ **Suscripción Plana Ilimitada:** Evita ofrecer IA ilimitada por un precio fijo, ya que los costos de la API de Gemini son variables.

## 3. Criterios de Auto-Evaluación (Ejecutar mentalmente antes de codificar)
- [ ] ¿La verificación y el descuento de créditos ocurren 100% en el backend?
- [ ] ¿El webhook de Stripe actualiza el saldo de créditos de forma segura?
- [ ] ¿El sistema bloquea la ejecución de la IA si el saldo es cero o negativo?
