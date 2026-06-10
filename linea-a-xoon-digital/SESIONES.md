# Guía de Sesiones: El Xo'on Digital

Esta guía detalla exactamente qué comandos y qué prompts copiar y enviar a tu Asistente de IA (Gemini CLI) en cada una de las sesiones de clase.

---

## 🚀 Sesión 2: Inicialización (¡Completada!)
El agente de IA ha configurado y escrito la base del servidor Flask (`app.py`), los estilos de terminal (`style.css`), la lógica del cliente y análisis FFT de audio (`script.js`) y la interfaz con la máscara SVG incrustada (`index.html`).

---

## 🎨 Sesión 3: Capa Visual y Estilos
* **Objetivo**: Añadir animaciones de respiración CSS a la máscara y mejorar los colores del chat.
* **Acción**: Copia el siguiente prompt, abre tu consola en este directorio y envíalo a tu agente de IA:
  > *"Estamos en la Sesión 3. Necesitamos mejorar la interfaz visual y perfeccionar el avatar. Modifica de forma autónoma los archivos 'index.html', 'style.css' y 'script.js' para agregar una animación de balanceo y respiración suave al SVG de la máscara mediante keyframes de CSS para que no esté estática, y mejora el diseño del chat con un estilo más inmersivo."*

---

## 🔊 Sesión 4: Datos del Hain y Ajustes de gTTS
* **Objetivo**: Integrar relatos adicionales de iniciación Selk'nam redactados por los investigadores.
* **Acción**: Pide a tus Investigadores su archivo de textos, luego copia el siguiente prompt y envíaselo al agente:
  > *"Estamos en la Sesión 4. Queremos expandir el contenido histórico de nuestro bot. Modifica la base de datos de respuestas en 'app.py' para incorporar la información de la ceremonia que hemos recopilado: [INSERTA AQUÍ LOS TEXTOS DE TU EQUIPO]. Asegúrate de mantener la voz solemne del chamán Tenenesk."*

---

## 🎛️ Sesión 5: Expansión Lógica (Cambio de Espíritus)
* **Objetivo**: Permitir al usuario cambiar de personaje conversacional y cambiar la máscara de forma dinámica.
* **Acción**: Copia el siguiente prompt y envíaselo al agente:
  > *"Estamos en la Sesión 5. Queremos expandir la lógica del sistema para cambiar de 'Espíritu' conversacional. Modifica 'index.html', 'script.js' y 'app.py' para agregar un menú desplegable (select) en el chat que permita elegir entre 'Chaman Tenenesk' y 'Espíritu Kotaix'. Al cambiar el personaje, la máscara SVG debe actualizar su diseño visual (colores y detalles) y enviar la señal al backend para cambiar el System Prompt del chamán al del espíritu del trueno."*

---

## 🐛 Sesión 6: Debugging y Captura de Errores de Audio
* **Objetivo**: Resolver bloqueos de reproducción de audio por políticas del navegador.
* **Acción**: Copia el siguiente prompt y envíaselo al agente:
  > *"Estamos en la Sesión 6. Al probar la web en algunos dispositivos, el 'AudioContext' no se activa por las políticas de autoplay del navegador. Modifica 'script.js' para asegurar que el contexto de audio se reactive o inicialice llamando a '.resume()' exactamente al hacer clic en el botón de enviar, y agrega bloques try-catch para evitar caídas de script si no hay tarjeta de audio instalada."*

---

## 🌐 Sesión 7: Pulido Estético e Instrucciones Finales
* **Objetivo**: Dejar el proyecto listo para la presentación.
* **Acción**: Copia el siguiente prompt y envíaselo al agente:
  > *"Estamos en la Sesión 7. Queremos pulir el diseño y documentar la instalación. Asegúrate de que el diseño sea responsivo para celulares de forma automática en CSS, agrega transiciones suaves de entrada a los globos de texto, y genera un archivo 'INSTRUCCIONES_EJECUCION.md' con las instrucciones sencillas de uso final."*
