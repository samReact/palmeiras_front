import { useContext, useEffect } from 'react'
import { Container, Fab, Grid, TextField } from '@mui/material'
import RotateLeftIcon from '@mui/icons-material/RotateLeft'
import { useTranslation } from 'react-i18next'

import { Context } from '../store/appReducer'
import { Counter } from '../parts/Counter'
import { ProductionButtons } from '../parts/ProductionButtons'
import {
  resetStore,
  setCarProductionCapacity,
  setStaff,
} from '../store/actions'

export default function Home() {
  const [state, dispatch] = useContext(Context)
  const { staff, tires, doors, chassis, engines } = state

  const { t } = useTranslation()

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
    <Container>
      <Counter />
      <ProductionButtons />
      <Grid
        style={{ marginTop: '3rem' }}
        container
        justifyContent="center"
        alignItems="flex-end"
        direction="row"
      >
        <Grid item style={{ justifySelf: 'center' }}>
          <TextField
            id="outlined-number"
            label={t('Staff Nbr')}
            type="number"
            inputProps={{ min: 0 }}
            value={staff}
            onChange={(e) => setStaff(e, dispatch)}
          />
        </Grid>
      </Grid>
      <Grid container justifyContent="flex-end">
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => resetStore(dispatch)}
        >
          <RotateLeftIcon />
        </Fab>
      </Grid>
    </Container>
  )
}
