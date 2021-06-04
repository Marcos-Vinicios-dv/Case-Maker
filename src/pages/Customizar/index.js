import React, { useEffect, useState } from 'react';

import Return from '../../assets/images/Return.svg';
import Paleta from '../../assets/images/Paleta.svg';
import Brush from '../../assets/images/Brush.svg';
import Bandage from '../../assets/images/Bandage.svg';
import Led from '../../assets/images/Led.svg';

import { Container, CustomizeMenu, MenuContent, PC } from './styles';
import H200 from './Gabinetes/H200';
import CougarDarkblader from './Gabinetes/CougarDarkblader';
import AigoDarkflash from './Gabinetes/AigoDarkFlash';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const cores = [
  {
    cor: '#6ECC4D',
  },
  {
    cor: '#4DCC80',
  },
  {
    cor: '#CC4D4D',
  },
  {
    cor: '#CC4D6B',
  },
  {
    cor: '#CC7A4D',
  },
  {
    cor: '#C9CC4D',
  },
  {
    cor: '#4D59CC',
  },
  {
    cor: '#4D9ECC',
  },
  {
    cor: '#4DC4CC',
  },
  {
    cor: '#7D4DCC',
  },
  {
    cor: '#664DCC',
  },
  {
    cor: '#BA4DCC',
  },
];

const Customizar = () => {
  const [cor, setCor] = useState(null);
  const gabinete = useSelector(state => state.customizar);

  useEffect(() => {
    if (gabinete.id === '') {
      toast.warning('Selecione um gabinete na tela principal!');
    }
  }, [gabinete]);

  function getCor(cor) {
    setCor(cor);
    console.log(cor);
  }

  const setAtributo = t => {
    t.setAttribute('fill', cor);
  };

  return (
    <Container>
      <img src={Return} alt="" />

      <CustomizeMenu>
        <ul>
          <li>
            <img src={Paleta} alt="" />
          </li>
          <li>
            <img src={Brush} alt="" />
          </li>
          <li>
            <img src={Bandage} alt="" />
          </li>
          <li>
            <img src={Led} alt="" />
          </li>
        </ul>
      </CustomizeMenu>

      <MenuContent>
        <ul>
          {cores.map(cor => (
            <div>
              <li
                style={{ backgroundColor: cor.cor }}
                onClick={() => {
                  getCor(cor.cor);
                }}
              ></li>
            </div>
          ))}
        </ul>

        <button type="button">APLICAR</button>
      </MenuContent>

      <PC>
        {gabinete.id === '' && <></>}
        {gabinete.id === 0 && <H200 setColor={setAtributo} />}
        {gabinete.id === 1 && <AigoDarkflash setColor={setAtributo} />}
        {gabinete.id === 2 && <CougarDarkblader setColor={setAtributo} />}
      </PC>
    </Container>
  );
};

export default Customizar;
