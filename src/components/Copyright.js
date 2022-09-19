import React from 'react'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
        
        <Link color="inherit" href="https://github.com/diecastt/parking-map-app" target="_blank">
          GitHub
        </Link>{'  •  '}
        <Link color="inherit" href="https://www.linkedin.com/in/diego-a-castillo/" target="_blank">
          LinkedIn
        </Link>{'  •  '}
        {new Date().getFullYear()}
        {'.'}
        <>{'Copyright ©'}</>
    </Typography>
  )
}

export default Copyright
