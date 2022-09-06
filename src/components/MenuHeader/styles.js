import styled from "styled-components";

export const Div = styled.div`
  .icon {
    position: absolute;
    z-index: 4;
    left: 63.5%;
    top: 16.5%;
    width: fit-content;
    height: 44px;
  }

  .hamburguer {
    top: 50%;
    left: 10%;
    width: 30px;
    height: 3px;
    border-radius: 3px;
    background: #000;
    position: absolute;
    box-shadow: 0, 2px, 5px rgba(0, 0, 0, 0.2);
    transition: 0.3s;

    &::before {
      top: -8px;
      content: "";
      position: absolute;
      width: 30px;
      height: 3px;
      border-radius: 3px;
      background: #000;
      box-shadow: 0, 2px, 5px rgba(0, 0, 0, 0.2);
      transition: 0.3s;
    }

    &::after {
      top: 8px;
      content: "";
      position: absolute;
      width: 30px;
      height: 3px;
      border-radius: 3px;
      background: #000;
      box-shadow: 0, 2px, 5px rgba(0, 0, 0, 0.2);
      transition: 0.3s;
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    padding: 9px 0 0;
    flex-wrap: nowrap;
    color: #06c3bd;
    line-height: 17px;

    .crown {
      color: #ffb71c;
    }
  }

  .list.lisItems {
    padding: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    padding-left: 11px;
    margin-top: 27px;
  }

  .list .lisItems li {
    margin: 2px 8px;

    &:hover {
      font-weight: 800px;
    }
  }

  .icon.iconActive .hamburguer {
    background: transparent;
    box-shadow: 0, 2px, 5px transparent;
  }

  .icon.iconActive .hamburguer::after {
    top: 9px;
    left: -4px;
    background: #06a9bd;
    transform: rotate(225deg);
    box-shadow: 0, -2px, 5px rgba(0, 0, 0, 0.2);
  }

  .icon.iconActive .hamburguer::before {
    top: 9px;
    left: -4px;
    background: #06a9bd;
    transform: rotate(135deg);
    box-shadow: 0, -2px, 5px rgba(0, 0, 0, 0.2);
  }

  .menu.menuOpen {
    position: absolute;
    margin-left: 1px;
    width: 127px;
    height: 30vh;
    background: #fff;
    border-radius: 15px;
    box-shadow: 10px 0 69px 0 rgba(0, 0, 0, 0.29);
  }

  .menu.menuClose {
    display: none;
  }
`;
