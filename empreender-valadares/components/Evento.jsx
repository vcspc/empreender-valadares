import styles from '../styles/Evento.module.scss'


export default function Evento(props) {

    return (
        <div className={styles.evento}>
            <div className={styles.container}>
                <p className={styles.sobretitulo}>{props.sobretitulo}</p>
                <p className={styles.titulo}>{props.titulo}</p>
                <p className={styles.subtitulo}>{props.subtitulo}</p>
            </div>
        </div>
    )
}