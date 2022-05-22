import styles from "./CategoryImage.module.scss";
import classNames from "classnames";

export interface CategoryImageProps {
    image: string;
    title: string;
    className?: string;
    onClick?: () => void;
}

export function CategoryImage(props: CategoryImageProps) {
    return (
        <div className={classNames(styles.wrapper, props.className)} onClick={props.onClick}>
            <img src={props.image} />
            <h2>{props.title}</h2>
        </div>
    )
}