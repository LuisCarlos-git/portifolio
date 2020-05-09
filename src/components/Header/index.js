import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TopBarProgress from 'react-topbar-progress-indicator';

import { Container, Navigation, List } from './styles';

export default function Header() {
  const [load, setLoad] = useState(false);

  TopBarProgress.config({
    barColors: {
      '0': '#05fd01',
      '1.0': '#05fd01',
    },
    shadowBlur: 5,
  });

  function loading() {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 60);
  }

  return (
    <Container>
      {load && <TopBarProgress />}

      <Navigation>
        <List>
          <li>
            <Link onClick={loading} to="/">
              Sobre
            </Link>
          </li>

          <li>
            <Link onClick={loading} to="/techs">
              Tecnologias
            </Link>
          </li>

          <li>
            <Link onClick={loading} to="/projects">
              Projetos
            </Link>
          </li>

          <li>
            <Link onClick={loading} to="/contacts">
              Contatos
            </Link>
          </li>
        </List>
      </Navigation>
    </Container>
  );
}
