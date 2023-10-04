import React, { useState } from "react"
import Geo from "../components/body/geo/geo"
const Localisation = () => {
    const [localisation, setLocalisation] = useState({ lat: 48.866667, lng: 2.333333 })
    return (
        <div>
            <p>mmmmm</p>
            <Geo localization={localisation} />
        </div>
    )
}

export default Localisation
