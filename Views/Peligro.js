import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const WarningScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../warning-icon.jpg')}
        style={styles.warningIcon}
      />
      <Text style={styles.warningText}>¡Aviso! Revisa tu instalación</Text>
      <TouchableOpacity style={styles.callButton}>
        <Text style={styles.callButtonText}>Llamar al 911</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
  },
  warningIcon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  warningText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
  },
  callButton: {
    backgroundColor: '#FF0000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  callButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WarningScreen;