import CardFavorite from '@/components/cardFavorite'
import FavoriteNotFound from '@/components/favoriteNotFound'
import { favoriteContext } from '@/context/favorite'
import { useContext, useEffect } from 'react'

const Favorites = (): JSX.Element => {
  const { favorites, setFavorites } = useContext(favoriteContext)
  const recoveryData = localStorage.getItem('favoriteList') !== null ? JSON.parse(localStorage.getItem('favoriteList')) : null

  useEffect(() => {
    setFavorites(recoveryData)
  }, [])

  return (
    <>
      {
        favorites?.length > 0 ? <CardFavorite favorites={favorites} /> : <FavoriteNotFound />
      }
    </>
  )
}

export default Favorites
