import styled from 'styled-components';

interface CardProps {

}

export const Cards = styled.div<CardProps>`
  width: 300px;
  height: 100px;
  background-color: #D9D9D9;
  border-radius: 15px;
  margin: 25px;
  margin-left: 75px;
  transition: box-shadow 0.2s ease-in-out;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  position: relative;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.75);
  }
`;

export const Titulo = styled.div`
  width: 80%;
  height: 25px;
  background-color: rgb(101, 187, 187);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  color: black;
  text-align: center;
  font-size: large;
`;

export const Icone = styled.img`
  width: 40px;
  height: 40px;
  opacity: 0;
  position: absolute;
  bottom: 0;
  right: 0;
`;

