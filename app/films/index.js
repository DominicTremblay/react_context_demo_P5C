import { router, useRouter } from 'expo-router'
import React, { useContext, useEffect } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { List, Card, Button, ActivityIndicator } from 'react-native-paper'
import { StateContext, useStateValue } from '../../context/StateContext'
import { CHARGER_FILMS } from '../../reducer/dataReducer'
import axios from 'axios'
import useFilms from '../../hooks/useFilms'

const Films = () => {
  const router = useRouter()

  const { state, dispatch } = useContext(StateContext)

  useFilms(CHARGER_FILMS);

  const listeFilms = state.films.map(
    ({ id, titre, image_url: imageUrl, genre, annee_sortie: anneeSortie }) => (
      <Card key={id} style={styles.cardStyle}>
        <Card.Title title={titre} />
        <Card.Cover style={styles.cardCover} source={{ uri: imageUrl }} />
        <Card.Content>
          <List.Section>
            <List.Item
              title="Annee de sortie: "
              description={anneeSortie}
              left={(props) => (
                <List.Icon {...props} icon="square-medium-outline" />
              )}
            />

            <List.Item
              title="Genre: "
              description={genre}
              left={(props) => (
                <List.Icon {...props} icon="square-medium-outline" />
              )}
            />
          </List.Section>

          <Card.Actions>
            <Button onPress={() => router.push(`/films/${id}`)}>
              Voir description
            </Button>
          </Card.Actions>
        </Card.Content>
      </Card>
    )
  )

  if (state.loading) {
    return <ActivityIndicator size="large" color="#0000ff" />
  }

  return <ScrollView>{listeFilms}</ScrollView>
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

export default Films
