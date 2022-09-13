
import CardList from '@/components/card/cardlist'
import SearchNotFound from '@/components/searchNotFound'
import { contextGlobal } from '@/context/contextGlobal'
import { useContext } from 'react'
import { useParams } from 'react-router'

const Search = (): JSX.Element => {
  const { name } = useParams()

  const { dataAPI } = useContext(contextGlobal)

  const dataToFilter = dataAPI?.filter(item => item.title.toLowerCase().includes(name!.toLowerCase()))

  return (
    <>
      {dataToFilter?.length === 0
        ? <SearchNotFound name={name} />
        : <div className='container__category'>
          <h1 className='title__category'>Results of your search: {name}</h1>
          <div className='card__container__grid'>
            {dataToFilter?.map((item) => <CardList {...item} />)}
          </div>
        </ div>
      }
    </>
  )
}

export default Search
