import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: var(--background-color);
  display: flex;
  justify-content: center;
  align-items: center;

  .board {
    width: 90%;
    height: 80%;
    background-color: var(--white);
    border-radius: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div > .tittleImage {
    width: 50%;
    height: 100%;
    background-color: var(--color-primary);
    border-radius: 30px 0 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  div > .tittleImage > h1 {
    width: 74%;
    font-size: 32px;
    color: var(--white);
  }

  div > .tittleImage > img {
    width: 80%;
    height: 70%;
  }

  div > .logoForm {
    width: 50%;
    height: 100%;
    border-radius: 0 30px 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div > .logoForm > div {
    min-width: 100%;
    height: 100%;
    border-radius: 0 30px 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  div > .logoForm > div > img {
    width: 220px;
    height: 110px;
  }

  div > .logoForm > div > form {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  div > .logoForm > div > h1 {
    display: none;
  }

  div > .logoForm > div > form > label {
    height: 30px;
    display: flex;
    align-items: center;
  }

  div > .logoForm > div > form > .divPassword {
    width: 98%;
    height: 40px;
    background-color: var(--grey-3);
    padding: 0 0 0 10px;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    outline: 0;
  }

  div > .logoForm > div > form > .divPassword > .inputPassword {
    width: 90%;
    height: 100%;
    background-color: var(--grey-3);
    outline: 0;
  }

  div > .logoForm > div > form > .divPassword > .eye {
    padding-right: 10px;
  }

  div > .logoForm > div > form > span {
    color: red;
  }

  div > .logoForm > div > form > button {
    width: 100%;
    height: 40px;
    font-size: 20px;
    border: none;
    background-color: var(--color-primary);
    color: var(--white);
    padding: 0;
    margin-top: 10px;
    cursor: pointer;
  }

  div > .logoForm > div > form > button:hover {
    background-color: var(--color-primary-focus);
    transition: 144ms;
  }

  div > .logoForm > div > p {
    font-size: 14px;
  }

  div > .logoForm > div > p > button {
    border: none;
    background-color: var(--white);
    color: var(--color-primary);
    cursor: pointer;
  }

  div > .logoForm > div > p > button:hover {
    color: var(--color-primary-focus);
    transition: 144ms;
  }

  @media screen and (max-width: 930px) {
    .board {
      width: 90%;
      height: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    div > .tittleImage {
      display: none;
    }

    div > .tittleImage > img {
      display: none;
    }

    div > .tittleImage > h1 {
      display: none;
    }

    div > .logoForm {
      width: 100%;
      border-radius: 30px;
    }

    div > .logoForm > div > form {
      width: 85%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    div > .logoForm > div > h1 {
      width: 80%;
      color: var(--color-primary);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    div > .logoForm > div > form > label {
      width: 100%;
      height: 30px;
      display: flex;
      align-items: center;
    }

    div > .logoForm > div > form > .divPassword {
      width: 98%;
      height: 40px;
      background-color: var(--grey-3);
      padding: 0 0 0 10px;
      border: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    div > .logoForm > div > form > .divPassword > .inputPassword {
      width: 90%;
      height: 100%;
      background-color: var(--grey-3);
      outline: 0;
    }

    div > .logoForm > div > form > .divPassword > .eye {
      padding-right: 10px;
    }

    div > .logoForm > div > form > span {
      width: 91.5%;
    }

    div > .logoForm > div > form > button {
      width: 100%;
      height: 40px;
    }
  }
`;
