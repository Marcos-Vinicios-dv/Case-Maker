import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import Return from '../../assets/images/Return.svg';

import { Container, CustomizeMenu, MenuContent, PC } from './styles';
import BarraDeMenu from '../../components/Customizar/BarraDeMenu';
import ConteudoMenu from '../../components/Customizar/ConteudoMenu';
import Renderizacao from '../../components/Customizar/Renderizacao';

const Customizar = () => {
  const gabinete = useSelector(state => state.customizar);
  const [option, setOption] = useState('cores');
  const [renderizar, setRenderizar] = useState(null);

  function selectOption(currentOption) {
    setOption(currentOption);
  }

  useEffect(() => {
    if (gabinete.id === undefined) {
      toast.warning('Selecione um gabinete na Tela Principal');
    }
  }, [gabinete]);

  return (
    <Container>
      <img src={Return} alt="" />

      <CustomizeMenu>
        <BarraDeMenu selectedOption={selectOption} />
      </CustomizeMenu>

      <MenuContent>
        <div>
          <ConteudoMenu option={option} setRenderizacao={setRenderizar}>
            {gabinete}
          </ConteudoMenu>
        </div>

        <button type="button">APLICAR</button>
      </MenuContent>

      <PC>
        <Renderizacao renderizacao={renderizar} />
      </PC>
    </Container>
  );
};

export default Customizar;
