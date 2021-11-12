import { Container } from '@mui/material'
import { createContext, useReducer } from 'react'
import Home from './pages/Home'
import NavBar from './parts/NavBar'
import './styles/App.css'

const initialState = { staff: 0, carsA: 0, carsB: 0 }

function reducer(state, action) {
  const { type, payload } = action
  switch (type) {
    case 'handleStaff':
      return { ...state, staff: payload }
    default:
      throw new Error()
  }
}

export const Context = createContext(initialState)

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
