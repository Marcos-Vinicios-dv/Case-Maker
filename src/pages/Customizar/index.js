import React from 'react';

import Return from '../../assets/images/Return.svg';
import Paleta from '../../assets/images/Paleta.svg';
import Brush from '../../assets/images/Brush.svg';
import Bandage from '../../assets/images/Bandage.svg';
import Led from '../../assets/images/Led.svg';

import { Container, CustomizeMenu, MenuContent, PC } from './styles';

function Customizar() {
  return (
    <Container>
      <img src={Return} alt="" />

      <CustomizeMenu>
        <ul>
          <li><img src={Paleta} alt="" /></li>
          <li><img src={Brush} alt="" /></li>
          <li><img src={Bandage} alt="" /></li>
          <li><img src={Led} alt="" /></li>
        </ul>
      </CustomizeMenu>

      <MenuContent>
        <div>
          <button type="button">APLICAR</button>
        </div>
      </MenuContent>

      <PC>

      </PC>
    </Container>
  );
}

export default Customizar;