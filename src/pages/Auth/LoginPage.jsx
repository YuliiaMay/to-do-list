import { useNavigate } from "react-router-dom";
import LoginForm from "components/LoginForm/LoginForm";


const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = async values => {
        // const response = await FakeAPI.login(values);
        // if (response.success) {
        //     navigate("/profile", { replace: true });
        // }
    };

    return (
        <>
            <h1>Login page</h1>
            <LoginForm onSubmit={handleSubmit}/>
        </>
    )
};

export default Login;