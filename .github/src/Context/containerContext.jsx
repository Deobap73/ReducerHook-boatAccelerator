// src/Context/containerContext.jsx

import React, { useReducer } from 'react'
import { BoatContext } from './globalContext'
import { initialState, reducer } from '../state/reducers/reducer'

export default function ContainerContext({children}) {
const [state, dispatch] = useReducer(reducer, initialState)

  return (
   <BoatContext.Provider value={{state, dispatch}}>
    {children}
   </BoatContext.Provider>
  )
}
 