import styles from '../styles/Botao.module.scss';
import Link from 'next/link';

export default function Botao(props) {

    return (
        <Link href={props.href} className={styles.botao}>{props.texto}</Link>
    )
}