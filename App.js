import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './Views/InicioSesion';
import GasLevelScreen from './Views/NivelGas';
import WarningScreen from './Views/Peligro';
import LeakInstructionsScreen from './Views/Instrucciones';
import ConfigScreen from './Views/Opciones';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Inicio de sesion" component={SignInScreen} />
        <Stack.Screen name="Nivel de gas" component={GasLevelScreen} />
        <Stack.Screen name="Aviso" component={WarningScreen} />
        <Stack.Screen name="Instrucciones" component={LeakInstructionsScreen} />
        <Stack.Screen name="Opciones" component={ConfigScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
