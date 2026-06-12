# Guía de Contribución 🤝

¡Gracias por tu interés en colaborar en el **Proyecto Tecnológico y Patrimonial Selk'nam (Wilka Kuti)**! Este repositorio es un espacio de aprendizaje y rescate cultural. Para mantener la calidad del código y la fidelidad histórica de los contenidos, seguimos una serie de lineamientos.

---

## 📂 Estructura del Monorepo

Este es un monorepo que contiene las siguientes líneas de desarrollo:
*   `/linea-a-xoon-digital`: Servidor Flask y cliente web de chat interactivo.
*   `/linea-b-hain-vr`: Entorno tridimensional en Realidad Virtual con A-Frame.
*   `/linea-c-mapa-haruwen`: Mapa interactivo de territorios con Leaflet y GeoJSON.
*   `/linea-d-ar-memoria`: Aplicación de Realidad Aumentada web con MindAR.js.
*   `/linea-e-dashboard-demografico`: Panel analítico con Chart.js.
*   `/linea-f-novela-godot`: Videojuego 2D con Godot Engine 4.

---

## 🛠️ Cómo Empezar a Colaborar

1.  **Haz un Fork** de este repositorio en tu cuenta de GitHub.
2.  **Clona** tu fork localmente en tu máquina:
    ```bash
    git clone https://github.com/TU_USUARIO/Proyecto_selknam.git
    ```
3.  **Crea una rama (branch)** para trabajar en tu propuesta:
    ```bash
    git checkout -b feature/linea-x-descripcion
    # o para corrección de errores:
    git checkout -b fix/linea-x-error
    ```
4.  **Realiza tus cambios** y haz commits descriptivos. Intentamos seguir la convención de *Conventional Commits*:
    *   `feat(linea-a): agregar soporte para cambio de avatar`
    *   `fix(linea-c): corregir coordenadas en GeoJSON de haruwen`
    *   `docs(raiz): actualizar instrucciones de ejecución`

---

## 📜 Reglas de Oro para las Contribuciones

### 1. Fidelidad Histórica y Respeto Cultural 🕊️
Este proyecto representa la memoria histórica de una comunidad originaria. Cualquier cambio en los textos de diálogos, relatos de espíritus, chamanes o límites geográficos de los *Haruwen* debe estar respaldado por bibliografía confiable (por ejemplo, los diarios de Martín Gusinde, Anne Chapman o investigaciones avaladas por las comunidades).
*   **No se permiten relatos inventados o distorsionados.**

### 2. Calidad de Código
*   Mantén el código limpio, bien indentado y documentado con comentarios que faciliten el aprendizaje de otros estudiantes.
*   En proyectos web, prefiere JavaScript vanilla (sin frameworks complejos como React o Vue a menos que se especifique) para mantener las dependencias al mínimo.
*   En Godot (`linea-f`), implementa los nodos y scripts de forma modular y descriptiva.

---

## 🪪 Abrir un Pull Request (PR)

Cuando estés listo para enviar tus aportes:
1.  Haz un push de tu rama a tu repositorio de GitHub:
    ```bash
    git push origin feature/linea-x-descripcion
    ```
2.  Ve al repositorio original y haz clic en **New Pull Request**.
3.  Utiliza la plantilla de PR para describir qué cambios realizaste, el motivo y cómo probarlos.
4.  Tu mentor/profesor revisará el código y te dará feedback antes de hacer el merge a la rama `main`.
