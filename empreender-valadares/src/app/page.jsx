

import Image from "next/image";
import CardOK from "../../components/CardOK";
import styles from "../../styles/index.module.scss";
import CardNumeracao from "../../components/CardNumeracao";
import Wrapper from "../../components/Wrapper";
import Localizadores from "../../components/Localizadores";
import Botao from "../../components/Botao";
import Titulo from "../../components/Titulo";

export default function Home() {
  return (
    <main className={styles.conteudo}>
      <Wrapper style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} fundo="fundo2">
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

      </Wrapper>
    </main>
  );
}
