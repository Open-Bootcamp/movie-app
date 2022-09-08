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
  isTrending: boolean
  handleClick: (arg0: BannerProps) => any
}
