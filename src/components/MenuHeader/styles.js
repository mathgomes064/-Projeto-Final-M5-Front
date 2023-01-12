import styled from "styled-components";

export const Div = styled.div`
  cursor: pointer;
  z-index: 1;

  button {
    font-size: 12px;
    font-weight: 300;
  }

  .userName {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    width: 150px;
    padding: 5px 11px;
    border-radius: 8px;
    border: 0.5px solid rgba(0, 238, 230, 0.2);
    overflow: hidden;

    h1 {
      padding: 0;
      font-size: 14px;
      color: var(--white);
      word-wrap: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 0 5px;
      text-align: center;
    }

    div {
      overflow: hidden;
      border-radius: 50%;
    }

    #dropArrow {
      transition: all 0.2s;
      color: white;
    }
    img {
      transition: all 0.5s;
    }

    :hover {
      transition: 0.5s ease-in-out;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      padding: 0 11px;
      border: 1px dashed rgba(0, 238, 230, 0.5);

      #dropArrow {
        color: rgba(0, 238, 230, 1);
      }

      div {
        border-radius: 50%;
        overflow: hidden;

        img {
          overflow: hidden;
          transform: scale(1.3);
        }
      }
    }

    .imgUser {
      margin: 0;
    }
  }

  .icon {
    width: fit-content;
    height: 44px;
    position: relative;
    padding: 10px;
    top: -15%;
    margin-left: 10px;
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
    width: 160px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    color: #06c3bd;
    line-height: 17px;

    .crown {
      color: #ffb71c;
    }
  }

  li {
    display: flex;
    gap: 15px;
    font-weight: 600;
    padding: 7px 0 7px 10px;
    color: var(--color-primary);
    :hover {
      background-color: var(--grey-3);
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
    right: 10px;
    top: 31px;
    margin: 16px;
    width: 160px;
    background: rgba(255, 255, 255, 1);
    border-radius: 8px;
    box-shadow: 15px 15px 20px 5px rgba(0, 0, 0, 0.1);

    :hover {
      transition: 0.5s ease;
      box-shadow: 15px 15px 20px 5px rgba(0, 0, 0, 0.2);
    }
  }

  .menu.menuClose {
    display: none;
  }
  @media screen and (min-width: 768px) {
    ul {
      padding: 0;

      li {
        padding: 8px;
        margin: 2px;
        font-size: 12px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 8px;
      }
    }

    .menu.menuOpen {
      height: fit-content;
    }
  }
`;
