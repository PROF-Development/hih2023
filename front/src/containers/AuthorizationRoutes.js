import React, { useEffect } from "react";
import { useStore } from "react-redux";
import { useNavigate } from "react-router-dom";
import PublishRoutes from "../components/PublishRoutes";

const AuthorizationRoutes = () => {
    const store = useStore()
    const navigate = useNavigate()
    
    useEffect(() => store.getState().auth.isAuthorize ? null : navigate('/login'))

    return (
        <PublishRoutes/>
    )
    
   
}

export default AuthorizationRoutes;
