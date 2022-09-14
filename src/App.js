import { useState, useEffect } from 'react';
import Introduction from './components/Introduction';
import Header from './components/Header'
import Footer from './components/Footer'
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MapContainer from './components/MapContainer';

//creating light or dark theme

const API_LINK = 'https://montreal.l3.ckan.io/api/3/action/datastore_search?resource_id=7f1d4ae9-1a12-46d7-953e-6b9c18c78680&limit=100&offset=158900'
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

	const [signLocations, setSignLocations] = useState([]);
	const [theme, setTheme] = useState(lightTheme)

	//Fetch Parking Signs
	useEffect(() => {
		
		const fetchSigns = async () => {
			const response = await fetch('https://montreal.l3.ckan.io/api/3/action/datastore_search?resource_id=7f1d4ae9-1a12-46d7-953e-6b9c18c78680&sort=_id asc')
			const data = await response.json();
			setSignLocations(data.result.records)	
		};
		fetchSigns();

	}, []);
  
  const onToggle = (theme) => {
    theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme)
    return theme
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header onToggle = {onToggle}/>
      <main>
        <Introduction/>
		    <MapContainer signMarkers={signLocations}/>
      </main>
	    <Footer/>
    </ThemeProvider>
  );
}

export default App;
