import { useState, useEffect } from 'react';
import Introduction from './components/Introduction';
import Header from './components/Header'
import Footer from './components/Footer'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme} from './components/Theme'
import MapContainer from './components/MapContainer';

const API_LINK = 'https://montreal.l3.ckan.io/api/3/action/datastore_search?resource_id=7f1d4ae9-1a12-46d7-953e-6b9c18c78680&limit=100&offset=158900'
function App() {


	const [signLocations, setSignLocations] = useState([]);
	const [isDarkTheme, setIsDarkTheme] = useState(false) // default lightTheme

	//Theme toggle
	const toggleTheme = () => {
		setIsDarkTheme(!isDarkTheme);
	};


	//Fetch Parking Signs
	useEffect(() => {
		
		const fetchSigns = async () => {
			const response = await fetch('https://montreal.l3.ckan.io/api/3/action/datastore_search?resource_id=7f1d4ae9-1a12-46d7-953e-6b9c18c78680&sort=_id asc')
			const data = await response.json();
			setSignLocations(data.result.records)	
		};
		fetchSigns();

	}, []);
  
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline/>
      <Header checked = {isDarkTheme} onToggle = {toggleTheme}/>
      <main>
        <Introduction/>
		    <MapContainer signMarkers={signLocations}/>
      </main>
	    <Footer/>
    </ThemeProvider>
  );
}

export default App;
