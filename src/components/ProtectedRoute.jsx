import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
      return <div>Loading...</div>; // Show a loader while checking the user state
    }
    
    if (!user) {
      return <Navigate to="/login" replace />;
    }
    

    return children
}

export default ProtectedRoute