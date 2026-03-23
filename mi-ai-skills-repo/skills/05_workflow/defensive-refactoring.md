# SKILL: Defensive Refactoring & UI Overhaul

## 1. Heurísticas de Refactorización Segura (Do No Harm)
- **Separación de Preocupaciones (Logic Extraction):** Antes de rediseñar un componente visualmente, extrae toda la lógica de negocio (`useEffect`, llamadas a BD, cálculos de estado) a un Custom Hook (ej. `useBarberAppointments`). Esto permite cambiar el JSX (Tailwind, HTML) sin riesgo de romper la lógica de datos.
- **El Patrón de Componentes Paralelos (V2):** Si el rediseño es masivo, NO borres ni modifiques el componente original. Crea un `DashboardV2.tsx`. Conecta la lógica existente al nuevo componente. Una vez que el Tech Lead valide que V2 funciona y se ve bien, reemplaza el original.
- **Cambios Atómicos:** NUNCA mezcles una corrección de base de datos con un cambio de diseño de Tailwind en la misma respuesta o bloque de código. Resuelve un problema a la vez.
- **Lectura Comprensiva (Read Before Write):** Antes de modificar un archivo existente, lee y mapea mentalmente sus `props`, su estado local y sus dependencias. Respeta los nombres de variables y la estructura de datos que ya funciona.

## 2. Antipatrones (QUÉ NO HACER NUNCA)
- ❌ **Reescritura Destructiva (The "Rewrite" Reflex):** NUNCA reescribas un archivo de 500 líneas solo para cambiar el color de un botón o arreglar un margen. Modifica SOLO las líneas estrictamente necesarias.
- ❌ **Eliminar Código "Feo" pero Funcional:** Si encuentras un bloque de código que parece poco elegante pero funciona (ej. un cálculo de fechas complejo), NO lo refactorices a menos que el usuario lo pida explícitamente o sea la causa del bug.
- ❌ **Romper Contratos de Props:** Al rediseñar un componente hijo, no cambies los nombres ni los tipos de las `props` que recibe, ya que eso rompería el componente padre que lo está llamando.

## 3. Criterios de Auto-Evaluación (Ejecutar mentalmente antes de codificar)
- [ ] ¿He aislado la lógica de negocio antes de proponer cambios masivos en la UI?
- [ ] ¿Estoy modificando solo lo estrictamente necesario para cumplir el requerimiento del usuario?
- [ ] ¿He propuesto crear un componente "V2" para rediseños grandes en lugar de destruir el código actual?
