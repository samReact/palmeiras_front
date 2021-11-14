import React, { useReducer } from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import '../i18n'
import { Context, initialState, reducer } from '../store/appReducer'

const AllTheProviders = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={[state, dispatch]}>
      <BrowserRouter>{children}</BrowserRouter>
    </Context.Provider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
