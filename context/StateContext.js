import { createContext, useContext } from 'react'
import useData from '../hooks/useData'

export const StateContext = createContext(null)

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useData()


  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  )
}



