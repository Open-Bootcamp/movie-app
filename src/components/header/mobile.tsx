import { FC } from 'react'
import { Link } from 'react-router-dom'
import Search from '../search'
import './styles.scss'

const Mobile: FC = () => {
  return (
    <div className='header'>
      <h1 className='logo'>OPENWEEKAPPS</h1>
      <nav className='nav'>
        <ul className='nav__ul'>
          <li className='nav__item'>Películas</li>
          <li className='nav__item'>Series</li>
          <li className='nav__item'>Tendencias</li>
          <li className='nav__item'>
            <Link to="/favorite" >Mis favoritos</Link>
          </li>
        </ul>
      </nav>
      <Search />
    </div>
  )
}

export default Mobile
