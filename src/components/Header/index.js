import React, { useState } from 'react';

import { Container, NavDiv, Navbar, Navlink } from './styles';

import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav'

function Header() {
  return (
  <>
    <Container>
      <header>
        <img src='https://www.contra.it/wp-content/uploads/2015/08/container-158362_1280.png' alt="Ship's Watchman" />
        <NavDiv>
          <Navlink as={Link} to={"/"} >Página inicial</Navlink>
          <Navlink as={Link} to={'/operation'}>Operação</Navlink>
        </NavDiv>
      </header>
    </Container>
    </>
  );
}

export default Header;
