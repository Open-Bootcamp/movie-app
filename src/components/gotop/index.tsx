import GoUp from '@/assets/up.png'
import useScroll from '@/hooks/useScroll'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import './styles.scss'

const GoTop = (): JSX.Element => {
  const [scrolled, handleScroll] = useScroll(250)

  return (
    <>
      {scrolled === true
        ? (
        <div className='go-top' onClick={handleScroll}>
          <button title='Go to top  🔝' aria-label='Go to top  🔝'>
            <LazyLoadImage src={GoUp} alt='Go to top icon' />
          </button>
        </div>
          )
        : null}
    </>
  )
}

export default GoTop
