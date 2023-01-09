import styled from "styled-components";

export const Container = styled.div`
  .headerModal {
    background: var(--color-primary);
    height: 61px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .closeButton{
    color: var(--white);
    margin-right: 18px;
    font-size: 20px;
    cursor: pointer;
  }

  .h3EditPerfil {
    color: var(--white);
    font-size: 23px;
    margin-left: 80px;
  }

  p {
    padding-left: 276px;
    margin-top: -22px;
    font-size: 21px;
    color: var(--white);
    cursor: pointer;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    background-color: var(--grey-3);
    width: 266px;
    padding-left: 10px;
    height: 35px;
    margin-left: 15px;
  }

  label {
    font-weight: 400;
    font-size: 14px;
    line-height: 27px;
    margin-top: 7px;
    margin-left: 20px;
  }

  button {
    width: 266px;
    margin-left: 17px;
    margin-top: 18px;
    height: 35px;
    background: var(--color-primary);
    color: var(--white);
    border: none;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  margin: 2px 0px;
  background-color: transparent;
  border: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--color-primary);
  cursor: pointer;
`;
