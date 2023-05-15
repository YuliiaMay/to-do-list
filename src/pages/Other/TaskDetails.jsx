import { useParams } from "react-router-dom";

const TaskDetails = () => {
    const { taskId } = useParams();
    return <div>Now showing task with id - {taskId}</div>;
};

export default TaskDetails;