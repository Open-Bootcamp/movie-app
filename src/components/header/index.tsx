import { useDevice } from '@/hooks/useDevice'
import Desktop from './desktop'
import Mobile from './mobile'
import './styles.scss'

const Header: React.FC = () => {

  const { isMobile, isDesktop } = useDevice()

  return (
    <>
      {isMobile && <Mobile />}
      {isDesktop && <Desktop />}
    </>
  )
}

export default Header
