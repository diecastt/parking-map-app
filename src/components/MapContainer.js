import React from 'react'
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api'


const MapContainer = () => {
	const API_KEY = process.env.REACT_APP_MAPS_KEY 
	const mapStyle = {
		height: "100vh",
		width: '90%'
	}
	const defaultCenter = {
		lat: 45.469115,
		lng: -73.643790
	}

    return (
        <LoadScript googleMapsApiKey='AIzaSyDXO5NqvtqfpWugAJbnuhkvabxqjNQbIWY'>
			<GoogleMap
				mapContainerStyle={mapStyle}
				zoom={13}
			/>
		</LoadScript>
    )
}

export default MapContainer