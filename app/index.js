import { useContext } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { StateContext } from '../context/StateContext'
import MessageErreur from '../components/messageErreur'
import OuvrirSession from './session'

export default function App() {
  const { state, dispatch } = useContext(StateContext)

  const {
    auth: { estAuthentifie },
  } = state

  console.log(state)

  if (!estAuthentifie) {
    return (
      <>
        <MessageErreur message="Vous devez vous authentifier">
          <OuvrirSession />
        </MessageErreur>
      </>
    )
  }

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
