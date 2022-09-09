import { Data } from '@/types/data.type'
import React, { createContext, useState } from 'react'

interface FavoriteContextProp{
  children: React.ReactNode
}

interface FavoriteContextInterface {
  favorites?: Data[]
  setFavorites?: React.Dispatch<React.SetStateAction<Data[]>>
}

export const favoriteContext = createContext<FavoriteContextInterface>({})

const FavoriteContext = ({ children }: FavoriteContextProp): JSX.Element => {
  const [favorites, setFavorites] = useState<Data[]>([])

  return (
    <favoriteContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </favoriteContext.Provider>
  )
}
export default FavoriteContext
