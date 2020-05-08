import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px auto;
  width: 100%;
  padding: 0 30px;
`;
export const About = styled.div`
  position: relative;
  width: 80%;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #05fd01;
    z-index: 1;
    transform: skew(0.7deg, 0.7deg);
  }
`;

export const Image = styled.div`
  margin-right: 30px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 500px;
    z-index: 2;
  }

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #05fd01;
    z-index: 1;
    transform: skew(0.7deg, 0.7deg);
  }
`;
export const Box = styled.div`
  position: absolute;
  z-index: 2;
  background: #191920;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #fff;
    margin-bottom: 20px;
    letter-spacing: 2px;
  }

  p {
    color: #fff;
    text-align: justify;
    line-height: 20px;
    font-size: 1rem;
  }
`;
