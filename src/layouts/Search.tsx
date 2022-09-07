import { useParams } from 'react-router';

function Search() {

  const { name } = useParams();

  return (
    <>
      <h1>{name}</h1>
    </>
  )
}

export default Search
