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
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
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
