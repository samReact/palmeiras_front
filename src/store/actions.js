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
  const date = new Date()
  const value = getTotalCapacity(product, staff)
  const resume = { product, value, staff, date }
  dispatch({
    type: START_PART_PRODUCTION,
    payload: {
      name: product,
      value,
      resume,
    },
  })
}

export const startCarProduction = (
  product,
  carAcapacity,
  carBcapacity,
  staff,
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
  const date = new Date()
  const value = getTotalCapacity(product, staff)
  const resume = { product, value, staff, date }
  dispatch({
    type: START_CAR_PRODUCTION,
    payload: {
      name: product,
      resume,
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
  const requireTires = model === 'carsA' ? 4 : 6
  const requireDoors = model === 'carsA' ? 2 : 4

  let finalResult = 0
  let totalCapacity = getTotalCapacity(model, staff)

  //check engines and chassis constraint
  if (constraint < totalCapacity) totalCapacity = constraint

  const getRequireDoors = (nbr) => {
    return requireDoors * nbr
  }
  const getRequireTires = (nbr) => {
    return requireTires * nbr
  }

  for (let i = 0; i <= totalCapacity; i++) {
    let requireTires = getRequireTires(i)
    let requireDoors = getRequireDoors(i)
    if (tires >= requireTires && doors >= requireDoors) {
      finalResult = i
    }
  }

  return dispatch({
    type: model === 'carsA' ? SET_CAR_A_CAPACITY : SET_CAR_B_CAPACITY,
    payload: finalResult,
  })
}

export const setStaff = (e, dispatch) => {
  let { value } = e.target
  dispatch({ type: SET_STAFF, payload: value })
}

export const resetStore = (dispatch) => {
  dispatch({ type: RESET_STORE, payload: {} })
}
