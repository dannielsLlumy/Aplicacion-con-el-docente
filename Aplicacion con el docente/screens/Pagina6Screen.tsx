import { useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import Tarjeta3 from "../components/Tarjeta3";

export default function Pagina6Screen() {
    const [datos, setdatos] = useState([]);
    useEffect(() => {
        async function leerArchivo() {
            const resp = await fetch('https://api.sampleapis.com/futurama/characters');
            const json = await resp.json();
            setdatos(json);
            console.log(datos);
        }
        leerArchivo();
    }, []);
    return (
        <View>
            <FlatList
                data={datos}
                renderItem={({ item }) => <Tarjeta3 datos={item} />}
            />
        </View>
    );
}
const styles = StyleSheet.create({})