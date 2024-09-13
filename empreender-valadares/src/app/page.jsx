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
import Mentora from "../../components/Mentora";
import Desconto from "../../components/Desconto";
import Preco from "../../components/Preco";
import Header from "../../components/Header";
import ItemLocalizadores from "../../components/ItemLocalizadores";

export default function Home() {
  return (
    <main className={styles.conteudo}>
      <>
        <Wrapper style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} fundo="fundo3"  >
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
            icone="/calendario.svg"
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

        <Wrapper style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} fundo="fundo2"  >
          <Titulo 
            titulo="EM UM GRUPO EXCLUSIVO"
            cor="titulo-claro"
            style={{ marginBottom: '0rem', marginTop: '2rem', }}
          />
          <Titulo 
            titulo="VOCÊ VAI APRENDER COM A DRA. FERNANDA VALADARES E CONVIDADOS:"
            cor="titulo-claro"
            style={{ textAlign: 'center', fontFamily: 'Bebas Neue, sans-serif', marginBottom: '2rem', marginTop: '0.6rem', lineHeight: '20px', width: '80%', }}
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
          
        </Wrapper>
          <Localizadores 
            icone="/localizador.svg"
            alt="icone de localizador"
            titulo="Endereço"
            texto="Rio de Janeiro-RJ / Barra da Tijuca"
          />
          
          
          
          
          <Mentora />
          <Desconto />
          <Preco 
            preco1="499"
            centavos1=",90"
            preco2="249"
            centavos2=",90"
          />
      </>
    </main>
  );
}
