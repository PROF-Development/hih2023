import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/reset.css'
import '../styles/bootstrap-grid.min.css';
import '../styles/style.css';

const HeaderAdmin = () => {
    return(
        <div className="header header-admin">
            <div className="container">
                <div className="header-wrapper">    
                    <div className="row align-items-center justify-content-between">
                        <div className="col-12 col-xl-10 order-2 order-xl-1">
                            <div className="header-buttons">
                                <Link to="/manager/update" className="header-buttons__btn btn btn-trans">Обновление данных</Link>
                                <Link to="/manager/register" className="header-buttons__btn btn btn-primary">Регистрация аккаунтов</Link>
                                <Link to="/manager/create" className="header-buttons__btn btn btn-trans">Добавление документов</Link><Link to="#" className="header-buttons__btn btn btn-trans">Изменение документов</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderAdmin;