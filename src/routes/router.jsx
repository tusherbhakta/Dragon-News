import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CenterContent from "../components/layoutComponents/CenterContent";
import CategoryNews from "../components/pages/CategoryNews";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path:"",
                element: <Navigate to={'/category/01'} ></Navigate>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
            },
        ]
    },
    {
        path: 'auth',
        element: <h3>login</h3>
    },
    {
        path: '/news',
        element: <h2>News layout</h2>
    },
    {
        path: '*',
        element: <h2>Error</h2>
    }
])

export default router;