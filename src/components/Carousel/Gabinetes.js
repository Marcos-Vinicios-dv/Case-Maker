import { useEffect, useState } from 'react';
import Carousel from 'react-grid-carousel';
import api from '../../services/api';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { MyDot } from './Elements';
import Verify from '../../assets/images/Verify.svg';
import { selecionarGabinete } from '../../store/modules/customizar/actions';
import { Container } from './styles';

const Gabinetes = () => {
  const [gabinetesCustom, setGabinetesCustom] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const source = axios.CancelToken.source();
    const cancelToken = source.token;
    async function carregarGabinetesCustom() {
      const response = await api.get('customizaveis', { cancelToken });

      const data = response.data.map(gabinete => ({
        ...gabinete,
        isSelected: false,
      }));
      setGabinetesCustom(data);
    }
    carregarGabinetesCustom();
    return () => {
      source.cancel();
    };
  }, []);

  function selectItem(id) {
    let atualGabinetesCustom = [...gabinetesCustom];

    atualGabinetesCustom.forEach(gabinete => {
      if (gabinete.id === id) {
        gabinete.isSelected = true;
      } else {
        gabinete.isSelected = false;
      }
    });

    setGabinetesCustom(atualGabinetesCustom);
    dispatch(selecionarGabinete(atualGabinetesCustom[id]));
  }

  return (
    <>
      <Carousel dot={MyDot} cols={1} rows={1} gap={100} loop hideArrow showDots>
        {gabinetesCustom.map(gabinete => (
          <Carousel.Item key={gabinete.id}>
            <Container onClick={() => selectItem(gabinete.id)}>
              {gabinete.isSelected ? (
                <div>
                  <img src={Verify} alt="Selecionado" />
                </div>
              ) : null}
              <img width="80%" src={gabinete.imagem} alt={gabinete.nome} />
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default Gabinetes;
