import { data } from '@/data/data'
import { BannerProps } from '@/types/data.type'
import React from 'react'
import Mobile from './mobile'
import './styles.scss'

interface Props {
  handleClick: (arg0: BannerProps) => any
}

const Card: React.FC<Props> = ({ handleClick }) => {
  return (
    <>
      {
        data.map((element) => <Mobile {...element} handleClick={handleClick} />)
      }
    </>
  )
}

export default Card
