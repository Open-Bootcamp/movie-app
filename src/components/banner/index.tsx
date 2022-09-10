import { useDevice } from '@/hooks/useDevice'
import { BannerProps } from '@/types/data.type'
import { FC } from 'react'
import Desktop from './desktop'
import './styles.scss'

const Banner: FC<BannerProps> = ({ imageXl, title, description }): JSX.Element => {
  const { isDesktop } = useDevice()

  return (
    <>
      {isDesktop === true ? <Desktop imageXl={imageXl} title={title} description={description} /> : null}
    </>
  )
}

export default Banner
