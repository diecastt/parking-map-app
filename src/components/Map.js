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
const defaultZoom = 13
const API_KEY = 'AIzaSyDXO5NqvtqfpWugAJbnuhkvabxqjNQbIWY'


const Map = ( { theme, signMarkers } ) => {
	
	const [zoom, setZoom] = useState(defaultZoom)
	const [center, setCenter] = useState(defaultCenter)
	const [activeMarker, setActiveMarker] = useState(null);	 
	const handleActiveMarker = (marker, location) => {
		if (marker === activeMarker){
			setActiveMarker(null)
			setZoom(defaultZoom)
			return;
		}
		setCenter(location);
		setZoom(18)
		setActiveMarker(marker);
	}
	

	return (
         <LoadScript googleMapsApiKey= {API_KEY}>
			<GoogleMap
				onClick={ () => {
					setActiveMarker(null)
					setZoom(defaultZoom)
				}}
					mapContainerStyle={mapStyle}
				zoom={zoom}
				center={center}
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
								handleActiveMarker(item, location)
								}
							}
							animation = {window.google.maps.Animation.DROP}							
							>
								{
									activeMarker === item ? (
										<InfoWindowF onCloseClick={() => {
											setZoom(defaultZoom)
											setActiveMarker(null)
										}}>
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