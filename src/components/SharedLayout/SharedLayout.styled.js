import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

// export const Container = styled.div`
//     // height: 100%;
//     // font-size: 32px;
//     // color: #010101;
//     // background-color: #FFE6D7;
//     // margin: 0 auto;
//     padding: 0 16px;
// `;

export const Header = styled.header`
    // display: flex;
    // align-items: center;
    // justify-content: space-between;
    // gap: 12px;
    // padding: 16px 0;
    // margin-bottom: 16px;
    // border-bottom: 1px solid #446381;
    // > nav {
    //     display: flex;
    // }
    padding: 16px 0;
`;

export const Container = styled.div`
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px;
`;


export const HeaderBase = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    margin-bottom: 24px;
    border-bottom: 2px solid #446381;
`;

export const Logo = styled.span`
    font-family: Walter Turncoat;
    font-size: 48px;
    color: #2B2B2B;
    margin-right: 30px;

`;

export const Message = styled.span`
    font-family: Walter Turncoat;
    font-size: 48px;
    color: #4113A4;

`;

export const AccLink = styled(Link)`
    margin-left: auto;
    padding: 0px 12px;
    width: 200px;
    border: 1px solid #414141;
    border-radius: 20px;
    display: flex;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
`;

export const UserIcon = styled.svg`
    width: 38px;
    height: 38px;
    color: #2B2B2B;
`;

export const UserName = styled.p`
    font-family: Walter Turncoat;
    font-size: 18px;
    
    color: #2B2B2B;
    margin-right: 30px;
`;

export const HeaderNav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    font-family: Walter Turncoat;
    font-size: 18px;
    color: #414141;

    &.active {
        color: #4113A4;
    }
`;