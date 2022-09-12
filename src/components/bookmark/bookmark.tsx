import BookmarkEnable from '../../assets/bookmark.svg'
import BookmarkActive from '../../assets/bookmarkActive.svg'

interface BookmarkProps {
  isBookmarked: boolean
}

export const Bookmark = ({ isBookmarked }: BookmarkProps): JSX.Element => {
  return (
    <>
      {
        isBookmarked ? <img src={BookmarkActive} alt="active" /> : <img src={BookmarkEnable} alt="enabled" />
      }
    </>
  )
}
