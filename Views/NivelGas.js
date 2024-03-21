import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const GasLevelScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.statusText}>Estatus: Sin fuga</Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => {navigation.navigate('Aviso')}}>
                <Text style={styles.buttonText}>Aviso</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => {navigation.navigate('Instrucciones')}}>
                <Text style={styles.buttonText}>Instrucciones</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => {navigation.navigate('Opciones')}}>
                <Text style={styles.buttonText}>Opciones</Text>
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
    gauge: {
        marginVertical: 20,
    },
    statusText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
    },
    button: {
        backgroundColor: '#000000',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 100,
        marginVertical: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default GasLevelScreen;