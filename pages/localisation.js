import React, { useEffect, useState } from "react"
import Geo from "../components/body/geo/geo"
const Localisation = () => {
    const [localisation, setLocalisation] = useState({ lat: 48.866667, lng: 2.333333 })

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
        })
        setLocalisation({ lat: Number(latitude), lng: Number(longitude) })
    }, [])

    return (
        <div>
            <p>mmmmm</p>
            <Geo localization={localisation} />
        </div>
    )
}

export default Localisation
