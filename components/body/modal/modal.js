import React, { useState } from "react"
import styles from "./modal.module.scss"
import Button from "../button/button"
import { useRouter } from "next/router"

const Modal = () => {
    const router = useRouter()

    return (
        <div className={styles.block}>
            {/* <Button
             className={styles.block}
             onClick={() => {
                 demandeAdress()
             }}
         > */}
            <h1 className={`text text-center ${styles.h1}`}>Alcool</h1>
            <p className={styles.p}>Bières</p>
            <p className={styles.p}>Vodka</p>
            <p className={styles.p}>Wisky</p>
            {/* </Button> */}
        </div>
    )
}

export default Modal
