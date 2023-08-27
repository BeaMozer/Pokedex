import { styled } from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 4rem;
  align-items: center;
  height: 12rem;

  .return-button {
    button {
      font-size: 2.4rem;

      span {
        color: #1a1a1a;
        font-family: "poppins";
        text-decoration: underline;
      }
    }
  }

  .delete-button {
    button {
      color: #ffffff;
      background-color: #ff6262;
      font-family: "poppins";
      font-size: 1.6rem;
      width: 22.6rem;
      height: 5.7rem;
      border-radius: 0.8rem;
    }
  }
`;
