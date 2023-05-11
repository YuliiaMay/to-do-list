import { Suspense } from "react";
import {  Outlet } from "react-router-dom";
import { Container, Header, HeaderBase, Logo, Message, AccLink, UserIcon, UserName, HeaderNav, StyledLink } from "./SharedLayout.styled";
// import Loader from "components/Loader/Loader";
// import scrollPageDown from "helpers/Scroll";
import { TbUserCircle } from "react-icons/tb";


export const SharedLayout = () => {
    return (
        <>
            <Header>
                <Container>
                    <HeaderBase>
                        <Logo>Plan!</Logo>
                        <Message>Get what you want!</Message>
                        <AccLink path="/:userName">
                            <UserIcon><TbUserCircle size={38} /></UserIcon>
                            <UserName>user name</UserName>
                        </AccLink>
                    </HeaderBase>

                    <HeaderNav>
                        <StyledLink to="/">Home</StyledLink>
                        <StyledLink to="/planner">Planner</StyledLink>
                        {/* <StyledLink to="/notes">Notes</StyledLink>
                        <StyledLink to="/habit-tracker">Tracker</StyledLink>
                        <StyledLink to="/calendar">Calendar</StyledLink>
                        <StyledLink to="/timer">Timer</StyledLink>
                        <StyledLink to="/productivity">Productivity</StyledLink> */}
                    </HeaderNav>
                </Container>
            </Header>

            <Suspense fallback={<>loading...</>}>
                <Outlet />
            </Suspense>
        </>
    );
};