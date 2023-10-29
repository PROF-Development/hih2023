import React from "react";
import {Link} from 'react-router-dom';
import  '../styles/reset.css';
import '../styles/bootstrap-grid.min.css';
import '../styles/style.css';

const NoAccessPage = () => {
    return (
        <section className="section na">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="na-wrapper">
                            <h1 className="na-title">Ошибка 403 — отказано в доступе</h1>
                            <h2 className="na-subtitle">Извините, страница недоступна или отсуствует разрешение открывать ее</h2>
                            <Link to='/'><button className="btn btn-primary na-btn">Вернуться на главную</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NoAccessPage;