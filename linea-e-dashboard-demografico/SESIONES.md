# Guía de Sesiones: Dashboard del Fin del Mundo (Panel de Datos)

Esta bitácora te indicará cómo guiar a tu Asistente de IA (Gemini CLI) en cada una de las sesiones de clase.

---

## 🚀 Sesión 2: Inicialización (¡Completada!)
El panel de visualización ya está configurado con Chart.js responsivo y contiene el set de datos demográficos de Tierra del Fuego (`datos_historicos.js`) totalmente funcionales sin requerir tu intervención en el código.

---

## 🎨 Sesión 3: Capa Visual y Diseño de Colores Significativos
* **Objetivo**: Personalizar los colores de los gráficos para adaptarlos a la paleta Selk'nam (arcilla y carbón).
* **Acción**: Copia el siguiente prompt y envíaselo a la IA:
  > *"Estamos en la Sesión 3. Queremos personalizar el estilo de los dos gráficos en 'script.js'. Cambia el color de la línea de evolución demográfica a un degradado rojo arcilla brillante, y haz que las barras de reducción acumulada tengan un color degradado que varíe de amarillo ocre a rojo fuego según el valor porcentual (barras más altas, más rojas)."*

---

## 🗺️ Sesión 4: Datos e Hitos Adicionales
* **Objetivo**: Integrar nuevos hitos demográficos recopilados por tus Investigadores.
* **Acción**: Pide los textos a tus investigadores, copia este prompt e insértalos:
  > *"Estamos en la Sesión 4. Queremos agregar nuevos años de registro histórico a nuestra base de datos. Modifica 'datos_historicos.js' para incorporar las siguientes cifras e hitos: [INSERTA LOS DATOS Y AÑOS DEL EQUIPO]. Revisa que la lógica de ordenamiento por años en 'script.js' siga funcionando de forma automática."*

---

## 🎛️ Sesión 5: Expansión Lógica (Exportación de Reporte PDF/Imagen)
* **Objetivo**: Descargar un reporte de los datos o guardar el gráfico en la computadora.
* **Acción**: Copia el siguiente prompt y envíaselo a la IA:
  > *"Estamos en la Sesión 5. Queremos agregar una funcionalidad para exportar los datos. Modifica 'index.html' y 'script.js' para añadir un botón de 'Exportar Gráfico'. Al presionarlo, el JavaScript debe capturar el lienzo `<canvas>` activo y descargarlo como un archivo de imagen PNG en la computadora de forma automática."*

---

## 🐛 Sesión 6: Debugging de Responsividad en Pantallas de Tablet
* **Objetivo**: Evitar deformaciones en resoluciones intermedias.
* **Acción**: Si los gráficos aparecen deformados en tablets, copia este prompt:
  > *"Estamos en la Sesión 6. Al visualizar el panel en tablets, el gráfico de líneas se reduce demasiado verticalmente y la leyenda se deforma. Modifica 'style.css' y la configuración del objeto de opciones de Chart.js en 'script.js' para asegurar una relación de aspecto mínima (aspectRatio) de forma responsiva."*

---

## 🌐 Sesión 7: Despliegue en GitHub Pages
* **Objetivo**: Publicar el panel de datos en internet.
* **Acción**: Ejecuta este prompt:
  > *"Estamos en la Sesión 7. Prepara el proyecto para su despliegue final en GitHub Pages. Asegúrate de verificar que el HTML use rutas relativas para los archivos locales, limpia consologs e indícame paso a paso cómo publicarlo."*
