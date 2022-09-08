import React from 'react'
import Mobile from './mobile'
import './styles.scss'
import { data } from '@/data/data'
const CardFavorite: React.FC = () => {
  return (
    <>
      {
        data.map((element) => <Mobile {...element} />)
      }

    </>
  )
}

export default CardFavorite
