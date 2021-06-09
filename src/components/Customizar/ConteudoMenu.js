import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import api from '../../services/api';
import GetNewId from '../../services/idServices';

import H200 from './Gabinetes/H200';
import Aigo from './Gabinetes/AigoDarkFlash';
import Cougar from './Gabinetes/CougarDarkblader';

const ListaItens = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 20px;
  place-items: center;
  place-content: center;

  div {
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0px 10px 12px rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.3s ease-in-out;

    &:hover {
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2);
      transform: translateY(-3px);
    }

    li {
      height: 40px;
      width: 40px;
      list-style: none;
      border-radius: 2px;

      cursor: pointer;
    }
  }
`;

const ConteudoMenu = ({
  children: gabinete,
  option = 'cores',
  setRenderizacao = null,
}) => {
  const { camuflagens = [], adesivos = [], leds = [], id = -1 } = gabinete;
  const [cores, setCores] = useState([]);
  const [corSelecionada, setCorSelecionada] = useState('#333333');

  useEffect(() => {
    const source = axios.CancelToken.source();
    const cancelToken = source.token;

    async function carregarCores() {
      const response = await api.get('cores', { cancelToken });
      const data = response.data.map(c => ({ ...c }));

      setCores(data);
    }
    carregarCores();

    return () => {
      source.cancel();
    };
  }, []);

  useEffect(() => {
    const setCorElement = element => {
      element.setAttribute('fill', corSelecionada);
    };
    const coresEstaSelecionada = option === 'cores';

    if (coresEstaSelecionada) {
      id === 0 && setRenderizacao(<H200 setCor={setCorElement} />);

      id === 1 && setRenderizacao(<Aigo setCor={setCorElement} />);

      id === 2 && setRenderizacao(<Cougar setCor={setCorElement} />);
    }
    return () => {
      setRenderizacao(null);
    };
  }, [corSelecionada, id, option, setRenderizacao]);

  switch (option) {
    case 'cores':
      return (
        <ListaItens>
          {cores.map(cor => (
            <div key={GetNewId()}>
              <li
                style={{ backgroundColor: cor.cor }}
                onClick={() => setCorSelecionada(cor.cor)}
              ></li>
            </div>
          ))}
        </ListaItens>
      );

    case 'camuflagens':
      return (
        <ListaItens>
          {camuflagens.map(camuflagem => (
            <div
              key={GetNewId()}
              onClick={() => setRenderizacao('camuflagem.camuflagemAplicada')}
            >
              <li>
                {camuflagem.camuflagem}
                {camuflagem.name}
              </li>
            </div>
          ))}
        </ListaItens>
      );

    case 'adesivos':
      return (
        <ListaItens>
          {adesivos.map(adesivo => (
            <div
              key={GetNewId()}
              onClick={() => setRenderizacao('camuflagem.camuflagemAplicada')}
            >
              <li>
                {adesivo.adesivo}
                {adesivo.name}
              </li>
            </div>
          ))}
        </ListaItens>
      );

    case 'leds':
      return (
        <ListaItens>
          {leds.map(led => (
            <div
              key={GetNewId()}
              onClick={() => setRenderizacao('camuflagem.camuflagemAplicada')}
            >
              <li>{led.cor}</li>
            </div>
          ))}
        </ListaItens>
      );

    default:
      break;
  }
};

export default ConteudoMenu;
