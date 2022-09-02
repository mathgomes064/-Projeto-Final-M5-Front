import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
  display: flex;
  justify-content: center;
  align-items: center;
  .registerForm {
    border-radius: 15px;
    width: 80%;
    height: 100%;
    margin: 30px 0;
    padding: 20px 15px;
    background-color: var(--white);
    .redirectDiv {
      text-align: center;
      margin: 12px;
      font-size: 14px;
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
        background-color: var(--grey-3);
      }
      .selectDiv {
        display: flex;
        flex-direction: column;
      }
      p {
        color: #ff0000;
        margin: 5px 0 12px 0;
        font-size: 12px;
      }
    }
  }

  @media screen and (min-width: 328px) {
    .registerForm {
      width: 293px;
    }
  }
  @media screen and (min-width: 1023px) {
    .registerForm {
      width: 70%;
      height: 30%;
      .imgDiv {
        text-align: center;
      }
      img {
        width: 20%;
      }
    }
    .form {
      display: flex;
      justify-content: space-evenly;
      .column {
        width: 40%;
      }
    }
  }
`;
