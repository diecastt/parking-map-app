import { useState, useEffect } from 'react';
import MapContainer from './components/MapContainer'
import Header from './components/Header'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//creating 
const theme = createTheme({
  palette: {
    mode: 'light',
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header/>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
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
              stay out of trouble and save some big bucks!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Open Map</Button>
            </Stack>
          </Container>
        </Box>
		<Box 
		sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
			border: '1px grey',
			borderRadius: 2,
			justifyContent: "center"
          }}>
			<MapContainer/>
		</Box>
      </main>
      
    </ThemeProvider>
  );
}

export default App;
