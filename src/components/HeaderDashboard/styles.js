import styled from "styled-components";

<<<<<<< HEAD
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
=======
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
>>>>>>> 295f3f8f722cd197c271d17228c41ae663816f5c
  }

  .userInfo > .imgUser {
    width: 55px;
    margin-left: 10px;
  }

<<<<<<< HEAD
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
=======
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
>>>>>>> 295f3f8f722cd197c271d17228c41ae663816f5c
  }

  .navegation {
    width: 320px;
    display: flex;
<<<<<<< HEAD
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
=======
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
>>>>>>> 295f3f8f722cd197c271d17228c41ae663816f5c
    }
  }
`;
