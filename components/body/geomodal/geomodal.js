import React, { useEffect, useState } from "react"
import styles from "./geomodal.module.scss"
import Button from "../button/button"

const GeoModal = ({ idmarker, markers, isVisible, setIsVisible }) => {
    const [element, setElement] = useState([])

    useEffect(() => {
        setElement(markers)
    }, [])

    useEffect(() => {
        console.log(element)
    }, [element])

    return (
        <div>
            {element
                ? element.map(el => (
                      <div className={styles.main} key={el.id}>
                          <h1>{el.name}</h1>
                          <p>{el.adresse}</p>
                      </div>
                  ))
                : ""}
            <Button
                title="retour"
                onClick={() => {
                    setIsVisible(false)
                }}
            />
        </div>
    )
}

export default GeoModal
