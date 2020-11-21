import React, { useState } from 'react';

import { Container, NavDiv, Navbar, Navlink } from './styles';

import { Link } from 'react-router-dom';

import Logo from '../../assents/Logo.png';

function Header() {
  return (
    <>
      <Container>
        <header>
          <img src={Logo} alt="Ship's Watchman" />
          <NavDiv>
            <Navlink as={Link} to={"/"} >Home</Navlink>
            <Navlink as={Link} to={'/dashboard'}>Dashboard</Navlink>
          </NavDiv>
        </header>
      </Container>
    </>
  );
}

export default Header;
