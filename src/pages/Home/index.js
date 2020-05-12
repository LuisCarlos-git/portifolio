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
            &nbsp;&nbsp;&nbsp;&nbsp;Olá, meu nome é Luis Carlos, tenho 19 anos
            comecei na área de tecnologias tem mais ou menos dois anos, antes
            disso meu contato basicamente era só no celular até que terminei meu
            ensino médio e fui fazer curso técnico de agricultura no Instituto
            federal de ciência e tecnologia do tocantins aqui no campus da minha
            cidade, lá conheci muita gente inclusive o pessoal do curso de
            informática e sinceramente foi amor à primeira vista só de ver o
            pessoal falar já me encantava então resolvi trocar de curso e fui
            para informática la tive meu primeiro contato com a programação na
            aula de lógica usávamos Portugol e eu me achava um deus por
            conseguir resolver alguns algoritmos, depois do portugol veio python
            e bem odiei essa linguagem não me pergunte porque mas nao me dei bem
            com ela minha sorte foi a monitoria lá conheci meu mentor que me
            apresentou o HTML e eu gostei demais de fazer meu primeiro hello
            world ali desse ponto pra frente já sabia o que eu queria e segui em
            frente aprendi HTML, CSS, JavaScript, depois de aprender o básico
            que eu precisava meu mentor me apresentou o Reactjs, React Native e
            o Nodejs e me abriu portas para dar os primeiros passos e depois de
            muito estudo e noites em claro me senti pronto pra sair a busca da
            minha primeira oportunidade de emprego na área de desenvolvedor
            junior.
          </p>
        </Box>
      </About>
    </Container>
  );
}
