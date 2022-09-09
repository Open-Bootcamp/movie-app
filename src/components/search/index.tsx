import searchIcon from '@/assets/search.svg'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.scss'

const Search: FC = () => {
  const navigate = useNavigate()

  const handleChange = (e: React.FormEvent<any>): void => {
    e.preventDefault()

    navigate(`/search/${e.currentTarget.elements[0].value}`)

    e.currentTarget.elements[0].value = ''
  }

  return (
    <form className='form' onSubmit={handleChange}>
      <div className='search'>
        <div className='search__input'>
          <input name="search" id="search" type="text" placeholder="Buscar película, serie..." className='search__input__content' autoComplete="off" />
          <button className='search__button__icon' type='submit' title='Buscar...'>
            <img src={searchIcon} alt="Icon search" className='search__input__icon' />
          </button>
        </div>

        <button className='search__button'>Buscar</button>
      </div>
    </form>
  )
}

export default Search
