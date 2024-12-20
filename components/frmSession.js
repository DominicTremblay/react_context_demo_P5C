import React, { useContext, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { StateContext } from '../context/StateContext'
import { useRouter } from 'expo-router'

const FrmSession = ({ soumettreIdentification }) => {
  const { state } = useContext(StateContext)

  const router = useRouter()

  const [courriel, setCourriel] = useState('')
  const [motPasse, setMotPasse] = useState('')

  const gererSoumettre = () => {
    soumettreIdentification(courriel, motPasse)
    setCourriel('')
    setMotPasse('')
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24 }}>Ouvrir une session</Text>

      <View>
        <TextInput
          style={styles.champs}
          label="Courriel"
          mode="outlined"
          outlineStyle={{
            borderRadius: 10,
            borderColor: 'lightblue',
          }}
          placeholder="Courriel"
          value={courriel}
          onChangeText={(text) => setCourriel(text)}
        />

        <TextInput
          style={styles.champs}
          label="Mot de passe"
          mode="outlined"
          outlineStyle={{
            borderRadius: 10,
            borderColor: 'lightblue',
          }}
          placeholder="Mot de passe"
          secureTextEntry={true}
          value={motPasse}
          onChangeText={(text) => setMotPasse(text)}
        />
      </View>

      <Button
        style={styles.bouton}
        mode="elevated"
        dark={true}
        buttonColor="lightblue"
        onPress={() => gererSoumettre(courriel, motPasse)}
      >
        Ouvrir la session
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  champs: {
    width: 300,
    marginTop: 5,
    marginBottom: 5,
  },
  bouton: {
    marginTop: 20,
    width: 200,
  },
})

export default FrmSession
