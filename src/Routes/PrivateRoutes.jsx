/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation()

    if (loading) {
        return <LoadingSpinner />
    }

    if (!user) {
        return <Navigate to='/login' state={location.pathname} replace='true' />
    }
    return children
};


export default PrivateRoutes;