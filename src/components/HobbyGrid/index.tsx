import styles from "./HobbyGrid.module.scss";
import { CategoryImage } from "../CategoryImage";
import codeImage from "../../media/code.jpg"
import tinkerImage from "../../media/processor.jpg"
import tutorialImage from "../../media/learn.jpg"
import gamingmage from "../../media/gaming-pc.jpg"

export function HobbyGrid() {
    return (
        <div className={styles.grid}>
            <CategoryImage image={codeImage} title="Coding" />
            <CategoryImage image={gamingmage} title="Gaming" />
            <CategoryImage image={tinkerImage} title="Tinkering" />
            <CategoryImage image={tutorialImage} title="Making Tutorials" />
        </div>
    )
}