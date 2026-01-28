import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const WithAuth = ({ children }) => {
    const { token } = useSelector((state) => state.auth) // destructuring

    if (!token) {
        return <Navigate to="/login" />
    }


    return <>{children}</>
}

export default WithAuth;
