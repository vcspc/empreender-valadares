'use client';

import { useState } from 'react';
import styles from '../styles/FaqItem.module.scss';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className={styles.faqButton}
      >
        <img src={isOpen ? '/seta2.svg' : '/seta.svg'} alt="sinal de mais ou menos" />
        <span>{question}</span>
      </button>
      {isOpen && <p className={styles.answer}>{answer}</p>}
    </div>
  );
};

export default FaqItem;
