import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
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
    return <Navigate to={'/auth/login'}></Navigate>;
};

export default PrivateRoute;