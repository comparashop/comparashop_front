import React, { useEffect } from "react"
import styles from "./footer.module.scss"
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className={styles.main}>
            <div className={styles.content}>
                <div className={styles.col}>
                    <div className={styles.title}>COMPARASHOP</div>
                    <div className={styles.text}></div>
                </div>
                <div className={styles.col}>
                    <div className={styles.title}>Engagement qualité</div>
                    <span className={styles.text}></span>
                    <span className={styles.text}>xxxxxxxxx</span>
                    <span className={styles.text}>xxxxxxxxx</span>
                    <span className={styles.text}>xxxxxxxxx</span>
                    <span className={styles.text}></span>
                    <span className={styles.text}></span>
                </div>
                <div className={styles.col}>
                    <div className={styles.title}>Informations légales</div>
                    <span className={styles.text}></span>
                    <span className={styles.text}>Politique de confidentialité</span>
                    <span className={styles.text}>Données personnelle & cookies</span>
                    <span className={styles.text}>Préférences de cookiees</span>
                    <span className={styles.text}>CGU</span>
                    <span className={styles.text}>CGV</span>
                </div>
                <div className={styles.col}>
                    <div className={styles.title}>Adresse et Contact</div>
                    <div className={styles.item}>
                        <FaMobileAlt />
                        <div className={styles.text}>Téléphone : 01 41 20 69 57</div>
                    </div>
                    <div className={styles.item}>
                        <FaLocationArrow />
                        <div className={styles.text}>Adresse : xxxxxxx</div>
                    </div>

                    <div className={styles.item}>
                        <FaEnvelope />
                        <div className={styles.text}>E-mail : titrerncp@epsi.com</div>
                    </div>
                </div>
                <div className={styles.bottombar}>
                    <div className={styles.bottombarcontent}>
                        <div className={styles.text}>
                            ComparaShop CREATED BY © Victor, Baptiste, Agathe, Deborah and Melly
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
