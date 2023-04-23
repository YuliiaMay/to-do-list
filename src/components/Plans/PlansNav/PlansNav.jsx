import { Container, NavText, PlansNavSection, Nav, StyledLink } from "./PlansNav.styled";
import AddTaskBtn from "../AddTaskBtn/AddTaskBtn";

const PlansNav = () => {
    return (
        <PlansNavSection>
            <Container>
                <NavText>Select the display method:</NavText>
                <Nav>
                    <StyledLink to="to-do" >To-Do</StyledLink>
                    <StyledLink to="in-progress" >In-Progress</StyledLink>
                    <StyledLink to="have-done" >Have-Done</StyledLink>
                    <StyledLink to="all" >All</StyledLink>
                </Nav>
                <AddTaskBtn />
                
            </Container>
        </PlansNavSection>
    )
};

export default PlansNav;