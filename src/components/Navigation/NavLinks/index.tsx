import { MdShoppingCart } from 'react-icons/md';
import { IoPersonSharp } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';

import { Container, StyledLink } from './styles';

export const NavLinks = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <StyledLink to="/" exact isActive={pathname === '/' ? 1 : 0}>
        Home
      </StyledLink>
      <StyledLink
        to="/customizar"
        isActive={pathname === '/customizar' ? 1 : 0}
      >
        Customizar
      </StyledLink>
      <div>
        <StyledLink to="/cart" isActive={pathname === '/cart' ? 1 : 0}>
          <MdShoppingCart />
        </StyledLink>
        <StyledLink to="/login" isActive={pathname === '/login' ? 1 : 0}>
          <IoPersonSharp />
        </StyledLink>
      </div>
    </Container>
  );
};
