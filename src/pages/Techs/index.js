import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';

import {
  Container,
  List,
  Title,
  Description,
  Content,
  ListItem,
  Icon,
} from './styles';

export default function Techs() {
  return (
    <Container>
      <List>
        <ListItem title="react">
          <Title>ReactJs</Title>
          <Content>
            <Description>
              O React é uma biblioteca JavaScript de código aberto com foco em
              criar interfaces de usuário em páginas web, apesar de ter apenas 6
              meses de experiencia com a tecnologia ja desenvolvi bastante
              projetos com a ferramenta.
            </Description>
            <Icon>
              <FaReact size={50} color="#117ACB" />
            </Icon>
          </Content>
        </ListItem>

        <ListItem title="node">
          <Title>Node.js</Title>
          <Content>
            <Description>
              Node.js é um interpretador de JavaScript assíncrono com código
              aberto orientado a eventos focado em migrar a programação do
              Javascript do cliente para os servidores, Tenho bastante afinidade
              com Node.js e me sinto confortavel em criar qualquer serviço com a
              ferramenta, 06 meses de experiencia.
            </Description>
            <Icon>
              <FaNodeJs size={50} color="green" />
            </Icon>
          </Content>
        </ListItem>

        <ListItem title="javascript">
          <Title>JavaScript</Title>
          <Content>
            <Description>
              JavaScript é uma linguagem de programação interpretada
              estruturada, de script em alto nível com tipagem dinâmica fraca e
              multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das
              três principais tecnologias da World Wide Web, 1 ano de
              experiencia.
            </Description>
            <Icon>
              <DiJavascript1 size={50} color="yellow" />
            </Icon>
          </Content>
        </ListItem>

        <ListItem title="reactnative">
          <Title>React Native</Title>
          <Content>
            <Description>
              React Native é uma biblioteca Javascript criada pelo Facebook. É
              usada para desenvolver aplicativos para os sistemas Android e IOS
              de forma nativa, sempre me perguntava como eram feito os apps que
              usamos no celular nessa busca encontrei o react native e apesar de
              nao ter o total dominio da ferramenta estou na busca de me
              aprimorar cada dia mais, 06 meses de experiencia.
            </Description>
            <Icon>
              <FaReact size={50} color="#1144EA" />
            </Icon>
          </Content>
        </ListItem>

        <ListItem title="html">
          <Title>HTML 5</Title>
          <Content>
            <Description>
              HTML é uma linguagem de marcação utilizada na construção de
              páginas na Web, meu primeiro contato com o desenvolvimento web, 1
              ano de experiencia.
            </Description>
            <Icon>
              <FaHtml5 size={50} color="#FD5001" />
            </Icon>
          </Content>
        </ListItem>

        <ListItem title="css">
          <Title>CSS 3</Title>
          <Content>
            <Description>
              Cascading Style Sheets é um mecanismo para adicionar estilo a um
              documento web, a beleza encanta os olhos de quem a ve e com css
              tudo fica mais estiloso, 1 ano de experiencia.
            </Description>
            <Icon>
              <FaCss3 size={50} color="#0399EF" />
            </Icon>
          </Content>
        </ListItem>
      </List>
    </Container>
  );
}
