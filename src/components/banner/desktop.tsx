import { BannerProps } from '@/types/data.type'
import { FC } from 'react'

const Desktop: FC<BannerProps> = ({ imageXl, title, description }): JSX.Element => {
  return (
    <div className="banner">
      <div className='banner__container'>
        <h1 className='banner__title'>{title}</h1>
        <p className='banner__description'>{description}</p>
      </div>
      <div className='banner__img'>
        <img src={imageXl}></img>
      </div>

    </div>
  )
}

export default Desktop
