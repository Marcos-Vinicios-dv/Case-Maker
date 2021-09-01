import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import logo from '../../../assets/images/logo.svg';
import { NavLinks } from '../NavLinks';
import { Container, ResponsiveSideBar } from './styles';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
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
