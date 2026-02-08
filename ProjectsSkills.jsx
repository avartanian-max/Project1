import { StyleSheet, Text, View } from 'react-native'

const ProjectsSkills = () => {
  return (
    <View style ={styles.container}>
      <Text style={styles.title}>Projects / Skills</Text>

      <View style={styles.card}>
      <Text> Joshua's Technical Skills: Windows Troubleshooting, Hardware Troubleshooting, Coding </Text>
      <Text> For the next project, I hope we take the next step needed for a more complex project.
             A game would be a cool project to attempt within an app. </Text>
             </View>

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
    card: {
    backgroundColor: 'eee',
    padding: 20,
    borderRadius: 5,
    boxShadow: '4px 4px rgba(0,0,0,0.1)'
  }
i})
