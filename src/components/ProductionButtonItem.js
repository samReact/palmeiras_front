import { Button, Tooltip } from '@mui/material'
import { useTranslation } from 'react-i18next'

export default function ProductionButtonItem({
  getTotalCapacity,
  handleProduction,
  staff,
  part,
  title,
  datatestid,
}) {
  const { t } = useTranslation()
  const totalCapacity = getTotalCapacity(part, staff)

  return (
    <Tooltip title={!staff ? '' : `${totalCapacity} / ${t('day')}`} arrow>
      <Button
        onClick={() => handleProduction(part)}
        variant="contained"
        data-testid={datatestid}
        value={totalCapacity}
      >
        {title}
      </Button>
    </Tooltip>
  )
}
