import Header from '../containers/Header';
import { Outlet } from 'react-router-dom';
import React from 'react';

const PublishRoutes = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

export default PublishRoutes;