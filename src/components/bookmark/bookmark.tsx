import BookmarkEnable from '../../assets/bookmark.svg'
import BookmarkActive from '../../assets/bookmarkActive.svg'

import { LazyLoadImage } from 'react-lazy-load-image-component'

interface BookmarkProps {
  isBookmarked: boolean
}

export const Bookmark = ({ isBookmarked }: BookmarkProps): JSX.Element => {
  return (
    <>
      {
        isBookmarked ? <LazyLoadImage src={BookmarkActive} alt="active" /> : <LazyLoadImage src={BookmarkEnable} alt="enabled" />
      }
    </>
  )
}
