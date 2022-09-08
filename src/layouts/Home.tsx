import Banner from '@/components/banner'
import Card from '@/components/card'
import { data } from '@/data/data'
import { useState } from 'react'

interface State {
  name: string
  description: string
  image: string
}

const Home = (): JSX.Element => {
  const image = data[0].image.xl

  const [banner, setBanner] = useState<State>({
    name: '',
    description: '',
    image: ''
  })

  const description = 'Después de la extraña desaparición de un niño, un pueblo se encuentra ante un misterio que revela experimentos secretos, fuerzas sobrenaturales y a una niña muy especial.'

  return (
    <>
      <Banner name='Stranger Things' description={description} image={image} />

      <section>
        <Card />
      </section>
    </>
  )
}

export default Home
