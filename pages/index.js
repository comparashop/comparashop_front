import React, { useEffect, useState } from "react"
import styles from "./index.module.scss"
import Modal from "../components/body/modal/modal"
import Geobis from "../components/body/geobis/geobis"
import Button from "../components/body/button/button"
import { AiFillEnvironment } from "react-icons/ai"
import { useRouter } from "next/router"
import Input from "../components/body/input/input"
import Footer from "../components/footer/footer"

export default function Home() {
    const [isVisible, setIsVisible] = useState(false)
    const [ad, setAd] = useState({})
    const [radius, setRadius] = useState()
    const router = useRouter()

    const sendAddress = () => {
        router.push(
            `/localisation?lat=${ad.localization.lat}&lng=${ad.localization.lng}&radius=${radius}`,
        )
    }

    return (
        <div className={styles.parent}>
            <div className={styles.child1}>
                <h1 className={`text text-center ${styles.h1}`}>Choisissez un panier</h1>
                <br />
                {isVisible ? (
                    <div className={styles.button}>
                        <AiFillEnvironment color={"#0f6819"} size={40} />
                        <div className={styles.div1}>
                            <Geobis setAd={setAd} ad={ad} />
                        </div>
                        <div className={styles.div2}>
                            <Input
                                label=""
                                onChange={e => {
                                    setRadius(e.target.value)
                                }}
                                className="input input-select2"
                                placeholder="Rayon en km"
                            />
                        </div>
                        <Button
                            title="Valider"
                            className="btn btn-white"
                            onClick={() => {
                                sendAddress()
                            }}
                        />
                    </div>
                ) : (
                    ""
                )}
                <br />
                <div className={styles.mainmodal}>
                    <div className={styles.modal}>
                        <Button
                            onClick={() => {
                                setIsVisible(true)
                            }}
                            className={styles.button}
                        >
                            <Modal />
                        </Button>
                        <Button
                            onClick={() => {
                                setIsVisible(true)
                            }}
                            className={styles.button}
                        >
                            <Modal />
                        </Button>

                        <Button
                            onClick={() => {
                                setIsVisible(true)
                            }}
                            className={styles.button}
                        >
                            <Modal />
                        </Button>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}
