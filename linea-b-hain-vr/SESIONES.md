# Bitácora de Desarrollo: Hain 3D VR

¡Felicitaciones! Has ejecutado exitosamente el **Prompt Maestro**. Este directorio contiene el esqueleto funcional y de diseño para tu simulación en Realidad Virtual del espacio ceremonial del Hain.

---

## 🗂️ Estructura del Proyecto Creado

* `index.html`: Estructura 3D usando A-Frame (cielo nocturno, fogata animada con luces dinámicas, choza del Hain representativa y cámara de usuario con retículo/cursor).
* `style.css`: Estilo visual de la interfaz 2D flotante (overlay) y la pantalla de carga utilizando una estética Selk'nam (colores tierra, rojo arcilla, negro, blanco).
* `script.js`: Carga dinámica de espíritus desde la base de datos JSON y registro del componente interactivo de A-Frame (`spirit-interactive`).
* `info_espiritus.json`: Archivo de base de datos local con las coordenadas de posicionamiento (X, Y, Z), significados históricos y diseños corporales de los espíritus.

---

## 🚀 Cómo Ejecutar el Proyecto Localmente

Para evitar problemas de restricciones de seguridad (errores CORS) al realizar peticiones de lectura de archivos locales (`fetch` de JSON o sonidos), debes abrir el proyecto a través de un servidor web local simple.

1. Abre tu terminal.
2. Navega a la carpeta del proyecto:
   ```bash
   cd /Users/zebas/proyecto-hain-3d
   ```
3. Inicia un servidor local de Python (elige según tu sistema operativo):
   * **En Windows (CMD/PowerShell)**:
     ```cmd
     python -m http.server 8000
     ```
   * **En macOS/Linux (Terminal/zsh/bash)**:
     ```bash
     python3 -m http.server 8000
     ```
4. Abre tu navegador y ve a:
   [http://localhost:8000](http://localhost:8000)
5. ¡Listo! Puedes interactuar con la escena arrastrando el mouse o usando las teclas **WASD** para moverte, y apuntando el cursor central a los espíritus.

---

## 📅 Guía de Prompts de Consola para las Siguientes Sesiones

Utiliza estas instrucciones para indicarle al Asistente de IA (Gemini CLI) cómo expandir tu proyecto sesión a sesión:

### 🎨 Sesión 3: Capa Visual y Billboards
* **Objetivo**: Reemplazar los cilindros y conos de prueba por imágenes 2D de los espíritus reales y mejorar el terreno.
* **Prompt para la IA**:
  > *"Estamos en la Sesión 3. Vamos a refinar la visualización de nuestro Hain en A-Frame. Queremos que la escena cargue imágenes 2D en formato PNG transparente de los espíritus reales (como Shoort o Xalpen) colocándolos en su posición y haciendo que actúen como 'Billboards' que roten para mirar a la cámara usando un script con 'THREE.Vector3' en A-Frame. Agrega también una textura de tierra o nieve al suelo."*

### 🔊 Sesión 4: Datos del Hain y Audio Espacial
* **Objetivo**: Integrar relatos detallados y configurar sonido 3D envolvente en la fogata.
* **Prompt para la IA**:
  > *"Estamos en la Sesión 4. Vincularemos la información definitiva y agregaremos audio espacial. Modifica el código para añadir un componente `<a-sound>` en el centro de la fogata que reproduzca un sonido crepitante en bucle. El volumen debe reducirse a medida que nos alejamos de ella. Configura también un sonido ambiental de viento patagónico global."*

### 🗺️ Sesión 5: Sistema de Teletransportación
* **Objetivo**: Facilitar la navegación táctil en celulares eliminando el mareo por movimiento.
* **Prompt para la IA**:
  > *"Estamos en la Sesión 5. El movimiento con WASD marea en celulares. Queremos programar un sistema de teletransportación por puntero: añade planos circulares interactivos en el suelo y haz que al mirarlos por 2 segundos con la cámara nos movamos instantáneamente hacia esa posición."*

### 📱 Sesión 6: Debugging y Permisos de Giroscopio
* **Objetivo**: Corregir problemas de carga en Safari/iOS y pantallas deformadas.
* **Prompt para la IA**:
  > *"Estamos en la Sesión 6. Al probar la escena en celulares iPhone, el giroscopio no se activa. Modifica la lógica para que al pulsar 'Entrar al Hain' se soliciten los permisos de orientación de dispositivo de forma segura y corrige el overlay 2D en pantallas móviles verticales usando media-queries CSS."*

### 🌐 Sesión 7: Despliegue en GitHub Pages
* **Objetivo**: Publicar el proyecto en internet para probarlo de forma pública.
* **Prompt para la IA**:
  > *"Estamos en la Sesión 7. Ayúdanos a preparar el despliegue del visor 3D en GitHub Pages de forma gratuita. Revisa que todas las rutas sean relativas y redacta las instrucciones para subir el código a GitHub."*
