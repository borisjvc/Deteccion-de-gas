import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";

const WarningScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../warning-icon.jpg")}
        style={styles.warningIcon}
      />
      <Text style={styles.warningText}>¡Aviso! Fuga de gas detectada</Text>
      <TouchableOpacity style={styles.callButton}>
        <Text
          style={styles.callButtonText}
          onPress={() => {
            Linking.openURL("tel:911");
          }}
        >
          Llamar al 911
        </Text>
      </TouchableOpacity>
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
  warningIcon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  warningText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  callButton: {
    backgroundColor: "#FF0000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  callButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default WarningScreen;
