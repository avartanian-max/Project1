import { StyleSheet, Text, View } from 'react-native'

const ProjectsSkills = () => {
  return (
    <View style ={styles.container}>
      <Text style={styles.title}>Projects / Skills</Text>

      <View style={styles.card}>
      <Text> Joshua's Technical/Professional Skills:  </Text>
      <Text> OS Troubleshooting </Text>
      <Text> Virtualization </Text>
      <Text> Programming Languages </Text>
      <Text> </Text>
      <Text> For the next project, I hope we take the next step to do something more complex.
             It would be interesting to implement something like a game for a project.  </Text>
         </View>

    <View style={styles.card}>
      <Text> Alex's Technical/Professional Skills: </Text>
      <Text> Java </Text>
      <Text> Python </Text>
      <Text> Lua </Text>
      <Text> </Text>
      <Text> I would like to make a version of that Nintendo brain game, where there are
             different activities that are fast paced that make you think fast and judge
            you on accuracy and speed. </Text>
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
    fontSize: 25
  },
    card: {
    backgroundColor: '#ADD8E6',
    padding: 20,
    borderRadius: 5,
    width: 400,
    height: 200,    
    boxShadow: '4px 4px rgba(0,0,0,0.1)'
  }
i})
