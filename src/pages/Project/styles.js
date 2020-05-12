import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;
export const ProjectCard = styled.ul`
  width: 80%;
  margin: 20px auto 80px;

  display: flex;
  flex-direction: column;
`;
export const List = styled.li`
  width: 100%;
  padding: 20px;
  margin: 20px 0 0;
  color: #fff;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;

  border-left: 3px solid #05fd01;
  border-bottom: 3px solid #05fd01;
`;

export const Title = styled.h1`
  color: #fff;
  margin: 0 0 10px;
`;
export const Description = styled.div`
  font-size: 16px;
  color: #fff;
  text-align: justify;
`;

export const Links = styled.div`
  padding: 15px 0 0;

  a {
    margin-right: 20px;
    color: #fff;
    transition: color 0.3s;
    border-bottom: 1px solid #eee;

    &:hover {
      color: #05fd01;
    }
  }
`;
