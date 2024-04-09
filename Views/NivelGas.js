import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { SegmentedArc } from '@shipt/segmented-arc-for-react-native';

const GasLevelScreen = ({ navigation }) => {
  const [showArcRanges, setShowArcRanges] = useState(false);
  const [fillValue, setFillValue] = useState(0);
  const ws = new WebSocket('ws://localhost:3000');

  useEffect(() => {
    ws.addEventListener('open', (event) => {
      console.log('WebSocket connection opened', event);
    });

    ws.addEventListener('message', (event) => {
      const data = JSON.parse(event.data); 
      const gasValue = parseInt( data.nivel_gas, 10);
      const calculatedFillValue = (gasValue / 1000) * 100;
      setFillValue(calculatedFillValue);
    });

    ws.addEventListener('close', (event) => {
      console.log('WebSocket connection closed', event);
    });

    return () => {
      ws.close();
    };
  }, []);

  const segments = [
    {
      scale: 0.2,
      filledColor: '#78F5CA',
      emptyColor: '#F2F3F5',
      data: { label: 'Normal' }
    },
    {
      scale: 0.2,
      filledColor: '#F5E478',
      emptyColor: '#F2F3F5',
      data: { label: 'Bajo' }
    },
    {
      scale: 0.2,
      filledColor: '#FFC107',
      emptyColor: '#F2F3F5',
      data: { label: 'Medio' }
    },
    {
      scale: 0.2,
      filledColor: '#FF746E',
      emptyColor: '#F2F3F5',
      data: { label: 'Alto' }
    },
    {
      scale: 0.2,
      filledColor: '#FF0000',
      emptyColor: '#F2F3F5',
      data: { label: 'Muy alto' }
    }
  ];

  const ranges = ['0', '300', '500', '800', '1000'];

  const _handlePress = () => {
    setShowArcRanges(!showArcRanges);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>Nivel de gas</Text>
      <SegmentedArc
        segments={segments}
        fillValue={fillValue}
        isAnimated={true}
        animationDelay={500}
        showArcRanges={showArcRanges}
        ranges={ranges}
      >
        {metaData => (
          <Pressable onPress={_handlePress} style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 16, paddingTop: 16, color: '#fff' }}>{metaData.lastFilledSegment.data.label}</Text>
          </Pressable>
        )}
      </SegmentedArc>
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
    color: '#fff',
    marginTop: 20,
  },
});

export default GasLevelScreen;