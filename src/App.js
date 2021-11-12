import { Container } from '@mui/material'
import { useReducer } from 'react'

import Home from './pages/Home'
import NavBar from './parts/NavBar'
import { Context, initialState, reducer } from './store/appReducer'
import './styles/App.css'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={[state, dispatch]}>
      <NavBar />
      <Container>
        <Home />
      </Container>
    </Context.Provider>
  )
}

export default App
