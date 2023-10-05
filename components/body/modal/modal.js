import React, { useState } from "react"
import styles from "./modal.module.scss"
import Panier1 from "../../../public/panier1.jpg"
import Image from "next/image"
import Button from "../button/button"

const Modal = () => {
    return (
        <div>
            <div className={styles.imagecontainer}>
                <div className={styles.innercontainer}>
                    <Image className={styles.imageEvent} src={Panier1} alt="photo artiste" />
                    <h2
                        className={styles.paniername}
                        dangerouslySetInnerHTML={{
                            __html: `<p>Bières</p><p>Vodka</p><p>Wisky</p>`.replace("\n", "<br>"),
                        }}
                    ></h2>
                </div>
                <h1 className={`text text-center ${styles.paniertitle}`}>Alcool</h1>
            </div>
        </div>
    )
}

export default Modal
