import { FC } from 'react'
import './styles.scss'
import Star from '../../assets/star.svg'
import Bookmark from '../../assets/bookmark.svg'

const Mobile: FC = () => {
  return (
    <div className="container_card">
      <div className="card_content">
        <div className="card_description">
          <h3 className="card_description-title">Stanger Things 2</h3>
          <p className="card_description-annio">2018</p>
        </div>
        <div className="card_rating">
          <img src={Star} alt="Star ratio" />
          <p className="card_rating-value">9.0</p>
        </div>
      </div>
      <button className='card_bookmark'>
        <img src={Bookmark} alt="boomark" />
      </button>
    </div>
  );
}

export default Mobile
