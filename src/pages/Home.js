import { Badge, Button, Grid, TextField, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import Tooltip from '@mui/material/Tooltip'

import { Context } from '../store/appReducer'
import doorIcon from '../assets/img/car-door.png'
import chassisIcon from '../assets/img/chassis.png'
import tiresIcon from '../assets/img/tires.png'
import engineIcon from '../assets/img/engine.png'
import {
  HANDLE_CAR_PRODUCTION,
  HANDLE_PRODUCTION,
  HANDLE_STAFF,
} from '../store/actions.constants'

export default function Home() {
  const [state, dispatch] = useContext(Context)
  const [carAcapacity, setCarAcapacity] = useState(0)
  const [carBcapacity, setCarBcapacity] = useState(0)

  const { carsA, carsB, staff, tires, doors, chassis, engines } = state
  const onChange = (e) => {
    dispatch({ type: HANDLE_STAFF, payload: e.target.value })
  }

  useEffect(() => {
    getCarProductionCapacity('carsA')
    getCarProductionCapacity('carsB')
  })

  const CAPACITY_PER_EMPLOYEE = {
    carsA: 0.5,
    carsB: 0.6,
    chassis: 2,
    doors: 1,
    tires: 0.2,
    engines: 3,
  }

  const handleProduction = (product) => {
    dispatch({
      type: HANDLE_PRODUCTION,
      payload: {
        name: product,
        value: getTotalCapacity(product),
      },
    })
  }

  const handleCarProduction = (product) => {
    const deductableTires =
      product === 'carsA' ? 4 * carAcapacity : 6 * carBcapacity
    const deductableEngines =
      product === 'carsA' ? 1 * carAcapacity : 1 * carBcapacity
    const deductableDoors =
      product === 'carsA' ? 2 * carAcapacity : 4 * carBcapacity
    const deductableChassis =
      product === 'carsA' ? 1 * carAcapacity : 1 * carBcapacity
    dispatch({
      type: HANDLE_CAR_PRODUCTION,
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

  const getTotalCapacity = (article) => {
    const totalCapacity = (1 / CAPACITY_PER_EMPLOYEE[article]) * staff
    return parseFloat(totalCapacity.toFixed(1))
  }

  const getCarProductionCapacity = (model) => {
    const constraint = Math.min(engines, chassis)
    const requireTires = model === 'carsA' ? 4 : 6
    const requireDoors = model === 'carsA' ? 2 : 4

    let totalCapacity = getTotalCapacity(model)

    if (constraint < totalCapacity) totalCapacity = constraint
    if (
      tires < requireTires ||
      chassis < 1 ||
      doors < requireDoors ||
      engines < 1
    ) {
      return model === 'carsA' ? setCarAcapacity(0) : setCarBcapacity(0)
    }
    for (let i = 0; i === totalCapacity; i++) {
      if (tires >= 4 * totalCapacity && doors >= 2 * totalCapacity) {
        totalCapacity = i
      }
    }

    model === 'carsA'
      ? setCarAcapacity(Math.round(Math.floor(totalCapacity)))
      : setCarBcapacity(Math.round(Math.floor(totalCapacity)))
  }

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
          <Badge badgeContent={tires} color="primary">
            <img src={tiresIcon} alt="tire icon" style={{ width: 42 }} />
          </Badge>
        </Grid>
        <Grid item>
          <Badge badgeContent={doors} color="primary">
            <img src={doorIcon} alt="door icon" style={{ width: 42 }} />
          </Badge>
        </Grid>
        <Grid item>
          <Badge badgeContent={chassis} color="primary">
            <img src={chassisIcon} alt="chassis icon" style={{ width: 42 }} />
          </Badge>
        </Grid>
        <Grid item>
          <Badge badgeContent={engines} color="primary">
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

      <Grid
        style={{ marginTop: '6rem' }}
        container
        alignItems="center"
        justifyContent="center"
        direction="row"
        spacing={{ xs: 1, sm: 3, md: 4 }}
      >
        <Grid item>
          <Tooltip title={`${getTotalCapacity('tires')} / day`}>
            <Button
              onClick={() => handleProduction('tires')}
              variant="contained"
              disabled={!staff}
            >
              Tires production
            </Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title={`${getTotalCapacity('doors')} / day`}>
            <Button
              onClick={() => handleProduction('doors')}
              variant="contained"
              disabled={!staff}
            >
              Doors production
            </Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title={`${getTotalCapacity('chassis')} / day`}>
            <Button
              onClick={() => handleProduction('chassis')}
              variant="contained"
              disabled={!staff}
            >
              Chassis production
            </Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title={`${getTotalCapacity('engines')} / day`}>
            <Button
              onClick={() => handleProduction('engines')}
              variant="contained"
              disabled={!staff}
            >
              Engines production
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid
        style={{ marginTop: '10px' }}
        container
        alignItems="center"
        justifyContent="center"
        direction="row"
        spacing={{ xs: 1, sm: 3, md: 4 }}
      >
        <Grid item>
          <Tooltip title={carAcapacity}>
            <Button
              variant="contained"
              disabled={carAcapacity === 0}
              onClick={() => handleCarProduction('carsA')}
            >
              Cars A
            </Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title={carBcapacity}>
            <Button
              variant="contained"
              disabled={carBcapacity === 0}
              onClick={() => handleCarProduction('carsB')}
            >
              Cars B
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid
        style={{ marginTop: '3rem' }}
        container
        justifyContent="center"
        direction="row"
      >
        <Grid item>
          <TextField
            id="outlined-number"
            label="Enter available staff"
            type="number"
            onChange={onChange}
          />
        </Grid>
      </Grid>
    </>
  )
}
