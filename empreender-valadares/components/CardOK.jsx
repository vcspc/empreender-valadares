import styles from '../styles/CardOK.module.scss'

export default function CardOK(props) {

    return (
        <div className={styles.container}>
            <img src="/ok_card.svg" alt="" />
            <div className={styles.card}>
                <p className={styles.texto}>{props.texto}</p>
            </div>
        </div>
    )
}