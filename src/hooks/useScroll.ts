import React, { useState } from 'react'

const useScroll = (scrollY: number): Array<(any | (() => void))> => {
  const [scrolled, setScrolled] = useState<boolean>(false)

  React.useEffect(() => {
    const onScroll = (): void => {
      if (window.scrollY > scrollY) {
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

  return [scrolled, handleScroll]
}

export default useScroll
