import styles from '../styles/Item.module.scss';

export default function Item(props) {

    return (
        <div className={styles.item}>
            <div className={styles.container}>
                <img src="/ok.svg" alt="" />
                <p>{props.texto}</p>
            </div>
        </div>
    )
}