import React, { useEffect, useState } from "react"
import Geo from "../components/body/geo/geo"
import styles from "./localisation.module.scss"

const Localisation = () => {
    const [localisation, setLocalisation] = useState({ lat: 48.866667, lng: 2.333333 })
    const [radius, setRadius] = useState()

    useEffect(() => {
        var latitude = ""
        var longitude = ""
        const url = window.location.search.split("?")[1].split("&")
        url.forEach(element => {
            if (element.split("=")[0] == "lat") {
                latitude = element.split("=")[1]
            }
            if (element.split("=")[0] == "lng") {
                longitude = element.split("=")[1]
            }
            if (element.split("=")[0] == "radius") {
                setRadius(element.split("=")[1])
            }
        })
        setLocalisation({ lat: Number(latitude), lng: Number(longitude) })
    }, [])

    return (
        <div>
            <h1 className="text text-center">
                Retrouver les différents commences dans un rayon de {radius * 1000} km <br />
                de votre emplacement choisi
            </h1>
            <br />
            <h2 className={`text text-center ${styles.soustitre}`}>
                Cliquer sur les marqueurs pour visionner les différents prix
            </h2>
            <Geo localization={localisation} rayon={radius} />
        </div>
    )
}

export default Localisation
