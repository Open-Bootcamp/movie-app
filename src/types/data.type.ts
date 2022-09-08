type Image = {
  xl: string;
  lg: string;
  md: string;
  sm: string;
};

export interface Data {
  image: Image;
  title: string;
  year: number;
  rating: string;
  isRecent: boolean;
  isTrending: boolean;
  isBookmarked: boolean;
}
