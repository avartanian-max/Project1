import { StyleSheet, Text, View, Image } from 'react-native'

import December2025 from '../assets/img/December2025.jpg' 

const Gallery = () => {
  return (
    <View style={styles.container}>
      <Image source={December2025} />

      <Text style={styles.title}>Gallery</Text>

      <View style={styles.card} >
        <Text> My siblings & I supporting Sable Bourbon </Text>
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
    width: 150,
    height: 100,
    boxShadow: '4px 4px rgba(0,0,0,0.1)'
  }
})
