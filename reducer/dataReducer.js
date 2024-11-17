export const CHARGER_FILMS = 'CHARGER_FILMS'

const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case CHARGER_FILMS:
      return {
        ...state,
        films: action.payload,
        loading: false
      }

    default:
      throw new Error(`Le type ${action.type} n'est pas pris en charge`)
  }
}

export default dataReducer