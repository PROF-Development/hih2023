import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import '../styles/reset.css'
import '../styles/bootstrap-grid.min.css';
import '../styles/style.css';
import { useStore, useSelector } from 'react-redux';
import { superUserAction,setAuthAction,logOutAction } from '../store/actions/auth';

const Header = () => {
    const store = useStore()
    const authStatus = useSelector(store => store.auth)
    const [auth, setAuth] = useState(authStatus)

    useEffect(() => {
        setAuth(authStatus)
    }, [authStatus])

    const defaultState = {
        isAuthorize: false,
        isSuperUser: false,
    }

    const handleLogout = () => {
        localStorage.removeItem('access_token')
        store.dispatch(logOutAction)
    }

    return (
        <header className="header">
        <div className="container">
            <div className="header-wrapper">    
                <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-sm-4 col-md-4 col-lg-2">
                        <Link to="/" className="header-logo"><img src="./img/big-logo.png" alt="logo"></img></Link>
                    </div>
                    <div className="col-8 col-sm-8 col-md-6">
                        <div className="header-buttons">
                            <Link to="/search" className="header-buttons__btn btn btn-trans">Поиск документации</Link>
                            {auth.isAuthorize ? 
                            <Link to="/" className="header-buttons__btn btn btn-primary" onClick={handleLogout}>Выйти</Link> 
                            :<Link to="/login" className="header-buttons__btn btn btn-primary">Вход</Link>
                            }
                            {auth.isSuperUser ? <Link to="/admin" className="header-buttons__btn btn btn-primary">Админ панель</Link> : <></>}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </header>
    )
}

export default Header;