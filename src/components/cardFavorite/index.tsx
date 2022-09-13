import { Data } from '@/types/data.type'
import { FC } from 'react'
import Mobile from './cardFavorite'
import './styles.scss'

interface Props{
  favorites: Data[]
}

const CardFavorite: FC<Props> = ({ favorites }) => {
  console.log(favorites)
  return (
    <div className='container__category'>
      <h1 className='title__category'>Favorites</h1>
      {
        <div className='card__container__grid'>
          {favorites.map((element) => <Mobile {...element} key={element.id} />)}
        </div>
      }
    </div>
  )
}

export default CardFavorite
