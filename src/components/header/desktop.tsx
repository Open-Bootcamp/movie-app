import Bookmark from '@/assets/bookmark.svg'
import useScroll from '@/hooks/useScroll'
import { FC } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import Search from '../search'

const Desktop: FC = () => {
  const [scrolled] = useScroll(6)

  return (
    <div className={`header ${scrolled === true ? 'active' : ''}`}>
      <div className="header__nav">
        <h1 className='logo' title='Go to home 🏠'>
          <Link to='/'>OPENWEEKAPPS</Link>
        </h1>
        <nav className="nav">
          <ul className="nav__ul">
            <li className="nav__item">
              <Link to='/movie'>Movies</Link>
            </li>
            <li className="nav__item">
              <Link to='/series'>Series</Link>
            </li>
            <li className="nav__item">
              <Link to='/trending'>Trending</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="search__container">

        <Search />

        <Link to="/favorite" title='Go to my favorites 🚀'>
          <LazyLoadImage src={Bookmark} alt="Icon bookmark" />
        </Link>

      </div>
    </div>
  )
}

export default Desktop
