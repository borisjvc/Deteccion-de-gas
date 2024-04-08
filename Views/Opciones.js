import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const ConfigScreen = () => {
  const [alarmVolume, setAlarmVolume] = useState(0.5);
  const [threshold, setThreshold] = useState(50);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.label}>Volumen de la alarma</Text>
        <Slider
          style={{ width: 250, height: 40 }}
          value={alarmVolume}
          minimumValue={0}
          maximumValue={1}
          step={0.05}
          onValueChange={value => setAlarmVolume(value)}
        />
        <Text style={styles.label}>{Math.round(alarmVolume * 100)}%</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Umbral para alerta de fuga</Text>
        <Slider
          style={{ width: 250, height: 40 }}
          value={threshold}
          minimumValue={0}
          maximumValue={1000}
          step={1}
          onValueChange={value => setThreshold(value)}
        />
        <Text style={styles.label}>{threshold}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#236",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
    
  },
  label: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
});

export default ConfigScreen;

