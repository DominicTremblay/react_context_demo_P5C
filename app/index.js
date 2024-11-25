import { useContext } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { StateContext } from '../context/StateContext'

export default function App() {
  const { state, dispatch } = useContext(StateContext)

  return (
    <View style={styles.container}>
      <Text>Bonjour {state.auth.utilisateur.nom}</Text>
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
