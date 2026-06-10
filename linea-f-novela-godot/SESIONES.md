# Guía de Sesiones: Sobrevivir al Invierno (Godot 4)

Esta guía te indicará exactamente qué prompts copiar y enviarle al Asistente de IA (Gemini CLI) en cada una de las sesiones de clase.

---

## 🚀 Sesión 2: Inicialización (¡Completada!)
El motor de juego procedural ya está configurado. La escena `juego.tscn` de Godot 4 vincula al script de UI procedural `juego.gd`, el cual renderiza el fondo, la caja de texto, los botones dinámicos y el panel de estadísticas al vuelo de manera 100% autónoma.

---

## 🎨 Sesión 3: Ajustes Estéticos y Temas Visuales
* **Objetivo**: Mejorar el aspecto visual de los botones y paneles creados en código.
* **Acción**: Copia el siguiente prompt y envíaselo a la IA:
  > *"Estamos en la Sesión 3. Queremos refinar el aspecto visual de las opciones y estadísticas creadas dinámicamente en 'juego.gd'. Modifica el script para que los botones tengan un estilo de color negro con bordes redondeados y tipografía en negrita utilizando StyleBoxFlat en GDScript, y ajusta los márgenes para dar un aspecto de novela visual cinemática."*

---

## 🗺️ Sesión 4: Guión e Historias del Equipo
* **Objetivo**: Remplazar los nudos narrativos de prueba por la historia final del grupo.
* **Acción**: Pide a tus Guionistas el diccionario de decisiones, copia el prompt e insértalo:
  > *"Estamos en la Sesión 4. Ya tenemos el guión definitivo redactado por los Guionistas. Modifica el diccionario 'historia' dentro de 'juego.gd' de forma completa para incorporar nuestro relato y ramificaciones: [INSERTA AQUÍ LOS ESCENARIOS Y OPCIONES DEL GRUPO]. Revisa que la lógica de transiciones siga funcionando."*

---

## 🎛️ Sesión 5: Efectos de Sonido y Música
* **Objetivo**: Reproducir sonidos de viento y hogueras de forma dinámica al cambiar de escena.
* **Acción**: Guarda tus archivos de sonido en la carpeta del proyecto y ejecuta este prompt:
  > *"Estamos en la Sesión 5. Queremos agregar música y efectos de sonido dinámicos en Godot 4. Modifica 'juego.gd' para instanciar dinámicamente dos nodos de tipo AudioStreamPlayer. Uno reproducirá un sonido de viento helado en bucle si el jugador está en el bosque, y el otro reproducirá una melodía de fogata cálida si está refugiado en la choza."*

---

## 🐛 Sesión 6: Debugging de Señales Dinámicas
* **Objetivo**: Evitar errores en consola al presionar botones repetidamente.
* **Acción**: Copia el siguiente prompt y ejecútalo:
  > *"Estamos en la Sesión 6. Al presionar rápidamente las opciones del juego, Godot arroja advertencias de que las señales de clic ya se encuentran conectadas en memoria. Modifica la función 'cargar_nodo_narrativo' en 'juego.gd' para recorrer y desconectar de forma segura las señales de los botones antiguos antes de borrarlos con queue_free()."*

---

## 🌐 Sesión 7: Exportación Web HTML5 a Itch.io
* **Objetivo**: Compilar el juego y subirlo a internet para compartirlo.
* **Acción**: Ejecuta este prompt:
  > *"Estamos en la Sesión 7. Necesitamos preparar la exportación a la web. Genera las instrucciones completas en 'INSTRUCCIONES_DESARROLLO.md' para indicarnos paso a paso cómo descargar las plantillas de exportación HTML5 de Godot 4, configurar el Servidor Web integrado en itch.io y habilitar la opción de jugar directamente en el navegador."*
