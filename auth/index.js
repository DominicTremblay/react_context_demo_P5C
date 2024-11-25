import axios from 'axios'
import { FERMER_SESSION } from '../reducer/dataReducer'

export const ourvrirSession = async (dispatch, identification) => {
  const urlBase = `http://localhost:5000/api`
  try {
    const reponse = await axios({
      url: `${urlBase}/session`,
      method: 'GET',
      body: JSON.stringify({
        courriel: 'asterix@gmail.com',
        motPasse: 'toutatis',
      }),
    })

    console.log('Reponse sesson: ', reponse.data)
  } catch (erreur) {
    console.log(`Erreur session: ${erreur.message}`)
  }
}

export const fermerSession = async (dispatch) => {
  dispatch({ type: FERMER_SESSION })
}
