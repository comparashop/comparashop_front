import React from "react"
import { AiOutlineLogout } from "react-icons/ai"
import styles from "./header.module.scss"
import Logo from "../../public/designPreview.png"
import Image from "next/image"

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.menu}>
                <ul className={styles.ul}>
                    <Image className={styles.image} src={Logo} alt="logo" />
                    <AiOutlineLogout
                        size={30}
                        color="#61dafb"
                        onClick={() => {
                            // logout()
                        }}
                        className={styles.logout}
                    />
                </ul>
            </nav>
        </header>
    )
}

export default Header
