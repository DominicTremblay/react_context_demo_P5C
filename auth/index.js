import axios from 'axios'
import { FERMER_SESSION, OUVRIR_SESSION } from '../reducer/dataReducer'

export const ourvrirSession = async (dispatch, identification) => {
  const urlBase = `http://localhost:5000/api`

  try {
    const reponse = await axios({
      url: `${urlBase}/session`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: identification,
    })

    console.log('Reponse session: ', reponse.data)
    dispatch({ type: OUVRIR_SESSION, payload: reponse.data })
  } catch (erreur) {
    console.log(`Erreur session: ${erreur.message}`)
  }
}

export const fermerSession = async (dispatch) => {
  dispatch({ type: FERMER_SESSION })
}
