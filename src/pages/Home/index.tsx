import { Link } from 'react-router-dom';

import Presets from '../Presets';

import { Container, InformationSection, LandingPage } from './styles';

const Home = () => {
  return (
    <>
      <Container>
        <LandingPage>
          <InformationSection>
            <h1>
              Crie um <span>Gabinete</span> <br />
              com seu próprio <span>Estilo</span>
            </h1>
            <p>
              Se divirta customizando sua máquina com cores, leds e skins ao seu
              gosto.
            </p>
            <Link to="/customizar">
              <button type="button">Customizar</button>
            </Link>
          </InformationSection>
        </LandingPage>
        <Presets />
      </Container>
    </>
  );
};

export default Home;
