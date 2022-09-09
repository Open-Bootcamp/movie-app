import CardFavorite from '@/components/cardFavorite'
import FavoriteNotFound from '@/components/favoriteNotFound'

const Favorites = (): JSX.Element => {
  const recoveryData = localStorage.getItem('favoriteList') !== null ? JSON.parse(localStorage.getItem('favoriteList')) : null
  return (
    <>
      {
        recoveryData !== null ? <CardFavorite favorites={recoveryData} /> : <FavoriteNotFound />
      }
    </>
  )
}

export default Favorites
