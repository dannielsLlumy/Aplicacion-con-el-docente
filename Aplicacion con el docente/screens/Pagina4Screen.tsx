import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import datos from '../assets/data/series.json'
import Tarjeta2 from '../components/Tarjeta2'

export default function Pagina4Screen() {
  return (
    <View>
      <Text style={styles.title}>SERIES</Text>
      <FlatList
      data={datos.series}
      renderItem={({item}) => <Tarjeta2 series={item}/>}/>
    </View>
  )
}
const styles = StyleSheet.create({
    title:{
        fontSize:30,
        textAlign:"center",
        fontWeight:"bold"
    }
})