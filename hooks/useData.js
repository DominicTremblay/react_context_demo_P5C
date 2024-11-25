import axios from 'axios'
import { useEffect, useReducer } from 'react'
import dataReducer, { CHARGER_FILMS } from '../reducer/dataReducer'

const useData = (etatInitial) => {
  const [state, dispatch] = useReducer(dataReducer, etatInitial)

  const requeteFilms = async () => {
    const urlBase = `http://localhost:5000/api`

    try {
      const reponse = await axios({
        method: 'GET',
        url: `${urlBase}/films`,
      })

      console.log(reponse.data)
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
