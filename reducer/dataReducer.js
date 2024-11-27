export const OUVRIR_SESSION = 'OUVRIR_SESSION'
export const FERMER_SESSION = 'FERMER_SESSION'
export const CHARGER_FILMS = 'CHARGER_FILMS'
export const CHARGER_FILM_ID = 'CHARGER_FILM_ID'

const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case OUVRIR_SESSION:
      return {
        ...state,
        auth: { estAuthentifie: true, utilisateur: action.payload },
      }
    case FERMER_SESSION:
      return {
        ...state,
        auth: { estAuthentifie: false, utilisateur: null },
      }
    case CHARGER_FILMS:
      return {
        ...state,
        films: action.payload,
        loading: false,
      }

    default:
      throw new Error(`Le type ${action.type} n'est pas pris en charge`)
  }
}

export default dataReducer
