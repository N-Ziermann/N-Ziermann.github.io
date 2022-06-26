import passwordManager from "../../media/passwordManager.png";
import styles from "./PasswordManagerProject.module.scss"

export function PasswordManagerProject() {
    return (
        <>
            <p>A self written passsword manager website that implements encryption algorithms similarly to how LastPass does it.</p>
            <p>There is no hosted example version, because I don't want people to use my learning project to store something as important as their passwords.</p>
            <p>But here is a screenshot of what it used to look like:</p>
            <img className={styles.screenshot} src={passwordManager} alt="Screenshot of the Password Manager" />
        </>
    );
}