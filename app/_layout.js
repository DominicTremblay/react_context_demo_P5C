import { Tabs } from 'expo-router'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import Fontisto from '@expo/vector-icons/Fontisto'
import { StateProvider } from '../context/StateContext'

const Layout = () => {
  return (
    <StateProvider>
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
    </StateProvider>
  )
}

const styles = StyleSheet.create({})

export default Layout
