import { contextGlobal } from '@/context/contextGlobal'
import { Data } from '@/types/data.type'
import { FC, useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Star from '../../assets/star.svg'
import { Bookmark } from '../bookmark/bookmark'
import './styles.scss'

const Mobile: FC<Data> = ({ id, title, year, rating, images: { md, lg, xl } }) => {
  const { favorites, setFavorites } = useContext(contextGlobal)
  const favoriteId = favorites?.findIndex((element: Data) => element.id === id)
  const [isBookmarked, setIsBookmarked] = useState<boolean>(favoriteId !== -1)

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

    const removeFavorite = favorites?.filter((element: Data) => element.id !== id)
    setFavorites(removeFavorite)
    setIsBookmarked(false)
    localStorage.setItem('favoriteList', JSON.stringify(removeFavorite))
  }

  return (
    <div className="container_card">
      <div className="card">
        <LazyLoadImage src={lg} alt={title} />
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
          <Bookmark isBookmarked={isBookmarked} />
        </button>
      </div>
    </div>
  )
}

export default Mobile
