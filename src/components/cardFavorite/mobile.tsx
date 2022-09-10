import { Data } from '@/types/data.type'
import { FC } from 'react'
import Bookmark from '../../assets/bookmark.svg'
import Star from '../../assets/star.svg'
import './styles.scss'

const Mobile: FC<Data> = ({ title, year, rating, imageMd, isRecent, isTrending }) => {
  return (
    <div className="container_card">
      <div className="card">
        <img src={imageMd} alt={title} />
        <div className="card_content">
          <div className="card_description">
            <h3 className="card_description-title">{title}</h3>
            <p className="card_description-annio">{year}</p>
          </div>
          <div className="card_rating">
            <img src={Star} alt="Star ratio" />
            <p className="card_rating-value">{rating}</p>
          </div>
        </div>
        <button className='card_bookmark'>
          <img src={Bookmark} alt="boomark" />
        </button>
      </div>
    </div>
  )
}

export default Mobile
