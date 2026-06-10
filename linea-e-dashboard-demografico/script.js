let lineChart;
let barChart;

// Referencias al DOM
const timeSlider = document.getElementById('time-slider');
const sliderLabel = document.getElementById('slider-label');
const txtYear = document.getElementById('txt-year');
const txtDesc = document.getElementById('txt-desc');
const statPob = document.getElementById('stat-pob');
const statReduccion = document.getElementById('stat-reduccion');

// Inicializar el Dashboard al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  inicializarGraficos();
  
  // Escuchar movimientos del slider
  timeSlider.addEventListener('input', (e) => {
    const añoSeleccionado = parseInt(e.target.value);
    actualizarDashboard(añoSeleccionado);
  });

  // Carga inicial
  actualizarDashboard(1880);
});

// Configuración inicial de Chart.js
function inicializarGraficos() {
  const ctxLine = document.getElementById('lineChart').getContext('2d');
  const ctxBar = document.getElementById('barChart').getContext('2d');

  // Gráfico de Línea: Evolución Demográfica
  lineChart = new Chart(ctxLine, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Población Selk\'nam',
        data: [],
        borderColor: '#e74c3c',
        backgroundColor: 'rgba(231, 76, 60, 0.15)',
        borderWidth: 3,
        fill: true,
        tension: 0.3,
        pointBackgroundColor: '#fff',
        pointRadius: 5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#b3a098' } },
        y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#b3a098' }, min: 0 }
      }
    }
  });

  // Gráfico de Barra: Causas de mortalidad / tasa de reducción
  barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
      labels: [],
      datasets: [{
        label: 'Tasa de Reducción (%)',
        data: [],
        backgroundColor: 'rgba(168, 50, 50, 0.75)',
        borderColor: '#a83232',
        borderWidth: 1.5,
        borderRadius: 5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#b3a098' } },
        y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#b3a098' }, max: 100, min: 0 }
      }
    }
  });
}

// Filtra datos y redibuja con .update()
function actualizarDashboard(añoInicial) {
  // 1. Filtrar los datos desde el año seleccionado
  const datosFiltrados = datosDemograficos.filter(d => d.año >= añoInicial);
  
  // Extraer etiquetas (eje X) y valores (eje Y)
  const años = datosFiltrados.map(d => d.año);
  const poblaciones = datosFiltrados.map(d => d.poblacion);
  
  // Calcular la tasa de reducción acumulada con respecto al año base de 1880 (4000 habitantes)
  const tasasReduccion = datosFiltrados.map(d => {
    const reduccion = ((4000 - d.poblacion) / 4000) * 100;
    return Math.max(0, reduccion).toFixed(1);
  });

  // 2. Actualizar el gráfico de línea
  lineChart.data.labels = años;
  lineChart.data.datasets[0].data = poblaciones;
  lineChart.update();

  // 3. Actualizar el gráfico de barras
  barChart.data.labels = años;
  barChart.data.datasets[0].data = tasasReduccion;
  barChart.update();

  // 4. Actualizar ficha informativa en el DOM
  const datoAñoActual = datosDemograficos.find(d => d.año === añoInicial) || datosDemograficos[0];
  
  sliderLabel.textContent = añoInicial;
  txtYear.textContent = añoInicial;
  txtDesc.textContent = datoAñoActual.causa;
  statPob.textContent = Number(datoAñoActual.poblacion).toLocaleString();

  // Calcular la reducción porcentual del año activo con respecto a 1880
  const reduccionActual = ((4000 - datoAñoActual.poblacion) / 4000) * 100;
  statReduccion.textContent = `${Math.max(0, reduccionActual).toFixed(1)}%`;
}
