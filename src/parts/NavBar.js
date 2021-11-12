import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import CarRepairIcon from '@mui/icons-material/CarRepair'

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <CarRepairIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Palmeiras car Factory
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
