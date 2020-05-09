import styled from 'styled-components';

// eslint-disable-next-line consistent-return
function borderColor(title) {
  if (title === 'react') {
    return '#117ACB';
  }

  if (title === 'node') {
    return 'green';
  }

  if (title === 'javascript') {
    return 'yellow';
  }

  if (title === 'reactnative') {
    return '#1144EA';
  }

  if (title === 'html') {
    return '#FD5001';
  }

  if (title === 'css') {
    return '#0399EF';
  }
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const List = styled.ul`
  width: 80%;
  margin: 30px auto 100px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h2`
  color: #fff;
  width: 100%;
`;
export const Description = styled.p`
  color: #fff;
  width: 90%;
`;

export const ListItem = styled.li`
  border-left: 3px solid ${({ title }) => borderColor(title)};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  height: 100px;
  display: flex;
  flex-direction: column;
  padding: 10px;

  & + li {
    margin-top: 20px;
  }
`;
export const Icon = styled.div`
  padding: 10px;
`;
