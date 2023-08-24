import { styled } from "styled-components";

export const Card = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5rem;
  margin: 5rem;

  .cards {
    border: 1px solid black;
    height: 15rem;
    width: 20rem;
  }
`;
