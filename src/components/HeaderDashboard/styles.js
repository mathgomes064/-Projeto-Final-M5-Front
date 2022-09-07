import styled from "styled-components";

export const ContainerHeader = styled.header`
  background-color: var(--color-primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .userInfo {
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .userInfo > .imgUser {
    width: 55px;
    margin-left: 10px;
  }

  .userInfo > div {
    margin-left: 10px;
  }

  .userInfo > div > h2 {
    font-weight: 600;
    font-family: "Inter";
    font-size: 20px;
    line-height: 29px;
    color: var(--white);
  }

  .userInfo > div > p {
    font-size: 12px;
    color: var(--white);
  }

  .sectionNavegation > img {
    display: none;
  }

  .navegation {
    width: 320px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navegation > .divInput {
    width: 190px;
    height: 35px;
    background-color: var(--white);
    border-radius: 7px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .navegation > .divInput > input {
    outline: 0;
    height: 35px;
    width: 80%;

    &::placeholder {
      color: var(--color-primary);
    }
  }

  .glass {
    color: var(--color-primary);
  }

  @media screen and (min-width: 700px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;

    .userInfo {
      margin-right: 10px;
    }

    .sectionNavegation {
      display: flex;
      justify-content: space-between;
    }

    .sectionNavegation > img {
      display: block;
    }

    .navegation {
      margin-left: 10px;
    }
  }
`;
