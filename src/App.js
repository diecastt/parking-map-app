import { useState, useEffect } from 'react';
import Introduction from './components/Introduction';
import Header from './components/Header'
import Footer from './components/Footer'
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MapContainer from './components/MapContainer';

//creating light or dark theme

  
function App() {
	//light and dark themes
	const lightTheme = createTheme({
		palette: {
		  mode: 'light',
		}
	});
	const darkTheme = createTheme({
		palette: {
		  mode: 'dark',
		}
	});

	const [signs, setSigns] = useState([]);
	const [theme, setTheme] = useState(lightTheme)

	//Fetch Parking Signs
	useEffect(() => {
		
		const fetchSigns = async () => {
			const response = await fetch('https://data.montreal.ca/api/3/action/datastore_search?resource_id=7f1d4ae9-1a12-46d7-953e-6b9c18c78680')
			const data = await response.json();
			setSigns(data.result.records)
			console.log(data.result.records)
		};
		fetchSigns();
	}, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header/>
      <main>
        <Introduction/>
		<MapContainer signMarkers={signs}/>
      </main>
	  <Footer/>
    </ThemeProvider>
  );
}

export default App;
