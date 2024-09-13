import styles from "../styles/Wrapper.module.scss";

export default function Wrapper({ children, style, fundo, imagem }) {
    return (
      <div className={styles[fundo]} style={{ display: 'flex', alignItens: 'center', justifyContent: 'center', ...style }}>
        {children}
        <img className={styles.imagem} src={imagem} alt="" />
      </div>
    );
  }
  