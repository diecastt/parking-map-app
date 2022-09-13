import { useState, useEffect } from 'react';
import Introduction from './components/Introduction';
import Header from './components/Header'
import Footer from './components/Footer'
import CssBaseline from '@mui/material/CssBaseline';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import MapContainer from './components/MapContainer';

//creating light or dark theme
const theme = createTheme({
  palette: {
    mode: 'light',
  }
});

function App() {
	const [pageTheme, setTheme] = useState('light')

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header/>
      <main>
        <Introduction/>
		<MapContainer/>
      </main>
	  <Footer/>
    </ThemeProvider>
  );
}

export default App;
