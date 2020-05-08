import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Navigation, List, Image } from './styles';

export default function Header() {
  return (
    <Container>
      <Image>Logo</Image>

      <Navigation>
        <List>
          <li>
            <Link to="/">Sobre</Link>
          </li>

          <li>
            <Link to="/techs">Tecnologias</Link>
          </li>

          <li>
            <Link to="/projects">Projetos</Link>
          </li>

          <li>
            <Link to="/contacts">Contato</Link>
          </li>
        </List>
      </Navigation>
    </Container>
  );
}
