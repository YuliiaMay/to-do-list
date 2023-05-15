import PlansNav from "components/Plans/PlansNav/PlansNav";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";


const PlannerPage = () => {
    return (
        <>
            <PlansNav />
            
            <Suspense fallback={<div>loading...</div>}>
                <Outlet />
            </Suspense>
        </>
        
    )
};

export default PlannerPage;