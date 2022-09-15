import React, {useState} from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindowF} from '@react-google-maps/api'

//defining Map parameters
const mapStyle = {
	height: "100vh",
	width: '100%'
}
const defaultCenter = {
	lat: 45.564285,
	lng: -73.560084
}
const API_KEY = 'AIzaSyDXO5NqvtqfpWugAJbnuhkvabxqjNQbIWY'


const Map = ( { theme, signMarkers } ) => {
	
	const [activeMarker, setActiveMarker] = useState(null);	 
	const handleActiveMarker = (marker) => {
		if (marker === activeMarker){
			setActiveMarker(null)
			return;
		}
		setActiveMarker(marker);
	}
	

	return (
        <LoadScript googleMapsApiKey= {API_KEY}>
			<GoogleMap
				onClick={ () => setActiveMarker(null)}
				mapContainerStyle={mapStyle}
				zoom={13}
				center={defaultCenter}
				options={{styles:theme}}>
				{
				signMarkers.map((item) => {
					const location = {
						lat: Number(item.Latitude),
						lng: Number(item.Longitude),
					}
					return (
						<Marker 
							key={item._ID}
							position={location}
							onClick={ () => {
								handleActiveMarker(item)
								}
							}
							label = 'P'
							>
								{
									activeMarker === item ? (
										<InfoWindowF onCloseClick={() => setActiveMarker(null)}>
											<div>Description: {item.DESCRIPTION_RPA}</div> 										
										</InfoWindowF>
									):null
								}
						</Marker>
					)
				})
			}
							
			</GoogleMap>
		</LoadScript>
    )
}

export default Map