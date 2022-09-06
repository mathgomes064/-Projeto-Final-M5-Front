import styled from "styled-components";

export const Header = styled.header`
  background: #06c3bd;

  .imgUser {
    width: 55px;
    margin-left: 12px;
    top: 26px;
    position: absolute;
  }

  .infoUser {
    display: flex;
    flex-direction: column;

    h2 {
      margin: 0px;
      margin-top: 28px;
      margin-left: 75px;
      font-weight: 600;
      font-family: "Inter";
      font-size: 20px;
      line-height: 29px;
      color: #ffffff;
    }

    p {
      margin: 0px;
      margin-left: 75px;
      margin-bottom: 30px;
      font-size: 14px;
      color: #ffffff;
    }
  }

  .navegation {
    display: flex;

    input {
      margin-left: 7px;
      height: 25px;
      background: #fff;
      border: 2px solid #06c3bd;
      border-radius: 7px;
      margin-top: -3px;
      padding-bottom: 2px;

      &::placeholder {
        color: #06c3bd;
        padding-left: 10px;
      }
    }

    button {
      background: #06c3bd;
      border: 1px solid #ffffff;
      border-radius: 5px;
      color: #ffffff;
      height: 26px;
      font-size: 11px;
      width: 70px;
      margin-left: 59px;
      margin-bottom: 20px;
      margin-top: -3px;
    }
  }
`;
