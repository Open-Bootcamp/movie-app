// @ts-nocheck
import { Data } from '@/types/data.type'
import React, { createContext, useEffect, useState } from 'react'

interface ContextGlobalProps{
  children: React.ReactNode
}

interface ContextGlobalInterface {
  favorites: Data[]
  setFavorites: React.Dispatch<React.SetStateAction<Data[]>>
  dataAPI: Data[]
}

// CONTEXT GLOBAL

export const contextGlobal = createContext<ContextGlobalInterface>({})

// CONTEXT GLOBAL PROVIDER

const ContextGlobal = ({ children }: ContextGlobalProps): JSX.Element => {
  const END_POINT = 'https://movie-appapi.herokuapp.com/api/contents'

  const [dataAPI, setDataAPI] = useState<Data[]>([])

  useEffect(() => {
    fetch(END_POINT)
      .then(async (response) => {
        return await response.json()
      })
      .then(async (data) => {
        setDataAPI(data.data)
      })
  }, [])

  const [favorites, setFavorites] = useState<Data[]>([])

  return (
    <contextGlobal.Provider value={{ favorites, setFavorites, dataAPI }}>
      {children}
    </contextGlobal.Provider>
  )
}
export default ContextGlobal
