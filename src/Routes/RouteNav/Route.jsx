import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home";
import LogIn from "../../pages/LogIn";
import SignUp from "../../pages/SignUp";
import ProductPage from "../../pages/ProductPage";
import ServicePage from "../../pages/ServicePage";



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
            },
            {
                path: '/product',
                element: <ProductPage />,
            },
            {
                path: '/services',
                element: <ServicePage />,
            }
        ]
    }
])


export default router;