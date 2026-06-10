// Configuración de audio global
let audioContext;
let analyser;
let source;
let frequencyData;
let audioEl;

// Elementos del DOM
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const mouthGroup = document.getElementById('mouth-group');

// Iniciar evento de envío de mensaje al hacer clic o presionar Enter
sendBtn.addEventListener('click', enviarMensaje);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') enviarMensaje();
});

// Función principal para enviar mensajes
function enviarMensaje() {
  const texto = userInput.value.trim();
  if (texto === "") return;

  // Habilitar o reactivar el contexto de audio (necesario por restricciones de interacción del navegador)
  inicializarAudio();

  // Agregar mensaje del usuario a la pantalla
  agregarMensajeHTML(texto, 'user-msg');
  userInput.value = "";

  // Crear burbuja de carga del bot
  const loadingMsg = agregarMensajeHTML("El chaman esta pensando...", 'bot-msg');

  // Enviar mensaje al backend
  fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: texto })
  })
  .then(res => res.json())
  .then(data => {
    // Reemplazar mensaje de carga por la respuesta real
    loadingMsg.textContent = data.reply;
    chatBox.scrollTop = chatBox.scrollHeight;

    // Reproducir la voz de la IA mediante TTS
    reproducirVoz(data.reply);
  })
  .catch(err => {
    console.error('Error de conexion con el servidor:', err);
    // Respuesta de respaldo local instantánea en caso de no estar corriendo el servidor
    loadingMsg.textContent = "Los espiritus no pueden oirte. Asegurate de levantar tu servidor local ejecutando 'python app.py' en la carpeta.";
    chatBox.scrollTop = chatBox.scrollHeight;
    
    // Intenta reproducir mediante TTS del navegador como respaldo absoluto sin servidor
    reproducirVozNativa(loadingMsg.textContent);
  });
}

// Inyecta el HTML de las burbujas de texto
function agregarMensajeHTML(texto, clase) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `message ${clase}`;
  msgDiv.textContent = texto;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
  return msgDiv;
}

// Inicializa el contexto de audio
function inicializarAudio() {
  if (audioContext) {
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }
    return;
  }

  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioContextClass();
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 64; // Analizador de frecuencias pequeño y rápido
    frequencyData = new Uint8Array(analyser.frequencyBinCount);

    // Crear el elemento de audio HTML5 dinámicamente si no existe
    if (!audioEl) {
      audioEl = new Audio();
      audioEl.crossOrigin = "anonymous";
      source = audioContext.createMediaElementSource(audioEl);
      source.connect(analyser);
      analyser.connect(audioContext.destination);
    }
    
    // Iniciar loop de análisis de frecuencia
    analizarFrecuencia();
  } catch (e) {
    console.warn('El navegador no soporta Web Audio API o fue bloqueado:', e);
  }
}

// Llama al endpoint de audio del servidor Python y reproduce
function reproducirVoz(texto) {
  if (!audioEl) return;
  
  // Detener reproducción anterior
  audioEl.pause();
  
  // Llamar al endpoint /api/tts pasándole el texto codificado
  audioEl.src = `/api/tts?text=${encodeURIComponent(texto)}`;
  audioEl.play().catch(err => {
    console.warn('Reproduccion automatica bloqueada:', err);
    // Si falla Flask, recurrir a la voz nativa
    reproducirVozNativa(texto);
  });
}

// Respaldo de voz nativo en JS si el servidor no está disponible
function reproducirVozNativa(texto) {
  if ('speechSynthesis' in window) {
    // Detener voces en reproducción
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'es-CL'; // Español de Chile o neutro
    utterance.rate = 0.95; // Hablar solemne y pausado
    
    // Simular el movimiento de la boca en base al evento boundary (sílabas/palabras)
    utterance.onboundary = function() {
      animarMascaraNativa();
    };

    utterance.onend = function() {
      // Regresar boca a escala original
      if (mouthGroup) {
        mouthGroup.setAttribute('transform', 'scaleY(1)');
      }
    };
    
    window.speechSynthesis.speak(utterance);
  }
}

// Bucle requestAnimationFrame para animar la boca según Web Audio Analyser
function analizarFrecuencia() {
  if (!analyser) return;

  requestAnimationFrame(analizarFrecuencia);
  
  // Obtener frecuencias de amplitud de audio
  analyser.getByteFrequencyData(frequencyData);
  
  // Calcular volumen promedio
  let totalVolume = 0;
  for (let i = 0; i < frequencyData.length; i++) {
    totalVolume += frequencyData[i];
  }
  const averageVolume = totalVolume / frequencyData.length;
  
  // Mapear el volumen (0-255) a una escala Y para la boca (0.3 a 2.5)
  if (averageVolume > 5) {
    const scaleY = 0.3 + (averageVolume / 255) * 2.5;
    mouthGroup.setAttribute('transform', `scaleY(${scaleY})`);
    
    // Mover ligeramente las pupilas de la máscara con la vibración
    const pupilLeft = document.getElementById('eye-left-pupil');
    const pupilRight = document.getElementById('eye-right-pupil');
    if (pupilLeft && pupilRight) {
      const shiftX = (Math.random() - 0.5) * 3;
      pupilLeft.setAttribute('transform', `translateX(${shiftX}px)`);
      pupilRight.setAttribute('transform', `translateX(${shiftX}px)`);
    }
  } else {
    // Silencio
    mouthGroup.setAttribute('transform', 'scaleY(1)');
  }
}

// Animación alternativa para síntesis de voz nativa del navegador
function animarMascaraNativa() {
  const randomScale = 0.4 + Math.random() * 1.8;
  if (mouthGroup) {
    mouthGroup.setAttribute('transform', `scaleY(${randomScale})`);
    setTimeout(() => {
      if (window.speechSynthesis.speaking) {
        mouthGroup.setAttribute('transform', 'scaleY(0.7)');
      }
    }, 80);
  }
}
