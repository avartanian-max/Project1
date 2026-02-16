import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Stack } from 'expo-router'
import { Colors } from "../constants/Colors"

const Rootlayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
  return (
    <>
        <Stack screenOptions={{
            headerStyle: { backgroundColor: theme.navBackground },
            headerTintColor: theme.title,

        }}>
            
            <Stack.Screen name="index" options={{ title: 'Home'}} />
            <Stack.Screen name="about" options={{ title: 'Student Info'}} />
            <Stack.Screen name="appinfo" options={{ title: 'App Info'}} />
            <Stack.Screen name="ProjectsSkills" options={{ title: 'Projects & Skills'}} />
            <Stack.Screen name="GoalsandPlan" options={{ title: 'Goals & Plans'}} />
        </Stack>
        </>
        
  )
}


export default Rootlayout

const styles = StyleSheet.create({})
