import { Link } from "react-router-dom";
import { Container } from "./PlansNav.styled";


const PlansNav = () => {
    return (
        <Container>
            <nav>
                <Link to="to-do" >To-Do</Link>
                <Link to="in-progress" >In-Progress</Link>
                <Link to="have-done" >Have-Done</Link>
                <Link to="all" >All</Link>
            </nav>
        </Container>
    )
};

export default PlansNav;