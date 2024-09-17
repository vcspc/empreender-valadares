import Item from "../../components/Item";
import CardOK from "../../components/CardOK";
import styles from "../../styles/index.module.scss";
import CardNumeracao from "../../components/CardNumeracao";
import Wrapper from "../../components/Wrapper";
import Localizadores from "../../components/Localizadores";
import Botao from "../../components/Botao";
import Titulo from "../../components/Titulo";
import Evento from "../../components/Evento";
import Mentora from "../../components/Mentora";
import Desconto from "../../components/Desconto";
import Preco from "../../components/Preco";
import Header from "../../components/Header";
import ItemLocalizadores from "../../components/ItemLocalizadores";
import Texto from "../../components/Texto";
import Video from "../../components/Video";
import PerguntasFrequentes from "../../components/PerguntasFrequentes";
import Footer from "../../components/Footer";


export default function Home() {
  return (
    <main className={styles.conteudo}>
      <>
        <Wrapper style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', }} fundo="fundo3"  >
          <Header />
          <Item 
            texto="Está farto de depender de indicações para encontrar clientes?"
          />
          <Item 
            texto="Quer montar um escritório bem-sucedido e eficiente?"
          />
          <Item 
            texto="Quer saber o segredo do sucesso de grandes empreendedores?"
          />
          <Botao 
            texto="GARANTIR MEU INGRESSO AGORA" 
            href="https://www.sympla.com.br/evento/empreender-direito/2616937?share_id=whatsapp" 
          />
          <ItemLocalizadores 
            texto="Dia 09 de novembro."
            icone="/calendario.svg"
          />
          <ItemLocalizadores 
            texto="Das 09h às 18h."
            icone="/relogio.svg"
          />
          <ItemLocalizadores 
            texto="Rio de Janeiro-RJ."
            icone="/localizador.svg"
            style={{ width: '0.5rem', height: '0.5rem', }}
          />
          <Titulo 
            titulo="PARA QUEM É O EVENTO?"
            cor="titulo-claro"
          />
          <CardOK texto="Advogados autônomos que querem estruturar o seu escritório de forma eficiente."/>
          <CardOK texto="Advogados recém formados e que possuem a carteira da OAB mas não sabem empreender no direito."/>
          <CardOK texto="Sócios de escritórios de advocacia que querem impulsionar a gestão, as vendas e o marketing."/>
        </Wrapper>
        <Wrapper style={{ flexDirection: 'column', alignItems: 'center', width: '100%', }} fundo="fundo2"  >
          <Titulo 
            titulo="EM UM GRUPO EXCLUSIVO"
            cor="titulo-claro"
            style={{ marginBottom: '0rem', marginTop: '2rem', }}
          />
          <Titulo 
            titulo="VOCÊ VAI APRENDER COM A DRA. FERNANDA VALADARES E CONVIDADOS:"
            cor="titulo-claro"
            style={{ textAlign: 'center', fontFamily: 'Bebas Neue, sans-serif', marginBottom: '2rem', marginTop: '0.6rem', lineHeight: '20px', width: '80%', fontWeight: '400', }}
          />
          <CardNumeracao 
            numero="01"
            titulo="GESTÃO EFICIENTE DA CARREIRA, DO ESCRITÓRIO OU DA SUA ADVOCACIA"
            texto="Transforme sua advocacia em um sucesso com gestão estratégica, elevando sua carreira e escritório a novos patamares de eficiência."
          />
          <CardNumeracao 
            numero="02"
            titulo="DOMINE A ARTE DE VENDER OS SEUS SERVIÇOS"
            texto="conectando-se com clientes de forma autêntica e transformando cada interação em uma oportunidade de crescimento e sucesso para seu negócio."
          />
          <CardNumeracao 
            numero="03"
            titulo="MARKETING JURÍDICO"
            texto="Desvende os segredos do marketing jurídico e posicione sua advocacia como referência no mercado, atraindo clientes ideais com estratégias éticas, inovadoras e eficazes."
          />
          <CardNumeracao 
            numero="04"
            titulo="EMPREENDEDORISMO JURÍDICO"
            texto="Descubra como as técnicas do empreendedorismo jurídico podem te ajudar em sua carreira na advocacia e a gerenciar seu escritório."
          />
          <CardNumeracao 
            numero="05"
            titulo="CHEGA DE TEORIAS!"
            texto="Aprenda a advocacia na prática. Desde a captação do cliente até o fechamento e o pós-venda."
          />
          <CardNumeracao 
            numero="06"
            titulo="INTELIGÊNCIA ARTIFICIAL PARA ADVOGADOS"
            texto="Explore o futuro da advocacia com a inteligência artificial, potencializando sua prática jurídica com inovação, eficiência e soluções automatizadas."
          />
          <Titulo 
            titulo="ALÉM DE TUDO ISSO VOCÊ TERÁ:"
            cor="titulo-escuro"
            /* style={{ marginBottom: '0rem', marginTop: '2rem', }} */
          />
          <Texto 
            texto="Dicas de vestimenta, comunicação com o cliente, concorrência e Instagram."
            style={{ fontFamily: 'Helvetica, sans-serif', marginBottom: '2rem', marginTop: '0.6rem', width: '70%', }}
            classe="texto"
          />
        </Wrapper>
        <Wrapper style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', }} >
          <Titulo 
            titulo="SÃO MAIS DE 15 ANOS DE EXPERIÊNCIA JURÍDICA EM UM DIA INTEIRO DE TREINAMENTO!"
            cor="titulo-azul"
            style={{ marginBottom: '1rem', marginTop: '2rem', }}
          />
          <Mentora />
        </Wrapper>
        <Wrapper style={{ flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: '1.6rem' }} fundo="fundo4" >
          <Evento 
            sobretitulo="Evento"
            titulo="SUCESSO JURÍDICO"
            subtitulo="Aprenda Gestão, Marketing e Vendas no Direito."
            estilo="evento2"
          />
          <Localizadores 
            icone="/localizador.svg"
            alt="icone de localizador"
            titulo="Endereço"
            texto="Rio de Janeiro-RJ / Barra da Tijuca"
          />
          <Localizadores 
            icone="/calendario.svg"
            alt="icone de localizador"
            titulo="Programação"
            texto="09 de novembro das 09h00 às 18h00."
          />
        </Wrapper>
        <Wrapper style={{ flexDirection: 'column', alignItems: 'center', width: '100%', }} fundo="fundo5" >
          <Desconto />
          <Preco 
            preco1="499"
            centavos1=",90"
            preco2="249"
            centavos2=",90"
          />
          <Botao 
            texto="GARANTIR MEU INGRESSO AGORA" 
            href="https://www.sympla.com.br/evento/empreender-direito/2616937?share_id=whatsapp" 
          />
        </Wrapper>
        <Wrapper style={{ flexDirection: 'column', alignItems: 'center', width: '100%', }} fundo="fundo6" >
          <Titulo 
            titulo="VEJA O DEPOIMENTO DE ALGUNS DE SEUS MENTORADOS:"
            cor="titulo-escuro"
            style={{ alignSelf: 'center', textAlign: 'center', width: '85%', marginBottom: '1rem', marginTop: '2rem', lineHeight: '1.5rem', }}
          />
          <Video
            video="/depoimento_fernanda.mp4" 
            titulo="Depoimento Fernanda"
            texto="Depoimento Fernanda"
          />
          <Video
            video="/depoimento_patricia.mp4" 
            titulo="Depoimento Patrícia"
            texto="Depoimento Patrícia"
          />
          <Video
            video="/depoimento_helida.mp4" 
            titulo="Depoimento Hélida"
            texto="Depoimento Hélida"
          />
        </Wrapper>
        <Wrapper style={{ flexDirection: 'column', alignItems: 'center', width: '100%', }} fundo="fundo7" >
          <Texto 
            texto="Dominar apenas a teoria ensinada na faculdade não é suficiente para construir uma carreira e uma empresa sustentável e lucrativa em um mercado competitivo."
            style={{ fontFamily: 'Helvetica, sans-serif', marginBottom: '1rem', marginTop: '1rem', }}
            classe="texto2"
          />
          <Botao 
            texto="GARANTIR MEU INGRESSO AGORA" 
            href="https://www.sympla.com.br/evento/empreender-direito/2616937?share_id=whatsapp" 
          />
          <Titulo 
            titulo="PERGUNTAS FREQUENTES"
            cor="titulo-claro"
            style={{ alignSelf: 'center', textAlign: 'center', width: '85%', marginBottom: '1rem', marginTop: '2rem', lineHeight: '1.5rem', }}
          />
          <PerguntasFrequentes />
        </Wrapper>
        <Footer />   
      </>
    </main>
  );
}
