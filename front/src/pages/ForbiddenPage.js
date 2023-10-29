import React from "react";

const ForbiddenPage = () => {
    return (
        <div className="not-found">
            <div className="not-found-content">
                <h1>403 - Доступ запрещен</h1>
                <p>Извините, у вас недостаточно прав для просмотра этой страницы</p>
                <Link to="/" className="back-link">Вернуться на главную</Link>
            </div>
        </div>
    );
}

export default ForbiddenPage;