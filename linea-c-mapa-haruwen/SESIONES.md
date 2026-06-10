# Guía de Sesiones: Cartografía de los Haruwen

Esta guía te ayudará a solicitar al Asistente de IA (Gemini CLI) las modificaciones requeridas en cada sesión.

---

## 🚀 Sesión 2: Inicialización (¡Completada!)
El mapa ya está configurado con Leaflet.js centrado en Tierra del Fuego. Cuenta con la base de datos geográfica (`haruwen.geojson`) y un sistema de respaldo (`datos_respaldo.js`) para evitar fallos locales de CORS.

---

## 🎨 Sesión 3: Capa Visual e Iconografía
* **Objetivo**: Cambiar los marcadores circulares del mapa por iconos personalizados diseñados por el equipo.
* **Acción**: Diseña tus iconos (flechas, huellas de caza, fuegos) en formato PNG transparente y colócalos en una carpeta `assets/`. Luego ejecuta este prompt:
  > *"Estamos en la Sesión 3. Modificaremos los marcadores circulares de Leaflet en 'script.js'. Reemplázalos por iconos de imagen personalizados cargados desde la carpeta local: 'assets/marker_ancestral.png' para campamentos y 'assets/marker_colonos.png' para estancias. Ajusta el código para que escale los iconos de forma responsiva."*

---

## 🗺️ Sesión 4: Datos Geográficos de los Investigadores
* **Objetivo**: Incorporar los puntos exactos recopilados de estancias y masacres históricas.
* **Acción**: Copia el siguiente prompt e ingresa las coordenadas proporcionadas por tus Investigadores:
  > *"Estamos en la Sesión 4. Necesitamos agregar nuevas coordenadas históricas reales a nuestro archivo 'haruwen.geojson' y 'datos_respaldo.js'. Incorpora los siguientes puntos con sus descripciones históricas correspondientes: [PEGA AQUÍ TUS PUNTOS Y COORDENADAS RECOPILEDAS]."*

---

## 🔍 Sesión 5: Expansión Lógica (Barra de Búsqueda de Clanes)
* **Objetivo**: Añadir una barra que permita buscar un clan familiar y encuadrar el mapa en su zona.
* **Acción**: Copia el siguiente prompt y envíalo a tu agente:
  > *"Estamos en la Sesión 5. Queremos agregar un buscador interactivo en nuestro mapa. Modifica 'index.html', 'style.css' y 'script.js' para añadir una barra de entrada `<input>` en la barra superior. Si el usuario escribe el nombre de un Haruwen (ej: 'Kamuk') o hito y presiona enter, el mapa debe ejecutar una animación de vuelo ('map.flyTo') hacia esas coordenadas y abrir la barra lateral de información correspondiente."*

---

## 🐛 Sesión 6: Debugging y Ajustes de Responsividad
* **Objetivo**: Depurar problemas visuales de Leaflet al redimensionar en móviles.
* **Acción**: Si los tiles o rejillas del mapa aparecen incompletos o en gris en ciertas pantallas, envía este prompt:
  > *"Estamos en la Sesión 6. Al abrir el mapa en celulares o cambiar el tamaño de la ventana, algunos cuadros del mapa (tiles) no se cargan o quedan en blanco hasta que movemos el mapa manualmente. Modifica 'script.js' para disparar la función 'map.invalidateSize()' de forma segura después de que la escena inicialice o tras cerrar/abrir el panel lateral."*

---

## 🌐 Sesión 7: Despliegue Final en GitHub Pages
* **Objetivo**: Publicar el mapa en internet de forma pública y gratuita.
* **Acción**: Ejecuta este prompt para preparar la subida:
  > *"Estamos en la Sesión 7. Prepara la estructura final de nuestro mapa interactivo para subirlo a GitHub Pages. Asegúrate de limpiar rastros de consologs de depuración, valida que los estilos responsivos estén perfectos y explícame los pasos rápidos para activar GitHub Pages desde el panel del repositorio de GitHub."*
