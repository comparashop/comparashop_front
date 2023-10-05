import React, { useEffect, useState } from "react"
import Geo from "../components/body/geo/geo"
import styles from "./localisation.module.scss"

const Localisation = () => {
    const [localisation, setLocalisation] = useState({ lat: 48.866667, lng: 2.333333 })
    const [radius, setRadius] = useState()
    const [id, setId] = useState()

    useEffect(() => {
        var latitude = ""
        var longitude = ""
        const url = window.location.search.split("?")[1].split("&")
        url.forEach(element => {
            if (element.split("=")[0] == "id") {
                setId(element.split("=")[1])
            }
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
            <br />
            <br />
            <h1 className="text text-center">
                Retrouver les différents commences dans un rayon de {radius} km
            </h1>
            <br />
            <Geo localization={localisation} rayon={radius} id={id} />
        </div>
    )
}

export default Localisation
