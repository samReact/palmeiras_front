import { Button, Grid, TextField } from '@mui/material'
import { useContext } from 'react'
import { Context } from '../App'
import Tooltip from '@mui/material/Tooltip'

export default function Home() {
  const [state, dispatch] = useContext(Context)
  const { carsA, carsB } = state
  const onChange = (e) => {
    dispatch({ type: 'handleStaff', payload: e.target.value })
  }
  return (
    <>
      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="center"
        style={{ marginTop: 100 }}
      >
        <Grid item xs={6} style={{ textAlign: 'center' }}>
          <div>A model</div>
          {carsA}
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'center' }}>
          <div>B model</div>
          {carsB}
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
          <Tooltip title="Delete">
            <Button variant="contained">Tires</Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Delete">
            <Button variant="contained">Engines</Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Delete">
            <Button variant="contained">Doors</Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Delete">
            <Button variant="contained">Chassis</Button>
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
          <Tooltip title="Delete">
            <Button variant="contained">CarsA</Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Delete">
            <Button variant="contained">CarsB</Button>
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
