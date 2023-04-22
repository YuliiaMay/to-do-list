import {useRouteError} from "react-router-dom";
// import { Container, Typography } from "@mui/material";
import errPageImg from "../images/err-page.jpg"
const NotFound = () => {
    const error = useRouteError();
    console.error(error);
    
    return (
        <img src={errPageImg} alt="Error Page" />
        // <Container maxWidth="xs" sx={{mt: 2}}>
        //     <Typography variant="h5" component="h1" gutterBottom>
        //         Oops!
        //     </Typography>
        //     <Typography variant="p" component="p" gutterBottom>
        //         Sorry, an unexpected error has occurred.
        //     </Typography>
        //     <Typography variant="p" component="p" gutterBottom>
        //         <i>{error.statusText || error.message}</i>
        //     </Typography>
        // </Container>
    )
};

export default NotFound;