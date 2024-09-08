import styles from '../styles/CardNumeracao.module.scss'

export default function CardNumeracao (props){
   
    return (
        <div className={styles.fundo}>
            <div className={styles.container}>
                <div className={styles.faixa}>
                    <p>{props.numero}</p>
                </div>
                <p className={styles.titulo}>{props.titulo}</p>
                <p className={styles.texto}>{props.texto}</p>
            </div>
        </div>
    )
}