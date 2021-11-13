import { useContext, useState } from 'react'
import { Grid, Tooltip, Button, Snackbar, Slide, Alert } from '@mui/material'

import { Context } from '../store/appReducer'
import { startCarProduction, startPartProduction } from '../store/actions'
import { getTotalCapacity } from '../utils'
import { useTranslation } from 'react-i18next'

export function ProductionButtons() {
  const [state, dispatch] = useContext(Context)
  const [isOpen, setIsOpen] = useState(false)
  const { staff, carAcapacity, carBcapacity } = state

  const { t } = useTranslation()

  const handleProduction = (model) => {
    if (!staff) {
      return setIsOpen(true)
    }
    startPartProduction(model, staff, dispatch)
  }

  return (
    <>
      <Snackbar
        open={isOpen}
        autoHideDuration={2000}
        TransitionComponent={Slide}
        onClose={() => setIsOpen(false)}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        key={Slide.name}
      >
        <Alert severity="error">{t('no staff')}</Alert>
      </Snackbar>
      <Grid
        style={{ marginTop: '10%' }}
        container
        alignItems="center"
        justifyContent="center"
        direction="row"
        spacing={4}
      >
        <Grid item>
          <Tooltip
            title={!staff ? '' : `${getTotalCapacity('tires', staff)} / day`}
            arrow
          >
            <Button
              onClick={() => handleProduction('tires')}
              variant="contained"
            >
              {t('tires production')}
            </Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip
            title={!staff ? '' : `${getTotalCapacity('doors', staff)} / day`}
            arrow
          >
            <Button
              onClick={() => handleProduction('doors')}
              variant="contained"
            >
              {t('Doors production')}
            </Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip
            title={!staff ? '' : `${getTotalCapacity('chassis', staff)} / day`}
            arrow
          >
            <Button
              onClick={() => handleProduction('chassis')}
              variant="contained"
            >
              {t('Chassis production')}
            </Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip
            title={!staff ? '' : `${getTotalCapacity('engines', staff)} / day`}
            arrow
          >
            <Button
              onClick={() => handleProduction('engines')}
              variant="contained"
            >
              {t('Engines production')}
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid
        style={{ marginTop: '2rem' }}
        container
        alignItems="center"
        justifyContent="center"
        direction="row"
        spacing={4}
      >
        <Grid item>
          <Tooltip title={carAcapacity === 0 ? '' : carAcapacity} arrow>
            <Button
              variant="contained"
              disabled={carAcapacity === 0}
              onClick={() =>
                startCarProduction(
                  'carsA',
                  carAcapacity,
                  carBcapacity,
                  staff,
                  dispatch,
                )
              }
            >
              {t('Model A car mounting')}
            </Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title={carBcapacity === 0 ? '' : carBcapacity} arrow>
            <Button
              variant="contained"
              disabled={carBcapacity === 0}
              onClick={() =>
                startCarProduction(
                  'carsB',
                  carAcapacity,
                  carBcapacity,
                  staff,
                  dispatch,
                )
              }
            >
              {t('Model B car mounting')}
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
    </>
  )
}
