import React, { useState, useContext, useEffect } from 'react'
import { StateContext } from '../../context/StateContext'
import { ourvrirSession } from '../../auth'
import { Redirect} from 'expo-router'
import MessageErreur from '../../components/messageErreur'
import FrmSession from '../../components/frmSession'

const OuvrirSession = () => {
  const { state, dispatch } = useContext(StateContext)

  const [erreur, setErreur] = useState(null)

  const soumettreIdentification = async (courriel, motPasse) => {
    const identification = {
      courriel,
      mot_passe: motPasse,
    }

    const erreur = await ourvrirSession(dispatch, identification)

    setErreur(erreur)
  }

  if (state.auth.estAuthentifie) {
    return <Redirect href='/films' />
  }

  if (erreur) {
    return (
      <MessageErreur message={erreur}>
        <FrmSession soumettreIdentification={soumettreIdentification} />
      </MessageErreur>
    )
  }

  return <FrmSession soumettreIdentification={soumettreIdentification} />
}

export default OuvrirSession
