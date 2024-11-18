import axios from 'axios'
import { useEffect, useReducer } from 'react'
import dataReducer, {
  CHARGER_FILMS,
  EFFACER_FILM,
} from '../reducer/dataReducer'

const useData = () => {
  // dispatch => fct de mise a jour de l etat comme si c etait un setState
  const [state, dispatch] = useReducer(dataReducer, {
    films: [],
    loading: true,
  })

  const requeteFilms = async () => {
    const urlBase = `http://localhost:5000/api`

    try {
      const reponse = await axios({
        method: 'GET',
        url: `${urlBase}/films`,
      })

      console.log(reponse.data)
      // mettre a jour l'etat avec la liste de films
      dispatch({ type: CHARGER_FILMS, payload: reponse.data })
    } catch (e) {
      console.log(`Erreur: ${e.message}`)
    }
  }

  useEffect(() => {
    requeteFilms()
  }, [])

  return [state, dispatch]
}

export default useData
