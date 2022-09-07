import styled from "styled-components";

export const Header = styled.header`
  background: #06c3bd;
  .whiteLogo {
    display: none;
  }
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
      margin-top: 28px;
      margin-left: 75px;
      font-weight: 600;
      font-family: "Inter";
      font-size: 20px;
      line-height: 29px;
      color: #ffffff;
    }

    p {
      margin-left: 75px;
      margin-bottom: 30px;
      font-size: 14px;
      color: #ffffff;
    }
  }

  .navegation {
    display: flex;
    justify-content: space-around;
    width: 320px;
    .search {
      display: flex;
      width: 190px;
      height: 28px;
      background-color: #ffffff;
      border-radius: 10px;
      margin-left: 12px;

      input {
        background-color: transparent;
        padding: 0 10px;
        width: 90%;
      }
      button {
        background-color: transparent;
        border: 0;
        cursor: pointer;
      }
      .searchIcon {
        color: #06c3bd;
        margin: 5px;
      }
    }
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    .whiteLogo {
      display: block;
      width: 120px;
      height: 90px;
    }
    .infoUser {
      margin-right: 2%;
    }
    .navegationDiv {
      width: 70%;
      margin-left: 2%;
    }
    .navegation {
      gap: 10px;
      width: 40%;
      align-items: center;
      .search {
        height: 40px;
      }
    }
  }
`;
