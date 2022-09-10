import { Data } from '@/types/data.type'
import React from 'react'
import Mobile from './mobile'
import './styles.scss'

interface Props{
  favorites: Data[]
}

const CardFavorite: React.FC<Props> = ({ favorites }) => {
  return (
    <>
      {
        favorites.map((element) => <Mobile {...element} />)
      }

    </>
  )
}

export default CardFavorite
