import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function Componentes() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Componentes</Text>

      <View style={styles.profileContainer}>
        <View style={styles.profileCard}>
          <Image
            source={require('../img/com/ESP32.jpg')}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>ESP32</Text>
        </View>

        <View style={styles.profileCard}>
          <Image
            source={require('../img/com/dht11.jpg')}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Sensor DHT11 (Temperatura y Humedad)</Text>
        </View>
        
        <View style={styles.profileCard}>
          <Image
            source={require('../img/com/BMP180.jpg')}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>BMP180 (Presión)</Text>
        </View>
        
        <View style={styles.profileCard}>
          <Image
            source={require('../img/com/MPU6050.jpg')}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>MPU6050 (Acelerómetro y Giroscopio)</Text>
        </View>
        
        <View style={styles.profileCard}>
          <Image
            source={require('../img/com/MotoresDC.jpg')}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Motores DC</Text>
        </View>
        
        <View style={styles.profileCard}>
          <Image
            source={require('../img/com/puenteH.jpg')}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Puente H</Text>
        </View>
                
        <View style={styles.profileCard}>
          <Image
            source={require('../img/com/puentes.jpg')}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Cales Puente</Text>
        </View>
                
        <View style={styles.profileCard}>
          <Image
            source={require('../img/com/obtaculo.png')}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Sensor de Obstáculos</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  title: { 
    fontSize: 24, 
    marginBottom: 20, 
    textAlign: "center",
    fontWeight: 'bold',
    color: '#333'
  },
  profileContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10
  },
  profileCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  profileImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10
  },
  profileName: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    color: '#444'
  }
});