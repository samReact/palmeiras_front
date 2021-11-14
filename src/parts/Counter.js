import { Grid, Typography } from '@mui/material'
import { Suspense, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import IconItem from '../components/IconItem'

import { Context } from '../store/appReducer'

export function Counter() {
  const [state] = useContext(Context)
  const { carsA, carsB, tires, doors, chassis, engines } = state

  const parts = [
    { name: 'tires', value: tires },
    { name: 'doors', value: doors },
    { name: 'chassis', value: chassis },
    { name: 'engines', value: engines },
  ]

  const { t } = useTranslation()

  return (
    <Suspense fallback="loading">
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{ marginTop: 30 }}
        spacing={{ xs: 1, sm: 3, md: 4 }}
      >
        {parts.map((part) => {
          return <IconItem key={part.name} part={part} />
        })}
      </Grid>
      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="center"
        style={{ marginTop: 40 }}
      >
        <Grid item xs={6} style={{ textAlign: 'center' }}>
          <Typography variant="h5">{t('A model')}</Typography>
          <Typography variant="h2">{carsA}</Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'center' }}>
          <Typography variant="h5">{t('B model')}</Typography>
          <Typography variant="h2">{carsB}</Typography>
        </Grid>
      </Grid>
    </Suspense>
  )
}
