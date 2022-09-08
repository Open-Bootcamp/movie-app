import { data } from '@/data/data'
import React from 'react'
import Mobile from './mobile'
import './styles.scss'
const Card: React.FC = () => {
  return (
    <>
      {
        data.map((element) => <Mobile {...element} />)
      }
    </>
  )
}

export default Card
