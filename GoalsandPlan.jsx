import { StyleSheet, View, ScrollView } from 'react-native'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const GoalsandPlan = () => {
  return (
    <ThemedView style={styles.container}>
      <ScrollView>
        <ThemedText style={styles.title}>Goals and Future Project Ideas</ThemedText>

        
        <View style={styles.card}>
          <ThemedText
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginBottom: 10,
              textAlign: 'center'
            }}
          >
            Joshua's Goals
          </ThemedText>

          <ThemedText style={styles.text}>
            Learn how to use everything associated with GitHub. It's important to
            learn about GitHub because you can use the terminal and web interface
            to create and manage repositories.
          </ThemedText>

          <ThemedText style={styles.text}>
            Learn how to successfully create mobile and desktop apps. This is
            important because going through the process of creating apps makes
            you more knowledgeable in presenting them to others.
          </ThemedText>

          <ThemedText style={styles.text}>
            Learn new programming languages involved in application development.
            I believe it is important to explore every level of programming
            languages, including ones used in application development.
          </ThemedText>
        </View>

        
        <View style={styles.card}>
          <ThemedText
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginBottom: 10,
              textAlign: 'center'
            }}
          >
            Alex's Goals
          </ThemedText>

          <ThemedText style={styles.text}>
            To better understand GitHub and be able to navigate and use GitHub
            better. This is important because it is the industry standard for
            version control and collaborative work.
          </ThemedText>

          <ThemedText style={styles.text}>
            To get a refined enough project to add into my portfolio that
            showcases my skills and understanding of various technologies. This
            matters because building an impressive portfolio is important in
            the field.
          </ThemedText>

          <ThemedText style={styles.text}>
            To learn how to create more intricate apps with more components such
            as games, shops, etc. This matters because I always wanted to make a
            game, and a mobile game would be something I could do as a personal
            project.
          </ThemedText>
        </View>
      </ScrollView>
    </ThemedView>
  )
}

export default GoalsandPlan

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center'
  },
  card: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#ADD8E6'
  },
  text: {
    marginBottom: 8,
    lineHeight: 20
  }
})
