import styles from '../styles/Localizadores.module.scss'

export default function Localizadores(props) {

    return (
        <div className={styles.fundo}>
            <div className={styles.container}>
                <img src={props.icone} alt={props.alt} />
                <p className={styles.titulo}>{props.titulo}</p>
                <p className={styles.texto}>{props.texto}</p>
            </div>
        </div>
    )
}