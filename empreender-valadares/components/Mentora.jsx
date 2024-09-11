import styles from '../styles/Mentora.module.scss'
import Link from 'next/link'

export default function Mentora(props) {
    return (
        <div className={styles.container}>
            <div className={styles.mentora}>
                <p className={styles.titulo}>QUEM VAI SER SUA MENTORA?</p>
                <p className={styles.texto}>Você vai aprender com a Advogada e Mentora Fernanda Valadares. Sócia do Escritório Valadares e Fueta Advogados.</p>
                <p className={styles.texto}>Com mais de 15 anos de experiência no setor jurídico, Fernanda Valadares já mentorou diversos advogados que precisavam de um caminho mais claro para o sucesso na sua carreira jurídica.</p>
                <div className={styles.botao}>
                <Link href="https://www.instagram.com/valadaresefueta.adv?igsh=MmZhZmx5b2Nibnly" >
                    <div className={styles.botao} >
                        <img src="/instagram_azul.svg" alt="" className={styles.icone} />
                        <p>valadaresefueta.adv</p>
                    </div>
                </Link>
                </div>
                <img src="/mentora.svg" alt="" />
            </div>
        </div>
    )
}