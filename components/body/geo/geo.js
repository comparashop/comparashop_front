import React, { useState, useEffect, useMemo } from "react"
import { GoogleMap, useLoadScript, Marker, CircleF } from "@react-google-maps/api"
import { MarkerF, Circle } from "@react-google-maps/api"
import styles from "./geo.module.scss"
import panierService from "../../../services/panier.service"

export default function Index({ localization, rayon, id }) {
    const [isVisible, setIsVisible] = useState(false)
    // const [currentLocation, setCurrentLocation] = useState({});
    // localization = { lat: 48.866667, lng: 2.333333 }
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    })

    if (!isLoaded) return <div>Loading...</div>
    return (
        <Map
            id={id}
            localization={localization}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            rayon={rayon}
        />
    )
}
function Map({ localization, isVisible, setIsVisible, rayon, id }) {
    const [idMarker, setIdMarker] = useState()
    const [markers, setMarkers] = useState([])
    const [visibleMarkers, setVisibleMarkers] = useState([])
    const [panierTitle, setPanierTitle] = useState("")
    const [panierAliment, setPanierAliment] = useState([])
    const [ancienId, setAncienID] = useState("")
    // const customMarkerIcon = {
    //     url: "https://www.google.com/search?q=icon+de+marker&rlz=1C1CHBF_frFR941FR941&oq=icon+de+marker&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCAgCEAAYFhgeMggIAxAAGBYYHjIICAQQABgWGB4yCAgFEAAYFhgeMggIBhAAGBYYHjIICAcQABgWGB4yCAgIEAAYFhgeMggICRAAGBYYHtIBCDI4ODdqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#vhid=1RVtAa7Xo4m0SM&vssid=l",
    //     scaledSize: new window.google.maps.Size(40, 40), // Taille de l'icône (en pixels)
    // }

    useEffect(() => {
        panierService
            .getId(id)
            .then(data => {
                setPanierTitle(data.panier.title)
                setPanierAliment(data.panier.aliments)
                setMarkers(data.panier.commerces)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const isMarkerInRadius = (marker, radius) => {
        const { lat: lat1, lng: lng1 } = localization
        const { lat: lat2, lng: lng2 } = marker.localization

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
        setVisibleMarkers(markers.filter(marker => isMarkerInRadius(marker.shop, rayon * 1000)))
    }, [markers])

    const text = elementid => {
        setAncienID(elementid)
        if (ancienId) {
            const maDiv2 = document.getElementById(ancienId)
            maDiv2.style.color = "rgb(36, 32, 32)"
            maDiv2.style.backgroundColor = "#e48152"
        }
        const maDiv = document.getElementById(elementid)
        maDiv.style.color = "white"
        maDiv.style.backgroundColor = "rgb(36, 32, 32)"

        const contentTopOffset = maDiv.getBoundingClientRect().top + window.scrollY

        window.scrollTo({
            top: contentTopOffset,
            behavior: "smooth",
        })
    }

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
                            <div key={marker.shop._id}>
                                <MarkerF
                                    onClick={() => {
                                        text(marker.shop._id)
                                        //console.log(markers.filter(el => (el.id = marker.id)))
                                        // setFiltreMarker(
                                        //     ,
                                        // )
                                    }}
                                    key={index}
                                    position={marker.shop.localization}
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
            <div>
                {panierTitle && panierAliment && visibleMarkers ? (
                    <div>
                        <div className={styles.divCategorie}>
                            <h1 className={`text text-center ${styles.h1}`}>
                                Catégorie : {panierTitle}
                            </h1>
                            <div className={styles.categorie}>
                                {panierAliment.map(al => (
                                    <div className={styles.p} key={al}>
                                        <h3 className={styles.ptaille}>{al}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {visibleMarkers
                            .sort((a, b) => (a.priceTotal > b.priceTotal ? 1 : -1))
                            .map(el => (
                                <div id={el.shop._id} className={styles.divmain} key={el.shop._id}>
                                    <h2 className={`text text-center`}>{el.shop.name}</h2>
                                    <p className={styles.pblanc}>
                                        Le magasin se situe à {el.shop.adresse}
                                    </p>
                                    <p className={styles.pblanc}>
                                        Le prix total du panier est de : {el.priceTotal} euros
                                    </p>
                                </div>
                            ))}
                    </div>
                ) : (
                    ""
                )}
            </div>
            <br />
            <br />
        </div>
    )
}
