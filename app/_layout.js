import { Tabs } from 'expo-router'
import React, { useContext } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import Fontisto from '@expo/vector-icons/Fontisto'
import AntDesign from '@expo/vector-icons/AntDesign'
import { StateContext, StateProvider } from '../context/StateContext'
import MessageErreur from '../components/messageErreur'
import OuvrirSession from './session'

const Layout = () => {
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
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="films"
        options={{
          title: 'Collection de films',
          tabBarIcon: ({ color }) => (
            <Fontisto name="film" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="session/index"
        options={({ navigation }) => ({
          title: state.auth.estAuthentifie ? 'Fermer session' : 'Ouvrir session',
          tabBarIcon: ({ color }) => (
            <AntDesign
              name={state.auth.estAuthentifie ? 'logout' : 'login'}
              size={24}
              color={color}
            />
          ),
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                if (state.auth.estAuthentifie) {
                  // Logout logic
                  dispatch({ type: 'FERMER_SESSION' })
                } else {
                  navigation.navigate('session')
                }
              }}
            />
          ),
        })}
      />
    </Tabs>
  )
}

const EtatEncapsuler = () => (
  <StateProvider>
    <Layout />
  </StateProvider>
)

const styles = StyleSheet.create({})

export default EtatEncapsuler
