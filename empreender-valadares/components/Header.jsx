import styles from "../styles/Header.module.scss";
import Apresentacao from "../components/Apresentacao";
import Evento from "../components/Evento";
import Texto from "../components/Texto";

export default function Header() {
    return (
        <header className={styles.header}>
            <Apresentacao />
            <Evento 
                sobretitulo="Evento"
                titulo="EMPREENDER DIREITO"
                subtitulo="Aprenda Gestão, Marketing e Vendas no Direito."
            />
            <Texto 
                texto="O primeiro evento no Rio de Janeiro  que vai te ajudar a ter resultados na carreira jurídica e no seu escritório de advocacia."
                style={{ fontWeight: 'bold', textAlign: 'center', fontFamily: 'Helvetica', position: 'absolute', top: '16rem' }}
            />
        </header>
    );
}