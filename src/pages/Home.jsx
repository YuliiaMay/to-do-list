import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <Link to="/planner">PlannerNavCard</Link>
            <Link to="/notes">NotesNavCard</Link>
            <Link to="/habit-tracker">HabitTrackerNavCard</Link>
            <Link to="/calendar">CalendarNavCard</Link>
            <Link to="/timer">TimerNavCard</Link>
            <Link to="/productivity">ProductivityNavCard</Link>
        </div>
    )
};

export default Home;