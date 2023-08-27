import { styled } from "styled-components";

export const Bg = styled.div`
  background-color: #5e5e5e;
  height: 100vh;
  overflow-y: hidden;

  h1 {
    font-family: "poppins";
    font-size: 4.8rem;
    font-weight: 700;
    color: #ffffff;
    margin-left: 4rem;
    margin-top: 2rem;
  }
`;

export const Card = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: ${(props) => props.color};
  margin: 2rem 2.5rem 0 2.5rem;
  border-radius: 3.7rem;
  position: relative;

  .images {
    display: flex;
    gap: 4rem;
    flex-direction: column;
    max-width: 18rem;
    margin: 2rem 0 2rem 8rem;
    img {
      background-color: #ffffff;
      border-radius: 0.8rem;
    }
  }

  .stats {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    margin-right: 10rem;
    background-color: #ffffff;
    border-radius: 1.2rem;
    height: 40rem;
    width: 30rem;
    padding: 3rem 0 0 3rem;

    h2 {
      font-size: 2.4rem;
      font-family: "poppins";
      font-weight: 700;
      padding-bottom: 2rem;
    }

    p {
      font-family: "poppins";
      color: gray;
      font-size: 1.6rem;
      line-height: 3rem;
    }
  }

  .information-moves {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    .infos {
      font-family: "inter";
      font-weight: 700;
      color: #ffffff;

      h2 {
        font-size: 4.8rem;
      }
      h3 {
        font-size: 1.6rem;
      }
    }

    .moves {
      background-color: #ffffff;
      border-radius: 1.2rem;
      height: 29rem;
      width: 30rem;

      h2 {
        font-family: "inter";
        font-weight: 700;
        color: black;
        font-size: 2.4rem;
        margin: 2rem;
      }

      p {
        border: dashed 1px gray;
        border-radius: 0.8rem;
        width: fit-content;
        font-size: 1.4rem;
        margin: 2rem;
        background-color: #ececec;
      }
    }

    .image {
      background-color: black;
    }
    img {
      width: 2rem;
    }
  }
`;
