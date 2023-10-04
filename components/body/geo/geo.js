import React, { useState, useEffect, useMemo } from "react"
import { GoogleMap, useLoadScript, Marker, CircleF } from "@react-google-maps/api"
import { MarkerF, Circle } from "@react-google-maps/api"
import styles from "./geo.module.scss"

export default function Index({ localization }) {
    console.log("localization", localization)
    // const [currentLocation, setCurrentLocation] = useState({});
    // localization = { lat: 48.866667, lng: 2.333333 }
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    })
    if (!isLoaded) return <div>Loading...</div>
    return <Map localization={localization} />
}
function Map({ localization }) {
    const currentLocation = { lat: 48.561179366743204, lng: -3.148384037348242 }
    const horslimite = { lat: 48.5390015, lng: -2.98909 }

    const markers = [
        {
            position: {
                lat: 48.561179366743204,
                lng: -3.148384037348242,
            },
        },
        {
            position: {
                lat: 48.5390015,
                lng: -2.98909,
            },
        },
        // Ajoutez d'autres marqueurs selon vos besoins
    ]
    return (
        <GoogleMap zoom={14} center={localization} mapContainerClassName={styles.mapcontainer}>
            {localization && <CircleF center={localization} radius={1000} />}
            {localization && (
                <div>
                    <MarkerF position={localization} />
                    {markers.map(element => (
                        <div key={element.position.lat}>
                            <MarkerF position={element.position} />
                        </div>
                    ))}

                    {/* <MarkerF position={currentLocation} />
                    <MarkerF position={horslimite} /> */}
                </div>
            )}
            {currentLocation && <MarkerF position={currentLocation} />}
        </GoogleMap>
    )
}
