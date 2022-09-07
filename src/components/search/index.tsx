import searchIcon from '@/assets/search.svg'
import { FC } from 'react'
import './styles.scss'

const Search: FC = () => {
  return (
    <form className='form'>
      <div className='search'>
        <div className='search__input'>
          <input type="text" placeholder="Search movie, serie..." className='search__input__content' />
          <img src={searchIcon} alt="Icon search" className='search__input__icon' />
        </div>

        <button className='search__button'>Search</button>
      </div>
    </form>
  )
}

export default Search
