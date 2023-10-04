import React, { useEffect, useState } from "react"
import Input from "../components/body/input/input"
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
        <div>
            <h1 className="text text-center">
                Entrez les informations de votre panier ou scanner votre qrcode
            </h1>
            <div className={styles.button}>
                <Button
                    title="Scanner le ticket de caisse"
                    onClick={() => {
                        scanTicket()
                    }}
                    className="btn btn-link"
                />
            </div>
            <div className={styles.main}>
                <div className={styles.col1}>
                    <Input
                        label="Nom de l'aliment"
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
                    <div className={styles.col2}>
                        {listAliment ? (
                            <div>
                                <h1 className={styles.h1}>Liste</h1>
                                <div className={styles.box}>
                                    <AiFillEnvironment color="#ffffff" size={20} />
                                    <Geobis setAd={setLocalization} ad={localization} />
                                </div>
                                <table className={styles.table}>
                                    <thead>
                                        <tr>
                                            <th className={styles.p}>Aliment</th>
                                            <th className={styles.p}>Prix</th>
                                            <th className={styles.p}>Supprimer</th>
                                        </tr>
                                    </thead>
                                    <tbody className={styles.tbody}>
                                        <tr>
                                            {listAliment.map(element => (
                                                <div
                                                    className={styles.divmap}
                                                    key={element.aliment}
                                                >
                                                    <p className={styles.td}>{element.aliment}</p>
                                                    <p className={styles.td}>
                                                        {element.prix} euros
                                                    </p>
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
                                        </tr>
                                    </tbody>
                                </table>
                                <br />
                                <div className={styles.button2}>
                                    <Button
                                        title="Valider"
                                        onClick={() => {
                                            sendInfo()
                                        }}
                                        className="btn btn-white"
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
