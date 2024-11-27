import { useLocalSearchParams, useRouter } from 'expo-router'
import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { List, Card, Button, ActivityIndicator } from 'react-native-paper'
import axios from 'axios'
import { StateContext } from '../../context/StateContext'

const Film = () => {
  const { id } = useLocalSearchParams()

  const router = useRouter()

  const { state, dispatch } = useContext(StateContext)

  const [film, setFilm] = useState(null)
  const [loading, setLoading] = useState(true)

  const requeteFilm = async () => {
    const urlBase = `http://localhost:5000/api`

    try {
      const reponse = await axios({
        method: 'GET',
        url: `${urlBase}/films/${id}`, // Pass `id` dynamically
        headers: {
          Authorization: `Bearer ${state.auth.utilisateur.jeton}`,
        },
      })

      console.log(reponse.data)
      setFilm(reponse.data)
    } catch (e) {
      console.log(`Erreur: ${e.message}`)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    requeteFilm()
  }, [])

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />
  }

  return (
    film && (
      <Card style={styles.cardStyle}>
        <Card.Title title={film.titre} />
        <Card.Cover style={styles.cardCover} source={{ uri: film.image_url }} />
        <Card.Content>
          <List.Section>
            <List.Item
              title="Description: "
              description={film.description}
              left={(props) => (
                <List.Icon {...props} icon="square-medium-outline" />
              )}
            />

            <List.Item
              title="Annee de sortie: "
              description={film.annee_sortie}
              left={(props) => (
                <List.Icon {...props} icon="square-medium-outline" />
              )}
            />

            <List.Item
              title="Genre: "
              description={film.genre}
              left={(props) => (
                <List.Icon {...props} icon="square-medium-outline" />
              )}
            />
          </List.Section>

          <Card.Actions>
            <Button onPress={() => router.navigate(`/films`)}>Retour</Button>
          </Card.Actions>
        </Card.Content>
      </Card>
    )
  )
}

const styles = StyleSheet.create({
  cardStyle: {
    padding: 10,
    margin: 14,
  },
  cardCover: {
    width: '80%',
    alignSelf: 'center',
  },
})

export default Film
