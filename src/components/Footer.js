import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Copyright from './Copyright'
const Footer = () => {
  return (
    
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
    <Typography variant="h6" align="center" gutterBottom>
      Montreal Park Map
    </Typography>
    <Typography
      variant="subtitle1"
      align="center"
      color="text.secondary"
      component="p"
    >
      Created and developped by Diego Castillo
    </Typography>
    <Copyright />
  </Box>
  )
}

export default Footer