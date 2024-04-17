import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
const GasLevelScreen = ({ navigation }) => {
  const [fillValue, setFillValue] = useState(0);
  const ws = new WebSocket("ws://localhost:3000");

  useEffect(() => {
    ws.addEventListener("open", (event) => {
      console.log("WebSocket connection opened", event);
    });

    ws.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      const gasValue = parseInt(data.nivel_gas, 10);
      const calculatedFillValue = (gasValue / 1000) * 100;
      setFillValue(calculatedFillValue);
      if (fillValue >= data.threshold) {
        navigation.navigate("Aviso");
      }
    });

    ws.addEventListener("close", (event) => {
      console.log("WebSocket connection closed", event);
    });

    return () => {
      ws.close();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>Nivel de gas</Text>
      <AnimatedCircularProgress
        size={120}
        width={15}
        fill={fillValue}
        arcSweepAngle={180}
        rotation={-90}
        tintColor="#00e0ff"
        onAnimationComplete={() => console.log("onAnimationComplete")}
        backgroundColor="#3d5875"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#236",
    alignItems: "center",
    justifyContent: "center",
  },
  statusText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
    marginBottom: 20,
  },
});

export default GasLevelScreen;
