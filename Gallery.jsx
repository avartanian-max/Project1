import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Gallery = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gallery</Text>

      <View style={styles.card} >
        <Text> </Text>
        </View>
    </View>
  )
}

export default Gallery

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center' ,
    justifyContent: 'center'
  },

  title: {
    fontWeight: 'bold' ,
    fontSize: 25,
  },

  card: {
    backgroundColor: '#ADD8E6',
    padding: 20,
    marginVertical: 10,
    borderRadius: 5,
    width: 400,
    height: 200,
    boxShadow: '4px 4px rgba(0,0,0,0.1)'
  }
})
