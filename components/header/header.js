// import React from "react"
// import { AiOutlineLogout } from "react-icons/ai"
// import styles from "./header.module.scss"
// import Logo from "../../public/designPreview.png"
// import Image from "next/image"

// const Header = () => {
//     return (
//         <header className={styles.header}>
//             <nav className={styles.menu}>
//                 <ul className={styles.ul}>
//                     <Image className={styles.image} src={Logo} alt="logo" />
//                     <AiOutlineLogout
//                         size={30}
//                         color="#61dafb"
//                         onClick={() => {
//                             // logout()
//                         }}
//                         className={styles.logout}
//                     />
//                 </ul>
//             </nav>
//         </header>
//     )
// }

// export default Header
import React from "react"
import { AiOutlineLogout } from "react-icons/ai"
import styles from "./header.module.scss"
import Logo from "../../public/designPreview.png"
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
                        width={80}
                        height={80}
                    />
                </Link>
            </div>

            <nav>
                <ul className={styles.mainNav}>
                    <li>
                        <Link href="/informations">Scanner mon ticket</Link>
                    </li>
                    <li>
                        <Link href="/">Mon compte</Link>
                    </li>
                    <li>
                        <Link href="/">Paramêtres</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
