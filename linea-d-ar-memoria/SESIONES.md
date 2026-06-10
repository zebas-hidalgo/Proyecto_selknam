# Guía de Sesiones: Memoria Viva (AR Web)

Esta guía orienta al equipo para instruir a la IA (Gemini CLI) en cada sesión del cronograma.

---

## 🚀 Sesión 2: Inicialización (¡Completada!)
El proyecto de Realidad Aumentada inicial ha sido creado. Cuenta con importaciones de CDN estables para evitar caídas en móviles y un marcador genérico imprimible (`marcador_imprimir.svg`) listo para usarse.

---

## 🎨 Sesión 3: Capa Visual y Diseño de Tarjeta
* **Objetivo**: Diseñar la tarjeta interactiva que flota sobre el marcador físico en 3D.
* **Acción**: Copia el siguiente prompt y envíaselo a la IA:
  > *"Estamos en la Sesión 3. Vamos a refinar el panel tridimensional que se superpone al marcador. Modifica 'index.html' para cambiar la escala del plano `<a-plane>`, ponle un borde con estética Selk'nam (color rojo arcilla y negro) y añade un botón interactivo en 3D sobre el plano que simule la reproducción de un canto."*

---

## 🗺️ Sesión 4: Configuración de tus Propios Marcadores
* **Objetivo**: Cambiar el marcador por defecto de MindAR por una foto real del archivo de Gusinde de tu elección.
* **Acción**: 
  1. Diseñadores: Compilen su imagen en la web de MindAR y descarguen el archivo `.mind`.
  2. Guárdenlo en esta carpeta con el nombre `mi_objetivo.mind`.
  3. Ejecuten el siguiente prompt en consola:
  > *"Estamos en la Sesión 4. Ya tenemos compilado nuestro archivo de imagen objetivo. Modifica el atributo 'mindar-image' en 'index.html' para que lea nuestro archivo local 'mi_objetivo.mind' en lugar del CDN público. Asegúrate de que las rutas queden correctamente vinculadas."*

---

## 🔊 Sesión 5: Expansión Lógica (Múltiples Fotos y Sonido)
* **Objetivo**: Rastrear más de una fotografía histórica en el mismo proyecto.
* **Acción**: Compila un archivo `.mind` con 2 o más fotos y envíale este prompt a tu IA:
  > *"Estamos en la Sesión 5. Queremos configurar dos imágenes objetivo de forma simultánea. Modifica 'index.html' y 'script.js' para que si la cámara apunta a la foto 1 (targetIndex: 0) proyecte la máscara 3D de Kotaix y reproduzca su sonido correspondiente, y si enfoca la foto 2 (targetIndex: 1) muestre la descripción histórica de la estancia y su relato. Haz que los audios se detengan limpiamente al perder el foco."*

---

## 🐛 Sesión 6: Debugging en Dispositivos iOS
* **Objetivo**: Solucionar errores comunes de cámara en navegadores móviles Safari.
* **Acción**: Si al abrir la web en iPhone la pantalla se queda en negro, copia y ejecuta este prompt:
  > *"Estamos en la Sesión 6. Al testear la aplicación de RA en Safari (iPhone), la cámara no arranca y se queda en blanco. Modifica 'script.js' e 'index.html' para asegurar que el sistema solicite explícitamente los permisos de WebRTC y la cámara tras presionar el botón de inicio de experiencia, capturando cualquier error con un mensaje descriptivo en pantalla."*

---

## 🌐 Sesión 7: Despliegue HTTPS en GitHub Pages
* **Objetivo**: Publicar en internet con certificado seguro (requisito de la cámara).
* **Acción**: Ejecuta este prompt:
  > *"Estamos en la Sesión 7. Prepara el proyecto para desplegarse en GitHub Pages. Ajusta todas las rutas para que sean relativas y explícame paso a paso cómo activar la publicación segura en GitHub (HTTPS) para que mis compañeros puedan abrirlo desde sus celulares escaneando un código QR."*
