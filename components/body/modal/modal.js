import React, { useState, useEffect } from "react"
import styles from "./modal.module.scss"
import Panier1 from "../../../public/panier1.jpg"
import Image from "next/image"
import Button from "../button/button"
import panierService from "../../../services/panier.service"

const Modal = () => {
    const [paniers, setPaniers] = useState([])
    useEffect(() => {
        panierService
            .getAll()
            .then(data => {
                setPaniers(data.panier)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className={styles.main}>
            {paniers
                ? paniers.map(element => (
                      <div key={element._id}>
                          <Button
                              onClick={() => {
                                  setIsVisible(true)
                              }}
                              className={styles.button}
                          >
                              <div className={styles.imagecontainer}>
                                  <div className={styles.innercontainer}>
                                      <img
                                          className={styles.imageEvent}
                                          src={element.image}
                                          alt="image Films"
                                      ></img>
                                      <h2
                                          className={styles.paniername}
                                          dangerouslySetInnerHTML={{
                                              __html: `<p>${element.aliments[0]}</p><p>${element.aliments[1]}</p><p>${element.aliments[2]}`,
                                          }}
                                      ></h2>
                                  </div>
                                  <h1 className={`text text-center ${styles.paniertitle}`}>
                                      {element.title}
                                  </h1>
                              </div>
                          </Button>
                      </div>
                  ))
                : ""}
        </div>
    )
}

export default Modal
