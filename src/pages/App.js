import { useReducer } from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import NavBar from '../parts/NavBar'
import { Context, initialState, reducer } from '../store/appReducer'
import '../styles/App.css'
import History from './History'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={[state, dispatch]}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Context.Provider>
  )
}

export default App
