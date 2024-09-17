import styles from '../styles/Titulo.module.scss';

export default function Titulo(props) {
    return (
        <div className={styles.container}>
            <h2 style={props.style} className={styles[props.cor]}>{props.titulo}</h2>
        </div>
    )
}