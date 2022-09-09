// import Card from '@/components/card/index'
import CardFavorite from '@/components/cardFavorite'
// import FavoriteNotFound from '@/components/favoriteNotFound'

const Favorites = (): JSX.Element => {
  return (
    <>
      <h1 className='title__category'>Favorites</h1>
      <CardFavorite></CardFavorite>
    </>
  )
}

export default Favorites
