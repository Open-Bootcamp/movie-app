import React from 'react'
import { Link } from 'react-router-dom'
import arrowLeft from '../../assets/arrowLeft.png'
import favoriteNotFound from '../../assets/favoriteNotFound.png'
import './styles.scss'

const FavoriteNotFound: React.FC = () => {
  return (
    <>
      <div className='container'>
        <section className='container_notFound'>
          <img src={favoriteNotFound} alt="No tiene favorito" />
          <h1>FAVORITES</h1>
          <p>You do not have favorites</p>
        </section>
        <Link to='/' className='btn_home'>
          <button className='btn' >
            <img src={arrowLeft} alt="regreso a home" />
            GO BACK
          </button>
        </Link>
      </div>
    </>
  )
}

export default FavoriteNotFound
