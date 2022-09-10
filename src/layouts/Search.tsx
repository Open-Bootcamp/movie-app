import { useParams } from 'react-router'

const Search = (): JSX.Element => {
  const { name } = useParams()

  return (
    <>
      <h1>{name}</h1>
    </>
  )
}

export default Search
