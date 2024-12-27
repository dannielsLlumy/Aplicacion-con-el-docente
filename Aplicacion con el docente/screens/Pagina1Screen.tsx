import { Alert, Button, ImageBackground, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function Pagina1Screen() {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [ciudad, setCiudad] = useState('');
    const handleIngresarDatos = () => {
        console.log("Botón presionado, iniciando validación..."); 
        const edadNumerica = parseInt(edad, 10);
        if (!nombre || !edad || !ciudad) {
            Alert.alert("Error", "Por favor, complete todos los campos.");
            return;
        }
        if (isNaN(edadNumerica) || edadNumerica <= 0) {
            Alert.alert("Error", "Por favor, ingrese una edad válida.");
            return;
        }
        const esMayorDeEdad = edadNumerica >= 18;
        const mensajeEdad = esMayorDeEdad
            ? "Es mayor de edad."
            : "Es menor de edad.";
        Alert.alert(
            "Datos Ingresados",
            `Nombre: ${nombre}\nEdad: ${edadNumerica}\nCiudad: ${ciudad}\n${mensajeEdad}`,
            [{ text: "Aceptar", onPress: limpiarCampos }] 
        );
    };
    const limpiarCampos = () => {
        console.log("Limpieza de campos..."); 
        setNombre('');
        setEdad('');
        setCiudad('');
    };
    return (
        <ImageBackground 
            source={{ uri: "https://4kwallpapers.com/images/walls/thumbs_3t/20217.jpg" }}
            style={styles.img}
        >
            <TextInput
                placeholder='INGRESAR NOMBRE'
                placeholderTextColor={'white'}
                value={nombre}
                onChangeText={setNombre}
                style={styles.input}
            />
            <TextInput
                placeholder='INGRESAR EDAD'
                placeholderTextColor={'white'}
                value={edad}
                onChangeText={setEdad}
                style={styles.input}
                keyboardType='numeric'
            />
            <TextInput
                placeholder='INGRESAR CIUDAD'
                placeholderTextColor={'white'}
                value={ciudad}
                onChangeText={setCiudad}
                style={styles.input}
            />
            
            <Button title='INGRESAR DATOS' onPress={handleIngresarDatos} />
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    img: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        borderWidth: 2.5,
        borderColor: 'white',
        borderRadius: 25,
        padding: 10,
        marginBottom: 10,
        color: 'white',
    },
});
