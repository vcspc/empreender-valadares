import styles from '../styles/CardOK.module.scss'

export default function CardOK() {

    return (
        <div className={styles.container}>
            <img src="/ok_card.svg" alt="" />
            <p>Advogados autônomos que querem estruturar o seu escritório de forma eficiente.</p>
        </div>
    )
}