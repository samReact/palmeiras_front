import { Button, Tooltip } from '@mui/material'

export function CarProductionButtonItem({
  carAcapacity,
  startCarProduction,
  carBcapacity,
  staff,
  dispatch,
  title,
  capacity,
  model,
}) {
  return (
    <Tooltip title={capacity === 0 ? '' : capacity} arrow>
      <Button
        variant="contained"
        data-testid="production-button"
        disabled={capacity === 0}
        onClick={() =>
          startCarProduction(model, carAcapacity, carBcapacity, staff, dispatch)
        }
      >
        {title}
      </Button>
    </Tooltip>
  )
}
