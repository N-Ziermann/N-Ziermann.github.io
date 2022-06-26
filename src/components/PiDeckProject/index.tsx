import pideck from "../../media/pideck.png";
import styles from "./PiDeckProject.module.scss";

export function PiDeckProject() {
    return (
        <div className={styles.pideck}>
            <p>
                The PiDeck is a macro keyboard similar to the StreamDeck that allows you
                to execute macros from any device by just opening its webinterface and
                selecting actions you configure inside of the desktop interface.
            </p>
            <p>
                It is built in nodejs using React, Electron and Express
                and currently has one python dependency to execute key presses,
                because current node modules dont work well with multiple keyboard layouts.
            </p>
            <img src={pideck} />
        </div>
    );
}