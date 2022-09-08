interface Image {
  xl: string
  lg: string
  md: string
  sm: string
  image?: string
}

export interface Data {
  id: number
  image: Image
  title: string
  description?: string
  category?: string
  year: number
  rating: number
  isRecent: boolean
  isTrending: boolean
}
