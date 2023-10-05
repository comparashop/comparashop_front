import React from "react"
import { AiOutlineLogout } from "react-icons/ai"
import styles from "./header.module.scss"
import Logo from "../../public/3.png"
import Image from "next/image"
import Button from "../body/button/button"
import { useRouter } from "next/router"
import Link from "next/link"

const Header = () => {
    const router = useRouter()

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="Bouton pour revenir à l'accueil"
                        width={100}
                        height={100}
                    />
                </Link>
            </div>

            <nav>
                <ul className={styles.mainNav}>
                    <li>
                        <Link href="/informations">SCANNER MON TICKET</Link>
                    </li>
                    <li>
                        <Link href="/">MON COMPTE</Link>
                    </li>
                    <li>
                        <Link href="/">PARAMETRE</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
