import { CAPACITY_PER_EMPLOYEE } from './constants'

export const getTotalCapacity = (article, staff) => {
  const totalCapacity = (1 / CAPACITY_PER_EMPLOYEE[article]) * staff
  return article === 'carsA' || article === 'carsB'
    ? parseInt(totalCapacity)
    : parseFloat(totalCapacity.toFixed(1))
}
