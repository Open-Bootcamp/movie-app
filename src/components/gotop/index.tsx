import GoUp from '@/assets/up.png'
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const GoTop = (): JSX.Element => {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = (): void => {
      if (window.scrollY > 210) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleScroll = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
    {scrolled} && (
      <div className='go-top' onClick={handleScroll}>
        <button title='Ir al inicio  🔝' aria-label='Ir al inicio  🔝'>
          <LazyLoadImage src={GoUp} alt='Ir al inicio' />
        </button>
      </div>
      )
    </>
  )
}

export default GoTop
