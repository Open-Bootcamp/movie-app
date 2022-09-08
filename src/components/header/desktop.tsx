import Bookmark from '@/assets/bookmark.svg'
import useScroll from '@/hooks/useScroll'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import Search from '../search'

const Desktop: FC = () => {
  const [scrolled] = useScroll(210)

  return (
    <div className={`header ${scrolled === true ? 'active' : ''}`}>
      <div className="header__nav">
        <h1 className='logo'>
          <Link to='/'>OPENWEEKAPPS</Link>
        </h1>
        <nav className="nav">
          <ul className="nav__ul">
            <li className="nav__item">
              <Link to='/peliculas'>Películas</Link>
            </li>
            <li className="nav__item">
              <Link to='/series'>Series</Link>
            </li>
            <li className="nav__item">
              <Link to='/trending'>Tendencias</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="search__container">

        <Search />

        <Link to="/favorite" title='Ir a mis favoritos'>
          <img src={Bookmark} alt="Icon bookmark" />
        </Link>

      </div>
    </div>
  )
}

export default Desktop
