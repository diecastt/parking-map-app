import React from 'react'
import Map from './Map'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Stack, Button } from '@mui/material';

const MapContainer = ( { theme, signMarkers, showIntro, onShowIntro} ) => {
  return (
    <Box
		sx = {{
      pt: '10px',
			pb: '70px'
		}}>
      <Stack
              sx={{ pt: 4 , pb: '30px'}}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            {
              showIntro ? <Button variant="outlined" onClick={onShowIntro}>Close</Button> :
              <Button variant="contained" onClick={onShowIntro}>Open</Button>
            }   
      </Stack>

        <Container maxWidth="lg"
        sx ={{
            justifyContent: 'center',
            border: '1px solid grey',
            borderRadius: '4px',
        }}>
          <Map theme = {theme} signMarkers = {signMarkers}/>
        </Container>
	</Box>
  )
}

export default MapContainer