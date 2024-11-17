import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios'
import { useEffect } from 'react'

export default function App() {
  const requeteFilms = async () => {
    const urlBase = `http://localhost:5000/api`

    try {
      const reponse = await axios({
        method: 'GET',
        url: `${urlBase}/films`,
      })

      console.log(reponse.data)
    } catch (e) {
      console.log(`Erreur: ${e.message}`)
    }
  }

  useEffect(() => {
    requeteFilms()
  }, [])

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
