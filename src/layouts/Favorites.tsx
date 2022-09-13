// @ts-nocheck
import CardFavorite from '@/components/cardFavorite'
import FavoriteNotFound from '@/components/favoriteNotFound'
import { contextGlobal } from '@/context/contextGlobal'
import { useContext, useEffect } from 'react'

const Favorites = (): JSX.Element => {
  const { favorites, setFavorites } = useContext(contextGlobal)
  const recoveryData = localStorage.getItem('favoriteList') !== null ? JSON.parse(localStorage.getItem('favoriteList')) : []

  useEffect(() => {
    setFavorites!(recoveryData)
  }, [])

  return (
    <>
      {
        favorites!.length > 0 ? <CardFavorite favorites={favorites!} /> : <FavoriteNotFound />
      }
    </>
  )
}

export default Favorites
