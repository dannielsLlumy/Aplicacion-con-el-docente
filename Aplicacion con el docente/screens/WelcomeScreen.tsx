import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function WelcomeScreen({ navigation } : any) {
const [nombre, setNombre] = useState('');
const [carrera, setCarrera] = useState('');

const handleStart = () => {
    // Aquí puedes agregar más validaciones si es necesario
    if (nombre && carrera) {
    navigation.navigate('MyTabs', { nombre, carrera });
    } else {
    alert('Por favor, ingrese tanto su nombre como su carrera.');
    }
};

return (
    <View style={styles.container}>
    <Text style={styles.title}>Bienvenido</Text>
    <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
    />
    <TextInput
        style={styles.input}
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}
    />
    <Button title="Ingresar" onPress={handleStart} />
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
});
