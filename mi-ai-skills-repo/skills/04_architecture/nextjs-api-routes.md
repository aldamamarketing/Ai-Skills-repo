# SKILL: Next.js API Routes & Backend Logic

## 1. Heurísticas de Arquitectura Core (APIs Nativas)
- **Route Handlers (App Router):** Usa la convención `app/api/[ruta]/route.ts`. Exporta funciones nombradas por el verbo HTTP (`export async function GET(request: Request)`).
- **Validación Estricta de Entrada:** Nunca confíes en el `req.body` o los parámetros de la URL. Usa una librería de validación (como Zod) para parsear y tipar los datos de entrada antes de procesarlos.
- **Respuestas Tipadas y Estándar:** Devuelve siempre respuestas JSON estructuradas usando `NextResponse.json()`. Usa los códigos de estado HTTP correctos (200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Server Error).
- **Controladores Delgados (Thin Controllers):** La ruta de la API solo debe encargarse de recibir la petición, validar la entrada, llamar a un servicio/caso de uso (lógica de negocio extraída en otra función) y devolver la respuesta.

## 2. Antipatrones (QUÉ NO HACER NUNCA)
- ❌ **Fugas de Errores Internos:** Nunca devuelvas el mensaje de error crudo de la base de datos al cliente (ej. `res.json({ error: dbError.message })`). Esto expone la estructura interna. Devuelve mensajes genéricos y registra el error real en el servidor (`console.error`).
- ❌ **Olvidar la Autenticación:** No asumas que una ruta es segura solo porque no hay un enlace en el frontend. Toda ruta que modifique datos o devuelva información sensible DEBE verificar la sesión/token del usuario en la primera línea.
- ❌ **Bloqueo del Hilo Principal:** No realices tareas pesadas sincrónicas (como procesamiento masivo de imágenes o bucles infinitos) en la ruta de la API. Usa colas de trabajo (Background Jobs) para tareas largas.

## 3. Criterios de Auto-Evaluación (Ejecutar mentalmente antes de codificar)
- [ ] ¿He validado el body de la petición (POST/PUT) o los search params (GET) antes de usarlos?
- [ ] ¿La ruta verifica correctamente si el usuario está autenticado y autorizado para realizar esta acción?
- [ ] ¿Estoy devolviendo un código de estado HTTP 4xx o 5xx apropiado cuando algo falla, en lugar de un 200 con un `{ error: true }`?
- [ ] ¿La lógica de negocio compleja está separada del archivo `route.ts`?
