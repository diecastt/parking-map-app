import React from 'react'
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api'


const Map = ( {signMarkers} ) => {
	
	const API_KEY = 'AIzaSyDXO5NqvtqfpWugAJbnuhkvabxqjNQbIWY'
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
				center={defaultCenter}>
				{
					signMarkers.map((item) => {
						
						const location = {
							lat: Number(item.Latitude),
							lng: Number(item.Longitude),
						}
						console.log(location)
						console.log(item)
						return(
							<Marker key = {item._ID} position={location}/>
						)
					})
				}
			</GoogleMap>
			
		</LoadScript>
    )
}

export default Map