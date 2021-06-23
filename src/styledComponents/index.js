import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Btn = styled.button`
  display: inline-block;
  padding: 10px 30px;
  cursor: pointer;
  background: grey;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin: 10px;
`;

export const Card = styled.div`
  background-color: #e6f7ff;
  border-radius: 10px;
  color: #333;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 20px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  width: 150px;
  height: 130px;
  overflow: hidden;
`;

export const Dash = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  color: #333;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  max-width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Nav = styled.nav`
  color: #fff;
  height: 70px;
  display: flex;
  justify-content: center;
  width: 80%
  margin: auto;
`;

export const NavUl = styled.ul`
  display: flex;
  justify-content: center;
  padding: 10px 30px;
  background: #f0f5f5;
  color: #fff;
  border: none;
  border-radius: 5px;
  list-style: none;
  width: 80%;
  margin: auto;
`;

export const NavLi = styled.li`
  margin-right: 50px;
  padding: 10px;
  cursor: pointer;
  background: grey;
  color: #fff;
  border: none;
  border-radius: 5px;
`;

export const Search = styled.input`
  font-size: 1.5em;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  min-width: 150px;
  width: 100%;
  margin: auto;
  margin-left: 10px;
  outline: none;

  &:focus {
    background: #e6f7ff;
  }
`;

export const SearchDiv = styled.div`
  position; relative;
  width: 80%;
  margin: auto;
  padding: 0px;
  display: flex;
`;

export const IconDiv = styled.div`
  margin-top: 10px;
  position: absolute;
  font-size: 1.2em;
  margin-left: 15px;
  cursor: pointer;
  z-index: 100;
`;

export const YellowDiv = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: ${(props) => props.inputColor || 'palevioletred'};
  background: yellow;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: red; // <Thing> when hovered
  }
`;
