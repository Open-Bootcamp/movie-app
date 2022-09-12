import { FC } from 'react'
import { Link } from 'react-router-dom'
import Search from '../search'
import './styles.scss'

const Mobile: FC = () => {
  return (
    <div className='header'>
      <h1 className='logo' title='Go to home'><Link to='/'>OPENWEEKAPPS</Link></h1>
      <nav className='nav'>
        <ul className='nav__ul'>
          <li className='nav__item'>
            <Link to='/peliculas'>Movites</Link>
          </li>
          <li className='nav__item'>
            <Link to='/series'>Series</Link>
          </li>
          <li className='nav__item'>
            <Link to="/favorite" >Mis favoritos</Link>
          </li>
          <li className="nav__item">
            <Link to='/trending'>Tendencias</Link>
          </li>
        </ul>
      </nav>
      <Search />
    </div>
  )
}

export default Mobile
