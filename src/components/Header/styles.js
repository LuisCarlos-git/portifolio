import styled from 'styled-components';

export const Container = styled.div`
  background: none;
  height: 65px;
  width: 100%;
  padding: 0 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
`;
export const Navigation = styled.div``;
export const List = styled.ul`
  display: flex;
  flex-direction: row;

  li {
    margin-right: 20px;
    background: none;
    padding: 20px;
    height: 30px;
    width: 160px;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      position: relative;
      padding: 10px 30px;
      width: 100%;
      color: #fff;
      font-size: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 10px;
        border-top: 2px solid #05fd01;
        border-left: 2px solid #05fd01;
        transition: 0.3s;
      }

      &:hover::before {
        width: 100%;
        height: 100%;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 10px;
        height: 10px;
        border-bottom: 2px solid #05fd01;
        border-right: 2px solid #05fd01;
        transition: 0.3s;
      }

      &:hover::after {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
export const Image = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 2rem;
`;
