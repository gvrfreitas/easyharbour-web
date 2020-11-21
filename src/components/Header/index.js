import React, { useState } from 'react';

import { Container, NavDiv, Navbar, Navlink } from './styles';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Container>
        <header>
          <img src='https://www.contra.it/wp-content/uploads/2015/08/container-158362_1280.png' alt='Easy-Harbor' />
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
