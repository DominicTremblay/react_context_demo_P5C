import { router, useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { List, Card, Button } from 'react-native-paper'

const Films = () => {

  const router = useRouter();

  return (
    <ScrollView>
      <Card style={styles.cardStyle}>
        <Card.Title title="LE FILM" />
        <Card.Cover
          style={styles.cardCover}
          source={{ uri: 'https://picsum.photos/700' }}
        />
        <Card.Content>
          <List.Section>
            <List.Item
              title="Annee de sortie: "
              description="2024"
              left={(props) => (
                <List.Icon {...props} icon="square-medium-outline" />
              )}
            />

            <List.Item
              title="Genre: "
              description="Action"
              left={(props) => (
                <List.Icon {...props} icon="square-medium-outline" />
              )}
            />
          </List.Section>

          <Card.Actions>
            <Button onPress={()=> router.push(`/films/1`)}>Voir description</Button>
          </Card.Actions>
        </Card.Content>
      </Card>
      <Card>
        <Card.Title title="LE FILM" />
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content>
          <List.Section>
            <List.Item
              title="Description: "
              description="Film a propos de"
              left={(props) => <List.Icon {...props} icon="folder" />}
            />
            <List.Item
              title="Annee de sortie: "
              description="2024"
              left={(props) => <List.Icon {...props} icon="folder" />}
            />

            <List.Item
              title="Genre: "
              description="Action"
              left={(props) => <List.Icon {...props} icon="folder" />}
            />
          </List.Section>
        </Card.Content>
      </Card>
      <Card>
        <Card.Title title="LE FILM" />
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content>
          <List.Section>
            <List.Item
              title="Description: "
              description="Film a propos de"
              left={(props) => <List.Icon {...props} icon="suare" />}
            />
            <List.Item
              title="Annee de sortie: "
              description="2024"
              left={(props) => <List.Icon {...props} icon="folder" />}
            />

            <List.Item
              title="Genre: "
              description="Action"
              left={(props) => <List.Icon {...props} icon="folder" />}
            />
          </List.Section>
        </Card.Content>
      </Card>
    </ScrollView>
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

export default Films
