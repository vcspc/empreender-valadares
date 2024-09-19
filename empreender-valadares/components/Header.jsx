import styles from "../styles/Header.module.scss";
import Apresentacao from "../components/Apresentacao";
import Evento from "../components/Evento";
import Texto2 from "../components/Texto2";

export default function Header() {
    return (
        <header className={styles.header}>
            <Apresentacao />
            <Evento 
                sobretitulo="Evento"
                titulo="EMPREENDER DIREITO"
                subtitulo="by Fernanda Valadares"
                estilo="evento"
            />
            <Texto2
                texto="Aprenda Gestão, Marketing e Vendas no Direito."
                style={{ textAlign: 'center', fontFamily: 'Helvetica', }}
                classe="texto"
            />
            <Texto2
                texto="O primeiro evento no Rio de Janeiro  que vai te ajudar a ter resultados na carreira jurídica e no seu escritório de advocacia."
                style={{ textAlign: 'center', fontFamily: 'Helvetica', }}
                classe="texto2"
            />

        </header>
    );
}