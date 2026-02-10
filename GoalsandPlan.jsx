import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GoalsandPlan = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Goals & Plan</Text>
    </View>
  )
}

export default GoalsandPlan

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center' ,
    justifyContent: 'center'
    }
})