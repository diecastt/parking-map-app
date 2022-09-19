import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link } from '@mui/material';


const Introduction = () => {
  return (
    <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8
          }}
        >
          <Container maxWidth="sm">
          
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Montreal Parking Map
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Montreal's finest parking signs localisation app that will help you
              stay out of trouble and avoid parking fines! 
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" paragraph>
              This application was created using the City of Montreal Open database
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" paragraph>
              More information at <Link color="inherit" href="https://donnees.montreal.ca/" target="_blank">Données ouvertes Montreal</Link> 
            </Typography>
    
          </Container>
        </Box>
  )
}

export default Introduction