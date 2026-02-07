import { StyleSheet, Text, View } from 'react-native'

const ProjectsSkills = () => {
  return (
    <View style ={styles.container}>
      <Text style={styles.title}>Projects / Skills</Text>
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