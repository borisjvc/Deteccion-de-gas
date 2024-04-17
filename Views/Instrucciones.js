import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LeakInstructionsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>¿Qué hacer en caso de una fuga?</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/5f11f1f061d65769617876.jpeg")}
          style={styles.image}
        />
      </View>
      <Text style={styles.instructions}>
        1. No encender ni apagar luces, electrodomésticos o cualquier fuente de
        ignición.
      </Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/png-transparent-light-latching-relay-electrical-switches-label-no-symbol-light.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.instructions}>
        2. Abrir puertas y ventanas para permitir la ventilación.
      </Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/152936160-ilustración-de-abrir-ventanas-para-ventilación.jpg")}
          style={styles.image}
        />
      </View>
      <Text style={styles.instructions}>
        3. Salir del área y alejarse de la fuga.
      </Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/57402871-fuga-de-gas-señal-de-advertencia-icono-de-señal-de-contaminación-tubería-de-gas.jpg")}
          style={styles.image}
        />
      </View>
      <Text style={styles.instructions}>
        4. Desde un lugar seguro, llamar al número de emergencias y a la
        compañía de gas.
      </Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/64043726-llamar-al-911-el-concepto-de-llamadas-de-emergencia-teléfono-inteligente-sosteniendo-la-mano-el.jpg")}
          style={styles.image}
        />
      </View>
      <Text style={styles.instructions}>
        5. No volver al área hasta que las autoridades competentes indiquen que
        es seguro.
      </Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/no-pase1.jpg")}
          style={styles.image}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#236",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: '#ffffff',
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: windowWidth - 0, // Ajuste según el padding
    height: windowHeight * 0.3,
    resizeMode: "cover",
    borderRadius: 5,
  },
  instructions: {
    fontSize: 20,
    color: '#ffffff',
    marginBottom: 10,
    textAlign: "center",
  },
});

export default LeakInstructionsScreen;