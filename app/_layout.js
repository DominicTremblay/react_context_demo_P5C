import { Tabs } from 'expo-router'
import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import Fontisto from '@expo/vector-icons/Fontisto'
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
