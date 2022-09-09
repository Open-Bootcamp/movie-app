import { useDevice } from '@/hooks/useDevice'
import Desktop from './desktop'
import Mobile from './mobile'
import './styles.scss'

const Header: React.FC = () => {
  const { isMobile, isDesktop } = useDevice()

  return (
    <>
      {isMobile === true ? <Mobile /> : null}
      {isDesktop === true ? <Desktop /> : null}
    </>
  )
}

export default Header
