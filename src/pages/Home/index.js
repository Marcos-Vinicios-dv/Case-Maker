import React from 'react';
import { Link } from 'react-router-dom';

import SlideDown from '../../assets/images/SlideDown.svg';

import { Container, PC, CustomButton, MainText } from './styles';
import Presets from '../Presets';
import Gabinetes from '../../components/Carousel/Gabinetes';

const Home = () => {
  return (
    <>
      <Container>
        <MainText>
          <span>
            <b>CUSTOMIZE</b> SUA MÁQUINA
          </span>
          <div>
            <p>
              Customize sua maquina com cores, camuflagens, adesivos dos mais
              diversos tipos e Leds de sua preferência.
            </p>
            <p>
              Basta clicar em algum desses modelos ou escolher um customizado
              por nós em Presets
            </p>
          </div>

          <Link to="/customizar">
            <CustomButton type="button">CUSTOMIZAR</CustomButton>
          </Link>
        </MainText>

        <PC>
          <Gabinetes />
        </PC>

        <img src={SlideDown} alt="Slide Down" />
      </Container>
      <Presets />
    </>
  );
};

export default Home;
