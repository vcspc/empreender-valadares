import styles from '../styles/Preco.module.scss';

export default function Preco (props) {
    return (
        <div className={styles.fundo}>
            <div className={styles.texto}>
                <div className={styles.preco1}>
                    <p className={styles.de}>De</p>
                    <div className={styles.numeros1}>
                        <p className={styles.numeros1__cifrao}>R$</p>
                        <p className={styles.numeros1__maior}>{props.preco1}</p>
                        <p className={styles.numeros1__centavos}>{props.centavos1}</p>
                    </div>
                </div>
                <div className={styles.preco2}>
                    <p className={styles.por}>por</p>
                    <div className={styles.numeros2}>
                        <p className={styles.numeros2__cifrao}>R$</p>
                        <p className={styles.numeros2__maior}>{props.preco2}</p>
                        <p className={styles.numeros2__centavos}>{props.centavos2}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}