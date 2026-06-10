let map;
let geojsonLayer;
let infoContent;
let sidebar;

// Configuración inicial del mapa Leaflet
function initMap() {
  sidebar = document.getElementById('sidebar');
  infoContent = document.getElementById('info-content');

  // Coordenadas aproximadas del centro de la Isla Grande de Tierra del Fuego
  const centroTierraDelFuego = [-53.8, -68.2];
  
  map = L.map('map', {
    zoomControl: true,
    minZoom: 6,
    maxZoom: 12
  }).setView(centroTierraDelFuego, 7.5);

  // Carga del mapa base de CartoDB (Tema Oscuro que resalta los límites arqueológicos)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CARTO'
  }).addTo(map);

  // Intentar cargar el archivo GeoJSON local
  fetch('haruwen.geojson')
    .then(response => {
      if (!response.ok) throw new Error('Bloqueo CORS o archivo no encontrado');
      return response.json();
    })
    .then(data => {
      renderGeoJSON(data);
    })
    .catch(err => {
      console.warn('Cargando base de datos de respaldo debido a CORS:', err);
      // Usar variable de respaldo de datos_respaldo.js
      if (typeof datosMapaRespaldo !== 'undefined') {
        renderGeoJSON(datosMapaRespaldo);
      }
    });

  // Escuchar checkboxes de filtros
  document.getElementById('chk-ancestral').addEventListener('change', filtrarCapas);
  document.getElementById('chk-campamento').addEventListener('change', filtrarCapas);
  document.getElementById('chk-historico').addEventListener('change', filtrarCapas);
}

// Estilo de los polígonos de Haruwen ancestrales
function obtenerEstiloFeature(feature) {
  const tipo = feature.properties.tipo;
  if (tipo === 'ancestral') {
    return {
      fillColor: '#a83232', // Rojo arcilla
      weight: 2,
      opacity: 0.9,
      color: '#ffffff',
      dashArray: '3',
      fillOpacity: 0.35
    };
  }
  return {};
}

// Creación de marcadores personalizados y polígonos
function renderGeoJSON(datos) {
  if (geojsonLayer) {
    map.removeLayer(geojsonLayer);
  }

  geojsonLayer = L.geoJSON(datos, {
    style: obtenerEstiloFeature,
    pointToLayer: function (feature, latlng) {
      const tipo = feature.properties.tipo;
      let markerColor = '#d4af37'; // Amarillo para campamentos

      if (tipo === 'historico') {
        markerColor = '#555555'; // Gris para estancias
      }

      // Dibujar marcadores circulares estilizados en lugar del marcador por defecto
      return L.circleMarker(latlng, {
        radius: 8,
        fillColor: markerColor,
        color: '#ffffff',
        weight: 1.5,
        opacity: 1,
        fillOpacity: 0.85
      });
    },
    onEachFeature: function (feature, layer) {
      // Al hacer clic, actualizar el panel de información lateral
      layer.on('click', function (e) {
        L.DomEvent.stopPropagation(e);
        abrirDetalleFeature(feature.properties);
        
        // Centrar ligeramente el mapa en el elemento seleccionado
        if (feature.geometry.type === 'Point') {
          map.panTo(layer.getLatLng());
        } else {
          map.fitBounds(layer.getBounds());
        }
      });
    }
  }).addTo(map);
}

// Actualiza el panel informativo lateral con los datos históricos
function abrirDetalleFeature(props) {
  let tagColor = 'ancestral';
  let tagText = 'Territorio Ancestral';

  if (props.tipo === 'historico') {
    tagColor = 'historico';
    tagText = 'Impacto Colonial';
  } else if (props.tipo === 'campamento') {
    tagColor = 'campamento';
    tagText = 'Campamento Estacional';
  }

  infoContent.innerHTML = `
    <h3>${props.nombre}</h3>
    <h4>${props.clan}</h4>
    <p>${props.descripcion}</p>
    <span class="tag dot-${tagColor}" style="padding: 4px 10px; border-radius: 4px; font-size: 0.8rem; color: #ffcccc; border: 1px solid rgba(255,255,255,0.1); background-color: rgba(0,0,0,0.3);">${tagText}</span>
  `;

  // Mostrar panel si estaba colapsado
  sidebar.classList.remove('collapsed');
}

// Filtra las capas del mapa según las checkboxes seleccionadas
function filtrarCapas() {
  const mostrarAncestral = document.getElementById('chk-ancestral').checked;
  const mostrarCampamento = document.getElementById('chk-campamento').checked;
  const mostrarHistorico = document.getElementById('chk-historico').checked;

  let datosOrigen = datosMapaRespaldo; // Por defecto usa la constante

  // Intentar cargar del GeoJSON si el fetch funciona en el servidor
  fetch('haruwen.geojson')
    .then(res => res.json())
    .then(data => procesarFiltro(data))
    .catch(() => procesarFiltro(datosMapaRespaldo));

  function procesarFiltro(geojsonCompleto) {
    const geojsonFiltrado = {
      "type": "FeatureCollection",
      "features": geojsonCompleto.features.filter(f => {
        const tipo = f.properties.tipo;
        if (tipo === 'ancestral') return mostrarAncestral;
        if (tipo === 'campamento' || tipo === 'ancestral_punto') return mostrarCampamento;
        if (tipo === 'historico') return mostrarHistorico;
        return true;
      })
    };
    renderGeoJSON(geojsonFiltrado);
  }
}

// Control de apertura y cierre del panel lateral
function toggleSidebar() {
  sidebar.classList.toggle('collapsed');
}

// Arrancar Leaflet en carga de DOM
window.addEventListener('DOMContentLoaded', initMap);
