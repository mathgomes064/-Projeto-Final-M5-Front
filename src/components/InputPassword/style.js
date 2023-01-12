import styled from "styled-components";

export const Container = styled.div`
  label {
    font-size: 14px;
    margin: 15px 0;
  }

  div {
    display: flex;
    justify-content: space-between;
    height: 40px;
    align-items: center;
    width: 100%;
    padding: 0 15px;
    margin-top: 12px;
    border-radius: 0px;
    background-color: var(--grey-3);
    box-shadow: 0px 3px gray;
    input {
      border: 0px;
      outline: 0;
      height: 100%;
      width: 80%;
      background-color: transparent;
    }
  }
`;
