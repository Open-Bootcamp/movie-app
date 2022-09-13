import Star from '@/assets/star.svg'
import { contextGlobal } from '@/context/contextGlobal'
import { Data, MobileProps } from '@/types/data.type'
import { FC, useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Bookmark } from '../bookmark/bookmark'
import './styles.scss'

const Mobile: FC<MobileProps> = ({ id, title, year, rating, images: { md, xl }, description, handleClick }) => {
  const { favorites, setFavorites } = useContext(contextGlobal)

  const favoriteId = favorites?.findIndex((element: Data) => element.id === id)
  const [isBookmarked, setIsBookmarked] = useState<boolean>(favoriteId !== -1)

  const handleAddFavorite = (id: number): void => {
    const validateId = favorites?.findIndex((element: MobileProps) => element.id === id)
    if (validateId === -1) {
      toast('Added to favorites', {
        icon: '✅',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          backdropFilter: 'blur(10px)'
        }
      })
      const currentFavorites = favorites !== undefined ? [...favorites, { id, title, year, rating, md }] : null
      setFavorites(currentFavorites)
      setIsBookmarked(true)
      localStorage.setItem('favoriteList', JSON.stringify(currentFavorites))
    } else {
      toast('Removed from favorites', {
        icon: '❌',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          backdropFilter: 'blur(10px)'
        }
      })
      const removeFavorite = favorites?.filter(element => element.id !== id)
      setFavorites(removeFavorite)
      setIsBookmarked(false)
      localStorage.setItem('favoriteList', JSON.stringify(removeFavorite))
    }
  }

  return (
    <div className="container_card" onClick={(): void => handleClick!({ title, xl, description })} title='Display in banner 🤓'>
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
        <button className='card_bookmark' onClick={() => handleAddFavorite(id)} title='Add to favorites ✅'>
          <Bookmark isBookmarked={isBookmarked} />
        </button>
      </div>
    </div>
  )
}

export default Mobile
