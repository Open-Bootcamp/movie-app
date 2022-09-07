import Bookmark from '@/assets/bookmark.svg'
import { FC } from "react"
import { Link } from "react-router-dom"
import Search from '../search'


const Desktop: FC = () => {
  return (
    <div className="header">
      <div className="header__nav">
        <h1 className='logo'>OPENWEEKAPPS</h1>
        <nav className="nav">
          <ul className="nav__ul">
            <li className="nav__item">Movies</li>
            <li className="nav__item">Series</li>
            <li className="nav__item">Trending</li>
          </ul>
        </nav>
      </div>

      <div className="search__container">

        <Search />

        <Link to="/favorite">
          <img src={Bookmark} alt="Icon bookmark" />
        </Link>

      </div>
    </div>
  )
}

export default Desktop
