# SKILL: React Hook Form & Zod Architecture

## 1. Heurísticas de Arquitectura Core (Rendimiento en Formularios)
- **Inputs No Controlados por Defecto:** Usa `react-hook-form` para registrar (`register`) los inputs. Esto permite que el usuario escriba sin causar un re-render de todo el componente en cada pulsación de tecla.
- **Validación en el Borde (Schema Validation):** Usa `Zod` para definir la forma exacta de los datos esperados. El esquema de Zod debe ser la única fuente de verdad para la validación del cliente Y del servidor.
- **Separación de UI y Lógica:** Crea componentes de UI puros (ej. `<Input />`, `<Select />`) y usa el patrón `Controller` o `register` pasándoles las referencias. El componente del formulario solo debe orquestar.
- **Manejo de Estados Asíncronos:** Deshabilita el botón de envío y muestra indicadores de carga leyendo `isSubmitting` del estado del formulario (`formState`).

## 2. Antipatrones (QUÉ NO HACER NUNCA)
- ❌ **El Cascada de Re-renders (`useState` por input):** NUNCA uses `const [name, setName] = useState('')` para cada campo en un formulario complejo. Escribir en un campo no debe re-renderizar los demás.
- ❌ **Validación Manual con If/Else:** No escribas funciones de validación manuales (`if (password.length < 8) setErr(...)`). Delega toda la validación al resolver de Zod (`zodResolver`).
- ❌ **Confiar en la Validación del Cliente:** Nunca asumas que porque el formulario pasó la validación de Zod en el frontend, los datos son seguros. El mismo esquema de Zod DEBE ejecutarse en la API/Server Action.

## 3. Criterios de Auto-Evaluación (Ejecutar mentalmente antes de codificar)
- [ ] ¿Escribir rápidamente en un campo de texto mantiene los 60 FPS sin re-renderizar el formulario entero?
- [ ] ¿La validación está centralizada en un esquema de Zod inferible (`z.infer<typeof schema>`)?
- [ ] ¿Los mensajes de error están vinculados semánticamente a los inputs (ej. usando `aria-describedby` y `aria-invalid`)?
