import styles from '../styles/Localizadores.module.scss';

export default function Localizadores(props) {
  // Quebramos o texto em linhas e adicionamos <br /> entre elas
  const textoComQuebra = props.texto.split('\n').map((linha, index) => (
    <span key={index}>
      {linha}
      <br />
    </span>
  ));

  return (
    <div className={styles.fundo}>
      <div className={styles.container}>
        <img src={props.icone} alt={props.alt} />
        <p className={styles.titulo}>{props.titulo}</p>
        <p className={styles.texto}>{textoComQuebra}</p>
      </div>
    </div>
  );
}
