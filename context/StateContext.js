import { createContext, useReducer } from 'react'
import dataReducer from '../reducer/dataReducer'

export const StateContext = createContext(null)

const etatInitial = {
  auth: { estAuthentifie: false, utilisateur: null },
  films: [],
  loading: true,
}

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, etatInitial)

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  )
}
