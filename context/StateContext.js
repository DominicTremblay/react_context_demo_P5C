import { createContext, useContext } from 'react'
import useData from '../hooks/useData'

export const StateContext = createContext(null)

const etatInitial = {
  auth: { estAuthentifie: false, utilisateur: null },
  films: [],
  loading: true,
}

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useData(etatInitial)

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  )
}
