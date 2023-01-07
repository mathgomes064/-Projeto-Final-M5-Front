import styled from "styled-components";

export const Header = styled.header`
  background: var(--color-primary);
  height: 50px;

  .whiteLogo {
    width: 80px;
    height: 40px;
    cursor: pointer;
  }
  .imgUser {
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: auto;
  }
  .infoUser {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
    margin: 0;
    width: 400px;

    input {
      background-color: transparent;
      padding: 0 10px;
      width: 90%;
      :focus {
        outline: none;
      }
    }
    .searchIcon {
      color: #06c3bd;
      margin: 5px;
    }

    .search {
      display: flex;
      align-items: center;
      width: 190px;
      height: 28px;
      background-color: #ffffff;
      border-radius: 0px;
      margin-left: 12px;
    }
    h2 {
      margin-left: 75px;
      font-weight: 600;
      font-family: "Inter";
      font-size: 20px;
      line-height: 29px;
      color: #ffffff;
    }
  }

  @media screen and (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;

    .whiteLogo {
      display: block;
      width: 80px;
      height: 40px;
    }
    .infoUser {
      display: flex;
      margin-right: 2%;
    }
    .navegationDiv {
      display: flex;
      align-items: top;
      width: 70%;
      margin-left: 2%;
      margin-top: 2px;
    }
    .navegation {
      gap: 10px;
      width: 60%;
      align-items: center;
      .search {
        height: 30px;
        width: 40%;
      }
    }
  }
`;
