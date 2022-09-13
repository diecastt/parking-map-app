import React from 'react'
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api'


const Map = () => {
	
	const API_KEY = 'AIzaSyDXO5NqvtqfpWugAJbnuhkvabxqjNQbIWY'
	console.log(process.env.REACT_APP_MAPS_KEY)
	console.log({API_KEY})
	const mapStyle = {
		height: "100vh",
		width: '100%'
	}
	const defaultCenter = {
		lat: 45.469115,
		lng: -73.643790
	}

    return (
        <LoadScript googleMapsApiKey= {API_KEY}>
			<GoogleMap
				mapContainerStyle={mapStyle}
				zoom={13}
				center={defaultCenter}
			/>
		</LoadScript>
    )
}

export default Map