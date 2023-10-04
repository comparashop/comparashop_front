import styles from "./index.module.scss"
import Modal from "../components/body/modal/modal"

export default function Home() {
    return (
        <div>
            <h1 className="text text-center">Choisissez un panier</h1>
            <div className={styles.mainmodal}>
                <div className={styles.modal}>
                    <Modal />
                    <Modal />
                    <Modal />
                </div>
            </div>
        </div>
    )
}
