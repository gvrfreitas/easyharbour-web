import { React } from 'react';

import { Container } from './styles';

function Header() {
  return (
   <Container>
     <header>
       <img src='https://www.contra.it/wp-content/uploads/2015/08/container-158362_1280.png' alt='Easy-Harbor' />
      <nav>
        <a>Dashboard</a>
      </nav>
     </header>
   </Container>
  );
}

export default Header;
