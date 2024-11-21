import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    // console.log(user, loader)
    const location = useLocation()
    // console.log(location)

    if (loader) {
        return <div className='py-12 md:py-36 text-center'><span className="loading loading-bars loading-lg"></span></div>
    }

    if (user) {
        return children
    }

    return <Navigate to='/signIn' state={location.pathname}></Navigate>

};

export default ProtectedRoute;