import { favoriteContext } from '@/context/favorite'
import { Data } from '@/types/data.type'
import { FC, useContext } from 'react'
import toast from 'react-hot-toast'
import Bookmark from '../../assets/bookmark.svg'
import Star from '../../assets/star.svg'
import './styles.scss'

const Mobile: FC<Data> = ({ id, title, year, rating, imageMd, isRecent }) => {
  const { favorites, setFavorites } = useContext(favoriteContext)

  const handleAddFavorite = (id: number): void => {
    toast('Removido de favoritos', {
      icon: '❌',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
        backdropFilter: 'blur(10px)'
      }
    })

    const validateId = favorites?.findIndex(element => element.id === id)
    if (validateId === -1) {
      const currentFavorites = [...favorites, { id, title, year, rating, imageMd }]
      setFavorites(currentFavorites)
      localStorage.setItem('favoriteList', JSON.stringify(currentFavorites))
    } else {
      const removeFavorite = favorites?.filter(element => element.id !== id)
      setFavorites(removeFavorite)
      localStorage.setItem('favoriteList', JSON.stringify(removeFavorite))
    }
  }

  return (
    <div className="container_card">
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
          <img src={Bookmark} alt="boomark" className='bookmark__card__image' />
        </button>
      </div>
    </div>
  )
}

export default Mobile
