import styles from "./Header.module.scss"


export function Header() {
    return (
        <header className={styles.header}>
            <h1>Niklas Ziermann</h1>
            <nav>
                <a href="/">Home</a>
                <a href="#">Contact</a>
                <a href="#">Github</a>
                <a href="#">YouTube</a>
            </nav>
        </header>
    )
}