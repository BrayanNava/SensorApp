import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import Svg, { Polyline } from "react-native-svg";

const CANVAS_SIZE = 300;

export default function DatosScreen() {
  const [data, setData] = useState(null);
  const [trayectoria, setTrayectoria] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://127.0.0.1:5000/api/sensores");
        const json = await res.json();
        setData(json);

        if (Array.isArray(json.recorrido)) {
          const puntosEscalados = json.recorrido.map(p => ({
            x: (p.x / 100) * CANVAS_SIZE,
            y: (p.y / 100) * CANVAS_SIZE,
          }));
          setTrayectoria(puntosEscalados);
        }
      } catch (error) {
        console.log("Error al obtener datos:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 1000);
    return () => clearInterval(interval);
  }, []);

  const puntos = trayectoria.map(p => `${p.x},${p.y}`).join(" ");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Datos del Carro</Text>
        {data ? (
          <>
            <View style={styles.info}>
              <Text style={styles.text}>Temperatura: {data.temperatura ?? "N/A"}°C</Text>
              <Text style={styles.text}>Humedad: {data.humedad ?? "N/A"}%</Text>
              <Text style={styles.text}>Presión: {data.presion ?? "N/A"} hPa</Text>
              <Text style={styles.text}>Giroscopio:</Text>
              <Text style={styles.text}>
                X: {data.giroscopio.x ?? "N/A"}, Y: {data.giroscopio.y ?? "N/A"}, Z: {data.giroscopio.z ?? "N/A"}
              </Text>
            </View>

            <Text style={[styles.title, { marginTop: 20 }]}>Trayectoria</Text>
            <View style={styles.canvasContainer}>
              <Svg height={CANVAS_SIZE} width={CANVAS_SIZE}>
                <Polyline
                  points={puntos}
                  fill="none"
                  stroke="#36d1dc"
                  strokeWidth="2"
                />
              </Svg>
            </View>
          </>
        ) : (
          <Text style={styles.text}>Cargando datos...</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 40,
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 25,
    width: "85%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
    textAlign: "center",
  },
  info: {
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: "#555",
    marginVertical: 3,
    textAlign: "center",
  },
  canvasContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 16,
    backgroundColor: "#eef6fa",
    overflow: "hidden",
    marginTop: 10,
  },
});
