import React from 'react';

import {
  Container,
  ProjectCard,
  List,
  Title,
  Description,
  Links,
} from './styles';

export default function Project() {
  return (
    <Container>
      <ProjectCard>
        <List>
          <Title>Go Barber</Title>
          <Description>
            O Go Barber e uma aplicação para agendamento de serviços, construída
            desde o backend ao frontend seguindo as aulas do bootcamp da
            rocketseat, o backend foi feito com nodejs e o frontend com react.
          </Description>
          <Links>
            <a
              href="https://github.com/LuisCarlos-git/GoBarber_web"
              target="_blank"
              rel="noopener noreferrer"
            >
              GoBarber web
            </a>
            <a
              href="https://github.com/LuisCarlos-git/go_barber"
              target="_blank"
              rel="noopener noreferrer"
            >
              GoBarber beckend
            </a>
          </Links>
        </List>

        <List>
          <Title>YI-YU-GI-OH Pro deck</Title>
          <Description>
            Aplicação foi desenvolvida com Reactjs utilizando a Api YI-YU-GI-OH
            Pro deck consiste em uma aplicação de busca onde o usuario pesquisa
            um card do universo do YI-YU-GI-OH! vendo os detalhes do card e
            tendo a opção de adicina-lo aos favoritos e para otimizar os
            favoritos ficam salvos caso o usuario recarregue a pagina
          </Description>
          <Links>
            <a
              href="https://github.com/LuisCarlos-git/yi-yu-gi-oh-pro-deck"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repositorio no github
            </a>
          </Links>
        </List>

        <List>
          <Title>Marvel Hero</Title>
          <Description>
            Aplicação construida com Reactjs usando a Api Marvel developer a
            aplicação se resume eum um site de busca onde o usuario pesquisa o
            nome de um heroi do universo Marvel podendo ver as inumeras versões
            do heroi e todas as HQ`s que este esteve presente.
          </Description>
          <Links>
            <a
              href="https://github.com/LuisCarlos-git/Marvel-Hero"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repositorio no github
            </a>
          </Links>
        </List>

        <List>
          <Title>Search a movie</Title>
          <Description>
            Search Movie e uma aplicação para busca de filmes, usuario pesquisa
            o filme e ver a sinopse e o nivel de popularidade e como bonus ver
            os trailers do filme
          </Description>
          <Links>
            <a
              href="https://github.com/LuisCarlos-git/Search-movie"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repositorio no github
            </a>
          </Links>
        </List>

        <List>
          <Title>Projetos da semana Omnistack</Title>
          <Description>
            Participei da semana omnistack apartir da 8° edição e todos os
            projetos estão no meu github
          </Description>
        </List>
      </ProjectCard>
    </Container>
  );
}
