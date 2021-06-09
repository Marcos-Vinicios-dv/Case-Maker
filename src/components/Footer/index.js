import React from 'react';
import { Container } from './styles';

import Logo from '../../assets/images/Logo.svg';

export default function Footer() {
  return (
    <Container>
      <section>
        <img src={Logo} alt="" width="100px" />
      </section>
      <section>
        <h3>Desenvolvedores</h3>
        <p>Marcos Vinicios teixeira</p>
        <p>Nadson Cardoso do Nascimento</p>
        {/* <p>Maykon Rodrigo Henrique</p>
        <p>Andrei Gonçalves</p> */}
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
