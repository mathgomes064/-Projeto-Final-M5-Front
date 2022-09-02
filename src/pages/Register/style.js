import styled from "styled-components";
export const Container = styled.div`
  width: 290px;
  height: 80%;
  padding: 15px 8px;
  border-radius: 15px;
  .redirectDiv {
    text-align: center;
  }
  .imgDiv {
    text-align: center;
  }
  img {
    width: 70%;
  }

  form {
    display: flex;
    flex-direction: column;
    select {
      height: 51px;
      padding: 0 15px;
      margin: 15px 0;
      border: 0;
      border-radius: 10px;
      background-color: #f1f1f1;
    }
    .selectDiv {
      display: flex;
      flex-direction: column;
    }
    p {
      color: #ff0000;
      margin: 0 0 12px 0;
    }
  }
`;
