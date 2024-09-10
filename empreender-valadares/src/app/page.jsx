import Texto from "../../components/Texto";
import Item from "../../components/Item";
import CardOK from "../../components/CardOK";
import styles from "../../styles/index.module.scss";
import CardNumeracao from "../../components/CardNumeracao";
import Wrapper from "../../components/Wrapper";
import Localizadores from "../../components/Localizadores";
import Botao from "../../components/Botao";
import Titulo from "../../components/Titulo";
import Evento from "../../components/Evento";
import Apresentacao from "../../components/Apresentacao";


export default function Home() {
  return (
    <main className={styles.conteudo}>
      <Wrapper style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} fundo="fundo2">
        <Apresentacao />
        <CardOK texto="Advogados autônomos que querem estruturar o seu escritório de forma eficiente."/>
        <CardNumeracao 
          numero="01"
          titulo="GESTÃO EFICIENTE DA CARREIRA, DO ESCRITÓRIO OU DA SUA ADVOCACIA"
          texto="Transforme sua advocacia em um sucesso com gestão estratégica, elevando sua carreira e escritório a novos patamares de eficiência."
        />
        <Localizadores 
          icone="/localizador.svg"
          alt="icone de localizador"
          titulo="Endereço"
          texto="Rio de Janeiro-RJ / Barra da Tijuca"
        />
        <Botao 
          texto="GARANTIR MEU INGRESSO AGORA" 
          href="https://www.sympla.com.br/evento/empreender-direito/2616937?share_id=whatsapp" 
        />
        <Titulo 
          titulo="PARA QUEM É O EVENTO?"
          cor="titulo-claro"
        />
        <Item 
          texto="Está farto de depender de indicações para encontrar clientes?"
        />
        <Evento 
          sobretitulo="Evento"
          titulo="EMPREENDER DIREITO"
          subtitulo="Aprenda Gestão, Marketing e Vendas no Direito."
        />
        <Texto 
          texto="O primeiro evento no Rio de Janeiro  que vai te ajudar a ter resultados na carreira jurídica e no seu escritório de advocacia."
          style={{ fontWeight: 'bold', textAlign: 'center', }}
        />
        <Texto 
          texto="VOCÊ VAI APRENDER COM A DRA. FERNANDA VALADARES E CONVIDADOS:"
          style={{ textAlign: 'center', fontFamily: 'Bebas Neue, sans-serif', }}
        />

      </Wrapper>
    </main>
  );
}
