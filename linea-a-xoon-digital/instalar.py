# -*- coding: utf-8 -*-
import subprocess
import sys

def instalar_dependencias():
    print("Iniciando instalacion automatica para El Xo'on Digital...")
    dependencias = ["flask", "requests", "gTTS"]
    
    try:
        # Ejecuta la instalación usando el módulo pip del intérprete de Python actual
        subprocess.check_call([sys.executable, "-m", "pip", "install"] + dependencias)
        print("\n[OK] Todas las dependencias (Flask, Requests, gTTS) han sido instaladas con exito.")
        print("Puedes iniciar el servidor ejecutando:")
        print(f"  {sys.executable} app.py")
    except Exception as e:
        print(f"\n[ERROR] Ocurrio un problema durante la instalacion: {e}")
        print("Intenta instalar manualmente usando: pip install flask requests gtts")

if __name__ == "__main__":
    instalar_dependencias()
