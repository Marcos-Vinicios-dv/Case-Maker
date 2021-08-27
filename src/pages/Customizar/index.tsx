// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
import { isMobile } from 'react-device-detect';

import { FaBrush, FaPalette } from 'react-icons/fa';
import { HiLightBulb } from 'react-icons/hi';
import { AlertMobile } from '../../components/AlertMobile';
import { Container, ContainerMenu, MenuOptions, MenuContent } from './styles';
// import BarraDeMenu from '../../components/Customizar/BarraDeMenu';
// import ConteudoMenu from '../../components/Customizar/ConteudoMenu';
// import Renderizacao from '../../components/Customizar/Renderizacao';

const Customizar = () => {
  // const gabinete = useSelector((state) => state.customizar);
  // const [option, setOption] = useState('cores');
  // const [renderizar, setRenderizar] = useState(null);

  // function selectOption(currentOption) {
  //   setOption(currentOption);
  // }

  // useEffect(() => {
  //   if (gabinete.id === undefined) {
  //     toast.warning('Selecione um gabinete na Tela Principal');
  //   }
  // }, [gabinete]);

  return (
    <>
      <Container>
        {isMobile ? (
          <AlertMobile />
        ) : (
          <>
            <section>pc</section>
            <ContainerMenu>
              <MenuOptions>
                <button type="button">
                  <FaPalette />
                </button>
                <button type="button">
                  <FaBrush />
                </button>
                <button type="button">
                  <HiLightBulb />
                </button>
              </MenuOptions>
              <MenuContent>
                <span>Cores</span>

                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>

                <button type="button">
                  <span>Adicionar</span> ao carrinho
                </button>
              </MenuContent>
            </ContainerMenu>
          </>
        )}
      </Container>
    </>
  );
};

export default Customizar;
