import styles from '../styles/Desconto.module.scss';

export default function Desconto (){
    return (
        <div className={styles.container}> 
            <div className={styles.caixa}>
                <p className={styles.texto}>INSCREVA-SE AGORA <span>COM 50% DE DESCONTO.</span></p>
            </div>        
        </div>
    )
}