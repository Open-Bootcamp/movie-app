import { Image } from '@/types/data.type'
import { FC } from 'react'

const Desktop: FC<Image['image']['name']['description']> = ({ image, name, description }): JSX.Element => {
  return (
    <div className="banner">
      <div className='banner__container'>
        <h1 className='banner__title'>{name}</h1>
        <p className='banner__description'>{description}</p>
      </div>
      <div className='banner__img'>
        <img src={image}></img>
      </div>

    </div>
  )
}

export default Desktop
