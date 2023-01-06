import styled from "styled-components";

export const CategoriesList = styled.ul`
  display: flex;
  flex-direction: row;
  height: 20px;
  border-radius: 0px 0px 25px 25px;
  align-items: center;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
  justify-content: center;
  li {
    font-size: 12px;
    color: var(--color-primary);
    padding: 0;

    a {
      text-decoration: none;
      :visited {
        color: inherit;
      }
    }
  }

  @media screen and (min-width: 600px) {
    gap: 1rem;
  }
`;
