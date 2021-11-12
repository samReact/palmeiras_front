import { Container } from '@mui/material'
import { createContext, useReducer } from 'react'

import Home from './pages/Home'
import NavBar from './parts/NavBar'
import './styles/App.css'

const initialState = {
  staff: 0,
  carsA: 0,
  carsB: 0,
  tires: 0,
  engines: 0,
  doors: 0,
  chassis: 0,
}

function reducer(state, action) {
  const { type, payload } = action
  switch (type) {
    case 'handleStaff':
      return { ...state, staff: payload }
    case 'handleProduction':
      return {
        ...state,
        [payload.name]: parseFloat(
          (state[payload.name] + payload.value).toFixed(1),
        ),
      }
    case 'handleCarProduction':
      console.log(payload)
      return {
        ...state,
        [payload.name]: state[payload.name] + payload.value,
        doors: parseFloat((state.doors - payload.doors).toFixed(1)),
        engines: parseFloat((state.engines - payload.engines).toFixed(1)),
        chassis: parseFloat((state.chassis - payload.chassis).toFixed(1)),
        tires: parseFloat((state.tires - payload.tires).toFixed(1)),
      }
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
