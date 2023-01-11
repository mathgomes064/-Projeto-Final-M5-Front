import styled from "styled-components";

export const Container = styled.section`
display: flex;
justify-content: space-around;
align-items: center;

    .innerDiv{
        width: 83.5%;
        display: flex;
        justify-content: space-around;  
    }
    
    .information{
        display: flex;
        justify-content:center;
        align-items: center;
        width: 35%;
    }

    .information > h1{
        font-size: 40px;
        color: var(--color-primary);
    }

    .container{
        width: 350px;
    }
`;