import styles from "../styles/Wrapper.module.scss";

export default function Wrapper({ children, style, fundo }) {
    return (
      <div className={styles[fundo]} style={{ display: 'flex', alignItens: 'center', justifyContent: 'center', ...style }}>
        {children}
      </div>
    );
  }
  