import  React, {useState} from 'react';

import { Container, NavDiv, Navbar, Navlink } from './styles';

import Nav from 'react-bootstrap/Nav'

function Header() {
  const [activeItem, setActiveItem] = useState('/')

  return (
    <Container>
      <header>
        <img src='https://www.contra.it/wp-content/uploads/2015/08/container-158362_1280.png' alt='Easy-Harbor' />
        {/* <nav>
        <a a>Página inicial</a>
        <a>Tabela de operação</a>
      </nav> */}
        <NavDiv
          defaultActiveKey = {activeItem}
          onSelect={(selectedKey) => setActiveItem(selectedKey)}
        >
          <Nav.Item>
            <Navlink eventKey="/" >Página inicial</Navlink>
          </Nav.Item>
          <Nav.Item>
            <Navlink eventKey="operacao">Operação</Navlink>
          </Nav.Item>
        </NavDiv>
      </header>
    </Container>
  );
}

export default Header;
