import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element:<h1>home</h1>
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