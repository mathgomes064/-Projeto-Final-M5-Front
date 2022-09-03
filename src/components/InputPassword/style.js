import styled from "styled-components";

export const Container = styled.div`
  label {
    margin: 15px 0;
  }

  div {
    display: flex;
    justify-content: space-between;
    height: 49px;
    align-items: center;
    padding: 0 15px;
    border-radius: 10px;
    background-color: #f1f1f1;
    input {
      border: 0;
      outline: 0;
      height: 100%;
      width: 80%;
      background-color: transparent;
    }
  }
`;
