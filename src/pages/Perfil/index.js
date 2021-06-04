import React, { useState } from 'react';

import Engrenagem from '../../assets/images/Engrenagem.svg';

import { Container, ToggleSection, FormSection } from './styles';
import Login from './Forms/Login/login';
import Cadastrar from './Forms/Cadastrar/cadastrar';

const Perfil = () => {
  const [section, setSection] = useState({ cadastrar: false, login: false });

  function alternarSection(section) {
    if (section === 'Cadastrar') {
      setSection({ cadastrar: true, login: false });
    }
    if (section === 'Login') setSection({ cadastrar: false, login: true });
  }
  return (
    <Container>
      <ToggleSection cadastrar={section.cadastrar} login={section.login}>
        <div>
          <strong>
            Customize sua <span>MÁQUINA</span>!
          </strong>
          <button type="button" onClick={() => alternarSection('Cadastrar')}>
            Cadastre-se
          </button>
        </div>
        <img src={Engrenagem} alt="" width="450px" />
        <div>
          <strong>
            Já possui uma conta? Basta<span> Logar</span>
          </strong>
          <button type="button" onClick={() => alternarSection('Login')}>
            Login
          </button>
        </div>
      </ToggleSection>

      <FormSection cadastrar={section.cadastrar} login={section.login}>
        {section.cadastrar ? <Cadastrar /> : <Login />}
      </FormSection>
    </Container>
  );
};

export default Perfil;
