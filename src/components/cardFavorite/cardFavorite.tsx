import { favoriteContext } from '@/context/favorite'
import { Data } from '@/types/data.type'
import { FC, useContext, useState } from 'react'
import toast from 'react-hot-toast'
// import Bookmark from '../../assets/bookmark.svg'
// import BookmarkActive from '../../assets/bookmarkActive.svg'
import Star from '../../assets/star.svg'
import { Bookmark } from '../bookmark/bookmark'
import './styles.scss'

const Mobile: FC<Data> = ({ id, title, year, rating, imageMd, isRecent }) => {
  const { favorites, setFavorites } = useContext(favoriteContext)
  const favoriteId = favorites?.findIndex((element: Data) => element.id === id)
  const [isBookmarked, setIsBookmarked] = useState<boolean>(favoriteId !== -1)

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

    const validateId = favorites?.findIndex((element: Data) => element.id === id)
    if (validateId === -1) {
      const currentFavorites = [...favorites, { id, title, year, rating, imageMd }]
      setFavorites(currentFavorites)
      setIsBookmarked(true)
      localStorage.setItem('favoriteList', JSON.stringify(currentFavorites))
    } else {
      const removeFavorite = favorites?.filter((element: Data) => element.id !== id)
      setFavorites(removeFavorite)
      setIsBookmarked(false)
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
          {/* <img src={Bookmark} alt="boomark" className='bookmark__card__image' /> */}
          <Bookmark isBookmarked={isBookmarked} />
        </button>
      </div>
    </div>
  )
}

export default Mobile
