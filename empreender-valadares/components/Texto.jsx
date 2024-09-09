import styles from '../styles/Texto.module.scss';

export default function Texto(props) {
    return (
        <div className={styles.texto} style={{ ...props.style }}>
            <p>{props.texto}</p>
        </div>
    )
   
}
