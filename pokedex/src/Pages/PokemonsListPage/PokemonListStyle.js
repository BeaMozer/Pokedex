import { styled } from "styled-components";

export const ListPage = styled.div`
  background-color: #5e5e5e;

  h1 {
    font-size: 4.8rem;
    font-family: "Poppins";
    color: #ffffff;
    padding-top: 6rem;
    padding-left: 4rem;
  }
`;

export const CardsPokemons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow: hidden;
`;
