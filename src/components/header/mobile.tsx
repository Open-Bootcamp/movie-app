import { FC } from 'react'
import Search from '../search'
import './styles.scss'

const Mobile: FC = () => {
  return (
    <div className='header'>
      <h1 className='logo'>OPENWEEKAPPS</h1>
      <nav className='nav'>
        <ul className='nav__ul'>
          <li className='nav__item'>Movies</li>
          <li className='nav__item'>Series</li>
          <li className='nav__item'>Trending</li>
          <li className='nav__item'>Favorites</li>
        </ul>
      </nav>
      <Search></Search>
    </div>
  )
}

export default Mobile
