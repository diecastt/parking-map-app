import { useState, useEffect } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme, darkMapStyles} from './components/Theme'
import Introduction from './components/Introduction';
import MapContainer from './components/MapContainer';
import { Collapse } from '@mui/material';

const API_KEY = process.env.REACT_APP_MAPS_KEY
const API_LINK = 'https://montreal.l3.ckan.io/api/3/action/datastore_search?resource_id=7f1d4ae9-1a12-46d7-953e-6b9c18c78680&limit=10000&offset=158900'

function App() {

	const [showIntro, setShowIntro] = useState(true);
	const [signLocations, setSignLocations] = useState([]);
	const [isDarkTheme, setIsDarkTheme] = useState(false) // default lightTheme

	//Theme toggle
	const toggleTheme = () => {
		setIsDarkTheme(!isDarkTheme);
	};


	//Fetch Parking Signs
	useEffect(() => {
		
		const fetchSigns = async () => {
			const response = await fetch(API_LINK)
			const data = await response.json();
			setSignLocations(data.result.records)	
		};
		fetchSigns();

	}, []);
  return (
		<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
			<CssBaseline/>
			<Header checked = {isDarkTheme} onToggle = {toggleTheme}/>
			<Collapse in={showIntro}>
				<Introduction/>
			</Collapse>
			<MapContainer theme = {isDarkTheme ? darkMapStyles : null} signMarkers = {signLocations}
				onShowIntro={() => setShowIntro(!showIntro)} showIntro = {showIntro} mapKey={API_KEY}/>
			<Footer/>
		</ThemeProvider>
	
  );
}

export default App;
