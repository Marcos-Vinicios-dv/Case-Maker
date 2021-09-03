import { MdShoppingCart } from 'react-icons/md';
import { IoPersonSharp } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';

import { Container, StyledLink } from './styles';
import { useSelector } from 'react-redux';

import { UserState } from '../../../store/modules/user/reducer';
import { User } from '../../../services/hooks/useApi';

export const NavLinks = () => {
  const user = useSelector<UserState, User>((state) => state.user);
  const { pathname } = useLocation();

  const userName = user.nome.split(' ');

  return (
    <Container>
      <StyledLink to="/" exact="true" active={pathname === '/' ? 1 : 0}>
        Home
      </StyledLink>
      <StyledLink to="/customizar" active={pathname === '/customizar' ? 1 : 0}>
        Customizar
      </StyledLink>
      <div>
        <StyledLink to="/cart" active={pathname === '/cart' ? 1 : 0}>
          <span>Carrinho</span> <MdShoppingCart />
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
