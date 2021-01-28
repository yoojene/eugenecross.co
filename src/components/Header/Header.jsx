import React, { useContext } from 'react';
import { Container, Navbar } from 'react-bootstrap';
// import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import LogoImg from '../Image/LogoImg';

const Header = () => {
  const { header } = useContext(PortfolioContext);

  const { logoImg, logoUrl } = header;

  return (
    <header id="header">
      <Container>
        <Navbar sticky="top">
          <a target="_blank" rel="noopener noreferrer" href={logoUrl}>
            <LogoImg alt="" filename={logoImg} />
          </a>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
