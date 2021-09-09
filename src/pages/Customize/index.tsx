import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { FaBrush, FaPalette } from 'react-icons/fa';
import { HiLightBulb } from 'react-icons/hi';

import { AlertMobile } from '../../components/AlertMobile';
import { RenderOptionInMenu } from '../../components/Customizar/RenderOptionMenu';
import H200 from '../../components/Customizar/Gabinetes/H200';
import CougarDarkblader from '../../components/Customizar/Gabinetes/CougarDarkblader';
import AigoDarkflash from '../../components/Customizar/Gabinetes/AigoDarkFlash';

import { Container, ContainerMenu, MenuOptions, MenuContent } from './styles';
import { useCustom } from '../../services/hooks/useCustom';

const Customizar = () => {
  const {
    renderCase,
    id,
    setMenuOption,
    handleAddToCart,
    handleSelectColor,
    handleSelectRenderCase,
    menuContent,
    menuOption,
    selectedColor,
  } = useCustom();

  useEffect(() => {
    const setColorOnElement = (element) => {
      element.setAttribute('fill', selectedColor);
    };
    const optionColorsIsSelected = menuOption === 'Cores';

    if (optionColorsIsSelected) {
      id === '6119b1834c7ee15efb75219d' &&
        handleSelectRenderCase(<H200 setCor={setColorOnElement} />);
      id === '6119b2574c7ee15efb75219e' &&
        handleSelectRenderCase(<CougarDarkblader setCor={setColorOnElement} />);
      id === '6119b2914c7ee15efb75219f' &&
        handleSelectRenderCase(<AigoDarkflash setCor={setColorOnElement} />);
    }
  }, [menuOption, id, selectedColor, handleSelectRenderCase]);

  return (
    <>
      <Container>
        {isMobile ? (
          <AlertMobile />
        ) : (
          <>
            <section>{renderCase}</section>
            <ContainerMenu>
              <MenuOptions>
                <button type="button" onClick={() => setMenuOption('Cores')}>
                  <FaPalette />
                </button>
                <button type="button" onClick={() => setMenuOption('Skins')}>
                  <FaBrush />
                </button>
                <button type="button" onClick={() => setMenuOption('Leds')}>
                  <HiLightBulb />
                </button>
              </MenuOptions>
              <MenuContent>
                <span>{menuOption}</span>

                <RenderOptionInMenu
                  option={menuOption}
                  menuContent={menuContent}
                  onSelectColor={handleSelectColor}
                  onSelectCase={handleSelectRenderCase}
                />

                <button type="button" onClick={handleAddToCart}>
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
