import React, { useEffect, useState } from "react"
import styles from "./index.module.scss"
import Modal from "../components/body/modal/modal"
import Geobis from "../components/body/geobis/geobis"
import Button from "../components/body/button/button"
import { AiFillEnvironment } from "react-icons/ai"
import { useRouter } from "next/router"
import Input from "../components/body/input/input"
import panierService from "../services/panier.service"
import Image from "next/image"

export default function Home() {
    const [isVisible, setIsVisible] = useState(false)
    const [ad, setAd] = useState({})
    const [radius, setRadius] = useState()
    const router = useRouter()
    const [paniers, setPaniers] = useState([])

    const sendAddress = () => {
        router.push(
            `/localisation?lat=${ad.localization.lat}&lng=${ad.localization.lng}&radius=${radius}`,
        )
    }

    useEffect(() => {
        panierService
            .getAll()
            .then(data => {
                console.log(data)
                setPaniers(data.panier)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className={styles.parent}>
            <div className={styles.child1}>
                <h1 className={`text text-center ${styles.h1}`}>Choisissez un panier</h1>
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
                        <Modal />
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}
