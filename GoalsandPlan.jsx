import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GoalsandPlan = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Goals & Plan</Text>

    <View style={styles.card}>
    <Text> Joshua's Learning Goals: </Text>
    <Text> Learn how to create an app. </Text>
    <Text> Learn how to solve problems with embedded systems. </Text>
    <Text> Learn how to use AI to it's best ability. </Text>
    <Text> </Text>
    <Text> I believe these goals matter because they should be vital to the other
                 classes we will be doing in the future. </Text>
      </View>

    <View style={styles.card}>
    <Text> Alex's Learning Goals: </Text>
    <Text> To better understand GitHub and be able to navigate and use GitHub better, this is
           important because it is the industry standard for version control and collaborative
           work. </Text>
    <Text> To get a refined enough project to add into my portfolio that showcases my skills
           and understanding of various skills, this matters because building a impressive
          portfolio is important in the field. </Text>
    <Text> To learn how to create more intricate apps with more components such as games, shops,
           etc. This matters because I always wanted to make a game and a mobile game would be
           something I could do for a personal project. </Text>
    </View>
   </View> 
  )
}

export default GoalsandPlan

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center' ,
    justifyContent: 'center' ,
    },
  title: {
    fontWeight: 'bold' ,
    fontSize: 25 ,
    },
  card: {
    backgroundColor: '#ADD8E6',
    padding: 20,
    marginVertical: 10,
    borderRadius: 5,
    width: 400,
    height: 200,
    boxShadow: '4px 4px rgba(0,0,0,0.1)'
  }

})

