import { StyleSheet, View, ScrollView } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const appInfo = () => {
  return (
    <ThemedView style={styles.container}>
      <ScrollView>
      <ThemedText style={styles.title}>About the App</ThemedText>

      
      <View style={styles.card}>
        <ThemedText style={styles.cardTitle}>Alex Vartanian</ThemedText>

        <ThemedText style={styles.text}>
          <ThemedText style={styles.bold}>Parts worked on: </ThemedText>
          Created the home page, about the app page, student info page, and handled navigation between pages
        </ThemedText>

        <ThemedText style={styles.text}>
          <ThemedText style={styles.bold}>Tools used: </ThemedText>
          Expo, React Navigation, ES7+ React/Redux/React-Native snippets, VS Code Studio
        </ThemedText>

        <ThemedText style={styles.text}>
          <ThemedText style={styles.bold}>What went well: </ThemedText>
          Creating the pages and styling was easy enough and simple, as well as creating the themes and links to each page.
        </ThemedText>

        <ThemedText style={styles.text}>
          <ThemedText style={styles.bold}>What was challenging: </ThemedText>
          The implementation of navigation and deciding which type of navigation to use (links + stack) vs tabs, getting used to GitHub and remembering to commit and save my work, and checking before merging it all into main.
        </ThemedText>
      </View>

      
      <View style={styles.card}>
        <ThemedText style={styles.cardTitle}>Joshua Williams</ThemedText>

        <ThemedText style={styles.text}>
          <ThemedText style={styles.bold}>Parts worked on: </ThemedText>
          Gallery Page, Project/Skills page, Goals/Plans page, and handled styling choices across all pages
        </ThemedText>

        <ThemedText style={styles.text}>
          <ThemedText style={styles.bold}>Tools used: </ThemedText>
          Expo, React Navigation, ES7+ React/Redux/React-Native snippets, VS Code Studio
        </ThemedText>

        <ThemedText style={styles.text}>
          <ThemedText style={styles.bold}>What went well: </ThemedText>
          Creating the styles and cards went smoothly, allowing us to easily separate information.
        </ThemedText>

        <ThemedText style={styles.text}>
          <ThemedText style={styles.bold}>What was challenging: </ThemedText>
          Importing the pictures into the gallery was confusing at first, but once I found the right path to the img folder, it was easy after that.
        </ThemedText>
      </View>
      </ScrollView>
    </ThemedView>
  )
}

export default appInfo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
  },
  card: {
    width: '100%',
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 16,
    backgroundColor: '#ADD8E6',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    marginBottom: 8,
  },
  bold: {
    fontWeight: 'bold',
  },
  link: {
    marginTop: 10,
    borderBottomWidth: 1,
  },
})
