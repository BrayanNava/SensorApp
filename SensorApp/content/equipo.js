// equipo.js
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function EquipoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Nuestro Proyecto</Text>
      <Text style={styles.description}>
        Este proyecto tiene como objetivo monitorear datos de sensores como temperatura,
        humedad, presión y dirección usando un ESP8266 y visualizar los resultados en tiempo real, con un robot seguidor de línea.
      </Text>

      <View style={styles.profileContainer}>
        {EQUIPO.map((persona, index) => (
          <View style={styles.profileCard} key={index}>
            <Image source={persona.imagen} style={styles.profileImage} />
            <Text style={styles.profileName}>{persona.nombre}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const EQUIPO = [
  {
    nombre: 'Cesar Luis Reyes Ochoa',
    imagen: require('../img/csar.jpeg'),
  },
  {
    nombre: 'Brayan Marshal Nava Diaz',
    imagen: require('../img/123.jpg'),
  },
  {
    nombre: 'Jorge Antonio Reyes Reyes',
    imagen: require('../img/reyes.png'),
  },
];

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  profileContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // 🔥 IMPORTANTE: Permite que pasen a otra línea
    justifyContent: 'space-around',
    width: '100%',
  },
  profileCard: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    width: '45%', // 🔥 Ajuste para que quepan 2 por fila
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  profileName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});