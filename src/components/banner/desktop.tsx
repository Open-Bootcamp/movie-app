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

      <LazyLoadImage src={xl} alt={title} className='banner__img' />

    </div>
  )
}

export default Desktop
