from flask import Flask, request, jsonify
from flask_cors import CORS
import threading
import turtle

app = Flask(__name__)
CORS(app)

sensor_data = {
    "temperatura": None,
    "humedad": None,
    "presion": None,
    "giroscopio": {"x": 0, "y": 0, "z": 0}
}

# Configuración inicial de turtle
pantalla = turtle.Screen()
pantalla.title("Trayectoria del Carro")
tortuga = turtle.Turtle()
tortuga.speed(1)

# Inicializa la posición en el centro
tortuga.penup()
tortuga.goto(0, 0)
tortuga.pendown()

@app.route("/api/sensores", methods=["POST"])
def recibir_datos():
    data = request.json
    sensor_data["temperatura"] = data.get("temperatura")
    sensor_data["humedad"] = data.get("humedad")
    sensor_data["presion"] = data.get("presion")
    sensor_data["giroscopio"] = data.get("giroscopio", {"x": 0, "y": 0, "z": 0})

    # Extraer y escalar datos de giroscopio
    giro = data["giroscopio"]
    x = giro.get("x", 0) / 1000.0  # Escalamos para movimiento controlado
    y = giro.get("y", 0) / 1000.0

    # Dibujar con turtle
    nueva_pos = tortuga.pos()
    nueva_x = nueva_pos[0] + x
    nueva_y = nueva_pos[1] + y
    tortuga.goto(nueva_x, nueva_y)

    return jsonify({"status": "OK"}), 200

@app.route("/api/sensores", methods=["GET"])
def obtener_datos():
    return jsonify(sensor_data), 200

def iniciar_flask():
    app.run(host="0.0.0.0", port=5000, debug=False)

if __name__ == "__main__":
    # Ejecutar Flask en un hilo para no bloquear turtle
    threading.Thread(target=iniciar_flask).start()
    pantalla.mainloop()
