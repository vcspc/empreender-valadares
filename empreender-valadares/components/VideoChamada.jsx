'use client';
import styles from "../styles/VideoChamada.module.scss";

export default function VideoChamada() {
  

  return (
    <div className={styles.container}>
      <iframe
        src="https://www.youtube.com/embed/5oBlO5DQUn0?si=iXOKFc6OPNQiIVwS"
        className={styles.video}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
