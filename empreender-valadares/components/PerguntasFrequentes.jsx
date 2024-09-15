import FaqItem from './FaqItem';
import styles from '../styles/PerguntasFrequentes.module.scss';
import Titulo from '../components/Titulo';

const PerguntasFrequentes = () => {
  const faqs = [
    { question: 'Onde será o evento?', answer: 'Será realizado na cidade do Rio de Janeiro na Barra da Tijuca.' },
    { question: 'Qual a data e os horários?', answer: 'O evento EMPREENDER DIREITO será no dia 09 de novembro de 2024 das 9h às 18h.' },
    { question: 'Qual o cronograma do evento?', answer: 'Será um dia de evento para te ensinar tudo que você precisa saber sobre Gestão, Marketing e Vendas na advocacia.' },
    { question: 'Posso pagar com cartão de crédito?', answer: 'Sim. Você pode parcelar em até 12x no cartão de crédito.' },
    { question: 'Está incluso alimentação no valor?', answer: 'Não está incluso a alimentação, mas teremos pausa para você almoçar.' },
    { question: 'Está incluso o valor de hospedagem?', answer: 'Não está incluso o valor da hospedagem.' },
    { question: 'Sobre o uso da minha imagem.', answer: 'Ao participar do evento, você concorda, obrigatoriamente, em ceder o uso da sua imagem em foto e vídeo que serão utilizados nas redes sociais e anúncios da Dra. Fernanda Valadares.' },
    { question: 'Troca de ingresso, cancelamento e não comparecimento.', answer: 'O ingresso é pessoal e intransferível, sendo assim, não é permitida a troca de titularidade. Não serão reembolsados ingressos com mais de 7 dias depois da data de compra. O não comparecimento será computado como no-show.' },
  ];

  return (
    <div /* style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem 0' }} */ className={styles.faqContainer} >
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default PerguntasFrequentes;
