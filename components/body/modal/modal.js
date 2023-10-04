import React from "react"
import styles from "./modal.module.scss"
import Button from "../button/button"
import { useRouter } from "next/router"

const Modal = () => {
    const router = useRouter()
    return (
        <Button
            className={styles.block}
            onClick={() => {
                router.push("/localisation")
            }}
        >
            <h1 className={`text text-center ${styles.h1}`}>Alcool</h1>
            <p className={styles.p}>Bières</p>
            <p className={styles.p}>Vodka</p>
            <p className={styles.p}>Wisky</p>
        </Button>
    )
}

export default Modal
