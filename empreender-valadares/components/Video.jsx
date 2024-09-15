import styles from "../styles/Video.module.scss";

export default function Videfirsto(props) {

    const videoUrl = `${props.video}?autoplay=0`;

    return (
        <div className={styles.container}>
            <iframe  className={styles.video} src={videoUrl} title={props.titulo} frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{aspectRatio: '16/9'}}></iframe>
            <p className={styles.texto}>{props.texto}</p>          
        </div>
    )
}