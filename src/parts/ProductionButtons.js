import { useContext, useState } from 'react'
import { Grid, Snackbar, Slide, Alert } from '@mui/material'

import { Context } from '../store/appReducer'
import { startCarProduction, startPartProduction } from '../store/actions'
import { getTotalCapacity } from '../utils'
import { useTranslation } from 'react-i18next'
import ProductionButtonItem from '../components/ProductionButtonItem'
import { CarProductionButtonItem } from '../components/CarProductionButtonItem'

export function ProductionButtons() {
  const [state, dispatch] = useContext(Context)
  const [isOpen, setIsOpen] = useState(false)
  const { staff, carAcapacity, carBcapacity } = state

  const parts = [
    { name: 'tires', title: 'tires production' },
    { name: 'doors', title: 'Doors production' },
    { name: 'chassis', title: 'Chassis production' },
    { name: 'engines', title: 'Engines production' },
  ]

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
        {parts.map((part) => {
          const { name, title } = part
          return (
            <Grid item key={name}>
              <ProductionButtonItem
                getTotalCapacity={getTotalCapacity}
                handleProduction={handleProduction}
                staff={staff}
                part={name}
                title={t(title)}
              />
            </Grid>
          )
        })}
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
          <CarProductionButtonItem
            carAcapacity={carAcapacity}
            carBcapacity={carBcapacity}
            startCarProduction={startCarProduction}
            staff={staff}
            title={t('Model A car mounting')}
            capacity={carAcapacity}
            model="carsA"
            dispatch={dispatch}
          />
        </Grid>
        <Grid item>
          <CarProductionButtonItem
            carAcapacity={carAcapacity}
            carBcapacity={carBcapacity}
            startCarProduction={startCarProduction}
            staff={staff}
            title={t('Model B car mounting')}
            capacity={carBcapacity}
            model="carsB"
            dispatch={dispatch}
          />
        </Grid>
      </Grid>
    </>
  )
}
