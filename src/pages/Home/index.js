import React from 'react';

import SlideDown from '../../assets/images/SlideDown.svg'
import Pc from '../../assets/images/Pc.svg';

import { Container, PC, CustomButton, MainText} from './styles';
import Presets from './Presets';

function Home() {
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
              Customize você mesmo ou escolha entres algumas predefinições criadas por nós.  
              </p>   
          </div> 

          <CustomButton type="button">CUSTOMIZAR</CustomButton>    
        </MainText>

        <PC>
          <img src={Pc} alt="pc"/>
        </PC>     
        
        <img src={SlideDown} alt="Slide Down"/>
      </Container>
      <Presets/>
    </>
  );
}

export default Home;