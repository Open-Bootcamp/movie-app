import { FC } from 'react'
import './styles.scss'
import favoriteNotFound from '../../assets/favoriteNotFound.png'
import arrowLeft from '../../assets/arrowLeft.png'
import { Link } from 'react-router-dom'

const Mobile: FC = () => {
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

export default Mobile
