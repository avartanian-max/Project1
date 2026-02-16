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
      <ThemedText style = {styles.text}> By: Joshua Williams, Alexander Vartanian </ThemedText>
    <Spacer height = {20}/>

    <View style = {styles.card}>
        <ThemedText style = {styles.text}>                  Welcome to our app</ThemedText>
        <ThemedText style = {styles.text}>       This app serves as an introduction</ThemedText>
        <ThemedText style = {styles.text}>to display our current skills and future goals</ThemedText>
    </View>
    <Link href="/about" style={styles.link}>
    <ThemedText>Student Info</ThemedText>
    </Link>
    <Link href="/appinfo" style={styles.link}>
    <ThemedText>About the App</ThemedText>
    </Link>
    <Link href="/ProjectsSkills" style={styles.link}>
    <ThemedText>Projects & Skills</ThemedText>
    </Link>
    <Link href="/GoalsandPlan" style={styles.link}>
    <ThemedText>Goals & Plans</ThemedText>
    </Link>
    <Link href="/Gallery" style={styles.link}>
    <ThemedText>Gallery</ThemedText>
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
        backgroundColor: '#ADD8E6',
        padding: 20,
        borderRadius: 5,
        boxShadow: '4px 4px rgba(0,0,0,0.1)'
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1
    }
})