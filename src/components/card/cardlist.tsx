import Bookmark from '@/assets/bookmark.svg'
import Star from '@/assets/star.svg'
import { MobileProps } from '@/types/data.type'
import { FC, useContext } from 'react'
import { favoriteContext } from '@/context/favorite'
import './styles.scss'

const Mobile: FC<MobileProps> = ({ title, year, rating, imageMd, imageXl, description, isRecent, handleClick }) => {
  // agregar favorito
  const { favorites, setFavorites } = useContext(favoriteContext)

  const handleAddFavorite = (id: number): void => {
    console.log(favorites?.find(element => element.id === id))

    // const newFavorite = favorites?.filter(element => element.id !== id)
    // setFavorites([...favorites, { id, title, year, rating, imageMd }])
  }

  return (
    <div className="container_card" onClick={(): void => handleClick({ title, imageXl, description })}>
      <div className="card">
        <img src={imageMd} alt={title} />
        <div className="card_content">
          <div className="card_description">
            <h3 className="card_description-title">{title}</h3>
            <p className="card_description-annio">{year}</p>
          </div>
          <div className="card_rating">
            <img src={Star} alt="Star ratio" />
            <p className="card_rating-value">{rating}</p>
          </div>
        </div>
        <button className='card_bookmark' onClick={() => handleAddFavorite(id)}>
          <img src={Bookmark} alt="boomark" />
        </button>
      </div>
    </div>
  )
}

export default Mobile
