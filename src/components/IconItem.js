import { Badge, Grid } from '@mui/material'
import doorIcon from '../assets/img/car-door.png'
import chassisIcon from '../assets/img/chassis.png'
import tiresIcon from '../assets/img/tires.png'
import engineIcon from '../assets/img/engine.png'

const getIcon = (name) => {
  switch (name) {
    case 'tires':
      return tiresIcon
    case 'doors':
      return doorIcon
    case 'chassis':
      return chassisIcon
    case 'engines':
      return engineIcon
    default:
      throw new Error('no corresponding icon')
  }
}

export default function IconItem({ part }) {
  const { value, name } = part
  let icon = getIcon(name)
  return (
    <Grid item>
      <Badge badgeContent={value} color="primary" max={1000}>
        <img src={icon} alt="icon" style={{ width: 42 }} />
      </Badge>
    </Grid>
  )
}
