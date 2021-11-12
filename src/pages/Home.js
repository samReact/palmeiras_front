import { Grid, TextField } from '@mui/material'
import { useContext } from 'react'
import { Context } from '../App'

export default function Home() {
  const [state, dispatch] = useContext(Context)
  const { carsA, carsB, staff } = state
  const onChange = (e) => {
    dispatch({ type: 'handleStaff', payload: e.target.value })
  }
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div>Staff: {staff}</div>
        </Grid>
        <Grid item xs={6}>
          {carsA}
        </Grid>
        <Grid item xs={6}>
          {carsB}
        </Grid>
      </Grid>
      <TextField
        id="outlined-number"
        label="Available staff"
        type="number"
        onChange={onChange}
      />
    </>
  )
}
