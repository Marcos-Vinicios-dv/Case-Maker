import { useEffect, useState } from 'react';
import { IoPersonSharp, IoCartSharp } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';

import { Container, StyledLink } from './styles';
import { useSelector } from 'react-redux';

import { User } from '../../../services/hooks/useUser';
import { IState } from '../../../store';
import { ICartItem } from '../../../store/modules/cart/types';

export const NavLinks = () => {
  const user = useSelector<IState, User>((state) => state.user);
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);
  const [currentCase, setCurrentCase] = useState('0');
  const { pathname } = useLocation();

  const userName = user.nome.split(' ');

  useEffect(() => {
    const storageCase = localStorage.getItem('@caseMaker:case');
    if (storageCase) {
      setCurrentCase(JSON.parse(storageCase));
    }
  }, [pathname]);

  return (
    <Container>
      <StyledLink to="/" exact="true" active={pathname === '/' ? 1 : 0}>
        Home
      </StyledLink>
      <StyledLink
        to={`/customizar/${currentCase}`}
        active={pathname.includes('/customizar') ? 1 : 0}
      >
        Customizar
      </StyledLink>
      <div>
        <StyledLink to="/cart" active={pathname === '/cart' ? 1 : 0}>
          <span>Carrinho</span> <IoCartSharp />{' '}
          {cart.length > 0 && <div>{cart.length}</div>}
        </StyledLink>
        <StyledLink
          to="/login"
          active={pathname === '/login' || pathname === '/perfil' ? 1 : 0}
        >
          <span>{user.nome ? userName[0] : 'login'}</span> <IoPersonSharp />
        </StyledLink>
      </div>
    </Container>
  );
};
