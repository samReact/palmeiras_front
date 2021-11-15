import { useContext, useEffect } from 'react'
import { Container } from '@mui/material'

import { Context } from '../store/appReducer'
import { Counter } from '../parts/Counter'
import { ProductionButtons } from '../parts/ProductionButtons'
import { setCarProductionCapacity } from '../store/actions'
import EmployeeInput from '../parts/EmployeeInput'

export default function Home() {
  const [state, dispatch] = useContext(Context)
  const { staff, tires, doors, chassis, engines } = state

  useEffect(() => {
    setCarProductionCapacity(
      'carsA',
      engines,
      chassis,
      tires,
      doors,
      staff,
      dispatch,
    )
    setCarProductionCapacity(
      'carsB',
      engines,
      chassis,
      tires,
      doors,
      staff,
      dispatch,
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chassis, doors, tires, engines, staff])

  return (
    <Container data-testid="home-page">
      <Counter />
      <ProductionButtons />
      <EmployeeInput />
    </Container>
  )
}
