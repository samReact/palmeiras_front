import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

import logo from '../assets/img/logo.png'

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <img src={logo} alt="company icon" />
      </Toolbar>
    </AppBar>
  )
}
