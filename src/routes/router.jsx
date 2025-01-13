import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CenterContent from "../components/layoutComponents/CenterContent";
import CategoryNews from "../components/pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import { Children } from "react";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import News from "../components/pages/News";


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
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>,
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '/news/:id',
        element: <News></News>,
        loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
    },
    {
        path: '*',
        element: <h2>Error</h2>
    }
])

export default router;