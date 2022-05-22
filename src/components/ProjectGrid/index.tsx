import styles from "./ProjectGrid.module.scss";
import { CategoryImage } from "../CategoryImage";
import gbFishing from "../../media/gbfishing.png"
import pideck from "../../media/pideck.png"
import passman from "../../media/passwordManager.png"
import nesColor from "../../media/nesColor.png"
import lovepotion from "../../media/lovepotion.png"
import code from "../../media/code.jpg"
import { Link } from "preact-router"

export function ProjectGrid() {
    return (
        <div className={styles.grid}>
            <Link href="/project/passwordManager">
                <CategoryImage image={passman} title="Password Manager" />
            </Link>
            <Link href="/project/piDeck">
                <CategoryImage image={pideck} title="PiDeck" />
            </Link>
            <Link href="/project/colorPicker">
                <CategoryImage image={nesColor} title="NES Color Picker" />
            </Link>
            <Link href="/project/lovePotion">
                <CategoryImage image={lovepotion} title="LovePotion" />
            </Link>
            <Link href="/project/nikscript">
                <CategoryImage image={code} title="Nikscript" />
            </Link>
            <Link href="/project/gameboyFishing">
                <CategoryImage image={gbFishing} title="Gameboy Fishing" />
            </Link>
        </div>
    )
}