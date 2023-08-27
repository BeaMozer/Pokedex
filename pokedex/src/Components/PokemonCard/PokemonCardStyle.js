import { styled } from "styled-components";

export const Cards = styled.main`
  padding: 4rem 0 0 4rem;
  position: relative;
`;

export const Card = styled.div`
  background-color: ${(props) => props.color};
  width: 44rem;
  height: 21rem;
  border-radius: 0.8rem;
  color: #ffffff;

  .container-card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-left: 2.3rem;
  }

  .infos {
    padding-top: 2.5rem;
    p {
      font-family: "inter";
      font-size: 1.6rem;
    }

    h2 {
      font-family: "inter";
      font-size: 3.2rem;
      padding-bottom: 5px;
    }

    button {
      font-family: "poppins";
      font-size: 1.6rem;
      text-decoration: underline;
      padding-top: 3.9rem;
    }

    .types {
      display: flex;
      gap: 7px;
    }
  }

  .pokemon-capture {
    display: flex;
    flex-direction: column-reverse;
    /* background-color: black; */

    .images {
      position: absolute;
      top: -0.5rem;
      /* right: -0.3rem; */

      .image-pokemon {
        img {
          max-height: 19.3rem;
          width: 19.3rem;
        }
      }
    }

    button {
      background-color: #ffffff;
      width: 14.6rem;
      height: 3.8rem;
      color: #0f0f0f;
      font-family: "Poppins";
      font-size: 1.6rem;
      font-weight: 400;
      border-radius: 0.8rem;
      margin-left: 2rem;
    }
  }
`;

export const PokemonType = styled.img`
  max-width: 100%;
  height: 3.2rem;
  border-radius: 0.8rem;
  border: 1px dashed #ffffff;
`;

export const Pokeball = styled.img`
  /* background-color: black; */
  min-width: 20.5rem;
  position: absolute;
  top: 4.5rem;
  right: 1rem;
`;
