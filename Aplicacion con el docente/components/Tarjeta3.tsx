import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';

export default function Tarjeta3({ datos }: any) {
    const [modalVisible, setModalVisible] = useState(false);

    function detalles(name: string) {
        setModalVisible(true);
    }

    return (
        <View style={styles.tarjeta}>
            <TouchableOpacity onPress={() => detalles(datos.name.first)} style={styles.tarjetaTouchable}>
                <Text style={styles.titulo}>{datos.name.first}</Text>
                <Text style={styles.descripcion}>{datos.occupation}</Text>
                <Image style={styles.img} source={{ uri: datos.images.main }} />
            </TouchableOpacity>
            <Modal
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Detalles del personaje</Text>
                        <Text style={styles.modalText}>Nombre: {datos.name.first}</Text>
                        <Text style={styles.modalText}>Ocupación: {datos.occupation}</Text>
                        <Image style={styles.modalImg} source={{ uri: datos.images.main }} />
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
                            <Text style={styles.modalButtonText}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    tarjeta: {
        backgroundColor: '#f8f8f8',
        padding: 15,
        margin: 12,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ececec',
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    tarjetaTouchable: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
    },
    titulo: {
        fontSize: 20,
        fontWeight: '600',
        color: '#2c3e50',
        textAlign: 'center',
        marginBottom: 10,
    },
    descripcion: {
        fontSize: 14,
        color: '#7f8c8d',
        textAlign: 'center',
        marginBottom: 10,
    },
    img: {
        width: 160,
        height: 160,
        resizeMode: 'cover',
        borderRadius: 20,
        alignSelf: 'center',
        marginBottom: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 25,
        borderRadius: 25,
        width: '85%',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#34495e',
        textAlign: 'center',
        marginBottom: 15,
    },
    modalText: {
        fontSize: 16,
        color: '#7f8c8d',
        marginVertical: 8,
        textAlign: 'center',
    },
    modalImg: {
        width: 180,
        height: 180,
        resizeMode: 'contain',
        borderRadius: 25,
        marginBottom: 20,
        alignSelf: 'center',
    },
    modalButton: {
        backgroundColor: '#3498db',
        paddingVertical: 12,
        borderRadius: 20,
        marginTop: 25,
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalButtonText: {
        fontSize: 18,
        color: '#fff',
    },
});
