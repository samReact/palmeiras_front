import { Button, Tooltip } from '@mui/material'
import { useTranslation } from 'react-i18next'

export default function ProductionButtonItem({
  getTotalCapacity,
  handleProduction,
  staff,
  part,
  title,
}) {
  const { t } = useTranslation()

  return (
    <Tooltip
      title={!staff ? '' : `${getTotalCapacity(part, staff)} / ${t('day')}`}
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
