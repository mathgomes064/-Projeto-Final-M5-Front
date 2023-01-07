import styled from "styled-components";

export const ContainerLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .error {
      color: var(--error);
      font-size: 12px;
    }
  }

  .divPassword{
    border-radius: 0px;
    box-shadow: 0px 3px gray;
  }

  `;

export const ContainerRegister = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  .infoSelector {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .error {
      color: var(--error);
      font-size: 12px;
    }
  }
`;
