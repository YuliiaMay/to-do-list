import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from "./redux/store";

// import Login from "./pages/Auth/Login";
// import Register from "./pages/Auth/Register";
// import User from "./pages/Auth/User";
// import NotFound from 'components/NotFound';
import { App } from 'components/App';

import './index.css';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navigate to="login"/>,
//     errorElement: <NotFound/>,
//   },
//   {
//     path: "/",
//     element: <Navigate to="login"/>,
//   },
//   {
//     path: "/login",
//     element: <Login/>,
//   },
//   {
//     path: "/register",ement: <Register/>,
//     element: <Register/>,
//   },
//   {
//     path: "/user",
//     element: <User/>,
//   },
// ]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/to-do-list">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
