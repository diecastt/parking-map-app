import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


const Introduction = ( {onOpenMap, showMap} ) => {
  return (
    <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            {
            !showMap &&
              <>
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
                  stay out of trouble and save some big bucks!
                </Typography>
              </>
            }
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            {
              showMap ? <Button variant="outlined" onClick={onOpenMap}>Close Map</Button> :
              <Button variant="contained" onClick={onOpenMap}>Open Map</Button>
            }
            </Stack>
          </Container>
        </Box>
  )
}

export default Introduction