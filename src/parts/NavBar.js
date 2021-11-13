import { useTranslation } from 'react-i18next'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Box } from '@mui/system'

import logo from '../assets/img/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useState } from 'react'

export default function NavBar() {
  const { t, i18n } = useTranslation()
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language)

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

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value)
    setCurrentLanguage(e.target.value)
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <img src={logo} alt="company icon" />
          </Link>
          <Box sx={{ flexGrow: 1 }}>
            <NavLink
              to="/history"
              style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
            >
              {t('History')}
            </NavLink>
          </Box>

          <Box sx={{ minWidth: 80, padding: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Language</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currentLanguage}
                label="Language"
                onChange={handleChange}
              >
                <MenuItem value={'en'}>EN</MenuItem>
                <MenuItem value={'fr'}>FR</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
