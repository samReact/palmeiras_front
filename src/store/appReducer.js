import { createContext } from 'react'
import {
  RESET_STORE,
  SET_CAR_A_CAPACITY,
  SET_CAR_B_CAPACITY,
  SET_STAFF,
  START_CAR_PRODUCTION,
  START_PART_PRODUCTION,
} from './actions.constants'

export const initialState = {
  staff: '',
  carsA: 0,
  carsB: 0,
  tires: 0,
  engines: 0,
  doors: 0,
  chassis: 0,
  carAcapacity: 0,
  carBcapacity: 0,
  productionHistory: [],
  id: 0,
}

export function reducer(state, action) {
  const { type, payload } = action
  switch (type) {
    case SET_STAFF:
      return { ...state, staff: payload }
    case START_PART_PRODUCTION:
      return {
        ...state,
        staff: '',
        productionHistory: [
          ...state.productionHistory,
          { ...payload.resume, id: state.id },
        ],
        [payload.name]: parseFloat(
          (state[payload.name] + payload.value).toFixed(1),
        ),
        id: state.id + 1,
      }
    case START_CAR_PRODUCTION:
      return {
        ...state,
        staff: '',
        productionHistory: [
          ...state.productionHistory,
          { ...payload.resume, id: state.id },
        ],
        [payload.name]: state[payload.name] + payload.value,
        doors: parseFloat((state.doors - payload.doors).toFixed(1)),
        engines: parseFloat((state.engines - payload.engines).toFixed(1)),
        chassis: parseFloat((state.chassis - payload.chassis).toFixed(1)),
        tires: parseFloat((state.tires - payload.tires).toFixed(1)),
        id: state.id + 1,
      }
    case SET_CAR_A_CAPACITY:
      return {
        ...state,
        carAcapacity: payload,
      }
    case SET_CAR_B_CAPACITY:
      return {
        ...state,
        carBcapacity: payload,
      }
    case RESET_STORE:
      return {
        ...initialState,
      }
    default:
      return state
  }
}

export const Context = createContext(initialState)
