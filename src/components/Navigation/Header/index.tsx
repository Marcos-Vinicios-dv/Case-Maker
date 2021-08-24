import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';

import logo from '../../../assets/images/logo.svg';
import { NavLinks } from '../NavLinks';
import { Container, ResponsiveSideBar } from './styles';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container>
      <img src={logo} alt="logo" />
      <NavLinks />

      <button type="button" onClick={() => setIsMenuOpen(true)}>
        <BiMenu />
      </button>

      <ResponsiveSideBar
        onClick={() => setIsMenuOpen(false)}
        isMenuOpen={isMenuOpen}
      >
        <aside>
          <button type="button" onClick={() => setIsMenuOpen(false)}>
            <IoClose />{' '}
          </button>
          <NavLinks />
        </aside>
      </ResponsiveSideBar>
    </Container>
  );
}

export default Header;

/*
<Link to="/">
        <img src={Logo} alt="Case Maker" />
      </Link>
      <div>
        <NavLinks>
          <ul>
            <li>
              <Home to="/" active={pathname}>
                HOME
              </Home>
            </li>
            <li>
              <Presets to="/">PRESETS</Presets>
            </li>
            <li>
              <Customizar to="/customizar" active={pathname}>
                CUSTOMIZAR
              </Customizar>
            </li>
          </ul>
        </NavLinks>

        <div>
          <Link to="/">
            <img src={SearchSVG} alt="Pesquisar" />
          </Link>

          <Link to="cart">
            {pathname === '/cart' ? (
              <img src={InCart} alt="No carrinho" />
            ) : (
              <img src={CartSVG} alt="Carrinho" />
            )}
          </Link>

          <Link to="perfil">
            {pathname === '/perfil' ? (
              <img src={InLogin} alt="No carrinho" />
            ) : (
              <img src={ProfileSVG} alt="Perfil" />
            )}
          </Link>
        </div>
      </div>
*/
