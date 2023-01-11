import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 24px;
  height: auto;
  .title {
    background-color: var(--color-primary);
    text-align: center;
    color: var(--white);
    h3 {
      font-size: 20px;
    }
    button {
      background-color: transparent;
      border: 0;
      color: var(--white);
      cursor: pointer;
    }
    button:hover {
      color: var(--black);
    }
  }
  .body {
    background-color: var(--white);
    width: 100%;
    padding: 15px;
    label {
      font-size: 14px;
      padding: 0 10px;
    }
    select {
      height: 40px;
      width: 100%;
      padding: 0 15px;
      margin: 15px 0;
      border: 0;
      background-color: var(--grey-3);
    }

    Button {
      font-size: 18px;
    }
    .error {
      color: var(--error);
      font-size: 12px;
      width: 100%;
      padding: 0 10px;
    }
  }
  @media screen and (min-width: 320px) {
    width: 293px;
  }
  @media screen and (min-width: 1200px) {
    width: 380px;
    .title {
      padding: 30px;
    }
    .body {
      height: 450px;
      Input {
        height: 49px;
      }
      select {
        height: 49px;
      }
    }
  }
`;

export const ModalButton = styled.button`
  width: 67px;
  height: 30px;
  font-size: 15px;
  font-weight: bold;
  background-color: var(--white);
  color: var(--color-primary);
  border: none;
  border-radius: 5px;
  padding: 0;
  cursor: pointer;
  border-radius: 0px;
  :hover {
    background-color: var(--color-primary-focus);
    color: var(--white);
    transition: 144ms;
  }
`;
