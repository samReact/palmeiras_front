import { Button, Tooltip } from '@mui/material'

export default function ProductionButtonItem({
  getTotalCapacity,
  handleProduction,
  staff,
  part,
  title,
}) {
  return (
    <Tooltip
      title={!staff ? '' : `${getTotalCapacity(part, staff)} / day`}
      arrow
    >
      <Button
        onClick={() => handleProduction(part)}
        variant="contained"
        data-testid="production-button"
      >
        {title}
      </Button>
    </Tooltip>
  )
}
