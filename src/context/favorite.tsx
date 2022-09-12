import { Data } from '@/types/data.type'
import React, { createContext, useState } from 'react'

interface FavoriteContextProps{
  children: React.ReactNode
}

interface FavoriteContextInterface {
  favorites: Data[]
  setFavorites: React.Dispatch<React.SetStateAction<Data[]>>
}

export const favoriteContext = createContext<FavoriteContextInterface | null>(null)

const FavoriteContext = ({ children }: FavoriteContextProps): JSX.Element => {
  const [favorites, setFavorites] = useState<Data[]>([])

  return (
    <favoriteContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </favoriteContext.Provider>
  )
}
export default FavoriteContext
