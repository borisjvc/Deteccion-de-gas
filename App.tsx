import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignInScreen from "./Views/InicioSesion";
import GasLevelScreen from "./Views/NivelGas";
import WarningScreen from "./Views/Peligro";
import LeakInstructionsScreen from "./Views/Instrucciones";
import ConfigScreen from "./Views/Opciones";
import RegisterScreen from "./Views/Registro";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 65,
          paddingHorizontal: 3,
          paddingTop: 0,
          backgroundColor: '#1C1212',
          position: 'absolute',
          borderTopWidth: 0,
      },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: React.ComponentProps<typeof Ionicons>['name'] =
            'game-controller';

          if (route.name === 'Aviso') {
            iconName = focused ? 'alert-circle' : 'alert-circle-outline';
          } 
          if (route.name === 'Opciones') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          if(route.name === 'Instrucciones'){
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          }
          if(route.name === 'Nivel de gas'){
            iconName = focused ? 'bar-chart' : 'bar-chart-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'white',
      })}>
        <Tab.Screen name="Nivel de gas" component={GasLevelScreen} />
        <Tab.Screen name="Aviso" component={WarningScreen} />
        <Tab.Screen name="Instrucciones" component={LeakInstructionsScreen} />        
        <Tab.Screen name="Opciones" component={ConfigScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
