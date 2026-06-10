// Registro de componentes de A-Frame antes de cargar la escena
if (typeof AFRAME !== 'undefined') {
  
  // Componente de interacción para capturar mirada (Gaze)
  AFRAME.registerComponent('spirit-interactive', {
    schema: {
      spiritId: { type: 'string' },
      nombre: { type: 'string' },
      significado: { type: 'string' },
      pintura: { type: 'string' }
    },

    init: function () {
      var el = this.el;
      var data = this.data;

      // Efecto al apuntar (Gaze / Hover)
      el.addEventListener('mouseenter', function () {
        // Escalar ligeramente para dar feedback visual
        el.setAttribute('animation__scale', {
          property: 'scale',
          to: '1.15 1.15 1.15',
          dur: 250,
          easing: 'easeOutBack'
        });

        // Mostrar la información en el panel 2D
        mostrarInformacion(data);
      });

      // Efecto al quitar la mirada
      el.addEventListener('mouseleave', function () {
        el.setAttribute('animation__scale', {
          property: 'scale',
          to: '1 1 1',
          dur: 200,
          easing: 'easeOutQuad'
        });
      });
    }
  });

  // Componente Billboard para que imágenes o planos 2D miren siempre a la cámara
  AFRAME.registerComponent('billboard', {
    tick: function () {
      var cameraEl = this.el.sceneEl.camera;
      if (cameraEl) {
        var object3D = this.el.object3D;
        var cameraPosition = new THREE.Vector3();
        cameraEl.getWorldPosition(cameraPosition);
        
        // Bloquear eje Y si queremos que solo rote horizontalmente (opcional)
        // cameraPosition.y = object3D.position.y;
        
        object3D.lookAt(cameraPosition);
      }
    }
  });
}

// Variables del DOM para la interfaz de usuario
let welcomeScreen;
let infoOverlay;
let overlayTitle;
let overlayMeaning;
let overlayPainting;
let gazeInstruction;

window.addEventListener('DOMContentLoaded', () => {
  welcomeScreen = document.getElementById('welcome-screen');
  infoOverlay = document.getElementById('info-overlay');
  overlayTitle = document.querySelector('.overlay-title');
  overlayMeaning = document.getElementById('overlay-meaning');
  overlayPainting = document.getElementById('overlay-painting');
  gazeInstruction = document.getElementById('gaze-instruction');

  // Cargar espíritus
  cargarEspiritus();

  // Escuchar botón de cerrar
  document.querySelector('.close-btn').addEventListener('click', () => {
    infoOverlay.classList.remove('visible');
  });
});

function iniciarExperiencia() {
  if (welcomeScreen) {
    welcomeScreen.classList.add('hidden');
    
    // Activar sonido ambiental si existe
    const audioFondo = document.querySelector('[sound]');
    if (audioFondo && audioFondo.components && audioFondo.components.sound) {
      audioFondo.components.sound.playSound();
    }
  }
}

function cargarEspiritus() {
  fetch('info_espiritus.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al cargar la base de datos de espíritus');
      }
      return response.json();
    })
    .then(espiritus => {
      const sceneEl = document.querySelector('a-scene');
      if (sceneEl.hasLoaded) {
        inyectarEspiritus(espiritus, sceneEl);
      } else {
        sceneEl.addEventListener('loaded', () => {
          inyectarEspiritus(espiritus, sceneEl);
        });
      }
    })
    .catch(error => {
      console.error('Error al cargar espíritus, usando respaldo local:', error);
      // Fallback
      const datosRespaldo = [
        {
          "id": "shoort",
          "nombre": "Shoort",
          "significado": "Espíritu de piedra, disciplinador del Hain.",
          "pintura": "Rojo con líneas blancas verticales.",
          "color": "#8B0000",
          "posicion_inicial": {"x": -3, "y": 0, "z": -4},
          "escala": {"x": 1, "y": 1, "z": 1},
          "modelo_glb": "",
          "imagen_png": "" // Causará renderizado con figuras geométricas
        },
        {
          "id": "kotaix",
          "nombre": "Kotaix",
          "significado": "Espíritu del trueno, juguetón y con cuernos.",
          "pintura": "Lunares blancos sobre fondo rojo.",
          "color": "#D2691E",
          "posicion_inicial": {"x": 3, "y": 0, "z": -4},
          "escala": {"x": 1, "y": 1, "z": 1},
          "modelo_glb": "",
          "imagen_png": ""
        }
      ];
      inyectarEspiritus(datosRespaldo, document.querySelector('a-scene'));
    });
}

