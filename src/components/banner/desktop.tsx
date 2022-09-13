import { BannerProps } from '@/types/data.type'
import { FC } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Desktop: FC<BannerProps> = ({ xl, title, description }): JSX.Element => {
  return (
    <div className="banner">
      <div className='banner__container'>
        <h1 className='banner__title'>{title}</h1>
        <p className='banner__description'>{description}</p>
      </div>
      <div className='banner__img'>
        <LazyLoadImage src={xl} alt={title} />
      </div>

    </div>
  )
}

export default Desktop
