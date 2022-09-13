import { SearchNotFoundProps } from '@/types/data.type'
import { FC } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import arrowLeft from '../../assets/arrowLeft.png'
import favoriteNotFound from '../../assets/favoriteNotFound.png'
import './styles.scss'

const SearchNotFound: FC<SearchNotFoundProps> = ({ name }) => {
  return (
    <>
      <div className='container'>
        <section className='container_notFound'>
          <LazyLoadImage src={favoriteNotFound} alt="No tiene favorito" />
          <h1>SEARCH</h1>
          <p>Your search <span style={{ fontWeight: 'bold' }}>{name}</span> was not found 😢</p>
        </section>
        <Link to='/' className='btn_home'>
          <button className='btn' >
            <LazyLoadImage src={arrowLeft} alt="regreso a home" />
            Go back
          </button>
        </Link>
      </div>
    </>
  )
}

export default SearchNotFound
