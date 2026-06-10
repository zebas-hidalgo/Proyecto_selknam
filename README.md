# Repositorio Base: Proyecto Tecnológico y Patrimonial Selk'nam (Wilka Kuti)

¡Bienvenido al repositorio base para los proyectos tecnológicos y patrimoniales del **Colegio Kronos**! Este espacio está diseñado para que estudiantes con **cero conocimientos de programación** logren implementar y desplegar prototipos interactivos sobre la historia, cosmovisión y estética del pueblo **Selk'nam**, utilizando la terminal y herramientas asistidas por Inteligencia Artificial (como Gemini CLI).

---

## 👥 Estructura de Trabajo de los Equipos (7 Integrantes)

Para garantizar la eficiencia durante las 8 sesiones de desarrollo, los grupos se dividen bajo los siguientes roles estrictos:

1. **Líder de Proyecto (1)**: Controla el cronograma, verifica la rúbrica y organiza los entregables de cara a las presentaciones de mitad de año.
2. **Investigadores / Guionistas (2)**: Investigan los hechos históricos fidedignos (basados en los registros de Martín Gusinde y Anne Chapman) y redactan todos los textos, coordenadas, diálogos y descripciones.
3. **Prompt Engineers / Programadores (2)**: Operan la terminal, ejecutan las herramientas de desarrollo, interactúan con la IA y ensamblan el código fuente.
4. **Diseñadores UI/UX (2)**: Crean y optimizan los recursos visuales (como imágenes transparentes, modelos, plantillas SVG) y realizan pruebas de usabilidad y control de calidad (QA).

---

## 🗂️ Estructura del Repositorio por Líneas de Desarrollo

Este repositorio contiene carpetas base autocontenidas y 100% funcionales para cada una de las 6 opciones de prototipos tecnológicos:

* [**`linea-a-xoon-digital/`**](file:///Users/zebas/proyecto-patrimonio-selknam-completo/linea-a-xoon-digital): **El Xo'on Digital (IA y Lip-Sync Reactivo)**. Integración de un LLM real (Ollama/Gemini) con un avatar tradicional SVG animado mediante análisis de frecuencias de voz en Web Audio API (Python/Flask + JS).
* [**`linea-b-hain-vr/`**](file:///Users/zebas/proyecto-patrimonio-selknam-completo/linea-b-hain-vr): **Realidad Virtual del Hain (Visor 3D Web)**. Entorno 360° interactivo con fogata, choza ceremonial de postes de madera y chamanes interactivos en A-Frame.
* [**`linea-c-mapa-haruwen/`**](file:///Users/zebas/proyecto-patrimonio-selknam-completo/linea-c-mapa-haruwen): **Cartografía de los Haruwen (Mapa Interactivo)**. Mapa dinámico en Leaflet.js centrado en Tierra del Fuego, con límites geográficos reales de clanes (polígonos) y campamentos/estancias (puntos).
* [**`linea-d-ar-memoria/`**](file:///Users/zebas/proyecto-patrimonio-selknam-completo/linea-d-ar-memoria): **Memoria Viva (Realidad Aumentada Web)**. Sistema de reconocimiento de imágenes físicas con MindAR.js que proyecta paneles históricos sobre las fotografías de Gusinde. Incluye marcador SVG imprimible.
* [**`linea-e-dashboard-demografico/`**](file:///Users/zebas/proyecto-patrimonio-selknam-completo/linea-e-dashboard-demografico): **Dashboard del Fin del Mundo (Panel de Datos)**. Panel demográfico interactivo con Chart.js y deslizadores temporales para visualizar el colapso demográfico e hitos entre 1880 y 2026.
* [**`linea-f-novela-godot/`**](file:///Users/zebas/proyecto-patrimonio-selknam-completo/linea-f-novela-godot): **Sobrevivir al Invierno (Novela Visual)**. Videojuego interactivo de toma de decisiones en Godot Engine 4, estructurado de forma procedural (la UI se construye por código para evitar errores de diseño en el editor).

---

## 🚀 Cómo Subir este Proyecto a tu Propio Perfil de GitHub

Para que los estudiantes puedan desplegar su trabajo de forma pública utilizando **GitHub Pages** (esencial para las líneas web y de Realidad Aumentada), deben clonar o subir este repositorio a su cuenta siguiendo estos sencillos pasos desde la terminal:

1. **Crear un nuevo repositorio vacío en GitHub** (sin README ni .gitignore) bajo la cuenta del grupo.
2. **Abrir la terminal** en el directorio raíz de este proyecto:
   ```bash
   cd /Users/zebas/proyecto-patrimonio-selknam-completo
   ```
3. **Inicializar y vincular Git**:
   ```bash
   git init
   git add .
   git commit -m "Commit inicial: Estructura base de proyectos Selk'nam"
   ```
4. **Vincular el repositorio remoto de GitHub y subir el código** (reemplaza `TU_ORGANIZACION` y `TU_REPOSITORIO` con los datos de tu GitHub):
   ```bash
   git branch -M main
   git remote add origin https://github.com/TU_ORGANIZACION/TU_REPOSITORIO.git
   git push -u origin main
   ```

Una vez subido, cada grupo podrá acceder a la carpeta de su línea correspondiente y comenzar a trabajar con el agente de IA asistida siguiendo el archivo de instrucciones `SESIONES.md` de su directorio de trabajo.
