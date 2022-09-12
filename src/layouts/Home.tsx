import Banner from '@/components/banner'
import Card from '@/components/card'
import { State } from '@/types/data.type'
import { useState } from 'react'

const Home = (): JSX.Element => {
  const [banner, setBanner] = useState<State>({
    title: 'The Walking Dead',
    description: 'Trying to stay alive under the almost constant threat of attacks by mindless zombies, c However, with the fall of humanity, these zombies have evolved and acquired a more developed intelligence, which has made them a much more dangerous threat.',
    xl: 'https://www.eltiempo.com/uploads/2017/10/23/59ee6d2869a56.jpeg'
  })

  const handleClick = ({ title, description, xl }: State): any => {
    setBanner({
      title,
      description,
      xl
    })
  }

  return (
    <>
      <Banner {...banner} />

      <section className='movies category__home'>
        <h1 className='title__category__home'>Movies</h1>
        <Card handleClick={handleClick} typeCategory='movie' />
      </section>

      <section className='series category__home'>
        <h1 className='title__category__home'>Series</h1>
        <Card handleClick={handleClick} typeCategory='serie' />
      </section>
    </>
  )
}

export default Home
