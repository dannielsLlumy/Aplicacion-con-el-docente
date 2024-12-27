import { Alert, Image, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native'
import React, { useState } from 'react'

export default function Tarjeta2(props: any) {
    const [modalVisible, setModalVisible] = useState(false)

    function detalles(nombre: string) {
        setModalVisible(true)
    }

    return (
        <View>
            <TouchableOpacity style={styles.container}
                onPress={() => detalles(props.series.titulo)}>
                <Text style={styles.titulo}>{props.series.titulo}</Text>
                <View style={styles.fila}>
                    <Image source={{ uri: props.series.info.imagen }} style={styles.img} />
                    <Text style={styles.descripcion}>{props.series.descripcion}</Text>
                </View>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Detalles de la serie</Text>
                        <Image source={{ uri: props.series.info.imagen }} style={styles.modalImg} />
                        <Text style={styles.modalText}>La serie es: {props.series.titulo}</Text>
                        <Text style={styles.modalText}>Año: {props.series.anio}</Text>
                        <Text style={styles.modalText}>Temporadas: {props.series.metadata.temporadas}</Text>
                        <Text style={styles.modalText}>Creador: {props.series.metadata.creador}</Text>
                        <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.modalButtonText}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2c3e50',
        margin: 15,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        elevation: 5
    },
    img: {
        height: 100,
        width: 100,
        resizeMode: "cover",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#3498db'
    },
    fila: {
        flexDirection: "row",
        padding: 15
    },
    descripcion: {
        flex: 1,
        fontSize: 14,
        color: '#ecf0f1',
        paddingLeft: 10
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ecf0f1',
        textAlign: 'center',
        padding: 10
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    modalContent: {
        backgroundColor: '#34495e',
        borderRadius: 15,
        padding: 25,
        width: '85%'
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ecf0f1',
        textAlign: 'center',
        marginBottom: 15
    },
    modalText: {
        fontSize: 16,
        color: '#bdc3c7',
        paddingVertical: 5
    },
    modalButton: {
        backgroundColor: '#3498db',
        paddingVertical: 12,
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
    },
    modalButtonText: {
        fontSize: 18,
        color: '#fff'
    },
    modalImg: {
        height: 200,
        width: 200,
        resizeMode: "contain",
        borderRadius: 100,
        marginBottom: 25,
        alignSelf: 'center'
    },
})
