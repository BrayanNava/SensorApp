import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./content/login";
import EquipoScreen from "./content/equipo";
import DatosScreen from "./content/datos";
import ComponentesScreen from "./content/componentes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Equipo') {
            iconName = 'people';
          } else if (route.name === 'Datos') {
            iconName = 'analytics';
          } else if (route.name === 'Componentes') {
            iconName = 'construct';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#5b86e5',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Equipo" component={EquipoScreen} />
      <Tab.Screen name="Datos" component={DatosScreen} />
      <Tab.Screen name="Componentes" component={ComponentesScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isLoggedIn ? (
          <Stack.Screen name="Login">
            {(props) => <LoginScreen {...props} onLogin={() => setIsLoggedIn(true)} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="MainTabs" component={MainTabs} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}