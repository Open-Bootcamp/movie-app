import { useEffect, useState } from 'react'

export const sizes = {
  tablet: 768,
  laptop: 1024,
  desktop: 1170
}

interface Breakpoints {
  tablet: number
  laptop: number
  desktop: number
}

export function useDevice (breakpoints: Breakpoints = sizes): any {
  const isMobile = 'isMobile'
  const isTablet = 'isTablet'
  const isLaptop = 'isLaptop'
  const isDesktop = 'isDesktop'

  const onLoadDevice = (): any => {
    return window.innerWidth < breakpoints.tablet
      ? isMobile
      : window.innerWidth < breakpoints.laptop
        ? isTablet
        : window.innerWidth < breakpoints.desktop
          ? isLaptop
          : isDesktop
  }

  const [device, setDevice] = useState(onLoadDevice())
  const onResizeDevice = (): void => {
    return window.innerWidth < breakpoints.tablet
      ? setDevice(isMobile)
      : window.innerWidth < breakpoints.laptop
        ? setDevice(isTablet)
        : window.innerWidth < breakpoints.desktop
          ? setDevice(isLaptop)
          : setDevice(isDesktop)
  }

  useEffect(() => {
    window.addEventListener('resize', onResizeDevice)
    return () => {
      window.removeEventListener('resize', onResizeDevice)
    }
  })

  return {
    isMobile: device === isMobile,
    isTablet: device === isTablet,
    isLaptop: device === isLaptop,
    isDesktop: device === isDesktop
  }
}
