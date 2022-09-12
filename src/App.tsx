import ContextGlobal from '@/context/contextGlobal'
import AppRoute from '@/routes'

const App = (): JSX.Element => {
  return (
    <>
      <div className="App-out">
        <ContextGlobal>
          <AppRoute />
        </ContextGlobal>
      </div>
    </>

  )
}

export default App
