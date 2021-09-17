import React from 'react';
import { Container } from './styles';

import logoExtends from '../../assets/images/logoExtends.svg';

export default function Footer() {
  return (
    <Container>
      <img src={logoExtends} alt="Logo" />
      <section>
        <h3>Desenvolvedores</h3>
        <p>Marcos Vinicios Teixeira</p>
        <p>Nadson Cardoso do Nascimento</p>
        <p>Luiz Felipe Pio</p>
      </section>
      <section>
        <h3>Suporte</h3>
        <p>(19) 9 9653-2478</p>
        <p>casemaker.tcc@gmail.com</p>
        <p>Reclame Aqui</p>
      </section>
    </Container>
  );
}
