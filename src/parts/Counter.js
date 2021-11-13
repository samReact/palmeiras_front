import { Badge, Grid, Typography } from '@mui/material'
import { useContext } from 'react'

import { Context } from '../store/appReducer'
import doorIcon from '../assets/img/car-door.png'
import chassisIcon from '../assets/img/chassis.png'
import tiresIcon from '../assets/img/tires.png'
import engineIcon from '../assets/img/engine.png'

export function Counter() {
  const [state] = useContext(Context)
  const { carsA, carsB, tires, doors, chassis, engines } = state
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{ marginTop: 30 }}
        spacing={{ xs: 1, sm: 3, md: 4 }}
      >
        <Grid item>
          <Badge badgeContent={tires} color="primary" max={1000}>
            <img src={tiresIcon} alt="tire icon" style={{ width: 42 }} />
          </Badge>
        </Grid>
        <Grid item>
          <Badge badgeContent={doors} color="primary" max={1000}>
            <img src={doorIcon} alt="door icon" style={{ width: 42 }} />
          </Badge>
        </Grid>
        <Grid item>
          <Badge badgeContent={chassis} color="primary" max={1000}>
            <img src={chassisIcon} alt="chassis icon" style={{ width: 42 }} />
          </Badge>
        </Grid>
        <Grid item>
          <Badge badgeContent={engines} color="primary" max={1000}>
            <img src={engineIcon} alt="engine icon" style={{ width: 42 }} />
          </Badge>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="center"
        style={{ marginTop: 40 }}
      >
        <Grid item xs={6} style={{ textAlign: 'center' }}>
          <Typography variant="h5">A model</Typography>
          <Typography variant="h2">{carsA}</Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'center' }}>
          <Typography variant="h5">B model</Typography>
          <Typography variant="h2">{carsB}</Typography>
        </Grid>
      </Grid>
    </>
  )
}
