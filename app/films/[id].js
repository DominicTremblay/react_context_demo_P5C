import { useLocalSearchParams, useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { films } from '../../data/films'
import { List, Card, Button } from 'react-native-paper'

const Film = () => {
  const { id } = useLocalSearchParams()

  const router = useRouter()

  const filmTrouve = films.find((film) => film.id === Number(id))

  return (
    <Card style={styles.cardStyle}>
      <Card.Title title={filmTrouve.titre} />
      <Card.Cover
        style={styles.cardCover}
        source={{ uri: filmTrouve.image_url }}
      />
      <Card.Content>
        <List.Section>

        <List.Item
            title="Description: "
            description={filmTrouve.description}
            left={(props) => (
              <List.Icon {...props} icon="square-medium-outline" />
            )}
          />

          <List.Item
            title="Annee de sortie: "
            description={filmTrouve.annee_sortie}
            left={(props) => (
              <List.Icon {...props} icon="square-medium-outline" />
            )}
          />

          <List.Item
            title="Genre: "
            description={filmTrouve.genre}
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
