import { Fab, Grid, TextField } from '@mui/material'
import RotateLeftIcon from '@mui/icons-material/RotateLeft'
import { resetStore, setStaff } from '../store/actions'
import { useTranslation } from 'react-i18next'
import { useContext } from 'react'
import { Context } from '../store/appReducer'

export default function EmployeeInput() {
  const [state, dispatch] = useContext(Context)
  const { staff } = state

  const { t } = useTranslation()
  return (
    <>
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
            inputProps={{ min: 0, 'data-testid': 'employee-input' }}
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
    </>
  )
}
