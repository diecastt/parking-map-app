import React from 'react'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import ThemeToggle from './ThemeToggle';


const Header = ({ onToggle }) => {
  return (
    <AppBar position="relative" style = {{ background: '#8066CA'}}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Montreal Parking Map
          </Typography>
          <div style ={{ position: 'absolute', right: '35px'}}>
            <ThemeToggle theme = {onToggle}/>
          </div>
        </Toolbar>
    </AppBar>
  )
}

export default Header