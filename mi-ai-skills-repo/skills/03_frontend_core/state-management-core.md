# SKILL: React State Management Architecture

## 1. Heurísticas de Arquitectura Core (Jerarquía del Estado)
- **Nivel 1: La URL como Fuente de Verdad:** Si el estado determina lo que el usuario ve y debería poder compartirse en un enlace (filtros, paginación, modales abiertos, pestañas activas), DEBE vivir en la URL (`searchParams`).
- **Nivel 2: Estado Local (`useState`):** Si el estado es efímero y solo le importa a un componente y a sus hijos directos (ej. si un acordeón está abierto o el texto temporal de un input), usa `useState`.
- **Nivel 3: Estado Global Ligero (Zustand):** Si múltiples componentes alejados en el árbol necesitan leer/escribir el mismo estado efímero del cliente (ej. un carrito de compras flotante, preferencias de UI del cliente), usa Zustand.
- **Nivel 4: Context API para Inyección:** Usa `React.Context` SOLO para inyección de dependencias que cambian muy poco (ej. Tema Claro/Oscuro, Sesión de Usuario).

## 2. Antipatrones (QUÉ NO HACER NUNCA)
- ❌ **Sincronización Redundante (Duplicar Estado):** Nunca leas un parámetro de la URL para meterlo en un `useState` y luego intentar mantener ambos sincronizados con `useEffect`. Lee directamente de los `searchParams`.
- ❌ **Context API para Alta Frecuencia:** NUNCA uses Context API para estados que cambian rápidamente (ej. coordenadas del ratón, inputs de texto globales). Context fuerza el re-render de TODOS los consumidores cada vez que el valor cambia, destruyendo el rendimiento.
- ❌ **Redux Prematuro:** No instales Redux "por si acaso". En el 95% de las aplicaciones modernas (especialmente con Server Components y React Query/SWR), Redux añade una complejidad innecesaria.
- ❌ **Estado Global para Datos del Servidor:** No uses Zustand ni Context para guardar datos que vienen de una API (ej. lista de usuarios). Usa el caché nativo de Next.js (`fetch`), React Query o SWR. El estado global es para el estado de la UI del cliente.

## 3. Criterios de Auto-Evaluación (Ejecutar mentalmente antes de codificar)
- [ ] ¿Si recargo la página o comparto el enlace, el usuario verá exactamente los mismos filtros y pestañas abiertas? (Si no, mueve ese estado a la URL).
- [ ] ¿He evitado usar Context API para valores que cambian más de una vez por segundo?
- [ ] ¿Estoy usando Zustand solo para estado puramente del cliente y no como caché de base de datos?
