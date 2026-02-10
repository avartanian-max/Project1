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
