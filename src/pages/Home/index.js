import React from 'react';

import { Container, Image, About, Box } from './styles';

import perfil from '../../assets/perfil.jpg';

export default function Home() {
  return (
    <Container>
      <Image>
        <img src={perfil} alt="" />
      </Image>

      <About>
        <Box>
          <h1>Ai vai um resuminho sobre mim!</h1>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </Box>
      </About>
    </Container>
  );
}
