import { StyleSheet, View, ScrollView } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const About = () => {
  return (
    <ThemedView style={styles.container}>
      <ScrollView>
        <ThemedText style={styles.title}>About Us</ThemedText>

        
        <View style={styles.card}>
          <ThemedText style={styles.text}>
            <ThemedText style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' }}>
            Joshua Williams
          </ThemedText>
            <ThemedText style={styles.bold}>           Personal / Technical Interests: </ThemedText>
            In my spare time I like playing video games, reading, listening to music,
            and watching movies and TV shows. Since I'm on my computer most of the day,
            I troubleshoot computer issues when they arise.
          </ThemedText>

          <ThemedText style={styles.text}>
            <ThemedText style={styles.bold}>Career Goals: </ThemedText>
            I see myself going into the IT Tech Support field. If not that field,
            anything hardware related such as assembly language or IoT.
          </ThemedText>

          <ThemedText style={styles.text}>
            <ThemedText style={styles.bold}>Subjects I Enjoy / Avoid: </ThemedText>
            I enjoy troubleshooting and learning about hardware concepts like
            assembly language and IoT. I don’t see myself pursuing software coding
            long-term.
          </ThemedText>

          <ThemedText style={styles.text}>
            <ThemedText style={styles.bold}>What Sparked My Interest: </ThemedText>
            I’ve been fixing computer problems since I was a kid, and once I learned
            it could be a career, I knew that’s where I wanted to go.
          </ThemedText>

          <ThemedText style={styles.text}>
            <ThemedText style={styles.bold}>LinkedIn: </ThemedText>
            https://www.linkedin.com/in/joshuajosephwilliams1/
          </ThemedText>
        </View>

        
        <View style={styles.card}>
          <ThemedText style={styles.text}>
            <ThemedText style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' }}>
  Alex Vartanian
</ThemedText>
            <ThemedText style={styles.bold}>                 Personal / Technical Interests: </ThemedText>
            In my spare time I also enjoy playing video games, watching movies,
            and travelling with friends.
          </ThemedText>

          <ThemedText style={styles.text}>
            <ThemedText style={styles.bold}>Career Goals: </ThemedText>
            I love creating things, so I would like to go into software development
            or anything software related. I am also interested in cyber security
            as a backup plan.
          </ThemedText>

          <ThemedText style={styles.text}>
            <ThemedText style={styles.bold}>Subjects I Enjoy / Avoid: </ThemedText>
            I love math and everything related to it. I am less of a hands-on person
            and wouldn’t see myself going into anything hardware related. Coding is
            fun to me, and the moment everything starts working together is an
            amazing feeling.
          </ThemedText>

          <ThemedText style={styles.text}>
            <ThemedText style={styles.bold}>What Sparked My Interest: </ThemedText>
            I use my computer a lot and often run into bugs, unoptimal setups,
            and strange software choices. I always thought I could do things better
            or make my life easier by programming, which is how I got started.
          </ThemedText>

          <ThemedText style={styles.text}>
            <ThemedText style={styles.bold}>GitHub: </ThemedText>
            https://github.com/avartanian-max
          </ThemedText>
        </View>

        
      </ScrollView>
    </ThemedView>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40 
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
    backgroundColor: '#ADD8E6',
  },
  text: {
    marginBottom: 8,
    lineHeight: 20
  },
  bold: {
    fontWeight: 'bold'
  },
  link: {
    alignSelf: 'center',
    borderBottomWidth: 1,
    marginTop: 10
  }
})