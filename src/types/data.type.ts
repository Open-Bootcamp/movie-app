export interface BannerProps {
  imageXl: string
  title: string
  description: string
}

export interface Data {
  id: number
  imageXl: string
  imageLg: string
  imageMd: string
  imageSm: string
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
