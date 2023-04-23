import { Suspense } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Container, Header } from "./SharedLayout.styled";
// import Loader from "components/Loader/Loader";
// import scrollPageDown from "helpers/Scroll";
import { TbUserCircle } from "react-icons/tb";


export const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <div>
                    <span>Plan!</span>
                    <span>some messages</span>
                    <Link path="/:userName">
                        <button><TbUserCircle /></button>
                        <p>user name</p>
                    </Link>
                </div>

                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/planner">Planner</NavLink>
                    <NavLink to="/notes">Notes</NavLink>
                    <NavLink to="/habit-tracker">Tracker</NavLink>
                    <NavLink to="/calendar">Calendar</NavLink>
                    <NavLink to="/timer">Timer</NavLink>
                    <NavLink to="/productivity">Productivity</NavLink>
                </nav>
            </Header>

            <Suspense fallback={<>loading...</>}>
                <Outlet />
            </Suspense>
        </Container>
    );
};