import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    if (loading) {
        return (
            <div className='flex min-h-screen items-center justify-center'>
                <span className="loading loading-dots loading-lg"></span>
            </div>
        )
    }
    if (user && user?.email) {
        return children
    }
    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>;
};

export default PrivateRoute;