'use client'

import styles from '../styles/Apresentacao.module.scss';


/* export default function Apresentacao(props) {

    return (
        
        <div className={styles.gradiente}>
            <img src="/cabecalho.png" alt="" />
        </div>
        
    )
} */

// ImageComponent.js
import React, { useEffect, useState } from 'react';

const Apresentacao = () => {
  // Estado para armazenar o src da imagem
  const [imageSrc, setImageSrc] = useState('/cabecalho.png');

  useEffect(() => {
    // Função para alterar o src da imagem com base na largura da tela
    const updateImageSrc = () => {
      if (window.innerWidth >= 1024) {
        setImageSrc('/cabecalho_largo.svg'); // Imagem para telas maiores que 1024px
      } else {
        setImageSrc('/cabecalho.png'); // Imagem para telas menores que 1024px
      }
    };

    // Chama a função uma vez para definir o estado inicial
    updateImageSrc();

    // Adiciona o event listener para monitorar a mudança de tamanho da tela
    window.addEventListener('resize', updateImageSrc);

    // Remove o event listener ao desmontar o componente
    return () => {
      window.removeEventListener('resize', updateImageSrc);
    };
  }, []);

  return (
    <div className="gradiente">
      <img
        className="imagem"
        src={imageSrc}
        alt="Cabeçalho"
      />
    </div>
  );
};

export default Apresentacao;
