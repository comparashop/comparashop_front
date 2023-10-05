import React, { useEffect, useState } from "react"
import styles from "./geomodal.module.scss"
import Button from "../button/button"
import { AiOutlineClose } from "react-icons/ai"
const GeoModal = ({ idmarker, markers, isVisible, setIsVisible }) => {
    const [element, setElement] = useState([])

    useEffect(() => {
        setElement(markers)
    }, [])

    useEffect(() => {
        console.log(element)
    }, [element])

    return (
        <div className={styles.main}>
            {element
                ? element.map(el => (
                      <div className={styles.sousmain} key={el.id}>
                          <h1 className={styles.h1}>{el.name}</h1>
                          <AiOutlineClose
                              onClick={() => {
                                  setIsVisible(false)
                              }}
                              className={styles.icon}
                              size={20}
                          />
                          <p>Ce situe à {el.adresse}</p>
                          <p>Le prix total du panier est de : {el.price} euros</p>
                      </div>
                  ))
                : ""}
        </div>
    )
}

export default GeoModal
