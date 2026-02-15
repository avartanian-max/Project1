import { StyleSheet, Text, View, Image } from 'react-native'

import December2025 from '../assets/img/December2025.jpg' 
import ACertification from '../assets/img/A+Certification.jpg'
import NetworkPlus from '../assets/img/Network-1.jpg'  
import DarkLogo from '../assets/img/csubdark.jpg' 
import LightLogo from '../assets/img/csublight.jpg'  

const Gallery = () => {
  return (
    <View style={{ alignSelf: 'left' }}>
      <Image source={December2025} />
      <Image source={ACertification} />
      <Image source={NetworkPlus} />
      <Image source={DarkLogo} />
      <Image source={LightLogo} />

      <View style={styles.topRightElement} >
        <Text> My siblings & I supporting Sable Bourbon </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> A+ Certification from Junior Year 2018 </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>      
        <Text> Network+ Certification from Senior Year 2020 </Text>
        </View>

      <View style={styles.topMiddleElement} >
      <Text> CSUB Dark Logo </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> CSUB Light Logo</Text>
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
     top: 0,  // Adjust distance from the top
     right: 0, // Adjust distance from the right
     backgroundColor: 'lightblue',
     padding: 5,
     borderRadius: 5,
     height: 378,
     width: 253,
  },

    topMiddleElement: {
    // The child element is positioned relative to its parent container
    position: 'absolute',
    top: 378,  // Adjust distance from the top
    right: 0, // Adjust distance from the right
    backgroundColor: 'lightblue',
    padding: 5,
    borderRadius: 5,
    height: 378,
    width: 253,
  },
})

