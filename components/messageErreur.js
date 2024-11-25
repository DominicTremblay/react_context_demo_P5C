import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const MessageErreur = ({ children, message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  message: {
    color: 'red',
    fontSize: 18,
    marginTop: 10
  },
})

export default MessageErreur
