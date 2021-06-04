import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../../assets/images/LogoEx.svg';
import SearchSVG from '../../assets/images/Search.svg';
import CartSVG from '../../assets/images/Cart.svg';
import InCart from '../../assets/images/InCart.svg';
import InLogin from '../../assets/images/InLogin.svg';
import ProfileSVG from '../../assets/images/Profile.svg';

import { Container, NavLinks, Home, Presets, Customizar } from './styles';

function Header() {
  const { pathname } = useLocation();

  return (
    <Container>
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
    </Container>
  );
}

export default Header;
