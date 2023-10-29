import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/reset.css'
import '../styles/bootstrap-grid.min.css';
import '../styles/style.css';

const HeaderAdmin = () => {
    return(
        <header className="header header-admin">
            <div className="container">
                <div className="header-wrapper">    
                    <div className="row align-items-center justify-content-between">
                        <div className="col-6 col-xl-1 order-0 order-xl-0">
                            <Link to="index.html" className="header-logo"><img src="../../img/big-logo.png" alt="logo"></img></Link>
                        </div>
                        <div className="col-12 col-xl-10 order-2 order-xl-1">
                            <div className="header-buttons">
                                <Link to="#" className="header-buttons__btn btn btn-trans">Обновление данных</Link>
                                <Link to="#" className="header-buttons__btn btn btn-primary">Регистрация аккаунтов</Link>
                                <Link to="#" className="header-buttons__btn btn btn-trans">Добавление документов</Link><Link to="#" className="header-buttons__btn btn btn-trans">Изменение документов</Link>
                            </div>
                        </div>
                        <div className="col-6 col-xl-1 order-1 order-xl-2">
                            <div className="header-user">
                                <img src="../../img/user.png" alt="user"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderAdmin;