import preact from "preact";
import styles from "./Section.module.scss";

export interface SectionProps {
    children?: preact.VNode;
    title?: string;
    path?: string;
}

export function Section(props: SectionProps) {
    return (
        <div className={styles.section}>
            {props.title && <h2 className={styles.heading}>{props.title}</h2>}
            {props.children}
        </div>
    )
}