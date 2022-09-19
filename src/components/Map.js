import React, {useState, useEffect} from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindowF, useLoadScript} from '@react-google-maps/api'
import { Typography } from '@mui/material'

//defining Map parameters
const mapStyle = {
	height: "100vh",
	width: '100%'
}
const defaultCenter = {
	lat: 45.564285,
	lng: -73.560084
}
const defaultZoom = 12



const Map = ( { theme, signMarkers, mapKey } ) => {
	
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
		<LoadScript googleMapsApiKey= {mapKey}>
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
				signMarkers.map((item, index) => {
					const location = {
						lat: Number(item.Latitude),
						lng: Number(item.Longitude),
					}
					return (
						<Marker 
							key={index}
							position={location}
							onClick={ () => {
								handleActiveMarker(item, location)
								}
							}
							animation = {window.google.maps.Animation.DROP}							
							>
								{
									activeMarker === item ? (
										<InfoWindowF options={{minWidth: 300 }} onCloseClick={() => {
											setZoom(defaultZoom)
											setActiveMarker(null)
											}} 
											sx = {{position: 'relative'}}
										>
										<>
											<div style={{position: 'relative', color: 'black', paddingBottom: 40, marginBottom: 10}}>
												<Typography variant = "subtitle2" gutterBottom sx = {{
													position: 'absolute',
													left: 0,
													top: 0,
													pb: 20, 
												}}>
													Parking Sign Description
												</Typography>
												<Typography variant='caption'
												sx = {{
													position: 'absolute',
													top: 25,
													pb: 20
												}}
													>{item.DESCRIPTION_RPA}
												</Typography>
											</div>

											<div style={{position: 'relative', color: 'black', paddingBottom: 40}}>
												<Typography variant = "subtitle2" gutterBottom sx = {{
													position: 'absolute',
													left: 0,
													top: 0,
													pb: 20, 
												}}>
													Arrondissement/Borough
												</Typography>
												<Typography variant='caption'
												sx = {{
													position: 'absolute',
													top: 25,
													pb: 20
												}}
													>{item.NOM_ARROND}
												</Typography>
											</div>
										</>	 										
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