import { useDevice } from '@/hooks/useDevice'
import { Image } from '@/types/data.type'
import { FC } from 'react'
import Desktop from './desktop'
import './styles.scss'

const Banner: FC<Image['image']['name']['description']> = ({ image, name, description }): JSX.Element => {
  const { isDesktop } = useDevice()

  return (
    <>
      {isDesktop === true ? <Desktop image={image} name={name} description={description} /> : null}
    </>
  )
}

export default Banner
