import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignInScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Inicia sesión</Text>

            <TextInput
                style={styles.input}
                placeholder="Correo electronico"
                keyboardType="email-address"
                returnKeyType="done"
                selectionColor="#000"
            />

            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry
            />

            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => {navigation.navigate('Nivel de gas')}}>
                <Text style={styles.buttonText}>Iniciar sesión</Text>
            </TouchableOpacity>

            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>Olvidaste tu contraseña?</Text>
                <Text style={styles.footerText}>Crear una cuenta</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFD700',
        alignItems: 'center',
    },
    title: {
        marginTop: 50,
        fontSize: 50,
        fontWeight: 'bold',
        marginVertical: 20,
        marginBottom: 70,
    },
    input: {
        width: 230,
        height: 40,
        borderColor: 'gray',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        marginVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 15
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
    footerContainer: {
        marginTop: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    footerText: {
        fontSize: 16,
        color: '#000000',
    },
});

export default SignInScreen;