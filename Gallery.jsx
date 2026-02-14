import { StyleSheet, Text, View, Image } from 'react-native'

import December2025 from '../assets/img/December2025.jpg' 
import ACertification from '../assets/img/A+Certification.jpg'
import NetworkPlus from '../assets/img/Network-1.jpg'  

const Gallery = () => {
  return (
    <View style={{ alignSelf: 'left' }}>
      <Image source={December2025} />
      <Image source={ACertification} />
      <Image source={NetworkPlus} />

      <View style={styles.topRightElement} >
        <Text> My siblings & I supporting Sable Bourbon </Text>
        </View>

      <View style={styles.card} >
        <Text> A+ Certification from Junior Year 2019 </Text>
        </View>

      <View style={styles.card} >
      <Text> Network+ Certification from Senior Year 2020 </Text>
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
  },

   topRightElement: {
    // The child element is positioned relative to its parent container
     position: 'absolute',
     top: 2,  // Adjust distance from the top
     right: 10, // Adjust distance from the right
     backgroundColor: 'lightblue',
     padding: 5,
     borderRadius: 5,
     height: 150,
     width: 200,
  },   
})
