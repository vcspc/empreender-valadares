import styles from '../styles/Desconto.module.scss';

export default function Desconto (){
    return (
        <div className={styles.container}> 
            <div className={styles.caixa}>
                <p className={styles.texto}>INSCREVA-SE AGORA <br /><span>COM 50% DE DESCONTO PARA OS PRIMEIROS INSCRITOS.</span></p>
            </div>        
        </div>
    )
}