import styles from "./LovePotionProject.module.scss"

export function LovePotionProject() {
    return (
        <div>
            <p>Love Potion is a jump and run made in a group of 4 people within a week.<br />
                It was made for the second Brackey's Game Jam and scored 23. place out of 325 entries.<br />
                I was the main programmer and only got assistance near the end to do some final bugfixing.</p>
            <iframe className={styles.game} src="https://i.simmer.io/@Salkiniklas/~a53ac414-c3eb-21cf-9885-37babd9eeb4f" />
        </div>
    );
}