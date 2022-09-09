import CardFavorite from '@/components/cardFavorite'

const Favorites = (): JSX.Element => {
  const recoveryData = JSON.parse(localStorage.getItem('favoriteList'))
  return (
    <>
      <h1 className='title__category'>Favorites</h1>
      <CardFavorite favorites={recoveryData}></CardFavorite>
    </>
  )
}

export default Favorites
