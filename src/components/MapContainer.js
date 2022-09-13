import React from 'react'
import Map from './Map'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const MapContainer = () => {
  return (
    <Box
		sx = {{
			pb: '100px'
		}}>
        <Container maxWidth="lg"
        sx ={{
            justifyContent: 'center',
            border: '1px solid grey',
            borderRadius: '4px',
        }}>
            <Map/>
        </Container>
	</Box>
  )
}

export default MapContainer