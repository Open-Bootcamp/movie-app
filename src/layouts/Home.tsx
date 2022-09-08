import Banner from '@/components/banner'
import Card from '@/components/card'
import { data } from '@/data/data'
import { useState } from 'react'

interface State {
  title: string
  description: string
  imageXl: string
}

const Home = (): JSX.Element => {
  const [banner, setBanner] = useState<State>({
    title: data[0].title,
    description: data[0].description,
    imageXl: data[0].imageXl
  })

  const handleClick = ({ title, description, imageXl }: State): any => {
    setBanner({
      title,
      description,
      imageXl
    })
  }

  return (
    <>
      <Banner {...banner} />

      <section>
        <Card handleClick={handleClick} />
      </section>
    </>
  )
}

export default Home
