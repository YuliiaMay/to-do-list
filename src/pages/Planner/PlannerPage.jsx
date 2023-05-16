import PlansNav from "components/Plans/PlansNav/PlansNav";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useGetTasksQuery } from "redux/planner/tasksApi";
import { GeneralTasksList } from "../../components/Plans/GeleralTasksList/GeleralTasksList";


const PlannerPage = () => {
    const {data, isFetching} = useGetTasksQuery();
    // const tasks = data;
    // console.log(tasks);
    
    return (
        <>
            <PlansNav />
            {
                !isFetching && <GeneralTasksList tasks={data} />
            }
            
            
            <Suspense fallback={<div>loading...</div>}>
                <Outlet />
            </Suspense>
        </>
        
    )
};

export default PlannerPage;