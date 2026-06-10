# Proyecto Tecnológico y Patrimonial Selk'nam: Wilka Kuti

El **Proyecto Tecnológico y Patrimonial Selk'nam** es una iniciativa de desarrollo interdisciplinar que busca **revitalizar, preservar y difundir la cosmovisión, historia y estética del pueblo originario Selk'nam** (habitante ancestral de la Isla Grande de Tierra del Fuego, Karukinka). 

A través del uso de herramientas tecnológicas modernas e Inteligencia Artificial asistida, los estudiantes investigan el registro histórico y construyen prototipos interactivos y funcionales de software. El proyecto busca conectar el pensamiento computacional con el rescate patrimonial y la memoria histórica de nuestro territorio.

---

## 🎯 Alcance General del Proyecto

El proyecto engloba el diseño y desarrollo de seis plataformas y aplicaciones interactivas diferenciadas por su enfoque tecnológico:

### 1. El Xo'on Digital (Línea A)
* **Concepto**: Creación de una interfaz de chat interactiva que permite a los usuarios conversar en tiempo real con un modelo de Inteligencia Artificial que encarna la identidad de un Xo'on (chamán) Selk'nam, llamado Tenenesk. El chamán relata mitos, leyendas y responde preguntas respetando rigurosamente el registro histórico.
* **Alcance Técnico**: Servidor de desarrollo en Python (Flask), generación de voz sintética (TTS) procesada en memoria y Web Audio API con análisis FFT en JavaScript para deformar y escalar la boca de una máscara vectorial SVG interactiva en tiempo real (Lip-Sync reactivo).
* **Directorio de Trabajo**: [`linea-a-xoon-digital/`](file:///Users/zebas/proyecto-patrimonio-selknam-completo/linea-a-xoon-digital)

### 2. Realidad Virtual del Hain (Línea B)
* **Concepto**: Reconstrucción tridimensional inmersiva del Hain, el gran espacio ceremonial sagrado donde se realizaba el ritual de iniciación de los *kloketen* (jóvenes iniciados). Los usuarios pueden explorar la choza de troncos y encontrarse cara a cara con los espíritus.
* **Alcance Técnico**: Escena en Realidad Virtual para navegadores usando A-Frame (HTML/JS) compatible con giroscopios móviles y visores Cardboard. Posicionamiento tridimensional `(X, Y, Z)` de chamanes/espíritus, audio espacial 3D reactivo a la distancia de la fogata y paneles informativos tridimensionales con rotación tipo billboard.
* **Directorio de Trabajo**: [`linea-b-hain-vr/`](file:///Users/zebas/proyecto-patrimonio-selknam-completo/linea-b-hain-vr)

### 3. Cartografía de los Haruwen (Línea C)
* **Concepto**: Mapa interactivo geográfico que delimita los *Haruwen* (los territorios y cotos de caza familiares en los que se dividía tradicionalmente Tierra del Fuego) y mapea puntos clave de campamentos y el impacto demográfico de las estancias colonizadoras.
* **Alcance Técnico**: Mapa dinámico con Leaflet.js sobre capas de azulejos oscuras (CartoDB Dark Matter). Modelado de bases de datos geográficas mediante archivos GeoJSON (con polígonos y puntos reales de Tierra del Fuego), filtros de mapa por categorías y panel lateral con diseño glassmorphism responsivo.
* **Directorio de Trabajo**: [`linea-c-mapa-haruwen/`](file:///Users/zebas/proyecto-patrimonio-selknam-completo/linea-c-mapa-haruwen)

### 4. Memoria Viva en Realidad Aumentada (Línea D)
* **Concepto**: Aplicación web de Realidad Aumentada que utiliza la cámara de dispositivos móviles para reconocer fotografías en blanco y negro de los rituales del archivo de Martín Gusinde y proyectar sobre ellas las fotografías restauradas a color, acompañadas de cantos tradicionales y relatos explicativos.
* **Alcance Técnico**: Reconocimiento visual e Image Tracking mediante MindAR.js en combinación con A-Frame. Diseño de marcadores interactivos imprimibles, captura de pantalla web y flujos seguros de permisos WebRTC bajo HTTPS.
* **Directorio de Trabajo**: [`linea-d-ar-memoria/`](file:///Users/zebas/proyecto-patrimonio-selknam-completo/linea-d-ar-memoria)

### 5. Dashboard del Fin del Mundo (Línea E)
* **Concepto**: Panel analítico e interactivo que expone la evolución demográfica del pueblo Selk'nam desde la época pre-colonial (1880) pasando por el trágico colapso de la colonización ovina, hasta la resiliencia y el crecimiento de las comunidades en el siglo XXI (2026).
* **Alcance Técnico**: Visualización interactiva con Chart.js de gráficos de líneas y barras en una rejilla (CSS Grid) oscura responsiva. Filtro interactivo mediante controles deslizantes de tiempo (sliders) y cálculo dinámico de estadísticas de reducción y recuperación porcentual en el DOM.
* **Directorio de Trabajo**: [`linea-e-dashboard-demografico/`](file:///Users/zebas/proyecto-patrimonio-selknam-completo/linea-e-dashboard-demografico)

### 6. Videojuego "Sobrevivir al Invierno" (Línea F)
* **Concepto**: Novela visual en 2D donde los jugadores toman decisiones críticas de supervivencia (como buscar leña, refugiarse, salir a cazar o compartir el calor) guiando a su clan familiar Selk'nam para resistir el crudo invierno en la Patagonia.
* **Alcance Técnico**: Videojuego desarrollado en Godot Engine 4. Lógica de ramificación narrativa, gestión de variables lógicas vinculadas (`temperatura`, `energía`, `refugio`), control de señales (Signals) y diseño **100% procedural en GDScript** (los botones, paneles y textos se dibujan en tiempo de ejecución para evitar fallas del editor).
* **Directorio de Trabajo**: [`linea-f-novela-godot/`](file:///Users/zebas/proyecto-patrimonio-selknam-completo/linea-f-novela-godot)

---

## 👥 Organización de los Equipos de Desarrollo

Para la realización de los proyectos, los estudiantes cooperan bajo una metodología de roles definidos:

* **Líder de Proyecto**: Administra el cronograma de trabajo, verifica el cumplimiento de las metas y organiza las presentaciones.
* **Investigadores / Guionistas**: Validan la fidelidad histórica de los relatos, recopilan las coordenadas geográficas de Tierra del Fuego y redactan las descripciones de los espíritus.
* **Prompt Engineers / Programadores**: Operan la consola y terminal de desarrollo, gestionan los prompts interactivos del agente de IA y ensamblan los archivos de código base.
* **Diseñadores UI/UX**: Estructuran la interfaz visual, configuran las paletas de colores representativas (negro carbón, ocre, rojo arcilla) y realizan pruebas de usabilidad en dispositivos de prueba.

---

## 🚀 Despliegue en la Web (GitHub Pages)

Para las líneas que se ejecutan directamente en la web (Líneas A, B, C, D y E), los estudiantes pueden desplegar sus aplicaciones de forma gratuita utilizando **GitHub Pages**:

1. Sube este repositorio a tu perfil de GitHub:
   ```bash
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git branch -M main
   git push -u origin main --force
   ```
2. En la página web de tu repositorio de GitHub, ve a **Settings** (Configuración) -> **Pages**.
3. En **Build and deployment**, selecciona la rama `main` y la carpeta `/root`, y haz clic en **Save** (Guardar).
4. En unos minutos, el proyecto estará en línea bajo una dirección segura `HTTPS` (por ejemplo, `https://TU_USUARIO.github.io/TU_REPOSITORIO/linea-b-hain-vr/`), permitiendo que el visor 3D, el mapa Leaflet o la cámara de Realidad Aumentada funcionen perfectamente desde celulares.
