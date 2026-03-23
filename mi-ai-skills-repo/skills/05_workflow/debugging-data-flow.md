# SKILL: Debugging Data Flow & Desyncs

## 1. Heurísticas de Depuración (El Pipeline de Datos)
- **Trazabilidad Inversa (Trace Backwards):** Cuando un dato "no se ve" en la UI, no asumas que el error está en el HTML. Sigue la ruta hacia atrás: 
  1. ¿El componente recibe las `props` o el estado correctamente?
  2. ¿El estado global (Zustand/React Query) tiene el dato?
  3. ¿La petición de red (Network/Fetch/Firebase) devolvió el dato?
  4. ¿El dato existe realmente en la Base de Datos con los permisos correctos?
- **Sincronización en Tiempo Real (El Problema del Desync):** Si el Panel del Cliente actualiza algo pero el Panel del Barbero no lo ve, el problema es la falta de reactividad. Verifica si se está usando un listener en tiempo real (ej. `onSnapshot` en Firebase) o si falta invalidar la caché (ej. `queryClient.invalidateQueries` en React Query).
- **Aislamiento del Bug:** Pide o inserta `console.log` estratégicos o usa React DevTools para confirmar en qué capa se está perdiendo la información antes de reescribir la lógica de renderizado.

## 2. Antipatrones (QUÉ NO HACER NUNCA)
- ❌ **Adivinanza Ciega (Blind Guessing):** No propongas cambiar clases de Tailwind o reestructurar el DOM cuando el problema descrito es que "la información de la base de datos no aparece". El problema es de datos, no de vista.
- ❌ **Ignorar Reglas de Seguridad (CORS/RLS):** Si los datos no cargan, no asumas inmediatamente que el código frontend está mal. Verifica siempre las reglas de seguridad de la base de datos (Firestore Rules, Supabase RLS) o problemas de CORS.
- ❌ **Forzar Re-renders Innecesarios:** No intentes arreglar un problema de desincronización forzando recargas de página (`window.location.reload()`) o metiendo estados en `useEffect` infinitos. Arregla la fuente de la reactividad.

## 3. Criterios de Auto-Evaluación (Ejecutar mentalmente antes de codificar)
- [ ] ¿He identificado en qué capa exacta (UI, Estado, Red, BD) se está rompiendo el flujo de datos?
- [ ] Si es un problema de desincronización entre dos paneles, ¿he verificado los mecanismos de tiempo real o invalidación de caché?
- [ ] ¿He separado el diagnóstico del problema de datos de cualquier problema visual?
