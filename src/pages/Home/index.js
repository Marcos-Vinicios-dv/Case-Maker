import React from 'react';

import SlideDown from '../../assets/images/SlideDown.svg'

import { Container, PC, CustomButton, MainText} from './styles';
import Presets from '../Presets';
import Carousel  from './Carousel/Carousel';
import { useSelector } from 'react-redux';

function Home() {

  const gabinete = useSelector(state => state.customizar)

  function customizarGabinete(gabinete) {
    console.log(gabinete);
  }
  return (
    <>
      <Container>
        <MainText>
          <span><b>CUSTOMIZE</b> SUA MÁQUINA</span>  
          <div>
            <p>
              Customize sua maquina com cores, camuflagens, adesivos dos mais 
              diversos tipos e Leds de sua preferência.
              </p>
              <p>
              Customize você mesmo ou escolha entres algumas predefinições 
              criadas por nós.  
              </p>   
          </div> 

          <CustomButton type="button" onClick={() => customizarGabinete(gabinete)}>
            CUSTOMIZAR
          </CustomButton>    
        </MainText>

        <PC>
          <Carousel/>
        </PC>     
        
        <img src={SlideDown} alt="Slide Down"/>
      </Container>
      <Presets/>
    </>
  );
}

export default Home;