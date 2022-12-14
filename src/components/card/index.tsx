import { contextGlobal } from '@/context/contextGlobal'
import { BannerProps } from '@/types/data.type'
import React, { useContext } from 'react'
import CardList from './cardlist'
import './styles.scss'

interface Props {
  handleClick?: (arg0: BannerProps) => any
  typeCategory?: 'movie' | 'serie' | 'trending'
}

const Card: React.FC<Props> = ({ handleClick, typeCategory }) => {
  const { dataAPI } = useContext(contextGlobal)

  if (typeCategory === 'trending') {
    const filterData = dataAPI?.filter((item) => item.is_trending)
    return (
      <div className='card__container__grid'>
      {filterData?.map((item) => (
        <CardList handleClick={handleClick} {...item} key={item.id} />
      ))}
    </div>
    )
  }

  const filterData = dataAPI?.filter((item) => item.category === typeCategory)
  return (
    <div className='card__container__grid'>
      {filterData?.map((item) => (
        <CardList handleClick={handleClick} {...item} key={item.id} />
      ))}
    </div>
  )
}

export default Card
