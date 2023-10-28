import Header from '../containers/Header';
import { Outlet } from 'react-router-dom';
import React from 'react';

const AppWrapper = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

export default AppWrapper