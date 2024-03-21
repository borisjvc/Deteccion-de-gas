import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Svg, {
  Circle,
  Text as SvgText,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const GasLevelScreen = ({ navigation }) => {
  // Valor del nivel de gas (entre 0 y 100, por ejemplo)
  const gasLevel = 75;

  // Calcular el ángulo del medidor basado en el nivel de gas
  const angle = (gasLevel / 100) * 180;

  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>Nivel de gas</Text>
      <Svg height="300" width="300">
        {/* Definir un degradado para el medidor */}
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="#FF0000" />
            <Stop offset="1" stopColor="#00FF00" />
          </LinearGradient>
        </Defs>
        {/* Círculo exterior */}
        <Circle
          cx="150"
          cy="150"
          r="120"
          stroke="#000"
          strokeWidth="2"
          fill="none"
        />
        {/* Círculo del indicador */}
        <Circle
          cx="150"
          cy="150"
          r="100"
          stroke="url(#grad)"
          strokeWidth="20"
          fill="none"
          strokeDasharray={`${angle}, 180`}
          transform="rotate(-90, 150, 150)"
        />
        {/* Texto del nivel de gas */}
        <SvgText x="150" y="170" fill="#000" textAnchor="middle" fontSize="24">
          {gasLevel}%
        </SvgText>
      </Svg>
      <Text style={styles.statusText}>Estatus: Sin fuga</Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate("Aviso");
        }}
      >
        <Text style={styles.buttonText}>Aviso</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate("Instrucciones");
        }}
      >
        <Text style={styles.buttonText}>Instrucciones</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate("Opciones");
        }}
      >
        <Text style={styles.buttonText}>Opciones</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD700",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#000000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
    marginVertical: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  statusText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    marginTop: 20,
  },
});

export default GasLevelScreen;
