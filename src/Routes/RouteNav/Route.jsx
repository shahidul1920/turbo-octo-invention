import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home";
import LogIn from "../../pages/LogIn";
import SignUp from "../../pages/SignUp";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/services.json'),
            },
            {
                path: '/logIn', 
                element: <LogIn />,
            },
            {
                path: '/signup',
                element: <SignUp />,
            }
        ]
    }
])


export default router;