import { Data } from '@/types/data.type'
import { FC } from 'react'
import Mobile from './cardFavorite'
import './styles.scss'

interface Props{
  favorites: Data[]
}

const CardFavorite: FC<Props> = ({ favorites }) => {
  return (
    <div className='container__category'>
      <h1 className='title__category'>Favoritos</h1>
      {
        <div className='card__container__grid'>
          {favorites.map((element) => <Mobile {...element} key={element.id} />)}
        </div>
      }
    </div>
  )
}

export default CardFavorite
