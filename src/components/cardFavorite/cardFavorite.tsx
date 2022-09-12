import { contextGlobal } from '@/context/contextGlobal'
import { Data, DataFavorite } from '@/types/data.type'
import { FC, useContext } from 'react'
import toast from 'react-hot-toast'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Bookmark from '../../assets/bookmark.svg'
import Star from '../../assets/star.svg'
import './styles.scss'

const Mobile: FC<DataFavorite> = ({ id, title, year, rating, md }) => {
  const { favorites, setFavorites } = useContext(contextGlobal)

  const handleAddFavorite = (id: number): void => {
    toast('Removed from favorites', {
      icon: '❌',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
        backdropFilter: 'blur(10px)'
      }
    })

    const validateId = favorites?.findIndex((element: Data) => element.id === id)
    if (validateId === -1) {
      const currentFavorites = [...favorites, { id, title, year, rating, md }]
      setFavorites!(currentFavorites)
      localStorage.setItem('favoriteList', JSON.stringify(currentFavorites))
    } else {
      const removeFavorite = favorites?.filter((element: Data) => element.id !== id)
      setFavorites(removeFavorite)
      localStorage.setItem('favoriteList', JSON.stringify(removeFavorite))
    }
  }

  return (
    <div className="container_card">
      <div className="card">
        <LazyLoadImage src={md} alt={title} />
        <div className="card_content">
          <div className="card_description">
            <h3 className="card_description-title">{title}</h3>
            <p className="card_description-annio">{year}</p>
          </div>
          <div className="card_rating">
            <LazyLoadImage src={Star} alt="Star ratio" />
            <p className="card_rating-value">{rating}</p>
          </div>
        </div>
        <button className='card_bookmark' onClick={() => handleAddFavorite(id)}>
          <LazyLoadImage src={Bookmark} alt="boomark" className='bookmark__card__image' />
        </button>
      </div>
    </div>
  )
}

export default Mobile
