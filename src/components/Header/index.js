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
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/">Projetos</Link>
          </li>

          <li>
            <Link to="/">Contato</Link>
          </li>
        </List>
      </Navigation>
    </Container>
  );
}
