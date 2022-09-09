import GoUp from '@/assets/up.png'
import useScroll from '@/hooks/useScroll'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import './styles.scss'

const GoTop = (): JSX.Element => {
  const [scrolled, handleScroll] = useScroll(1)

  return (
    <>
      {scrolled === true
        ? (
        <div className='go-top' onClick={handleScroll}>
          <button title='Ir al inicio  🔝' aria-label='Ir al inicio  🔝'>
            <LazyLoadImage src={GoUp} alt='Ir al inicio' />
          </button>
        </div>
          )
        : null}
    </>
  )
}

export default GoTop
