import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const LeakInstructionsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>¿Qué hacer en caso de una fuga?</Text>
      <Text style={styles.instructions}>
        1. No encender ni apagar luces, electrodomésticos o cualquier fuente de
        ignición.
      </Text>
      <Text style={styles.instructions}>
        2. Abrir puertas y ventanas para permitir la ventilación.
      </Text>
      <Text style={styles.instructions}>
        3. Salir del área y alejarse de la fuga.
      </Text>
      <Text style={styles.instructions}>
        4. Desde un lugar seguro, llamar al número de emergencias y a la
        compañía de gas.
      </Text>
      <Text style={styles.instructions}>
        5. No volver al área hasta que las autoridades competentes indiquen que
        es seguro.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#236",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  instructions: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
});

export default LeakInstructionsScreen;
