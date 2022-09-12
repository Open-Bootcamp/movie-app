export interface BannerProps {
  xl: string
  title: string
  description: string
}

interface Images {
  xl: string
  lg: string
  md: string
  sm: string
}

export interface Data {
  id: number
  images: Images
  title: string
  description: string
  category: string
  year: number
  rating: number
  isRecent: boolean
}

export interface DataFavorite {
  id: number
  md: string
  title: string
  description: string
  category: string
  year: number
  rating: number
  isRecent: boolean
}

export interface MobileProps extends Data {
  handleClick?: (arg0: BannerProps) => any
}

export interface State {
  title: string
  description: string
  xl: string
}

export interface Breakpoints {
  tablet: number
  laptop: number
  desktop: number
}
