import React, { useEffect } from "react";
import { useStore } from "react-redux";
import { useNavigate } from "react-router-dom";
import PublishRoutes from "../components/PublishRoutes";

const ManagerRoutes = () => {
    const store = useStore()
    const navigate = useNavigate()
    
    useEffect(() => {store.getState().auth.isSuperUser ? null : navigate('/forbidden')})

    return (
        <PublishRoutes/>
    )
}

export default ManagerRoutes;
