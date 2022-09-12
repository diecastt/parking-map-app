import React from 'react'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';


const Header = () => {
  return (
    <AppBar position="relative" style = {{ background: '#8066CA'}}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Montreal Parking Map
          </Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Header