function inyectarEspiritus(lista, escena) {
  lista.forEach(espiritu => {
    // Crear contenedor para posicionar la entidad
    const contenedor = document.createElement('a-entity');
    contenedor.setAttribute('position', `${espiritu.posicion_inicial.x} ${espiritu.posicion_inicial.y} ${espiritu.posicion_inicial.z}`);
    contenedor.setAttribute('scale', `${espiritu.escala.x} ${espiritu.escala.y} ${espiritu.escala.z}`);

    let visualEntity;

    // OPCIÓN 1: Si hay un modelo 3D GLB definido, lo cargamos
    if (espiritu.modelo_glb && espiritu.modelo_glb !== "") {
      visualEntity = document.createElement('a-gltf-model');
      visualEntity.setAttribute('src', espiritu.modelo_glb);
      visualEntity.setAttribute('class', 'clickable');
      
      // Agregamos un cilindro invisible para facilitar la interacción de mirada (gaze collision box)
      const collisionBox = document.createElement('a-cylinder');
      collisionBox.setAttribute('radius', '0.5');
      collisionBox.setAttribute('height', '2.0');
      collisionBox.setAttribute('position', '0 1 0');
      collisionBox.setAttribute('visible', 'false');
      collisionBox.setAttribute('class', 'clickable');
      contenedor.appendChild(collisionBox);
      
      // Asignar interacción al box de colisión
      collisionBox.setAttribute('spirit-interactive', {
        spiritId: espiritu.id,
        nombre: espiritu.nombre,
        significado: espiritu.significado,
        pintura: espiritu.pintura
      });
    }
    // OPCIÓN 2: Si no hay GLB pero hay imagen PNG, creamos un plano con efecto Billboard (2D histórico)
    else if (espiritu.imagen_png && espiritu.imagen_png !== "") {
      visualEntity = document.createElement('a-image');
      visualEntity.setAttribute('src', espiritu.imagen_png);
      visualEntity.setAttribute('width', '1.5');
      visualEntity.setAttribute('height', '2.2');
      visualEntity.setAttribute('position', '0 1.1 0');
      visualEntity.setAttribute('transparent', 'true');
      visualEntity.setAttribute('class', 'clickable');
      
      // Agregar componente billboard para que gire hacia el usuario
      visualEntity.setAttribute('billboard', '');
      
      // Asignar interacción directa
      visualEntity.setAttribute('spirit-interactive', {
        spiritId: espiritu.id,
        nombre: espiritu.nombre,
        significado: espiritu.significado,
        pintura: espiritu.pintura
      });
    } 
    // OPCIÓN 3: Fallback geométrico (primitivas de A-Frame) si no hay recursos listos
    else {
      // Crear cuerpo base
      const cuerpo = document.createElement('a-cylinder');
      cuerpo.setAttribute('radius', '0.35');
      cuerpo.setAttribute('height', '2.0');
      cuerpo.setAttribute('position', '0 1.0 0');
      cuerpo.setAttribute('color', espiritu.color);
      cuerpo.setAttribute('class', 'clickable');
      
      cuerpo.setAttribute('spirit-interactive', {
        spiritId: espiritu.id,
        nombre: espiritu.nombre,
        significado: espiritu.significado,
        pintura: espiritu.pintura
      });
      
      // Crear máscara cónica
      const mascara = document.createElement('a-cone');
      mascara.setAttribute('radius-bottom', '0.4');
      mascara.setAttribute('radius-top', '0.01');
      mascara.setAttribute('height', '0.8');
      mascara.setAttribute('color', '#111111');
      mascara.setAttribute('position', '0 2.3 0');

      if (espiritu.id === 'kotaix') {
        const cuernoIzq = document.createElement('a-cylinder');
        cuernoIzq.setAttribute('radius', '0.04');
        cuernoIzq.setAttribute('height', '0.5');
        cuernoIzq.setAttribute('color', '#ffffff');
        cuernoIzq.setAttribute('position', '-0.2 0.3 0');
        cuernoIzq.setAttribute('rotation', '0 0 35');
        mascara.appendChild(cuernoIzq);

        const cuernoDer = document.createElement('a-cylinder');
        cuernoDer.setAttribute('radius', '0.04');
        cuernoDer.setAttribute('height', '0.5');
        cuernoDer.setAttribute('color', '#ffffff');
        cuernoDer.setAttribute('position', '0.2 0.3 0');
        cuernoDer.setAttribute('rotation', '0 0 -35');
        mascara.appendChild(cuernoDer);
      }
      
      contenedor.appendChild(cuerpo);
      contenedor.appendChild(mascara);
    }

    // Si se creó una entidad visual (GLB o PNG), la añadimos al contenedor
    if (visualEntity) {
      contenedor.appendChild(visualEntity);
    }

    // Agregar aro indicador en el suelo
    const aroSuelo = document.createElement('a-ring');
    aroSuelo.setAttribute('radius-inner', '0.5');
    aroSuelo.setAttribute('radius-outer', '0.6');
    aroSuelo.setAttribute('rotation', '-90 0 0');
    aroSuelo.setAttribute('position', '0 0.02 0');
    aroSuelo.setAttribute('color', espiritu.color);
    aroSuelo.setAttribute('opacity', '0.6');
    contenedor.appendChild(aroSuelo);

    // Inyectar en la escena
    escena.appendChild(contenedor);
  });
}

function mostrarInformacion(datos) {
  if (infoOverlay) {
    overlayTitle.textContent = datos.nombre;
    overlayMeaning.innerHTML = `<strong>Significado:</strong> ${datos.significado}`;
    overlayPainting.innerHTML = `<strong>Pintura Corporal:</strong> ${datos.pintura}`;
    infoOverlay.classList.add('visible');

    if (gazeInstruction) {
      gazeInstruction.style.display = 'none';
    }
  }
}
