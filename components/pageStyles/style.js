import styled from 'styled-components';

export const Section = styled.section`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &#home{
        background: #F2F2F2;
    }
    &#about{
        background: #E5E5E5;
    }
    &#work{
        background: #D7D7D7;
    }
    &#contact{
        background: #CDCDCD;
    }
`;

export const H1 = styled.h1`
    font-family: "montserrat", sans-serif;
    font-size: clamp(3rem, 17vw, 15rem);
    text-transform: uppercase;
    letter-spacing: clamp(.1rem, 2vw, .5rem);
`;