import { router, useRouter } from 'expo-router'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { List, Card, Button } from 'react-native-paper'
import { useStateValue } from '../../context/StateContext'

const Films = () => {
  const router = useRouter()

  const { state, dispatch } = useStateValue()

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
