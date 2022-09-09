import { useState } from 'react'

const initialState = {
  favorite: []
}

const useInitialState = () => {
  const [state, setState] = useState(initialState)

  const addToFavorite = (payload): any => {
    setState({
      ...state,
      favorite: [...state.favorite, payload]
    })
  }
  return {
    state,
    addToFavorite
  }
}

export default useInitialState
