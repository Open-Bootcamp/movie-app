import AppRoute from '@/routes'
import { useEffect } from 'react'
import FavoriteContext from '@/context/favorite'

const App = (): JSX.Element => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }, 100)
  }, [])

  return (
    <>
      <div className="App-out">
        <FavoriteContext>
          <AppRoute />
        </FavoriteContext>
      </div>
    </>

  )
}

export default App
