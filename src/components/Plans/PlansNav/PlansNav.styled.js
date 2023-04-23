import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const PlansNavSection = styled.section`
    padding: 32px 0;
`;

export const Container = styled.div`
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 60px;


    font-family: Walter Turncoat;
    font-size: 16px;
    line-hight: calc(18 / 16);
    color: #2B2B2B;

`;

export const NavText = styled.p`
    margin-right: 0; 
`;

export const Nav = styled.nav`
`;

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    padding: 4px 16px;
    border: 1px solid #4113A4;
    border-radius: 20px;
    color: #2B2B2B;

    &:not(:last-child) {
        margin-right: 16px;
    }

    &:hover,
    &:focus {
        background-color: #4113A4; 
        color: #fff;
    }

    &.active {
        background-color: #4113A4; 
        color: #fff;
    }
`;
