import styles from '../styles/ItemLocalizadores.module.scss';

export default function ItemLocalizadores(props) {

    return (
        <div className={styles.item}>
            <div className={styles.container}>
                <img src={props.icone} alt="" />
                <p>{props.texto}</p>
            </div>
        </div>
    )
}