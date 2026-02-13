import { StyleSheet, Text, View, Image } from 'react-native'

import December2025 from '../assets/img/December2025.jpg' 

const Gallery = () => {
  return (
    <View style={{ alignSelf: 'left' }}>
      <Image source={December2025} />
      <Image source={ACertification} />

      <View style={styles.card} >
        <Text> My siblings & I supporting Sable Bourbon </Text>
        </View>

      <View style={styles.card} >
        <Text> A+ Certification from Junior Year 2019 </Text>
        </View>

    </View>
  )
}

export default Gallery

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'flexstart' ,
    justifyContent: 'flexstart' ,
    padding: 10 ,    
  },

  card: {
    backgroundColor: '#ADD8E6',
    padding: 20,
    marginVertical: 10,
    borderRadius: 5,
    width: 200,
    height: 100,
    boxShadow: '4px 4px rgba(0,0,0,0.1)'
  }
})
