import styled from "styled-components";

export const CategoriesList = styled.ul`
  display: flex;
  flex-direction: row;
  height: 35px;
  align-items: center;
  gap: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  justify-content: center;
  li {
    font-size: 12px;
    color: var(--color-primary);

    a {
      text-decoration: none;

      :visited {
        color: inherit;
      }
    }
  }
`;
