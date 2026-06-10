// Función para iniciar la cámara y arrancar MindAR
function iniciarRA() {
  const welcomeScreen = document.getElementById('welcome-screen');
  const arOverlay = document.getElementById('ar-overlay');
  const sceneEl = document.querySelector('a-scene');

  // Ocultar bienvenida y mostrar UI flotante
  if (welcomeScreen) welcomeScreen.classList.add('hidden');
  if (arOverlay) arOverlay.classList.remove('hidden');

  // Arrancar el motor de MindAR.js de forma explícita
  if (sceneEl) {
    sceneEl.systems["mindar-image-system"].start();
  }
}

// Configuración de eventos cuando la escena de A-Frame se monta
window.addEventListener('DOMContentLoaded', () => {
  const targetEntity = document.getElementById('ar-target');
  const targetTitle = document.getElementById('target-title');
  const targetDesc = document.getElementById('target-desc');
  const captureBtn = document.getElementById('capture-btn');
  const cantoSelknam = document.getElementById('canto-selknam');

  if (targetEntity) {
    
    // Evento: Marcador Encontrado
    targetEntity.addEventListener("targetFound", () => {
      console.log("Marcador detectado con éxito.");
      
      // Actualizar UI 2D
      targetTitle.textContent = "Fotografía Detectada: Iniciación Selk'nam";
      targetDesc.textContent = "Kloketens (iniciados) junto a chamanes chamanes en el Hain, 1923. Foto de Martín Gusinde.";
      captureBtn.classList.remove('hidden');

      // Reproducir el canto ritual tradicional
      if (cantoSelknam) {
        cantoSelknam.currentTime = 0;
        cantoSelknam.play().catch(e => console.warn("Audio bloqueado:", e));
      }
    });

    // Evento: Marcador Perdido
    targetEntity.addEventListener("targetLost", () => {
      console.log("Se perdió el marcador.");
      
      // Actualizar UI 2D
      targetTitle.textContent = "Buscando Marcador...";
      targetDesc.textContent = "Enfoca el marcador de prueba ('marcador_imprimir.svg').";
      captureBtn.classList.add('hidden');

      // Pausar audio
      if (cantoSelknam) {
        cantoSelknam.pause();
      }
    });
  }

  // Funcionalidad para simular captura de pantalla (oculta la interfaz 2D por 2 segundos)
  if (captureBtn) {
    captureBtn.addEventListener('click', () => {
      const arOverlay = document.getElementById('ar-overlay');
      arOverlay.style.opacity = '0';
      
      setTimeout(() => {
        alert("¡Toma una captura de pantalla con los botones físicos de tu celular ahora!");
      }, 100);

      setTimeout(() => {
        arOverlay.style.opacity = '1';
      }, 3000);
    });
  }
});
