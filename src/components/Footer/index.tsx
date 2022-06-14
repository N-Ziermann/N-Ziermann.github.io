import styles from "./Footer.module.scss"
import { Link } from "preact-router"

export function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© Niklas Ziermann</p>
            <Link href="/contact">Contact</Link>
        </footer>
    )
}