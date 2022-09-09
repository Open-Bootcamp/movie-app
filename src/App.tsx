import AppRoute from '@/routes'
import { useEffect } from 'react'

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
        <AppRoute />
      </div>
    </>

  )
}

export default App
