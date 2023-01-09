import styled from "styled-components";

export const BodyStyle = styled.div`
  min-height: 100vh;
  height: 100%;
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

  min-height: 100vh;
  height: 100%;

  h2 {
    display: none;
    color: var(--color-primary);
  }

  .servicesContainer {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 20px;
      background-color: var(--color-primary);
    }
  }

  .serviceCard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 220px;
    min-width: 200px;
    height: 300px;
    margin: 10px;
    border: 1px solid var(--grey-3);
    border-radius: 0px;
  }

  .serviceImage {
    width: 70%;
    height: 40%;
  }

  .serviceName,
  .serviceValue {
    font-size: 17px;
    font-weight: bold;
    margin: 10px;
  }

  .serviceUserName {
    font-size: 14.5px;
    font-weight: 300;
    margin: 10px;
  }

  .serviceValue {
    font-weight: 700;
  }

  @media (min-width: 770px) {

    .services {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    h2 {
      display: block;
      color: var(--color-primary);
      text-align: center;
      font-size: 25px;
      font-weight: 700;
<<<<<<< Updated upstream
      margin: 10px 0px;
=======
      margin: 20px 0px
>>>>>>> Stashed changes
    }
    .servicesContainer {
      margin-top: 0px;
    }
  }
`;
