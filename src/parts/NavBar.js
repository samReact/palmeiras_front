// import { Link } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Box } from '@mui/system'

import logo from '../assets/img/logo.png'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
  let activeStyle = {
    textDecoration: 'none',
    color: '#fff',
    marginLeft: '50px',
  }
  let linkStyle = {
    textDecoration: 'none',
    color: '#000',
    marginLeft: '50px',
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <img src={logo} alt="company icon" />
          </Link>
          <NavLink
            to="/history"
            style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
          >
            History
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
