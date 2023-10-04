import React, { useState } from "react"
import styles from "./modal.module.scss"

const Modal = () => {
    return (
        <div className={styles.block}>
            <h1 className={`text text-center ${styles.h1}`}>Alcool</h1>
            <p className={styles.p}>Bières</p>
            <p className={styles.p}>Vodka</p>
            <p className={styles.p}>Wisky</p>
        </div>
    )
}

export default Modal
