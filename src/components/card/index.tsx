import { data } from '@/data/data'
import { BannerProps } from '@/types/data.type'
import React from 'react'
import CardList from './cardlist'
import './styles.scss'

interface Props {
  handleClick?: (arg0: BannerProps) => any
  typeCategory: 'movie' | 'series' | 'trending'
}

const Card: React.FC<Props> = ({ handleClick, typeCategory }) => {
  const filterData = data.filter((item) => item.category === typeCategory)

  return (
    <div className='card__container__grid'>
      {filterData.map((item) => (
        <CardList handleClick={handleClick} {...item} key={item.id} />
      ))}
    </div>
  )
}

export default Card
