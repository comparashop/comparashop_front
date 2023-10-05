// import React, { useEffect } from "react"
// import styles from "./footer.module.scss"
// import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa"

// const Footer = () => {
//     return (
//         <footer className={styles.main}>
//             <div className={styles.content}>
//                 <div className={styles.col}>
//                     <div className={styles.title}>COMPARASHOP</div>
//                     <div className={styles.text}></div>
//                 </div>
//                 <div className={styles.col}>
//                     <div className={styles.title}>Engagement qualité</div>
//                     <span className={styles.text}></span>
//                     <span className={styles.text}>xxxxxxxxx</span>
//                     <span className={styles.text}>xxxxxxxxx</span>
//                     <span className={styles.text}>xxxxxxxxx</span>
//                     <span className={styles.text}></span>
//                     <span className={styles.text}></span>
//                 </div>
//                 <div className={styles.col}>
//                     <div className={styles.title}>Informations légales</div>
//                     <span className={styles.text}></span>
//                     <span className={styles.text}>Politique de confidentialité</span>
//                     <span className={styles.text}>Données personnelle & cookies</span>
//                     <span className={styles.text}>Préférences de cookiees</span>
//                     <span className={styles.text}>CGU</span>
//                     <span className={styles.text}>CGV</span>
//                 </div>
//                 <div className={styles.col}>
//                     <div className={styles.title}>Adresse et Contact</div>
//                     <div className={styles.item}>
//                         <FaMobileAlt />
//                         <div className={styles.text}>Téléphone : 01 41 20 69 57</div>
//                     </div>
//                     <div className={styles.item}>
//                         <FaLocationArrow />
//                         <div className={styles.text}>Adresse : xxxxxxx</div>
//                     </div>

//                     <div className={styles.item}>
//                         <FaEnvelope />
//                         <div className={styles.text}>E-mail : titrerncp@epsi.com</div>
//                     </div>
//                 </div>
//                 <div className={styles.bottombar}>
//                     <div className={styles.bottombarcontent}>
//                         <div className={styles.text}>
//                             ComparaShop CREATED BY © Victor, Baptiste, Agathe, Deborah and Melly
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     )
// }

// export default Footer
import React, { useEffect } from "react"
import styles from "./footer.module.scss"
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className={styles.main}>
            <div className={styles.content}>
                <div className={styles.colTitle}>
                    <div className={styles.text}></div>
                </div>
                <div className={styles.mainflex}>
                    <div className={styles.leftCol}>
                        <ul>
                            <li>
                                <Link className={styles.a} href="/">
                                    Information légales
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.a} href="/">
                                    Politique de Confidentialité
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.a} href="/">
                                    Données personnelle & cookies
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.a} href="/">
                                    Préférences de cookies
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.a} href="/">
                                    Engagements qualités
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.a} href="/">
                                    CGU
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.a} href="/">
                                    CGV
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.rightCol}>
                        <ul>
                            <h2 className={styles.a}>Adresse et contact</h2>
                            <div className={styles.item}>
                                <li>
                                    <FaMobileAlt />
                                    <a className={styles.a} href="tel:+33602099391">
                                        06 02 09 93 91
                                    </a>
                                </li>
                            </div>
                            <div className={styles.item}>
                                <li>
                                    <FaLocationArrow />
                                    20 Bis Jardin Boeildieux Puteaux
                                </li>
                            </div>

                            <div className={styles.item}>
                                <li>
                                    <FaEnvelope />
                                    <a
                                        className={styles.a}
                                        href="mailto:baptiste.ogerau@ecoles-epsi.net"
                                    >
                                        baptiste.ogerau@ecoles-epsi.net
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className={styles.bottombar}>
                    <div className={styles.bottomBarContent}>
                        <div className={styles.text}>
                            ComparaShop CREATED BY © Victor, Baptiste, Agathe, Deborah et Melly
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </footer>
    )
}

export default Footer
