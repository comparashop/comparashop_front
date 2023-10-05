import React, { useState, useEffect, useMemo } from "react"
import { GoogleMap, useLoadScript, Marker, CircleF } from "@react-google-maps/api"
import { MarkerF, Circle } from "@react-google-maps/api"
import styles from "./geo.module.scss"
import ImgMarker from "../../../public/emplacement.jpg"
import Button from "../button/button"
import GeoModal from "../geomodal/geomodal"

export default function Index({ localization, rayon }) {
    const [isVisible, setIsVisible] = useState(false)
    // const [currentLocation, setCurrentLocation] = useState({});
    // localization = { lat: 48.866667, lng: 2.333333 }
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    })
    if (!isLoaded) return <div>Loading...</div>
    return (
        <Map
            localization={localization}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            rayon={rayon}
        />
    )
}
function Map({ localization, isVisible, setIsVisible, rayon }) {
    const [idMarker, setIdMarker] = useState()
    const [filtreMarker, setFiltreMarker] = useState({})
    const [markers, setMarkers] = useState([])
    const [visibleMarkers, setVisibleMarkers] = useState([])
    const currentLocation = { lat: 48.561179366743204, lng: -3.148384037348242 }
    const horslimite = { lat: 48.5390015, lng: -2.98909 }

    const customMarkerIcon = {
        url: "https://www.google.com/search?q=icon+de+marker&rlz=1C1CHBF_frFR941FR941&oq=icon+de+marker&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCAgCEAAYFhgeMggIAxAAGBYYHjIICAQQABgWGB4yCAgFEAAYFhgeMggIBhAAGBYYHjIICAcQABgWGB4yCAgIEAAYFhgeMggICRAAGBYYHtIBCDI4ODdqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#vhid=1RVtAa7Xo4m0SM&vssid=l",
        scaledSize: new window.google.maps.Size(40, 40), // Taille de l'icône (en pixels)
    }

    useEffect(() => {
        console.log(filtreMarker, "filtremarker")
    }, [filtreMarker])
    useEffect(() => {
        console.log(idMarker, "IdMarker")
    }, [idMarker])

    useEffect(() => {
        setMarkers([
            {
                id: 1,
                position: {
                    lat: 48.5574135,
                    lng: -3.1464562,
                },
                price: 2,
                adresse: "xxxxxxxxxx",
                name: "leclerc",
            },
            {
                id: 2,
                position: {
                    lat: 48.5390015,
                    lng: -2.98909,
                },
                price: 5,
                adresse: "yyyyyyyyyy",
                name: "inter",
            },
            {
                id: 3,
                position: {
                    lat: 48.5833,
                    lng: -3.2,
                },
                price: 12,
                adresse: "yyyyyyyyyy",
                name: "decatlon",
            },
            // Ajoutez d'autres marqueurs selon vos besoins
        ])
    }, [])

    const isMarkerInRadius = (marker, radius) => {
        const { lat: lat1, lng: lng1 } = localization
        const { lat: lat2, lng: lng2 } = marker.position

        const earthRadius = 6371000 // Rayon moyen de la Terre en mètres

        const latDiff = (lat2 - lat1) * (Math.PI / 180)
        const lngDiff = (lng2 - lng1) * (Math.PI / 180)

        const a =
            Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
            Math.cos(lat1 * (Math.PI / 180)) *
                Math.cos(lat2 * (Math.PI / 180)) *
                Math.sin(lngDiff / 2) *
                Math.sin(lngDiff / 2)

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

        const distance = earthRadius * c

        return distance <= radius
    }

    useEffect(() => {
        setVisibleMarkers(markers.filter(marker => isMarkerInRadius(marker, rayon * 1000)))
    }, [markers])

    return (
        <div className={styles.main}>
            <GoogleMap
                zoom={Math.log2((40075016.686 * 50) / (360 * rayon)) - 8}
                center={localization}
                mapContainerClassName={styles.mapcontainer}
            >
                {localization && <CircleF center={localization} radius={rayon * 1000} />}
                {localization && (
                    <div>
                        <MarkerF position={localization} />

                        {visibleMarkers.map((marker, index) => (
                            <div key={index}>
                                <MarkerF
                                    onClick={() => {
                                        setIsVisible(true)
                                        setIdMarker(marker.id)
                                        //console.log(markers.filter(el => (el.id = marker.id)))
                                        // setFiltreMarker(
                                        //     ,
                                        // )
                                    }}
                                    key={index}
                                    title={marker.price}
                                    position={marker.position}
                                />
                            </div>
                        ))}

                        {/* <MarkerF position={currentLocation} />
                    <MarkerF position={horslimite} /> */}
                    </div>
                )}
                {/* {currentLocation && <MarkerF position={currentLocation} />} */}
            </GoogleMap>
            <br />
            <br />
            <br />
            <div className={styles.sousmain}>
                {isVisible ? (
                    <GeoModal
                        isVisible={isVisible}
                        setIsVisible={setIsVisible}
                        idmarker={idMarker}
                        markers={visibleMarkers.filter(el => el.id == idMarker)}
                    />
                ) : (
                    ""
                )}
            </div>
        </div>
    )
}
