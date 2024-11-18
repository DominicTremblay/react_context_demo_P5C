export const CHARGER_FILMS = 'CHARGER_FILMS'
export const EFFACER_FILM = 'EFFACER_FILM'

// Le reducer retourne le nouvel etat
const dataReducer = (state = {}, action) => {
  // action.type => quel operation faire sur l'etat
  // action.payload => contenu

  // {
  //   films: [],
  //   loading: true,
  // }

  switch (action.type) {
    case CHARGER_FILMS:
      // mettre a jour l etat avec la liste de films de l
      console.log("Payload: ", action.payload)

      return {
        ...state,
        films: action.payload,
        loading: false,
      }

    case EFFACER_FILM:
      // mettre a jour l'etat pour effacer le film
      // a faire
      return state

    default:
      throw new Error(`Erreur: le type ${action.type} n'est pas pris en charge`)
  }
}

export default dataReducer
