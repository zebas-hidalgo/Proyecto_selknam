# -*- coding: utf-8 -*-
import io
import os
import requests
from flask import Flask, request, jsonify, send_file
from gtts import gTTS

app = Flask(__name__)

# Fallback de respuestas del chamán Tenenesk en caso de que Ollama no esté corriendo localmente
RESPUESTAS_FALLBACK = {
    "hain": (
        "El Hain es nuestro gran secreto y ceremonia de iniciacion. Es donde los jovenes kloketen "
        "entran como ninos y salen como hombres despues de pasar duras pruebas fisicas y enfrentar a "
        "los espiritus representados por chamanes usando mascaras pintadas."
    ),
    "espiritu": (
        "Los espiritus como Kotaix, el temible espiritu cornudo del trueno, y Shoort, el rigido ejecutor "
        "de la piedra, habitan en el Hain. Debemos respetarlos y pintar nuestros cuerpos para representarlos."
    ),
    "kotaix": (
        "Kotaix es un espiritu ruidoso y jugueton de la ceremonia. Tiene una gran cabeza alargada y cuernos. "
        "Representa al trueno y le gusta asustar a los iniciados con sus saltos rapidos."
    ),
    "shoort": (
        "Shoort es el espiritu de la piedra y del orden. Castiga a los desobedientes y vigila a los kloketen "
        "con sus lineas verticales de arcilla blanca sobre su cuerpo de color rojo oscuro."
    ),
    "hola": (
        "Que los espiritus te guien. Soy el chaman Tenenesk. Hablo con la sabiduria de nuestros ancestros de "
        "Karukinka (Tierra del Fuego). ¿Que deseas conocer sobre nuestro pueblo o el gran ritual del Hain?"
    ),
    "quien eres": (
        "Soy Tenenesk, un Xo'on (chaman) del pueblo Selk'nam. Transmito las leyendas y la historia "
        "de nuestro pueblo antes de que los invasores silencien nuestra cultura."
    )
}

@app.after_request
def add_cors_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type"
    response.headers["Access-Control-Allow-Methods"] = "POST, GET, OPTIONS"
    return response

@app.route("/api/chat", methods=["POST", "OPTIONS"])
def chat():
    if request.method == "OPTIONS":
        return jsonify({"status": "ok"}), 200
        
    data = request.json or {}
    mensaje_usuario = data.get("message", "").lower()
    
    # Intentar conectar a Ollama local
    try:
        ollama_url = "http://localhost:11434/api/generate"
        payload = {
            "model": "llama3", # o el modelo que usen los alumnos
            "prompt": f"Actua como Tenenesk, un sabio chaman Selk'nam. Responde de forma respetuosa y solemne. Pregunta: {mensaje_usuario}",
            "system": "Eres Tenenesk, un anciano chaman Selk'nam. Transmites la cosmovision y leyendas del Hain basandote en hechos historicos reales. No inventes informacion moderna.",
            "stream": False
        }
        response = requests.post(ollama_url, json=payload, timeout=2)
        if response.status_code == 200:
            respuesta_texto = response.json().get("response", "")
            return jsonify({"reply": respuesta_texto})
    except Exception:
        # En caso de falla o de que no este instalado, recurre al sistema de palabras clave
        pass
        
    # Lógica de fallback basada en palabras clave
    reply = "Los espiritus del bosque susurran tus palabras, pero no comprendo. Preguntame sobre el Hain, los espiritus o quien soy."
    for clave, respuesta in RESPUESTAS_FALLBACK.items():
        if clave in mensaje_usuario:
            reply = respuesta
            break
            
    return jsonify({"reply": reply})

@app.route("/api/tts", methods=["GET"])
def tts():
    text = request.args.get("text", "Que los espiritus te guien.")
    
    try:
        # Generar audio con gTTS en memoria
        tts_obj = gTTS(text=text, lang="es")
        fp = io.BytesIO()
        tts_obj.write_to_fp(fp)
        fp.seek(0)
        return send_file(fp, mimetype="audio/mp3")
    except Exception as e:
        return jsonify({"error": f"Falla en la generacion de audio: {e}"}), 500

if __name__ == "__main__":
    host = os.environ.get("FLASK_RUN_HOST", "127.0.0.1")
    print(f"Iniciando Servidor Flask de El Xo'on Digital en http://{host}:5000")
    app.run(host=host, port=5000, debug=True)
