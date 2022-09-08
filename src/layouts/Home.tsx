import Banner from '@/components/banner'
import { data } from '@/data/data'

const Home = (): JSX.Element => {
  const image = data[0].image.xl

  const description = 'Después de la extraña desaparición de un niño, un pueblo se encuentra ante un misterio que revela experimentos secretos, fuerzas sobrenaturales y a una niña muy especial.'

  return (
    <>
      <Banner name='Stranger Things' description={description} image={image} />
    </>
  )
}

export default Home
