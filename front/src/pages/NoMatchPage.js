import React from "react";
import {Link} from 'react-router-dom';
import  '../styles/reset.css';
import '../styles/bootstrap-grid.min.css';
import '../styles/style.css';

const NoMatchPage = () => {
    return (
        <section className="section nf">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="nf-wrapper">
                            <h1 className="nf-title">Ошибка 404 — страница не найдена</h1>
                            <h2 className="nf-subtitle">Извините, запрашиваемая страница не существует</h2>
                            <Link to='/'><button className="btn btn-primary nf-btn">Вернуться на главную</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NoMatchPage;