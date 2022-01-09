import styled from 'styled-components';

export const NavIcon = styled.div`
    display: block;
    color: aqua;
    position: absolute;
    top: 3rem;
    left: 2rem;
    font-size: 1.8rem;
    transition: .25 ease-out;
    z-index: 100;
    &:hover{
        cursor: pointer;
        color: #C16BEA;
    }
    @media screen and (min-width: 516px){
        display: none;
    }
`;

export const Nav = styled.nav`
    position: fixed;
    top: ${({ navbar }) => (navbar ? "0" : "-100vh")};
    left: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #222;
    transition: .4s ease-out;
    @media screen and (min-width: 516px){
        top: 0;
        height: 8rem;
    }
`;

export const NavUL = styled.ul`
    margin-top: -90%;
    height: 50%;
    width: 100%;
    max-width: 116rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0 3rem;    
    @media screen and (min-width: 516px){
        margin-top: 0;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

export const NavA = styled.a`
    color: #fff;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: .1rem;
    transition: .25s ease-out;
    &:hover{
        cursor: pointer;
        color: #C16BEA;
    }
    &.active{
        color: aqua;
    }
`;

