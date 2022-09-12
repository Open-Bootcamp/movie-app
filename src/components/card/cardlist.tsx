import Bookmark from '@/assets/bookmark.svg'
import Star from '@/assets/star.svg'
import { contextGlobal } from '@/context/contextGlobal'
import { MobileProps } from '@/types/data.type'
import { FC, useContext } from 'react'
import toast from 'react-hot-toast'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import './styles.scss'

const Mobile: FC<MobileProps> = ({ id, title, year, rating, images: { md, xl }, description, handleClick }) => {
  const { favorites, setFavorites } = useContext(contextGlobal)

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
      const currentFavorites = [...favorites, { id, title, year, rating, md }]
      setFavorites(currentFavorites)
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
      localStorage.setItem('favoriteList', JSON.stringify(removeFavorite))
    }
  }

  return (
    <div className="container_card" onClick={(): void => handleClick({ title, xl, description })} style={{ minHeight: '392px' }}>
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
        <button className='card_bookmark' onClick={() => handleAddFavorite(id)} title='Añadir a favoritos ✅'>
          <LazyLoadImage src={Bookmark} alt="boomark" className='bookmark__card__image'/>
        </button>
      </div>
    </div>
  )
}

export default Mobile
