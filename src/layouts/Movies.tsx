import Card from '@/components/card'

const Movies = (): JSX.Element => {
  return (
    <div className='container__category'>
      <h1 className='title__category'>Movies</h1>
      <Card typeCategory='movie' />
    </div>
  )
}

export default Movies
