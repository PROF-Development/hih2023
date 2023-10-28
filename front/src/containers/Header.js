import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import '../styles/style.css';
import '../styles/bootstrap-grid.min.css';
import { useStore, useSelector } from 'react-redux';
import { logOutAction } from '../store/actions/auth';
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
        <header class="header">
        <div class="container">
            <div class="header-wrapper">    
                <div class="row align-items-center justify-content-between">
                    <div class="col-12 col-sm-4 col-md-4 col-lg-2">
                        <Link to="/" class="header-logo"><img src="./img/big-logo.png" alt="logo"></img></Link>
                    </div>
                    <div class="col-8 col-sm-8 col-md-6">
                        <div class="header-buttons">
                            <Link to="/search" class="header-buttons__btn btn btn-trans">Поиск документации</Link>
                            {auth.isAuthorize ? 
                            <Link to="/" class="header-buttons__btn btn btn-primary" onClick={handleLogout}>Выйти</Link> 
                            :<Link to="/login" class="header-buttons__btn btn btn-primary">Вход</Link>
                            }
                            {auth.isSuperUser ? <Link to="/admin" class="header-buttons__btn btn btn-primary">Админ панель</Link> : <></>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header;