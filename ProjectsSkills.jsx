import { StyleSheet, Text, View } from 'react-native'

const ProjectsSkills = () => {
  return (
    <View style ={styles.container}>
      <Text style={styles.title}>Projects / Skills</Text>
      <Text> Joshua's Technical Skills: Windows Troubleshooting, Hardware Troubleshooting, Coding </Text>
      <Text> It would be cool to try doing something more complicated for the next project.
             Creating a game or doing something more technical is what I'm looking for. </Text>
    </View>
  )
}

export default ProjectsSkills

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center' ,
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold' ,
    fontSize: 18
  },
})
