import { createContext } from 'react'
import {
  HANDLE_CAR_PRODUCTION,
  HANDLE_PRODUCTION,
  HANDLE_STAFF,
} from './actions.constants'

export const initialState = {
  staff: 0,
  carsA: 0,
  carsB: 0,
  tires: 0,
  engines: 0,
  doors: 0,
  chassis: 0,
}

export function reducer(state, action) {
  const { type, payload } = action
  switch (type) {
    case HANDLE_STAFF:
      return { ...state, staff: parseInt(payload, 10) }
    case HANDLE_PRODUCTION:
      return {
        ...state,
        [payload.name]: parseFloat(
          (state[payload.name] + payload.value).toFixed(1),
        ),
      }
    case HANDLE_CAR_PRODUCTION:
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
