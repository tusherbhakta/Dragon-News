import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div>
            Welcome to auth
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;