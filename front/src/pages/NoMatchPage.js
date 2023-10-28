import React from "react";
import { Link } from "react-router-dom";
import '../styles/style.css';
const NoMatchPage = () => {
    return (
        <div className="not-found">
            <div className="not-found-content">
                <h1>404 - Страница не найдена</h1>
                <p>Извините, запрашиваемая страница не существует.</p>
                <Link to="/" className="back-link">Вернуться на главную</Link>
            </div>
        </div>
    );
}

export default NoMatchPage;