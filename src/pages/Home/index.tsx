import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import { isMobile } from 'react-device-detect';

import { Slider } from '../../components/Slider';
import Presets from '../Presets';

import { Container, InformationSection, LandingPage } from './styles';

const Home = () => {
  const [selectedCaseId, setSelectedCaseId] = useState(() => {
    const storageCaseId = localStorage.getItem('@caseMaker:case');

    if (storageCaseId) {
      return JSON.parse(storageCaseId);
    }

    return '0';
  });

  function handleSelectCase(caseId: string) {
    setSelectedCaseId(caseId);

    const serialCaseId = JSON.stringify(caseId);

    localStorage.setItem('@caseMaker:case', serialCaseId);
  }

  return (
    <>
      <Container>
        <LandingPage>
          <IoIosArrowDown />
          <InformationSection>
            <h1>
              Crie um <span>Gabinete</span> <br />
              com seu próprio <span>Estilo</span>
            </h1>
            <p>
              Clique sobre uma das opções {isMobile ? 'abaixo' : 'ao lado'} para
              selecionar o gabinete.
            </p>
            <Link to={`/customizar/${selectedCaseId}`}>
              <button type="button">Customizar</button>
            </Link>
          </InformationSection>
          <Slider
            selectedCaseId={selectedCaseId}
            onSelectedCaseId={handleSelectCase}
          />
        </LandingPage>
        <Presets />
      </Container>
    </>
  );
};

export default Home;
