import { useDevice } from '@/hooks/useDevice'
import { BannerProps } from '@/types/data.type'
import { FC } from 'react'
import Desktop from './desktop'
import './styles.scss'

const Banner: FC<BannerProps> = ({ xl, title, description }): JSX.Element => {
  const { isDesktop } = useDevice()

  return (
    <>
      {isDesktop === true ? <Desktop xl={xl} title={title} description={description} /> : null}
    </>
  )
}

export default Banner
