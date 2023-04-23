import { Link } from "react-router-dom";

const Planner = () => {
    return (
        <>
            <nav>
                <Link to="to-do" >To-Do</Link>
                <Link to="in-progress" >In-Progress</Link>
                <Link to="have-done" >Have-Done</Link>
                <Link to="all" >All</Link>
            </nav>
            
        </>
        
    )
};

export default Planner;