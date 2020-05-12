import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
`;
export const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h1`
  color: #fff;
  padding: 10px 0;
  text-align: center;
  border-bottom: 1px solid #ddd;
  width: 90%;
  margin: 0 auto;
`;
export const ContactCard = styled.ul`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 15px auto;

  li {
    width: 100%;
    padding: 8px 10px;
    margin: 2px 0;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 0px 5px 2px #05fd01;
    }

    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;

      svg {
        margin-right: 20px;
      }

      p {
        color: #fff;
        font-size: 20px;
      }
    }
  }
`;
