import styles from '../styles/Texto2.module.scss';

export default function Texto2(props) {
    return (
        <div className={styles[props.classe]} style={{ ...props.style }}>
            <p>{props.texto}</p>
        </div>
    )
   
}
