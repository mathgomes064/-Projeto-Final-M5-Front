import styled from "styled-components";

export const Container = styled.div`
  .crown {
    color: var(--premium-detail);
  }

  .premiumSpan {
    color: var(--premium-detail);
  }

  .signature {
    font-weight: bold;
    font-size: 14px;
    margin-left: 11px;
  }

  h3 {
    font-size: 18px;
    margin-left: 13px;
    margin-top: 17px;
  }

  .pPremium {
    font-size: 13px;
    margin-left: 11px;
    margin-top: 18px;
    letter-spacing: 0.03em;
  }

  ul {
    margin-top: 5px;
  }

  ul li {
    font-size: 13px;
    margin-left: 24px;
    padding-top: 15px;
    padding-right: 2px;
  }

  button {
    width: 269px;
    margin-left: 14px;
    margin-top: 15px;
    height: 34px;
    border: none;
    border-radius: 6px;
    background: var(--premium-detail);
    color: var(--white);
  }

  .pClose {
    padding-top: 6px;
    margin-left: 273px;
    padding-bottom: 8px;
    font-size: 22px;
    color: var(--premium-detail);
  }
`;

export const Button = styled.button`
  margin: 2px 0px;
  cursor: pointer;
`;
