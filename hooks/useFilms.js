import { useContext, useEffect } from "react"
import { StateContext } from "../context/StateContext"
import { CHARGER_FILMS } from "../reducer/dataReducer"
import axios from "axios"

const useFilms = () => {
  const { state, dispatch } = useContext(StateContext)

  const requeteFilms = async () => {
    const urlBase = `http://localhost:5000/api`

    try {
      const reponse = await axios({
        method: 'GET',
        url: `${urlBase}/films`,
        headers: {
          Authorization: `Bearer ${state.auth.utilisateur.jeton}`,
        },
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
}

export default useFilms
