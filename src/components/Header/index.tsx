import styles from "./Header.module.scss"
import home from "../../media/svg/home.svg"
import youtube from "../../media/svg/youtube.svg"
import github from "../../media/svg/github.svg"
import { Link } from "preact-router"

export function Header() {
    return (
        <header className={styles.header}>
            <Link href="/"><h1>Niklas Ziermann</h1></Link>
            <nav>
                <Link href="/"><img src={home} /></Link>
                <Link href="https://github.com/N-Ziermann" target="_blank"><img src={github} /></Link>
                <Link href="https://www.youtube.com/channel/UC18oah_ydLjqeCkAxNBNXXA" target="_blank"><img src={youtube} /></Link>
            </nav>
        </header>
    )
}