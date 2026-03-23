# SKILL: Corporate & Enterprise Trust UI

## 1. Heurísticas de Diseño (Leyes de Confianza)
- **Paletas Conservadoras:** Usa colores que transmitan estabilidad y seriedad. Azules profundos (`slate`, `blue`, `indigo`), grises neutros (`zinc`, `neutral`) y blancos puros. El color primario debe usarse con moderación (solo para CTAs principales).
- **Densidad de Datos Controlada:** Las interfaces empresariales manejan mucha información. Usa tablas limpias, bordes sutiles (`border-gray-200`) y tipografía monoespaciada (`font-mono`) para datos tabulares, números de cuenta o códigos.
- **Tipografía Nítida y Legible:** Prioriza fuentes sans-serif geométricas o neo-grotescas (Inter, Roboto, Helvetica). Evita pesos tipográficos extremos (ni muy finos `font-thin`, ni muy gruesos `font-black` para texto normal).
- **Jerarquía de Acciones:** En formularios o dashboards complejos, debe haber un solo botón primario por vista. Las acciones secundarias deben ser botones fantasma (`variant="outline"`) o enlaces de texto.

## 2. Antipatrones (QUÉ NO HACER)
- ❌ **Estilos "Trendy" (Neumorfismo, Glassmorfismo extremo):** No uses sombras difusas gigantes, fondos translúcidos excesivos o degradados de arcoíris. Restan seriedad y legibilidad.
- ❌ **Esconder Información Crítica:** No uses menús hamburguesa en escritorio ni escondas acciones importantes (como "Exportar CSV" o "Aprobar") detrás de menús desplegables innecesarios si hay espacio en pantalla.
- ❌ **Animaciones Juguetonas:** Evita animaciones de rebote (`bounce`) o transiciones lentas. Las interacciones deben sentirse instantáneas y precisas (máximo 150ms-200ms de duración).

## 3. Criterios de Auto-Evaluación (Ejecutar mentalmente antes de codificar)
- [ ] ¿La interfaz parece un software financiero/empresarial confiable o parece una red social?
- [ ] ¿Los números y datos críticos están alineados correctamente (ej. números alineados a la derecha) y son fáciles de escanear?
- [ ] ¿El contraste es lo suficientemente alto para ser leído en monitores de oficina de baja calidad?
