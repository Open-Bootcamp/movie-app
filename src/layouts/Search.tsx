
import CardList from '@/components/card/cardlist'
import { contextGlobal } from '@/context/contextGlobal'
import { useContext } from 'react'
import { useParams } from 'react-router'

const Search = (): JSX.Element => {
  const { name } = useParams()

  const { dataAPI } = useContext(contextGlobal)

  const dataToFilter = dataAPI?.filter(item => item.title.toLowerCase().includes(name!.toLowerCase()))

  return (
    <div className='container__category'>
      <h1 className='title__category'>Results of your search: { name }</h1>
      {
        dataToFilter?.map((item) => {
          return <CardList {...item} key={item.id} />
        })
      }
    </div>
  )
}

export default Search
