import React, { useEffect, useState } from "react"
import Image from "next/image"
import Input from "../components/body/input/input"
import QRcode from "../public/qr-code-factice.png"
import Button from "../components/body/button/button"
import { AiOutlineClose, AiFillEnvironment } from "react-icons/ai"
import styles from "./informations.module.scss"
import Geobis from "../components/body/geobis/geobis"

const Informations = () => {
    const [aliment, setAliment] = useState("")
    const [price, setPrice] = useState("")
    const [listAliment, setListAliment] = useState([])
    const [visible, setVisible] = useState(false)
    const [localization, setLocalization] = useState({})

    useEffect(() => {
        console.log(listAliment)
    }, [listAliment])

    const sendInfo = () => {
        //envoyer les infos dans la base de données
    }

    const scanTicket = () => {
        //accéder à l'appareil photo du téléphone
    }

    return (
        <div className="mainContent">
            <h1 className={`text text-center ${styles.title}`}>
                Entrez les informations de votre panier <br />
                ou scanner votre CODE-QR
            </h1>
            <div className={styles.button}>
                <Button
                    title="Scanner votre ticket de caisse"
                    onClick={() => {
                        scanTicket()
                    }}
                    className={`btn btn-link ${styles.qrcode}`}
                >
                    <Image src={QRcode} height={80} width={80} />
                </Button>
            </div>
            <div className={styles.main}>
                <div className={styles.col}>
                    <Input
                        label="Nom de l'article"
                        onChange={e => {
                            setAliment(e.target.value)
                        }}
                        className="input input-form"
                    />
                    <br />
                    <Input
                        label="Prix de l'aliment"
                        onChange={e => {
                            setPrice(e.target.value)
                        }}
                        className="input input-form"
                    />
                    <br />
                    <Button
                        title="Ajouter"
                        onClick={() => {
                            setVisible(true)
                            setListAliment([...listAliment, { aliment: aliment, prix: price }])
                        }}
                        className="btn btn-grey"
                    />
                </div>
                {visible ? (
                    <div className={styles.col}>
                        {listAliment ? (
                            <div>
                                <h1 className={styles.h1}>{"Produits en cours d'ajout"}</h1>
                                <div className={styles.box}>
                                    <div>
                                        <AiFillEnvironment color="#ffffff" size={20} />
                                    </div>
                                    <div>
                                        <Geobis setAd={setLocalization} ad={localization} />
                                    </div>
                                </div>
                                <div>
                                    <ul className={styles.liMenu}>
                                        <li>
                                            <h2 className={styles.h2}>Article</h2>{" "}
                                            {listAliment.map(element => (
                                                <div
                                                    className={styles.divmap}
                                                    key={element.aliment}
                                                >
                                                    <p className={styles.td}>{element.aliment}</p>
                                                    <p className={styles.td}></p>

                                                    <br />
                                                </div>
                                            ))}
                                        </li>

                                        <li>
                                            <h2 className={styles.h2}>Prix</h2>{" "}
                                            {listAliment.map(element => (
                                                <div
                                                    className={styles.divmap}
                                                    key={element.aliment}
                                                >
                                                    <p className={styles.td}>{element.prix} €</p>

                                                    <br />
                                                </div>
                                            ))}
                                        </li>
                                        <li>
                                            <h2 className={styles.h2}>Supprimer</h2>{" "}
                                            {listAliment.map(element => (
                                                <div
                                                    className={styles.divmap}
                                                    key={element.aliment}
                                                >
                                                    <p className={styles.td}>
                                                        <Button
                                                            onClick={() => {
                                                                setListAliment(
                                                                    listAliment.filter(
                                                                        al => al != element,
                                                                    ),
                                                                )
                                                            }}
                                                            className={styles.button3}
                                                        >
                                                            <AiOutlineClose color="#424446" />
                                                        </Button>
                                                    </p>

                                                    <br />
                                                </div>
                                            ))}
                                        </li>
                                    </ul>
                                </div>

                                <br />
                                <div className={styles.button2}>
                                    <Button
                                        title="Valider"
                                        onClick={() => {
                                            sendInfo()
                                        }}
                                        className="btn btn-grey"
                                    />
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    )
}

export default Informations
