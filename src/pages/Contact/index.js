import React from 'react';
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import { Container, Card, Title, ContactCard } from './styles';

export default function Contact() {
  return (
    <Container>
      <Card>
        <Title>
          Obrigado pela visita! <br />
          Abaixo estão alguns contatos
        </Title>
        <ContactCard>
          <li>
            <a
              href="https://www.linkedin.com/in/luis-carlos-bastos-0a7327195/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={25} color="#FFF" />
              <p>Luis Carlos</p>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/LuisCarlos-git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={25} color="#FFF" />
              <p>LuisCarlos-git</p>
            </a>
          </li>

          <li>
            <a
              href="https://api.whatsapp.com/send?phone=5563992764606"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={25} color="#FFF" />
              <p>+55 63 992764606</p>
            </a>
          </li>

          <li>
            <a
              href="https://www.facebook.com/luiscarlos.bastos.98"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={25} color="#FFF" />
              <p>Luis Carlos Bastos</p>
            </a>
          </li>

          <li>
            <a
              href="https://www.gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail size={25} color="#FFF" />
              <p>luiscarlosbastos1107@gmail.com</p>
            </a>
          </li>
        </ContactCard>
      </Card>
    </Container>
  );
}
