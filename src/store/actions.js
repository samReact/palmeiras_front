import { getTotalCapacity } from '../utils'
import {
  RESET_STORE,
  SET_CAR_A_CAPACITY,
  SET_CAR_B_CAPACITY,
  SET_STAFF,
  START_CAR_PRODUCTION,
  START_PART_PRODUCTION,
} from './actions.constants'

export const startPartProduction = (product, staff, dispatch) => {
  dispatch({
    type: START_PART_PRODUCTION,
    payload: {
      name: product,
      value: getTotalCapacity(product, staff),
    },
  })
}

export const startCarProduction = (
  product,
  carAcapacity,
  carBcapacity,
  dispatch,
) => {
  const deductableTires =
    product === 'carsA' ? 4 * carAcapacity : 6 * carBcapacity
  const deductableEngines =
    product === 'carsA' ? 1 * carAcapacity : 1 * carBcapacity
  const deductableDoors =
    product === 'carsA' ? 2 * carAcapacity : 4 * carBcapacity
  const deductableChassis =
    product === 'carsA' ? 1 * carAcapacity : 1 * carBcapacity
  dispatch({
    type: START_CAR_PRODUCTION,
    payload: {
      name: product,
      value: product === 'carsA' ? carAcapacity : carBcapacity,
      tires: deductableTires,
      chassis: deductableChassis,
      doors: deductableDoors,
      engines: deductableEngines,
    },
  })
}

export const setCarProductionCapacity = (
  model,
  engines,
  chassis,
  tires,
  doors,
  staff,
  dispatch,
) => {
  const constraint = Math.min(engines, chassis)

  let totalCapacity = getTotalCapacity(model, staff)

  if (constraint < totalCapacity) totalCapacity = constraint
  const requireTires = model === 'carsA' ? 4 : 6
  const requireDoors = model === 'carsA' ? 2 : 4

  const totalRequireTires = requireTires * totalCapacity
  const totalRequireDoors = requireDoors * totalCapacity
  if (
    tires < requireTires ||
    chassis < 1 ||
    doors < requireDoors ||
    engines < 1
  ) {
    return dispatch({
      type: model === 'carsA' ? SET_CAR_A_CAPACITY : SET_CAR_B_CAPACITY,
      payload: 0,
    })
  }
  let final = 0

  for (let i = 0; i <= totalCapacity; i++) {
    if (tires >= totalRequireTires && doors >= totalRequireDoors) {
      final = i
    }
  }
  return dispatch({
    type: model === 'carsA' ? SET_CAR_A_CAPACITY : SET_CAR_B_CAPACITY,
    payload: final,
  })
}

export const setStaff = (e, dispatch) => {
  let { value } = e.target
  dispatch({ type: SET_STAFF, payload: value })
}

export const resetStore = (dispatch) => {
  dispatch({ type: RESET_STORE, payload: {} })
}
