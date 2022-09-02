import styled from "styled-components";

export const Container = styled.div`
  .button {
    background-color: var(--color-primary);
    border-radius: 5px;
    height: 50px;
    width: 100%;
    font-weight: 700;
    text-transform: none;
    padding: 17px;
  }
  .button:hover {
    background-color: var(--color-primary-focus);
    color: var(--black);
  }
  @media screen and (min-width: 1023px) {
    text-align: center;
    margin-top: 45px;
    .button {
      width: 50%;
    }
  }
`;
