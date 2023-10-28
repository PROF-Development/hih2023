import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/style.css';
import '../styles/bootstrap-grid.min.css';
import  '../styles/reset.css';

const Header = () => {
    return (
        <header class="header">
        <div class="container">
            <div class="header-wrapper">    
                <div class="row align-items-center justify-content-between">
                    <div class="col-12 col-sm-4 col-md-4 col-lg-2">
                        <Link to="index.html" class="header-logo"><img src="./img/big-logo.png" alt="logo"></img></Link>
                    </div>
                    <div class="col-12 col-sm-8 col-md-6">
                        <div class="header-buttons">
                            <Link to="#" class="header-buttons__btn btn btn-trans">Поиск документации</Link>
                            <Link to="#" class="header-buttons__btn btn btn-primary">Вход</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header;