import { StyleSheet, Text, View, Image} from 'react-native'
import { Link } from 'expo-router'

import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'


const Home = () => {
  return (
    <ThemedView style = {styles.container}>
        <ThemedLogo styles={styles.img}/>
        <Spacer height={20}/>

      <ThemedText style ={styles.title} title={true}
      >Student Introductions
      </ThemedText>
    <Spacer height ={10}/>
      <ThemedText> By: Joshua Williams, Alexander Vartanian </ThemedText>
    <Spacer height = {20}/>

    <View style = {styles.card}>
        <Text></Text>
    </View>
    <Link href="/about" style={styles.link}>
    <ThemedText>About Page</ThemedText>
    </Link>
    <Link href="/contact" style={styles.link}>
    <ThemedText>Contact Page</ThemedText>
    </Link>
    <Link href="/profile" style={styles.link}>
    <ThemedText>Profile Page</ThemedText>
    </Link>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    card: {
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 5,
        boxShadow: '4px 4px rgba(0,0,0,0.1)'
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1
    }
})
