import Card from '@/components/card'

const Trending = (): JSX.Element => {
  return (
    <div className='container__category'>
      <h1 className='title__category'>Trending</h1>
      <Card typeCategory='trending' />
    </div>
  )
}

export default Trending
